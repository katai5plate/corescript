# Source: rpg_core/Html5Audio.js

```
//-----------------------------------------------------------------------------
/**
 * The static class that handles HTML5 Audio.
 *
 * @class Html5Audio
 * @constructor
 */
function Html5Audio() {
    throw new Error('This is a static class');
}

Html5Audio._initialized = false;
Html5Audio._unlocked = false;
Html5Audio._audioElement = null;
Html5Audio._gainTweenInterval = null;
Html5Audio._tweenGain = 0;
Html5Audio._tweenTargetGain = 0;
Html5Audio._tweenGainStep = 0;
Html5Audio._staticSePath = null;

/**
 * Sets up the Html5 Audio.
 *
 * @static
 * @method setup
 * @param {String} url The url of the audio file
 */
Html5Audio.setup = function (url) {
    if (!this._initialized) {
        this.initialize();
    }
    this.clear();

    if(Decrypter.hasEncryptedAudio && this._audioElement.src) {
        window.URL.revokeObjectURL(this._audioElement.src);
    }
    this._url = url;
};

/**
 * Initializes the audio system.
 *
 * @static
 * @method initialize
 * @return {Boolean} True if the audio system is available
 */
Html5Audio.initialize = function () {
    if (!this._initialized) {
        if (!this._audioElement) {
            try {
                this._audioElement = new Audio();
            } catch (e) {
                this._audioElement = null;
            }
        }
        if (!!this._audioElement) this._setupEventHandlers();
        this._initialized = true;
    }
    return !!this._audioElement;
};

/**
 * @static
 * @method _setupEventHandlers
 * @private
 */
Html5Audio._setupEventHandlers = function () {
    document.addEventListener('touchstart', this._onTouchStart.bind(this));
    document.addEventListener('visibilitychange', this._onVisibilityChange.bind(this));
    this._audioElement.addEventListener("loadeddata", this._onLoadedData.bind(this));
    this._audioElement.addEventListener("error", this._onError.bind(this));
    this._audioElement.addEventListener("ended", this._onEnded.bind(this));
};

/**
 * @static
 * @method _onTouchStart
 * @private
 */
Html5Audio._onTouchStart = function () {
    if (this._audioElement && !this._unlocked) {
        if (this._isLoading) {
            this._load(this._url);
            this._unlocked = true;
        } else {
            if (this._staticSePath) {
                this._audioElement.src = this._staticSePath;
                this._audioElement.volume = 0;
                this._audioElement.loop = false;
                this._audioElement.play();
                this._unlocked = true;
            }
        }
    }
};

/**
 * @static
 * @method _onVisibilityChange
 * @private
 */
Html5Audio._onVisibilityChange = function () {
    if (document.visibilityState === 'hidden') {
        this._onHide();
    } else {
        this._onShow();
    }
};

/**
 * @static
 * @method _onLoadedData
 * @private
 */
Html5Audio._onLoadedData = function () {
    this._buffered = true;
    if (this._unlocked) this._onLoad();
};

/**
 * @static
 * @method _onError
 * @private
 */
Html5Audio._onError = function () {
    this._hasError = true;
};

/**
 * @static
 * @method _onEnded
 * @private
 */
Html5Audio._onEnded = function () {
    if (!this._audioElement.loop) {
        this.stop();
    }
};

/**
 * @static
 * @method _onHide
 * @private
 */
Html5Audio._onHide = function () {
    this._audioElement.volume = 0;
    this._tweenGain = 0;
};

/**
 * @static
 * @method _onShow
 * @private
 */
Html5Audio._onShow = function () {
    this.fadeIn(0.5);
};

/**
 * Clears the audio data.
 *
 * @static
 * @method clear
 */
Html5Audio.clear = function () {
    this.stop();
    this._volume = 1;
    this._loadListeners = [];
    this._hasError = false;
    this._autoPlay = false;
    this._isLoading = false;
    this._buffered = false;
};

/**
 * Set the URL of static se.
 *
 * @static
 * @param {String} url
 */
Html5Audio.setStaticSe = function (url) {
    if (!this._initialized) {
        this.initialize();
        this.clear();
    }
    this._staticSePath = url;
};

/**
 * [read-only] The url of the audio file.
 *
 * @property url
 * @type String
 */
Object.defineProperty(Html5Audio, 'url', {
    get: function () {
        return Html5Audio._url;
    },
    configurable: true
});

/**
 * The volume of the audio.
 *
 * @property volume
 * @type Number
 */
Object.defineProperty(Html5Audio, 'volume', {
    get: function () {
        return Html5Audio._volume;
    }.bind(this),
    set: function (value) {
        Html5Audio._volume = value;
        if (Html5Audio._audioElement) {
            Html5Audio._audioElement.volume = this._volume;
        }
    },
    configurable: true
});

/**
 * Checks whether the audio data is ready to play.
 *
 * @static
 * @method isReady
 * @return {Boolean} True if the audio data is ready to play
 */
Html5Audio.isReady = function () {
    return this._buffered;
};

/**
 * Checks whether a loading error has occurred.
 *
 * @static
 * @method isError
 * @return {Boolean} True if a loading error has occurred
 */
Html5Audio.isError = function () {
    return this._hasError;
};

/**
 * Checks whether the audio is playing.
 *
 * @static
 * @method isPlaying
 * @return {Boolean} True if the audio is playing
 */
Html5Audio.isPlaying = function () {
    return !this._audioElement.paused;
};

/**
 * Plays the audio.
 *
 * @static
 * @method play
 * @param {Boolean} loop Whether the audio data play in a loop
 * @param {Number} offset The start position to play in seconds
 */
Html5Audio.play = function (loop, offset) {
    if (this.isReady()) {
        offset = offset || 0;
        this._startPlaying(loop, offset);
    } else if (Html5Audio._audioElement) {
        this._autoPlay = true;
        this.addLoadListener(function () {
            if (this._autoPlay) {
                this.play(loop, offset);
                if (this._gainTweenInterval) {
                    clearInterval(this._gainTweenInterval);
                    this._gainTweenInterval = null;
                }
            }
        }.bind(this));
        if (!this._isLoading) this._load(this._url);
    }
};

/**
 * Stops the audio.
 *
 * @static
 * @method stop
 */
Html5Audio.stop = function () {
    if (this._audioElement) this._audioElement.pause();
    this._autoPlay = false;
    if (this._tweenInterval) {
        clearInterval(this._tweenInterval);
        this._tweenInterval = null;
        this._audioElement.volume = 0;
    }
};

/**
 * Performs the audio fade-in.
 *
 * @static
 * @method fadeIn
 * @param {Number} duration Fade-in time in seconds
 */
Html5Audio.fadeIn = function (duration) {
    if (this.isReady()) {
        if (this._audioElement) {
            this._tweenTargetGain = this._volume;
            this._tweenGain = 0;
            this._startGainTween(duration);
        }
    } else if (this._autoPlay) {
        this.addLoadListener(function () {
            this.fadeIn(duration);
        }.bind(this));
    }
};

/**
 * Performs the audio fade-out.
 *
 * @static
 * @method fadeOut
 * @param {Number} duration Fade-out time in seconds
 */
Html5Audio.fadeOut = function (duration) {
    if (this._audioElement) {
        this._tweenTargetGain = 0;
        this._tweenGain = this._volume;
        this._startGainTween(duration);
    }
};

/**
 * Gets the seek position of the audio.
 *
 * @static
 * @method seek
 */
Html5Audio.seek = function () {
    if (this._audioElement) {
        return this._audioElement.currentTime;
    } else {
        return 0;
    }
};

/**
 * Add a callback function that will be called when the audio data is loaded.
 *
 * @static
 * @method addLoadListener
 * @param {Function} listner The callback function
 */
Html5Audio.addLoadListener = function (listner) {
    this._loadListeners.push(listner);
};

/**
 * @static
 * @method _load
 * @param {String} url
 * @private
 */
Html5Audio._load = function (url) {
    if (this._audioElement) {
        this._isLoading = true;
        this._audioElement.src = url;
        this._audioElement.load();
    }
};

/**
 * @static
 * @method _startPlaying
 * @param {Boolean} loop
 * @param {Number} offset
 * @private
 */
Html5Audio._startPlaying = function (loop, offset) {
    this._audioElement.loop = loop;
    if (this._gainTweenInterval) {
        clearInterval(this._gainTweenInterval);
        this._gainTweenInterval = null;
    }
    if (this._audioElement) {
        this._audioElement.volume = this._volume;
        this._audioElement.currentTime = offset;
        this._audioElement.play();
    }
};

/**
 * @static
 * @method _onLoad
 * @private
 */
Html5Audio._onLoad = function () {
    this._isLoading = false;
    while (this._loadListeners.length > 0) {
        var listener = this._loadListeners.shift();
        listener();
    }
};

/**
 * @static
 * @method _startGainTween
 * @params {Number} duration
 * @private
 */
Html5Audio._startGainTween = function (duration) {
    this._audioElement.volume = this._tweenGain;
    if (this._gainTweenInterval) {
        clearInterval(this._gainTweenInterval);
        this._gainTweenInterval = null;
    }
    this._tweenGainStep = (this._tweenTargetGain - this._tweenGain) / (60 * duration);
    this._gainTweenInterval = setInterval(function () {
        Html5Audio._applyTweenValue(Html5Audio._tweenTargetGain);
    }, 1000 / 60);
};

/**
 * @static
 * @method _applyTweenValue
 * @param {Number} volume
 * @private
 */
Html5Audio._applyTweenValue = function (volume) {
    Html5Audio._tweenGain += Html5Audio._tweenGainStep;
    if (Html5Audio._tweenGain < 0 && Html5Audio._tweenGainStep < 0) {
        Html5Audio._tweenGain = 0;
    }
    else if (Html5Audio._tweenGain > volume && Html5Audio._tweenGainStep > 0) {
        Html5Audio._tweenGain = volume;
    }

    if (Math.abs(Html5Audio._tweenTargetGain - Html5Audio._tweenGain) < 0.01) {
        Html5Audio._tweenGain = Html5Audio._tweenTargetGain;
        clearInterval(Html5Audio._gainTweenInterval);
        Html5Audio._gainTweenInterval = null;
    }

    Html5Audio._audioElement.volume = Html5Audio._tweenGain;
};
```

