# Source: rpg_core/JsExtensions.js

```
//-----------------------------------------------------------------------------
/**
 * This is not a class, but contains some methods that will be added to the
 * standard Javascript objects.
 *
 * @class JsExtensions
 */
function JsExtensions() {
    throw new Error('This is not a class');
}

/**
 * Returns a number whose value is limited to the given range.
 *
 * @method Number.prototype.clamp
 * @param {Number} min The lower boundary
 * @param {Number} max The upper boundary
 * @return {Number} A number in the range (min, max)
 */
Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
};

/**
 * Returns a modulo value which is always positive.
 *
 * @method Number.prototype.mod
 * @param {Number} n The divisor
 * @return {Number} A modulo value
 */
Number.prototype.mod = function(n) {
    return ((this % n) + n) % n;
};

/**
 * Replaces %1, %2 and so on in the string to the arguments.
 *
 * @method String.prototype.format
 * @param {Any} ...args The objects to format
 * @return {String} A formatted string
 */
String.prototype.format = function() {
    var args = arguments;
    return this.replace(/%([0-9]+)/g, function(s, n) {
        return args[Number(n) - 1];
    });
};

/**
 * Makes a number string with leading zeros.
 *
 * @method String.prototype.padZero
 * @param {Number} length The length of the output string
 * @return {String} A string with leading zeros
 */
String.prototype.padZero = function(length){
    var s = this;
    while (s.length < length) {
        s = '0' + s;
    }
    return s;
};

/**
 * Makes a number string with leading zeros.
 *
 * @method Number.prototype.padZero
 * @param {Number} length The length of the output string
 * @return {String} A string with leading zeros
 */
Number.prototype.padZero = function(length){
    return String(this).padZero(length);
};

Object.defineProperties(Array.prototype, {
    /**
     * Checks whether the two arrays are same.
     *
     * @method Array.prototype.equals
     * @param {Array} array The array to compare to
     * @return {Boolean} True if the two arrays are same
     */
    equals: {
        enumerable: false,
        value: function(array) {
            if (!array || this.length !== array.length) {
                return false;
            }
            for (var i = 0; i < this.length; i++) {
                if (this[i] instanceof Array && array[i] instanceof Array) {
                    if (!this[i].equals(array[i])) {
                        return false;
                    }
                } else if (this[i] !== array[i]) {
                    return false;
                }
            }
            return true;
        }
    },
    /**
     * Makes a shallow copy of the array.
     *
     * @method Array.prototype.clone
     * @return {Array} A shallow copy of the array
     */
    clone: {
        enumerable: false,
        value: function() {
            return this.slice(0);
        }
    },
    /**
     * Checks whether the array contains a given element.
     *
     * @method Array.prototype.contains
     * @param {Any} element The element to search for
     * @return {Boolean} True if the array contains a given element
     */
    contains : {
        enumerable: false,
        value: function(element) {
            return this.indexOf(element) >= 0;
        }
    }
});

/**
 * Checks whether the string contains a given string.
 *
 * @method String.prototype.contains
 * @param {String} string The string to search for
 * @return {Boolean} True if the string contains a given string
 */
String.prototype.contains = function(string) {
    return this.indexOf(string) >= 0;
};

/**
 * Generates a random integer in the range (0, max-1).
 *
 * @static
 * @method Math.randomInt
 * @param {Number} max The upper boundary (excluded)
 * @return {Number} A random integer
 */
Math.randomInt = function(max) {
    return Math.floor(max * Math.random());
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
