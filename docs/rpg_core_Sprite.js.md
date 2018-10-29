# Source: rpg_core/Sprite.js

```
//-----------------------------------------------------------------------------
/**
 * The basic object that is rendered to the game screen.
 *
 * @class Sprite
 * @constructor
 * @param {Bitmap} bitmap The image for the sprite
 */
function Sprite() {
    this.initialize.apply(this, arguments);
}

Sprite.prototype = Object.create(PIXI.Sprite.prototype);
Sprite.prototype.constructor = Sprite;

Sprite.voidFilter = new PIXI.filters.VoidFilter();

Sprite.prototype.initialize = function(bitmap) {
    var texture = new PIXI.Texture(new PIXI.BaseTexture());

    PIXI.Sprite.call(this, texture);

    this._bitmap = null;
    this._frame = new Rectangle();
    this._realFrame = new Rectangle();
    this._blendColor = [0, 0, 0, 0];
    this._colorTone = [0, 0, 0, 0];
    this._canvas = null;
    this._context = null;
    this._tintTexture = null;

    /**
     * use heavy renderer that will reduce border artifacts and apply advanced blendModes
     * @type {boolean}
     * @private
     */
    this._isPicture = false;

    this.spriteId = Sprite._counter++;
    this.opaque = false;

    this.bitmap = bitmap;
};

// Number of the created objects.
Sprite._counter = 0;

/**
 * The image for the sprite.
 *
 * @property bitmap
 * @type Bitmap
 */
Object.defineProperty(Sprite.prototype, 'bitmap', {
    get: function() {
        return this._bitmap;
    },
    set: function(value) {
        if (this._bitmap !== value) {
            this._bitmap = value;

            if(value){
                this._refreshFrame = true;
                value.addLoadListener(this._onBitmapLoad.bind(this));
            }else{
                this._refreshFrame = false;
                this.texture.frame = Rectangle.emptyRectangle;
            }
        }
    },
    configurable: true
});

/**
 * The width of the sprite without the scale.
 *
 * @property width
 * @type Number
 */
Object.defineProperty(Sprite.prototype, 'width', {
    get: function() {
        return this._frame.width;
    },
    set: function(value) {
        this._frame.width = value;
        this._refresh();
    },
    configurable: true
});

/**
 * The height of the sprite without the scale.
 *
 * @property height
 * @type Number
 */
Object.defineProperty(Sprite.prototype, 'height', {
    get: function() {
        return this._frame.height;
    },
    set: function(value) {
        this._frame.height = value;
        this._refresh();
    },
    configurable: true
});

/**
 * The opacity of the sprite (0 to 255).
 *
 * @property opacity
 * @type Number
 */
Object.defineProperty(Sprite.prototype, 'opacity', {
    get: function() {
        return this.alpha * 255;
    },
    set: function(value) {
        this.alpha = value.clamp(0, 255) / 255;
    },
    configurable: true
});

/**
 * Updates the sprite for each frame.
 *
 * @method update
 */
Sprite.prototype.update = function() {
    this.children.forEach(function(child) {
        if (child.update) {
            child.update();
        }
    });
};

/**
 * Sets the x and y at once.
 *
 * @method move
 * @param {Number} x The x coordinate of the sprite
 * @param {Number} y The y coordinate of the sprite
 */
Sprite.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
};

/**
 * Sets the rectagle of the bitmap that the sprite displays.
 *
 * @method setFrame
 * @param {Number} x The x coordinate of the frame
 * @param {Number} y The y coordinate of the frame
 * @param {Number} width The width of the frame
 * @param {Number} height The height of the frame
 */
Sprite.prototype.setFrame = function(x, y, width, height) {
    this._refreshFrame = false;
    var frame = this._frame;
    if (x !== frame.x || y !== frame.y ||
            width !== frame.width || height !== frame.height) {
        frame.x = x;
        frame.y = y;
        frame.width = width;
        frame.height = height;
        this._refresh();
    }
};

/**
 * Gets the blend color for the sprite.
 *
 * @method getBlendColor
 * @return {Array} The blend color [r, g, b, a]
 */
Sprite.prototype.getBlendColor = function() {
    return this._blendColor.clone();
};

/**
 * Sets the blend color for the sprite.
 *
 * @method setBlendColor
 * @param {Array} color The blend color [r, g, b, a]
 */
Sprite.prototype.setBlendColor = function(color) {
    if (!(color instanceof Array)) {
        throw new Error('Argument must be an array');
    }
    if (!this._blendColor.equals(color)) {
        this._blendColor = color.clone();
        this._refresh();
    }
};

/**
 * Gets the color tone for the sprite.
 *
 * @method getColorTone
 * @return {Array} The color tone [r, g, b, gray]
 */
Sprite.prototype.getColorTone = function() {
    return this._colorTone.clone();
};

/**
 * Sets the color tone for the sprite.
 *
 * @method setColorTone
 * @param {Array} tone The color tone [r, g, b, gray]
 */
Sprite.prototype.setColorTone = function(tone) {
    if (!(tone instanceof Array)) {
        throw new Error('Argument must be an array');
    }
    if (!this._colorTone.equals(tone)) {
        this._colorTone = tone.clone();
        this._refresh();
    }
};

/**
 * @method _onBitmapLoad
 * @private
 */
Sprite.prototype._onBitmapLoad = function(bitmapLoaded) {
    if(bitmapLoaded === this._bitmap){
        if (this._refreshFrame && this._bitmap) {
            this._refreshFrame = false;
            this._frame.width = this._bitmap.width;
            this._frame.height = this._bitmap.height;
        }
    }

    this._refresh();
};

/**
 * @method _refresh
 * @private
 */
Sprite.prototype._refresh = function() {
    var frameX = Math.floor(this._frame.x);
    var frameY = Math.floor(this._frame.y);
    var frameW = Math.floor(this._frame.width);
    var frameH = Math.floor(this._frame.height);
    var bitmapW = this._bitmap ? this._bitmap.width : 0;
    var bitmapH = this._bitmap ? this._bitmap.height : 0;
    var realX = frameX.clamp(0, bitmapW);
    var realY = frameY.clamp(0, bitmapH);
    var realW = (frameW - realX + frameX).clamp(0, bitmapW - realX);
    var realH = (frameH - realY + frameY).clamp(0, bitmapH - realY);

    this._realFrame.x = realX;
    this._realFrame.y = realY;
    this._realFrame.width = realW;
    this._realFrame.height = realH;
    this.pivot.x = frameX - realX;
    this.pivot.y = frameY - realY;

    if (realW > 0 && realH > 0) {
        if (this._needsTint()) {
            this._createTinter(realW, realH);
            this._executeTint(realX, realY, realW, realH);
            this._tintTexture.update();
            this.texture.baseTexture = this._tintTexture;
            this.texture.frame = new Rectangle(0, 0, realW, realH);
        } else {
            if (this._bitmap) {
                this.texture.baseTexture = this._bitmap.baseTexture;
            }
            this.texture.frame = this._realFrame;
        }
    } else if (this._bitmap) {
        this.texture.frame = Rectangle.emptyRectangle;
    } else {
        this.texture.baseTexture.width = Math.max(this.texture.baseTexture.width, this._frame.x + this._frame.width);
        this.texture.baseTexture.height = Math.max(this.texture.baseTexture.height, this._frame.y + this._frame.height);
        this.texture.frame = this._frame;
    }
    this.texture._updateID++;
};

/**
 * @method _isInBitmapRect
 * @param {Number} x
 * @param {Number} y
 * @param {Number} w
 * @param {Number} h
 * @return {Boolean}
 * @private
 */
Sprite.prototype._isInBitmapRect = function(x, y, w, h) {
    return (this._bitmap && x + w > 0 && y + h > 0 &&
            x < this._bitmap.width && y < this._bitmap.height);
};

/**
 * @method _needsTint
 * @return {Boolean}
 * @private
 */
Sprite.prototype._needsTint = function() {
    var tone = this._colorTone;
    return tone[0] || tone[1] || tone[2] || tone[3] || this._blendColor[3] > 0;
};

/**
 * @method _createTinter
 * @param {Number} w
 * @param {Number} h
 * @private
 */
Sprite.prototype._createTinter = function(w, h) {
    if (!this._canvas) {
        this._canvas = document.createElement('canvas');
        this._context = this._canvas.getContext('2d');
    }

    this._canvas.width = w;
    this._canvas.height = h;

    if (!this._tintTexture) {
        this._tintTexture = new PIXI.BaseTexture(this._canvas);
    }

    this._tintTexture.width = w;
    this._tintTexture.height = h;
    this._tintTexture.scaleMode = this._bitmap.baseTexture.scaleMode;
};

/**
 * @method _executeTint
 * @param {Number} x
 * @param {Number} y
 * @param {Number} w
 * @param {Number} h
 * @private
 */
Sprite.prototype._executeTint = function(x, y, w, h) {
    var context = this._context;
    var tone = this._colorTone;
    var color = this._blendColor;

    context.globalCompositeOperation = 'copy';
    context.drawImage(this._bitmap.canvas, x, y, w, h, 0, 0, w, h);

    if (tone[0] || tone[1] || tone[2] || tone[3]) {
        if (Graphics.canUseSaturationBlend()) {
            var gray = Math.max(0, tone[3]);
            context.globalCompositeOperation = 'saturation';
            context.fillStyle = 'rgba(255,255,255,' + gray / 255 + ')';
            context.fillRect(0, 0, w, h);
        }

        var r1 = Math.max(0, tone[0]);
        var g1 = Math.max(0, tone[1]);
        var b1 = Math.max(0, tone[2]);
        context.globalCompositeOperation = 'lighter';
        context.fillStyle = Utils.rgbToCssColor(r1, g1, b1);
        context.fillRect(0, 0, w, h);

        if (Graphics.canUseDifferenceBlend()) {
            context.globalCompositeOperation = 'difference';
            context.fillStyle = 'white';
            context.fillRect(0, 0, w, h);

            var r2 = Math.max(0, -tone[0]);
            var g2 = Math.max(0, -tone[1]);
            var b2 = Math.max(0, -tone[2]);
            context.globalCompositeOperation = 'lighter';
            context.fillStyle = Utils.rgbToCssColor(r2, g2, b2);
            context.fillRect(0, 0, w, h);

            context.globalCompositeOperation = 'difference';
            context.fillStyle = 'white';
            context.fillRect(0, 0, w, h);
        }
    }

    var r3 = Math.max(0, color[0]);
    var g3 = Math.max(0, color[1]);
    var b3 = Math.max(0, color[2]);
    var a3 = Math.max(0, color[3]);
    context.globalCompositeOperation = 'source-atop';
    context.fillStyle = Utils.rgbToCssColor(r3, g3, b3);
    context.globalAlpha = a3 / 255;
    context.fillRect(0, 0, w, h);

    context.globalCompositeOperation = 'destination-in';
    context.globalAlpha = 1;
    context.drawImage(this._bitmap.canvas, x, y, w, h, 0, 0, w, h);
};

Sprite.prototype._renderCanvas_PIXI = PIXI.Sprite.prototype._renderCanvas;
Sprite.prototype._renderWebGL_PIXI = PIXI.Sprite.prototype._renderWebGL;

/**
 * @method _renderCanvas
 * @param {Object} renderer
 * @private
 */
Sprite.prototype._renderCanvas = function(renderer) {
    if (this.bitmap) {
        this.bitmap.touch();
    }
    if(this.bitmap && !this.bitmap.isReady()){
        return;
    }

    if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
        this._renderCanvas_PIXI(renderer);
    }
};

/**
 * checks if we need to speed up custom blendmodes
 * @param renderer
 * @private
 */
Sprite.prototype._speedUpCustomBlendModes = function(renderer) {
    var picture = renderer.plugins.picture;
    var blend = this.blendMode;
    if (renderer.renderingToScreen && renderer._activeRenderTarget.root) {
        if (picture.drawModes[blend]) {
            var stage = renderer._lastObjectRendered;
            var f = stage._filters;
            if (!f || !f[0]) {
                setTimeout(function () {
                    var f = stage._filters;
                    if (!f || !f[0]) {
                        stage.filters = [Sprite.voidFilter];
                        stage.filterArea = new PIXI.Rectangle(0, 0, Graphics.width, Graphics.height);
                    }
                }, 0);
            }
        }
    }
};

/**
 * @method _renderWebGL
 * @param {Object} renderer
 * @private
 */
Sprite.prototype._renderWebGL = function(renderer) {
    if (this.bitmap) {
        this.bitmap.touch();
    }
    if(this.bitmap && !this.bitmap.isReady()){
        return;
    }
    if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
        if (this._bitmap) {
            this._bitmap.checkDirty();
        }

        //copy of pixi-v4 internal code
        this.calculateVertices();

        if (this._isPicture) {
            // use heavy renderer, which reduces artifacts and applies corrent blendMode,
            // but does not use multitexture optimization
            this._speedUpCustomBlendModes(renderer);
            renderer.setObjectRenderer(renderer.plugins.picture);
            renderer.plugins.picture.render(this);
        } else {
            // use pixi super-speed renderer
            renderer.setObjectRenderer(renderer.plugins.sprite);
            renderer.plugins.sprite.render(this);
        }
    }
};

// The important members from Pixi.js

/**
 * The visibility of the sprite.
 *
 * @property visible
 * @type Boolean
 */

/**
 * The x coordinate of the sprite.
 *
 * @property x
 * @type Number
 */

/**
 * The y coordinate of the sprite.
 *
 * @property y
 * @type Number
 */

/**
 * The origin point of the sprite. (0,0) to (1,1).
 *
 * @property anchor
 * @type Point
 */

/**
 * The scale factor of the sprite.
 *
 * @property scale
 * @type Point
 */

/**
 * The rotation of the sprite in radians.
 *
 * @property rotation
 * @type Number
 */

/**
 * The blend mode to be applied to the sprite.
 *
 * @property blendMode
 * @type Number
 */

/**
 * Sets the filters for the sprite.
 *
 * @property filters
 * @type Array
 */

/**
 * [read-only] The array of children of the sprite.
 *
 * @property children
 * @type Array
 */

/**
 * [read-only] The object that contains the sprite.
 *
 * @property parent
 * @type Object
 */

/**
 * Adds a child to the container.
 *
 * @method addChild
 * @param {Object} child The child to add
 * @return {Object} The child that was added
 */

/**
 * Adds a child to the container at a specified index.
 *
 * @method addChildAt
 * @param {Object} child The child to add
 * @param {Number} index The index to place the child in
 * @return {Object} The child that was added
 */

/**
 * Removes a child from the container.
 *
 * @method removeChild
 * @param {Object} child The child to remove
 * @return {Object} The child that was removed
 */

/**
 * Removes a child from the specified index position.
 *
 * @method removeChildAt
 * @param {Number} index The index to get the child from
 * @return {Object} The child that was removed
 */
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