## [Home](index.html)

### Classes

* [Bitmap](Bitmap.html)
* [CacheEntry](CacheEntry.html)
* [CacheMap](CacheMap.html)
* [Graphics](Graphics.html)
* [Html5Audio](Html5Audio.html)
* [Input](Input.html)
* [JsExtensions](JsExtensions.html)
* [JsonEx](JsonEx.html)
* [AccessibilityManager](PIXI.AccessibilityManager.html)
* [BaseRenderTexture](PIXI.BaseRenderTexture.html)
* [BaseTexture](PIXI.BaseTexture.html)
* [Bounds](PIXI.Bounds.html)
* [CanvasExtract](PIXI.CanvasExtract.html)
* [CanvasMaskManager](PIXI.CanvasMaskManager.html)
* [CanvasPrepare](PIXI.CanvasPrepare.html)
* [CanvasRenderer](PIXI.CanvasRenderer.html)
* [CanvasRenderTarget](PIXI.CanvasRenderTarget.html)
* [Circle](PIXI.Circle.html)
* [Container](PIXI.Container.html)
* [createIndicesForQuads](PIXI.createIndicesForQuads.html)
* [DisplayObject](PIXI.DisplayObject.html)
* [Ellipse](PIXI.Ellipse.html)
* [BitmapText](PIXI.extras.BitmapText.html)
* [HardLightShader](PIXI.extras.HardLightShader.html)
* [mapFilterBlendModesToPixi](PIXI.extras.mapFilterBlendModesToPixi.html)
* [MovieClip](PIXI.extras.MovieClip.html)
* [NormalShader](PIXI.extras.NormalShader.html)
* [OverlayShader](PIXI.extras.OverlayShader.html)
* [PictureRenderer](PIXI.extras.PictureRenderer.html)
* [PictureShader](PIXI.extras.PictureShader.html)
* [PictureSprite](PIXI.extras.PictureSprite.html)
* [PictureTilingSprite](PIXI.extras.PictureTilingSprite.html)
* [TilingSprite](PIXI.extras.TilingSprite.html)
* [Filter](PIXI.Filter.html)
* [FilterManager](PIXI.FilterManager.html)
* [BlurFilter](PIXI.filters.BlurFilter.html)
* [BlurXFilter](PIXI.filters.BlurXFilter.html)
* [BlurYFilter](PIXI.filters.BlurYFilter.html)
* [ColorMatrixFilter](PIXI.filters.ColorMatrixFilter.html)
* [DisplacementFilter](PIXI.filters.DisplacementFilter.html)
* [NoiseFilter](PIXI.filters.NoiseFilter.html)
* [VoidFilter](PIXI.filters.VoidFilter.html)
* [FXAAFilter](PIXI.FXAAFilter.html)
* [Buffer](PIXI.glCore.Buffer.html)
* [createContext](PIXI.glCore.createContext.html)
* [Framebuffer](PIXI.glCore.Framebuffer.html)
* [Shader](PIXI.glCore.Shader.html)
* [compileProgram](PIXI.glCore.shader.compileProgram.html)
* [defaultValue](PIXI.glCore.shader.defaultValue.html)
* [extractAttributes](PIXI.glCore.shader.extractAttributes.html)
* [extractUniforms](PIXI.glCore.shader.extractUniforms.html)
* [generateUniformAccessObject](PIXI.glCore.shader.generateUniformAccessObject.html)
* [mapSize](PIXI.glCore.shader.mapSize.html)
* [Texture](PIXI.glCore.Texture.html)
* [VertexArrayObject](PIXI.glCore.VertexArrayObject.html)
* [Graphics](PIXI.Graphics.html)
* [GraphicsData](PIXI.GraphicsData.html)
* [GraphicsRenderer](PIXI.GraphicsRenderer.html)
* [InteractionData](PIXI.interaction.InteractionData.html)
* [InteractionEvent](PIXI.interaction.InteractionEvent.html)
* [InteractionManager](PIXI.interaction.InteractionManager.html)
* [Loader](PIXI.loaders.Loader.html)
* [mapWebGLDrawModesToPixi](PIXI.mapWebGLDrawModesToPixi.html)
* [MaskManager](PIXI.MaskManager.html)
* [Matrix](PIXI.Matrix.html)
* [Mesh](PIXI.mesh.Mesh.html)
* [NineSlicePlane](PIXI.mesh.NineSlicePlane.html)
* [Plane](PIXI.mesh.Plane.html)
* [Rope](PIXI.mesh.Rope.html)
* [ObjectRenderer](PIXI.ObjectRenderer.html)
* [ObservablePoint](PIXI.ObservablePoint.html)
* [ParticleContainer](PIXI.particles.ParticleContainer.html)
* [ParticleShader](PIXI.ParticleShader.html)
* [Point](PIXI.Point.html)
* [Polygon](PIXI.Polygon.html)
* [PrimitiveShader](PIXI.PrimitiveShader.html)
* [Quad](PIXI.Quad.html)
* [Rectangle](PIXI.Rectangle.html)
* [RenderTarget](PIXI.RenderTarget.html)
* [RenderTexture](PIXI.RenderTexture.html)
* [RoundedRectangle](PIXI.RoundedRectangle.html)
* [Shader](PIXI.Shader.html)
* [Sprite](PIXI.Sprite.html)
* [SpriteMaskFilter](PIXI.SpriteMaskFilter.html)
* [StencilManager](PIXI.StencilManager.html)
* [SystemRenderer](PIXI.SystemRenderer.html)
* [Text](PIXI.Text.html)
* [TextStyle](PIXI.TextStyle.html)
* [Texture](PIXI.Texture.html)
* [TextureGarbageCollector](PIXI.TextureGarbageCollector.html)
* [TextureManager](PIXI.TextureManager.html)
* [Ticker](PIXI.ticker.Ticker.html)
* [Transform](PIXI.Transform.html)
* [TransformBase](PIXI.TransformBase.html)
* [TransformStatic](PIXI.TransformStatic.html)
* [VideoBaseTexture](PIXI.VideoBaseTexture.html)
* [WebGLExtract](PIXI.WebGLExtract.html)
* [WebGLManager](PIXI.WebGLManager.html)
* [WebGLPrepare](PIXI.WebGLPrepare.html)
* [WebGLRenderer](PIXI.WebGLRenderer.html)
* [WebGLState](PIXI.WebGLState.html)
* [Point](Point.html)
* [Rectangle](Rectangle.html)
* [ResourceHandler](ResourceHandler.html)
* [Scene_Base](Scene_Base.html)
* [ScreenSprite](ScreenSprite.html)
* [ShaderTilemap](ShaderTilemap.html)
* [Sprite](Sprite.html)
* [Stage](Stage.html)
* [Tilemap](Tilemap.html)
* [TilingSprite](TilingSprite.html)
* [ToneFilter](ToneFilter.html)
* [ToneSprite](ToneSprite.html)
* [TouchInput](TouchInput.html)
* [Utils](Utils.html)
* [Weather](Weather.html)
* [WebAudio](WebAudio.html)
* [Window](Window.html)
* [WindowLayer](WindowLayer.html)

