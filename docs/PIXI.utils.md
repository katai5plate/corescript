# Namespace: utils

## [PIXI](PIXI.html).  utils

<dl>
                    <dt>Source:</dt>
                    <dd>
                        <ul>
                            <li>
                                <a>libs/pixi.js</a>, <a>line 24415</a>
                            </li>
                        </ul>
                    </dd>
                </dl>

### Mixins

<dl>
                    <dt><a>pluginTarget</a></dt>
                    <dd></dd>
                </dl>

### Methods

#### (static) canUseNewCanvasBlendModes () → {boolean}

<dl>
                <dt>Deprecated:</dt>
                <dd>
                    <ul>
                        <li>Yes</li>
                    </ul>
                </dd>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 25335</a>
                        </li>
                    </ul>
                </dd>
                <dt>See:</dt>
                <dd>
                    <ul>
                        <li><a>PIXI.CanvasTinter</a></li>
                    </ul>
                </dd>
            </dl>

##### Returns:

Can use blend modes.
<dl>
                <dt> Type </dt>
                <dd>
                    <span>boolean</span>
                </dd>
            </dl>

#### (static) decomposeDataUri (dataUri) → {[DecomposedDataUri](global.html#DecomposedDataUri)|undefined}

Split a data URI into components. Returns undefined if parameter `dataUri` is not a valid data URI.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `dataUri` | string | the data URI to check |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24511</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The decomposed data uri or undefined
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>DecomposedDataUri</a></span> | <span>undefined</span>
                </dd>
            </dl>

#### (static) getResolutionOfUrl (url) → {number}

get the resolution / device pixel ratio of an asset by looking for the prefix used by spritesheets and image urls

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | string | the image path |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24483</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

resolution / device pixel ratio of an asset
<dl>
                <dt> Type </dt>
                <dd>
                    <span>number</span>
                </dd>
            </dl>

#### (static) getSvgSize (svgString) → {[Size](global.html#Size)|undefined}

Get size from an svg string using regexp.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `svgString` | string | a serialized svg element |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24558</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

image extension
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Size</a></span> | <span>undefined</span>
                </dd>
            </dl>

#### (static) getUrlFileExtension (url) → {string|undefined}

Get type of the image by regexp for extension. Returns undefined for unknown extensions.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | string | the image path |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24533</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

image extension
<dl>
                <dt> Type </dt>
                <dd>
                    <span>string</span> | <span>undefined</span>
                </dd>
            </dl>

#### (static) hex2rgb (hex, out opt) → {[Array](Array.html).<number>}

Converts a hex color number to an [R, G, B] array

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `hex` | number |  |  | The number to convert |
| `out` | [Array](Array.html).<number> | <optional> | [] | If supplied, this array will be used rather than returning a new one |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24440</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

An array representing the [R, G, B] of the color.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;number&gt;</span>
                </dd>
            </dl>

#### (static) hex2string (hex) → {string}

Converts a hex color number to a string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `hex` | number | Number in hex |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24457</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The string color.
<dl>
                <dt> Type </dt>
                <dd>
                    <span>string</span>
                </dd>
            </dl>

#### (static) isWebGLSupported () → {boolean}

Helper for checking for webgl support
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24609</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

is webgl supported
<dl>
                <dt> Type </dt>
                <dd>
                    <span>boolean</span>
                </dd>
            </dl>

#### (static) removeItems (arr, startIdx, removeCount)

Remove a range of items from an array

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `arr` | [Array](Array.html).<*> | The target array |
| `startIdx` | number | The index to begin removing from (inclusive) |
| `removeCount` | number | How many items to remove |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24659</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) rgb2hex (rgb) → {number}

Converts a color as an [R, G, B] array to a hex number

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `rgb` | [Array](Array.html).<number> | rgb array |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24471</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The color number
<dl>
                <dt> Type </dt>
                <dd>
                    <span>number</span>
                </dd>
            </dl>

#### (static) sayHello (type)

Logs out the version and renderer information for this running instance of PIXI. If you don't want to see this message you can run `PIXI.utils.skipHello()` before creating your renderer. Keep in mind that doing that will forever makes you a jerk face.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | string | The string renderer type to log. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24587</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) sign (n) → {number}

Returns sign of number

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `n` | number | the number to check the sign of |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24645</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

0 if `n` is 0, -1 if `n` is negative, 1 if `n` is positive
<dl>
                <dt> Type </dt>
                <dd>
                    <span>number</span>
                </dd>
            </dl>

#### (static) uid () → {number}

Gets the next unique identifier
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24428</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The next unique identifier to use.
<dl>
                <dt> Type </dt>
                <dd>
                    <span>number</span>
                </dd>
            </dl>

#### (static) uuid () → {number}

<dl>
                <dt>Deprecated:</dt>
                <dd>
                    <ul>
                        <li>since version 3.0.6</li>
                    </ul>
                </dd>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 25322</a>
                        </li>
                    </ul>
                </dd>
                <dt>See:</dt>
                <dd>
                    <ul>
                        <li><a>PIXI.utils.uid</a></li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The uid
<dl>
                <dt> Type </dt>
                <dd>
                    <span>number</span>
                </dd>
            </dl>

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