### Events

* [error](PIXI.BaseRenderTexture.html#event:error)
* [loaded](PIXI.BaseRenderTexture.html#event:loaded)
* [error](PIXI.BaseTexture.html#event:error)
* [loaded](PIXI.BaseTexture.html#event:loaded)
* [click](PIXI.interaction.InteractionManager.html#event:click)
* [mousedown](PIXI.interaction.InteractionManager.html#event:mousedown)
* [mousemove](PIXI.interaction.InteractionManager.html#event:mousemove)
* [mouseout](PIXI.interaction.InteractionManager.html#event:mouseout)
* [mouseover](PIXI.interaction.InteractionManager.html#event:mouseover)
* [mouseup](PIXI.interaction.InteractionManager.html#event:mouseup)
* [mouseupoutside](PIXI.interaction.InteractionManager.html#event:mouseupoutside)
* [pointerdown](PIXI.interaction.InteractionManager.html#event:pointerdown)
* [pointermove](PIXI.interaction.InteractionManager.html#event:pointermove)
* [pointerout](PIXI.interaction.InteractionManager.html#event:pointerout)
* [pointerover](PIXI.interaction.InteractionManager.html#event:pointerover)
* [pointertap](PIXI.interaction.InteractionManager.html#event:pointertap)
* [pointerup](PIXI.interaction.InteractionManager.html#event:pointerup)
* [pointerupoutside](PIXI.interaction.InteractionManager.html#event:pointerupoutside)
* [rightclick](PIXI.interaction.InteractionManager.html#event:rightclick)
* [rightdown](PIXI.interaction.InteractionManager.html#event:rightdown)
* [rightup](PIXI.interaction.InteractionManager.html#event:rightup)
* [rightupoutside](PIXI.interaction.InteractionManager.html#event:rightupoutside)
* [tap](PIXI.interaction.InteractionManager.html#event:tap)
* [touchend](PIXI.interaction.InteractionManager.html#event:touchend)
* [touchendoutside](PIXI.interaction.InteractionManager.html#event:touchendoutside)
* [touchmove](PIXI.interaction.InteractionManager.html#event:touchmove)
* [touchstart](PIXI.interaction.InteractionManager.html#event:touchstart)
* [update](PIXI.RenderTexture.html#event:update)
* [update](PIXI.Texture.html#event:update)
* [error](PIXI.VideoBaseTexture.html#event:error)
* [loaded](PIXI.VideoBaseTexture.html#event:loaded)

### Namespaces

* [PIXI](PIXI.html)
* [CanvasTinter](PIXI.CanvasTinter.html)
* [GroupD8](PIXI.GroupD8.html)
* [ticker](PIXI.ticker.html)
* [utils](PIXI.utils.html)

### Mixins

* [accessibleTarget](PIXI.accessibleTarget.html)
* [interactiveTarget](PIXI.interaction.interactiveTarget.html)
* [pluginTarget](PIXI.utils.pluginTarget.html)

### Global

* [addChild](global.html#addChild)
* [addChildAt](global.html#addChildAt)
* [addChildToBack](global.html#addChildToBack)
* [addLoadListener](global.html#addLoadListener)
* [addStopListener](global.html#addStopListener)
* [adjustHue](global.html#adjustHue)
* [adjustSaturation](global.html#adjustSaturation)
* [adjustTone](global.html#adjustTone)
* [after](global.html#after)
* [before](global.html#before)
* [blt](global.html#blt)
* [blur](global.html#blur)
* [cached](global.html#cached)
* [canPlayM4a](global.html)
* [canPlayOgg](global.html)
* [canPlayVideoType](global.html)
* [canReadGameFiles](global.html)
* [canUseDifferenceBlend](global.html)
* [canUseSaturationBlend](global.html)
* [checkDirty](global.html#checkDirty)
* [clear](global.html)
* [clearRect](global.html#clearRect)
* [drawCircle](global.html#drawCircle)
* [drawSmallText](global.html#drawSmallText)
* [drawText](global.html#drawText)
* [endLoading](global.html)
* [enqueue](global.html#enqueue)
* [eraseLoadingError](global.html)
* [fadeIn](global.html)
* [fadeOut](global.html)
* [fillAll](global.html#fillAll)
* [fillRect](global.html#fillRect)
* [getAlphaPixel](global.html#getAlphaPixel)
* [getBlendColor](global.html#getBlendColor)
* [getColorTone](global.html#getColorTone)
* [getPixel](global.html#getPixel)
* [gradientFillRect](global.html#gradientFillRect)
* [hasWebGL](global.html)
* [hideFps](global.html)
* [initialize](global.html)
* [isAndroidChrome](global.html)
* [isCancelled](global.html)
* [isClosed](global.html#isClosed)
* [isError](global.html#isError)
* [isFontLoaded](global.html)
* [isInsideCanvas](global.html)
* [isLongPressed](global.html)
* [isMobileDevice](global.html)
* [isMobileSafari](global.html)
* [isMoved](global.html)
* [isNwjs](global.html)
* [isOpen](global.html#isOpen)
* [isOptionValid](global.html)
* [isPlaying](global.html#isPlaying)
* [isPressed](global.html)
* [isReady](global.html#isReady)
* [isReleased](global.html)
* [isRepeated](global.html)
* [isSupportPassiveEvent](global.html)
* [isTriggered](global.html)
* [isVideoPlaying](global.html)
* [isWebGL](global.html)
* [load](global.html)
* [loadFont](global.html)
* [makeDeepCopy](global.html)
* [measureTextWidth](global.html#measureTextWidth)
* [move](global.html#move)
* [pageToCanvasX](global.html)
* [pageToCanvasY](global.html)
* [parse](global.html)
* [play](global.html)
* [playVideo](global.html)
* [printError](global.html)
* [printLoadingError](global.html)
* [printStackTrace](global.html)
* [punycode](global.html#punycode)
* [refresh](global.html#refresh)
* [removeChild](global.html#removeChild)
* [removeChildAt](global.html#removeChildAt)
* [render](global.html)
* [renderCanvas](global.html#renderCanvas)
* [renderWebGL](global.html#renderWebGL)
* [reset](global.html#reset)
* [resize](global.html#resize)
* [rgbToCssColor](global.html)
* [rotateHue](global.html#rotateHue)
* [seek](global.html)
* [set](global.html#set)
* [setBlack](global.html#setBlack)
* [setBlendColor](global.html#setBlendColor)
* [setColor](global.html#setColor)
* [setColorTone](global.html#setColorTone)
* [setCursorRect](global.html#setCursorRect)
* [setData](global.html#setData)
* [setEnableProgress](global.html)
* [setErrorMessage](global.html)
* [setFrame](global.html#setFrame)
* [setLoadingImage](global.html)
* [setMasterVolume](global.html)
* [setTone](global.html#setTone)
* [setup](global.html)
* [setVideoVolume](global.html)
* [setWhite](global.html#setWhite)
* [showFps](global.html)
* [snap](global.html)
* [startLoading](global.html)
* [stop](global.html#stop)
* [stringify](global.html)
* [the](global.html#the)
* [The](global.html#The)
* [tickEnd](global.html)
* [tickStart](global.html)
* [touch](global.html#touch)
* [update](global.html#update)
* [updateBitmaps](global.html#updateBitmaps)
* [updateLoading](global.html)
* [whether](global.html#whether)

 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
