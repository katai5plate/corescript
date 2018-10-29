# Global

### Members

#### cached :number

tint of the fill

##### Type:

* number

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 11107</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### cached :number

tint of the line to draw

##### Type:

* number

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 11092</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### enqueue

Adds a resource (or multiple resources) to the loader queue. This function can take a wide variety of different parameters. The only thing that is always required the url to load. All the following will work: ```js loader // normal param syntax .add('key', 'http://...', function () {}) .add('http://...', function () {}) .add('http://...') // object syntax .add({ name: 'key2', url: 'http://...' }, function () {}) .add({ url: 'http://...' }, function () {}) .add({ name: 'key3', url: 'http://...' onComplete: function () {} }) .add({ url: 'https://...', onComplete: function () {}, crossOrigin: true }) // you can also pass an array of objects or urls or both .add([ { name: 'key4', url: 'http://...', onComplete: function () {} }, { url: 'http://...', onComplete: function () {} }, 'http://...' ]) // and you can use both params and options .add('key', 'http://...', { crossOrigin: true }, function () {}) .add('http://...', { crossOrigin: true }, function () {}); ```
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 5078</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### punycode :Object

The `punycode` object.

##### Type:

* Object

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 3428</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### the :number

color of the line to draw

##### Type:

* number

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 11082</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### The :number

type of the shape, see the Const.Shapes file for all the existing types,

##### Type:

* number

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 11124</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### the :number

width of the line to draw

##### Type:

* number

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 11077</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### The :[PIXI.Circle](PIXI.Circle.html)|[PIXI.Ellipse](PIXI.Ellipse.html)|[PIXI.Polygon](PIXI.Polygon.html)|[PIXI.Rectangle](PIXI.Rectangle.html)|[PIXI.RoundedRectangle](PIXI.RoundedRectangle.html)

shape object to draw.

##### Type:

* [PIXI.Circle](PIXI.Circle.html) |[PIXI.Ellipse](PIXI.Ellipse.html) |[PIXI.Polygon](PIXI.Polygon.html) |[PIXI.Rectangle](PIXI.Rectangle.html) |[PIXI.RoundedRectangle](PIXI.RoundedRectangle.html)

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 11119</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### the :number

alpha of the fill

##### Type:

* number

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 11102</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### the :number

color of the fill

##### Type:

* number

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 11097</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### the :number

alpha of the line to draw

##### Type:

* number

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 11087</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### whether :boolean

or not the shape is filled with a colour

##### Type:

* boolean

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 11112</a>
                        </li>
                    </ul>
                </dd>
            </dl>

### Methods

#### addChild (child) → {Object}

Adds a child to the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Stage.js</a>, <a>line 29</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChild (child) → {Object}

Adds a child to the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WindowLayer.js</a>, <a>line 265</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChild (child) → {Object}

Adds a child to the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Sprite.js</a>, <a>line 548</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChild (child) → {Object}

Adds a child to the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Window.js</a>, <a>line 655</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChild (child) → {Object}

Adds a child to the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Tilemap.js</a>, <a>line 933</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChildAt (child, index) → {Object}

Adds a child to the container at a specified index.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |
| `index` | [Number](Number.html) | The index to place the child in |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Sprite.js</a>, <a>line 556</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChildAt (child, index) → {Object}

Adds a child to the container at a specified index.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |
| `index` | [Number](Number.html) | The index to place the child in |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Window.js</a>, <a>line 663</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChildAt (child, index) → {Object}

Adds a child to the container at a specified index.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |
| `index` | [Number](Number.html) | The index to place the child in |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Tilemap.js</a>, <a>line 941</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChildAt (child, index) → {Object}

Adds a child to the container at a specified index.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |
| `index` | [Number](Number.html) | The index to place the child in |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WindowLayer.js</a>, <a>line 273</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChildAt (child, index) → {Object}

Adds a child to the container at a specified index.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |
| `index` | [Number](Number.html) | The index to place the child in |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Stage.js</a>, <a>line 37</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChildToBack (child) → {Object}

Adds a child between the background and contents.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Window.js</a>, <a>line 345</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### (static) addLoadListener (listner)

Add a callback function that will be called when the audio data is loaded.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `listner` | function | The callback function |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Html5Audio.js</a>, <a>line 347</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### addLoadListener (listner)

Add a callback function that will be called when the bitmap is loaded.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `listner` | function | The callback function |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 843</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### addLoadListener (listner)

Add a callback function that will be called when the audio data is loaded.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `listner` | function | The callback function |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 483</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### addStopListener (listner)

Add a callback function that will be called when the playback is stopped.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `listner` | function | The callback function |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 493</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### adjustHue (value)

Changes the hue.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.html) | The hue value in the range (-360, 360) |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/ToneFilter.js</a>, <a>line 16</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### adjustSaturation (value)

Changes the saturation.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.html) | The saturation value in the range (-255, 255) |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/ToneFilter.js</a>, <a>line 26</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### adjustTone (r, g, b)

Changes the tone.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.html) | The red strength in the range (-255, 255) |
| `g` | [Number](Number.html) | The green strength in the range (-255, 255) |
| `b` | [Number](Number.html) | The blue strength in the range (-255, 255) |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/ToneFilter.js</a>, <a>line 37</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### adjustTone (r, g, b)

Changes the color tone of the entire bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.html) | The red strength in the range (-255, 255) |
| `g` | [Number](Number.html) | The green strength in the range (-255, 255) |
| `b` | [Number](Number.html) | The blue strength in the range (-255, 255) |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 715</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### after (fn) → {Loader}

Sets up a middleware function that will run *after* the resource is loaded.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `fn` | function | The middleware function to register. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 5160</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

Returns itself.
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Loader</span>
                </dd>
            </dl>

#### before (fn) → {Loader}

Sets up a middleware function that will run *before* the resource is loaded.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `fn` | function | The middleware function to register. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 5145</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

Returns itself.
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Loader</span>
                </dd>
            </dl>

#### blt (source, sx, sy, sw, sh, dx, dy, dw opt, dh opt)

Performs a block transfer.

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | [Bitmap](Bitmap.html) |  |  | The bitmap to draw |
| `sx` | [Number](Number.html) |  |  | The x coordinate in the source |
| `sy` | [Number](Number.html) |  |  | The y coordinate in the source |
| `sw` | [Number](Number.html) |  |  | The width of the source image |
| `sh` | [Number](Number.html) |  |  | The height of the source image |
| `dx` | [Number](Number.html) |  |  | The x coordinate in the destination |
| `dy` | [Number](Number.html) |  |  | The y coordinate in the destination |
| `dw` | [Number](Number.html) | <optional> | sw | The width to draw the image in the destination |
| `dh` | [Number](Number.html) | <optional> | sh | The height to draw the image in the destination |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 435</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### blt (source, sx, sy, sw, sh, dx, dy, dw opt, dh opt)

Performs a block transfer, using assumption that original image was not modified (no hue)

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | [Bitmap](Bitmap.html) |  |  | The bitmap to draw |
| `sx` | [Number](Number.html) |  |  | The x coordinate in the source |
| `sy` | [Number](Number.html) |  |  | The y coordinate in the source |
| `sw` | [Number](Number.html) |  |  | The width of the source image |
| `sh` | [Number](Number.html) |  |  | The height of the source image |
| `dx` | [Number](Number.html) |  |  | The x coordinate in the destination |
| `dy` | [Number](Number.html) |  |  | The y coordinate in the destination |
| `dw` | [Number](Number.html) | <optional> | sw | The width to draw the image in the destination |
| `dh` | [Number](Number.html) | <optional> | sh | The height to draw the image in the destination |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 460</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### blur ()

Applies a blur effect to the bitmap.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 808</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) canPlayM4a () → {Boolean}

Checks whether the browser can play m4a files.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 73</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the browser can play m4a files
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) canPlayOgg () → {Boolean}

Checks whether the browser can play ogg files.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 59</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the browser can play ogg files
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) canPlayVideoType (type) → {Boolean}

Checks whether the browser can play the specified video type.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [String](String.html) | The video type to test support for |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 554</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the browser can play the specified video type
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) canReadGameFiles () → {Boolean}

Checks whether the browser can read files in the game folder.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Utils.js</a>, <a>line 102</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the browser can read files in the game folder
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) canUseDifferenceBlend () → {Boolean}

Checks whether the canvas blend mode 'difference' is supported.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 210</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the canvas blend mode 'difference' is supported
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) canUseSaturationBlend () → {Boolean}

Checks whether the canvas blend mode 'saturation' is supported.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 221</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the canvas blend mode 'saturation' is supported
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### checkDirty ()

updates texture is bitmap was dirty
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 985</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clear ()

Clears the audio data.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 257</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clear ()

Clears the entire bitmap.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 529</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) clear ()

Clears all the touch data.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TouchInput.js</a>, <a>line 40</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) clear ()

Clears the audio data.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Html5Audio.js</a>, <a>line 159</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) clear ()

Clears all the input data.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Input.js</a>, <a>line 95</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearRect (x, y, width, height)

Clears the specified rectangle.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate for the upper-left corner |
| `y` | [Number](Number.html) | The y coordinate for the upper-left corner |
| `width` | [Number](Number.html) | The width of the rectangle to clear |
| `height` | [Number](Number.html) | The height of the rectangle to clear |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 515</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawCircle (x, y, radius, color)

Draw a bitmap in the shape of a circle

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate based on the circle center |
| `y` | [Number](Number.html) | The y coordinate based on the circle center |
| `radius` | [Number](Number.html) | The radius of the circle |
| `color` | [String](String.html) | The color of the circle in CSS format |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 597</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawSmallText (text, x, y, maxWidth, lineHeight, align)

Draws the small text big once and resize it because modern broswers are poor at drawing small text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) | The text that will be drawn |
| `x` | [Number](Number.html) | The x coordinate for the left of the text |
| `y` | [Number](Number.html) | The y coordinate for the top of the text |
| `maxWidth` | [Number](Number.html) | The maximum allowed width of the text |
| `lineHeight` | [Number](Number.html) | The height of the text line |
| `align` | [String](String.html) | The alignment of the text |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 660</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawText (text, x, y, maxWidth, lineHeight, align)

Draws the outline text to the bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) | The text that will be drawn |
| `x` | [Number](Number.html) | The x coordinate for the left of the text |
| `y` | [Number](Number.html) | The y coordinate for the top of the text |
| `maxWidth` | [Number](Number.html) | The maximum allowed width of the text |
| `lineHeight` | [Number](Number.html) | The height of the text line |
| `align` | [String](String.html) | The alignment of the text |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 617</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) endLoading ()

Erases the "Now Loading" image.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 340</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) eraseLoadingError ()

Erases the loading error text.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 379</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### fadeIn (duration)

Performs the audio fade-in.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) | Fade-in time in seconds |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 427</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) fadeIn (duration)

Performs the audio fade-in.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) | Fade-in time in seconds |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Html5Audio.js</a>, <a>line 297</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### fadeOut (duration)

Performs the audio fade-out.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) | Fade-out time in seconds |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 448</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) fadeOut (duration)

Performs the audio fade-out.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) | Fade-out time in seconds |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Html5Audio.js</a>, <a>line 318</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### fillAll (color)

Fills the entire bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [String](String.html) | The color of the rectangle in CSS format |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 557</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### fillRect (x, y, width, height, color)

Fills the specified rectangle.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate for the upper-left corner |
| `y` | [Number](Number.html) | The y coordinate for the upper-left corner |
| `width` | [Number](Number.html) | The width of the rectangle to fill |
| `height` | [Number](Number.html) | The height of the rectangle to fill |
| `color` | [String](String.html) | The color of the rectangle in CSS format |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 538</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### getAlphaPixel (x, y) → {[String](String.html)}

Returns alpha pixel value at the specified point.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the pixel in the bitmap |
| `y` | [Number](Number.html) | The y coordinate of the pixel in the bitmap |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 502</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The alpha value
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### getBlendColor () → {[Array](Array.html)}

Gets the blend color for the sprite.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Sprite.js</a>, <a>line 171</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The blend color [r, g, b, a]
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a></span>
                </dd>
            </dl>

#### getColorTone () → {[Array](Array.html)}

Gets the color tone for the sprite.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Sprite.js</a>, <a>line 197</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The color tone [r, g, b, gray]
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a></span>
                </dd>
            </dl>

#### getPixel (x, y) → {[String](String.html)}

Returns pixel color at the specified point.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the pixel in the bitmap |
| `y` | [Number](Number.html) | The y coordinate of the pixel in the bitmap |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 485</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The pixel color (hex format)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### gradientFillRect (x, y, width, height, color1, color2, vertical)

Draws the rectangle with a gradation.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate for the upper-left corner |
| `y` | [Number](Number.html) | The y coordinate for the upper-left corner |
| `width` | [Number](Number.html) | The width of the rectangle to fill |
| `height` | [Number](Number.html) | The height of the rectangle to fill |
| `color1` | [String](String.html) | The gradient starting color |
| `color2` | [String](String.html) | The gradient ending color |
| `vertical` | Boolean | Wether the gradient should be draw as vertical or not |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 567</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) hasWebGL () → {Boolean}

Checks whether the current browser supports WebGL.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 194</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the current browser supports WebGL.
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) hideFps ()

Hides the FPSMeter element.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 455</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) initialize (noAudio) → {Boolean}

Initializes the audio system.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `noAudio` | Boolean | Flag for the no-audio mode |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 38</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the audio system is available
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) initialize ()

Initializes the input system.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Input.js</a>, <a>line 11</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) initialize ()

Initializes the touch system.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TouchInput.js</a>, <a>line 11</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) initialize (width, height, type)

Initializes the graphics system.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.html) | The width of the game screen |
| `height` | [Number](Number.html) | The height of the game screen |
| `type` | [String](String.html) | The type of the renderer. 'canvas', 'webgl', or 'auto'. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 15</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) initialize () → {Boolean}

Initializes the audio system.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Html5Audio.js</a>, <a>line 40</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the audio system is available
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isAndroidChrome () → {Boolean}

Checks whether the browser is Android Chrome.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Utils.js</a>, <a>line 90</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the browser is Android Chrome
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isCancelled () → {Boolean}

Checks whether the right mouse button is just pressed.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TouchInput.js</a>, <a>line 140</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the right mouse button is just pressed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isClosed ()

Returns true if the window is completely closed (openness == 0).
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Window.js</a>, <a>line 296</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### isError () → {Boolean}

Checks whether a loading error has occurred.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 256</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if a loading error has occurred
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isError () → {Boolean}

Checks whether a loading error has occurred.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Html5Audio.js</a>, <a>line 232</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if a loading error has occurred
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isError () → {Boolean}

Checks whether a loading error has occurred.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 369</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if a loading error has occurred
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isFontLoaded (name) → {Boolean}

Checks whether the font file is loaded.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) | The face name of the font |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 486</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the font file is loaded
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isInsideCanvas (x, y) → {Boolean}

Checks whether the specified point is inside the game canvas area.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate on the canvas area |
| `y` | [Number](Number.html) | The y coordinate on the canvas area |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 616</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the specified point is inside the game canvas area
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isLongPressed () → {Boolean}

Checks whether the left mouse button or touchscreen is kept depressed.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TouchInput.js</a>, <a>line 129</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the left mouse button or touchscreen is long-pressed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isLongPressed (keyName) → {Boolean}

Checks whether a key is kept depressed.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.html) | The mapped name of the key |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Input.js</a>, <a>line 188</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the key is long-pressed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isMobileDevice () → {Boolean}

Checks whether the platform is a mobile device.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Utils.js</a>, <a>line 65</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the platform is a mobile device
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isMobileSafari () → {Boolean}

Checks whether the browser is Mobile Safari.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Utils.js</a>, <a>line 77</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the browser is Mobile Safari
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isMoved () → {Boolean}

Checks whether the mouse or a finger on the touchscreen is moved.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TouchInput.js</a>, <a>line 151</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the mouse or a finger on the touchscreen is moved
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isNwjs () → {Boolean}

Checks whether the platform is NW.js.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Utils.js</a>, <a>line 54</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the platform is NW.js
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isOpen ()

Returns true if the window is completely open (openness == 255).
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Window.js</a>, <a>line 287</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) isOptionValid (name) → {Boolean}

Checks whether the option is in the query string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) | The option name |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Utils.js</a>, <a>line 33</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the option is in the query string
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isPlaying () → {Boolean}

Checks whether the audio is playing.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Html5Audio.js</a>, <a>line 243</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the audio is playing
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isPlaying () → {Boolean}

Checks whether the audio is playing.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 379</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the audio is playing
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isPressed () → {Boolean}

Checks whether the mouse button or touchscreen is currently pressed down.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TouchInput.js</a>, <a>line 92</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the mouse button or touchscreen is pressed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isPressed (keyName) → {Boolean}

Checks whether a key is currently pressed down.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.html) | The mapped name of the key |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Input.js</a>, <a>line 137</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the key is pressed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isReady () → {Boolean|Boolean}

Checks whether the tileset is ready to render.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Tilemap.js</a>, <a>line 168</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

*
<dl>
                        <dt> Type </dt>
                        <dd>
                            <span>Boolean</span>
                        </dd>
                    </dl>
* True if the tilemap is ready
<dl>
                        <dt> Type </dt>
                        <dd>
                            <span>Boolean</span>
                        </dd>
                    </dl>

#### isReady () → {Boolean}

Checks whether the bitmap is ready to render.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 246</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the bitmap is ready to render
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isReady () → {Boolean}

Checks whether the audio data is ready to play.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Html5Audio.js</a>, <a>line 221</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the audio data is ready to play
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isReady () → {Boolean}

Checks whether the audio data is ready to play.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 359</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the audio data is ready to play
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isReleased () → {Boolean}

Checks whether the left mouse button or touchscreen is released.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TouchInput.js</a>, <a>line 162</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the mouse button or touchscreen is released
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isRepeated (keyName) → {Boolean}

Checks whether a key is just pressed or a key repeat occurred.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.html) | The mapped name of the key |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Input.js</a>, <a>line 169</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the key is repeated
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isRepeated () → {Boolean}

Checks whether the left mouse button or touchscreen is just pressed or a pseudo key repeat occurred.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TouchInput.js</a>, <a>line 114</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the mouse button or touchscreen is repeated
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isSupportPassiveEvent () → {Boolean}

Test this browser support passive event feature
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Utils.js</a>, <a>line 146</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

this browser support passive event or not
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isTriggered (keyName) → {Boolean}

Checks whether a key is just pressed.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.html) | The mapped name of the key |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Input.js</a>, <a>line 153</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the key is triggered
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isTriggered () → {Boolean}

Checks whether the left mouse button or touchscreen is just pressed.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TouchInput.js</a>, <a>line 103</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the mouse button or touchscreen is triggered
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isVideoPlaying () → {Boolean}

Checks whether the video is playing.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 543</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the video is playing
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isWebGL () → {Boolean}

Checks whether the renderer type is WebGL.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 183</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

True if the renderer type is WebGL
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) load (url)

Loads a image file and returns a new bitmap object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.html) | The image url of the texture |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 195</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

Bitmap

#### (static) loadFont (name, url)

Loads a font file.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) | The face name of the font |
| `url` | [String](String.html) | The url of the font file |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 468</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) makeDeepCopy (object) → {Object}

Makes a deep copy of the specified object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `object` | Object | The object to be copied |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/JsonEx.js</a>, <a>line 99</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The copied object
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### measureTextWidth (text) → {[Number](Number.html)}

Returns the width of the specified text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) | The text to be measured |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 699</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The width of the text in pixels
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### move (x, y, width, height)

Sets the x, y, width, and height all at once.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the window |
| `y` | [Number](Number.html) | The y coordinate of the window |
| `width` | [Number](Number.html) | The width of the window |
| `height` | [Number](Number.html) | The height of the window |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Window.js</a>, <a>line 268</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### move (x, y)

Sets the x and y at once.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the sprite |
| `y` | [Number](Number.html) | The y coordinate of the sprite |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Sprite.js</a>, <a>line 137</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### move (x, y, width, height)

Sets the x, y, width, and height all at once.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the tiling sprite |
| `y` | [Number](Number.html) | The y coordinate of the tiling sprite |
| `width` | [Number](Number.html) | The width of the tiling sprite |
| `height` | [Number](Number.html) | The height of the tiling sprite |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TilingSprite.js</a>, <a>line 106</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### move (x, y, width, height)

Sets the x, y, width, and height all at once.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the window layer |
| `y` | [Number](Number.html) | The y coordinate of the window layer |
| `width` | [Number](Number.html) | The width of the window layer |
| `height` | [Number](Number.html) | The height of the window layer |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WindowLayer.js</a>, <a>line 74</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) pageToCanvasX (x) → {[Number](Number.html)}

Converts an x coordinate on the page to the corresponding x coordinate on the canvas area.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate on the page to be converted |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 580</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The x coordinate on the canvas area
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) pageToCanvasY (y) → {[Number](Number.html)}

Converts a y coordinate on the page to the corresponding y coordinate on the canvas area.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.html) | The y coordinate on the page to be converted |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 598</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The y coordinate on the canvas area
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) parse (json) → {Object}

Parses a JSON string and reconstructs the corresponding object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `json` | [String](String.html) | The JSON string |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/JsonEx.js</a>, <a>line 54</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The reconstructed object
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### play (loop, offset)

Plays the audio.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `loop` | Boolean | Whether the audio data play in a loop |
| `offset` | [Number](Number.html) | The start position to play in seconds |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 389</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) play (loop, offset)

Plays the audio.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `loop` | Boolean | Whether the audio data play in a loop |
| `offset` | [Number](Number.html) | The start position to play in seconds |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Html5Audio.js</a>, <a>line 254</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) playVideo (src)

Starts playback of a video.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `src` | [String](String.html) |  |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 516</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) printError (name, message)

Displays the error text to the screen.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) | The name of the error |
| `message` | [String](String.html) | The message of the error |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 393</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) printLoadingError (url)

Displays the loading error text to the screen.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.html) | The url of the resource failed to load |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 352</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) printStackTrace ()

Shows the stacktrace of error.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 414</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### refresh ()

Forces to repaint the entire tilemap.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Tilemap.js</a>, <a>line 204</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### refresh ()

Forces to repaint the entire tilemap AND update bitmaps list if needed
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/ShaderTilemap.js</a>, <a>line 58</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### refresh ()

Forces to refresh the tileset
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Tilemap.js</a>, <a>line 213</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### removeChild (child) → {Object}

Removes a child from the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to remove |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Tilemap.js</a>, <a>line 950</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChild (child) → {Object}

Removes a child from the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to remove |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Sprite.js</a>, <a>line 565</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChild (child) → {Object}

Removes a child from the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to remove |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WindowLayer.js</a>, <a>line 282</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChild (child) → {Object}

Removes a child from the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to remove |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Window.js</a>, <a>line 672</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChild (child) → {Object}

Removes a child from the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to remove |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Stage.js</a>, <a>line 46</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChildAt (index) → {Object}

Removes a child from the specified index position.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) | The index to get the child from |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Stage.js</a>, <a>line 54</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChildAt (index) → {Object}

Removes a child from the specified index position.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) | The index to get the child from |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Sprite.js</a>, <a>line 573</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChildAt (index) → {Object}

Removes a child from the specified index position.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) | The index to get the child from |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Window.js</a>, <a>line 680</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChildAt (index) → {Object}

Removes a child from the specified index position.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) | The index to get the child from |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WindowLayer.js</a>, <a>line 290</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChildAt (index) → {Object}

Removes a child from the specified index position.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) | The index to get the child from |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Tilemap.js</a>, <a>line 958</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### (static) render (stage)

Renders the stage to the game screen.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stage` | [Stage](Stage.html) | The stage object to be rendered |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 156</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### renderCanvas (pixi)

PIXI render method

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pixi` | Object | renderer |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/ShaderTilemap.js</a>, <a>line 35</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### renderWebGL (pixi)

PIXI render method

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pixi` | Object | renderer |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/ShaderTilemap.js</a>, <a>line 47</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### reset ()

Clears the tone.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/ToneSprite.js</a>, <a>line 20</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### resize (width, height)

Resizes the bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.html) | The new width of the bitmap |
| `height` | [Number](Number.html) | The new height of the bitmap |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 419</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) rgbToCssColor (r, g, b) → {[String](String.html)}

Makes a CSS color string from RGB values.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.html) | The red value in the range (0, 255) |
| `g` | [Number](Number.html) | The green value in the range (0, 255) |
| `b` | [Number](Number.html) | The blue value in the range (0, 255) |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Utils.js</a>, <a>line 123</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

CSS color string
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### rotateHue (offset)

Rotates the hue of the entire bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `offset` | [Number](Number.html) | The hue offset in 360 degrees |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 738</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### seek ()

Gets the seek position of the audio.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 464</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) seek ()

Gets the seek position of the audio.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Html5Audio.js</a>, <a>line 333</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (style)

Sets the style of the text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `style` | object | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 21334</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the background color.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 14970</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the strength of the blurY.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 28034</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the strength of the blurX.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 28009</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the quality of the blur.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 27985</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the strength of the blur.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 27960</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the font.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | string |object | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 26191</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (frame)

Set the frame.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `frame` | [Rectangle](Rectangle.html) | The new frame to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 23295</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 27198</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the anchor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [PIXI.Point](PIXI.Point.html) |number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 26164</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (text)

Sets the text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | string | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 21366</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the quality of the blur.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 28212</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the matrix directly.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Array](Array.html).<number> | the value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 29029</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 27175</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (rotate)

Set the rotation

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `rotate` | number | The new rotation to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 23338</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Copies the point to the scale of the tiled image.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [PIXI.Point](PIXI.Point.html) | [PIXI.ObservablePoint](PIXI.ObservablePoint.html) | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 27137</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the texture to use for the displacement.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [PIXI.Texture](PIXI.Texture.html) | The texture to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 29151</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the strength of the blur.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 28186</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets autoUpdate property.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | enable auto update or not |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 23792</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the quality of the blur.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 28389</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the strength of the blur.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 28363</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the height of the bottom row.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | the value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 32453</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the amount of noise to apply.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 29369</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the tint the mesh uses.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 32024</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Copies the point to the position of the tiled image.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [PIXI.Point](PIXI.Point.html) | [PIXI.ObservablePoint](PIXI.ObservablePoint.html) | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 27160</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

setter for clampMargin

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | assigned value |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 27113</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the texture the mesh uses.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | Texture | The value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 31987</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the height of the text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 21305</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (fps)

Sets the min fps.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `fps` | number | value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24215</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the height of the top row.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | the value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 32423</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

sets texture value

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [PIXI.Texture](PIXI.Texture.html) | texture to be set |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 26739</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the width of the right column.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | the value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 32393</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the texture of the sprite.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [PIXI.Texture](PIXI.Texture.html) | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 19593</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the X component.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 13678</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the alignment

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | string | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 26136</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the width of the sprite by modifying the scale.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 19489</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the height of the sprite by modifying the scale.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 19515</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the textures.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Array](Array.html).<[PIXI.Texture](PIXI.Texture.html)> | The texture to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 26576</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the tint.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 26110</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the width of the left column.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | the value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 32363</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the Y component.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 13704</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the width of the container by modifying the scale.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 8629</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the rotation of the transform.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 9912</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the height of the container by modifying the scale.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 8660</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the height.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | the value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 32340</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the X position of the object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 9142</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the width of the text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 21275</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (val)

Sets the height.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `val` | number | The value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 15555</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | string | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 26228</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | the value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 32316</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Copies the anchor to the sprite.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 19544</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (val)

Sets the width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `val` | number | The value to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 15532</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the Y position of the object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 9166</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Copies the point to the position of the object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [PIXI.Point](PIXI.Point.html) | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 9218</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Copies the point to the scale of the object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [PIXI.Point](PIXI.Point.html) | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 9242</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Set the rotation of the transform.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 9596</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the tint of the sprite.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 19569</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Copies the point to the pivot of the object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [PIXI.Point](PIXI.Point.html) | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 9266</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Copies the point to the skew of the object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [PIXI.Point](PIXI.Point.html) | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 9290</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the rotation of the object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | number | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 9313</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Sets the mask.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [PIXI.Graphics](PIXI.Graphics.html) | [PIXI.Sprite](PIXI.Sprite.html) | The value to set to. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 9365</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### set (value)

Shallow copies the array to the filters of the object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Array](Array.html).<[PIXI.Filter](PIXI.Filter.html)> | The filters to set. |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 9398</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setBlack ()

Sets black to the color of the screen sprite.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/ScreenSprite.js</a>, <a>line 76</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setBlendColor (color)

Sets the blend color for the sprite.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.html) | The blend color [r, g, b, a] |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Sprite.js</a>, <a>line 181</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setColor (r, g, b)

Sets the color of the screen sprite by values.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.html) | The red value in the range (0, 255) |
| `g` | [Number](Number.html) | The green value in the range (0, 255) |
| `b` | [Number](Number.html) | The blue value in the range (0, 255) |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/ScreenSprite.js</a>, <a>line 94</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setColorTone (tone)

Sets the color tone for the sprite.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tone` | [Array](Array.html) | The color tone [r, g, b, gray] |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Sprite.js</a>, <a>line 207</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setCursorRect (x, y, width, height)

Sets the position of the command cursor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the cursor |
| `y` | [Number](Number.html) | The y coordinate of the cursor |
| `width` | [Number](Number.html) | The width of the cursor |
| `height` | [Number](Number.html) | The height of the cursor |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Window.js</a>, <a>line 305</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setData (width, height, data)

Sets the tilemap data.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.html) | The width of the map in number of tiles |
| `height` | [Number](Number.html) | The height of the map in number of tiles |
| `data` | [Array](Array.html) | The one dimensional array for the map data |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Tilemap.js</a>, <a>line 154</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) setEnableProgress ()

Sets whether the progress bar is enabled.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 243</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) setErrorMessage ()

Sets the error message.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 432</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setFrame (x, y, width, height)

Sets the rectagle of the bitmap that the sprite displays.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the frame |
| `y` | [Number](Number.html) | The y coordinate of the frame |
| `width` | [Number](Number.html) | The width of the frame |
| `height` | [Number](Number.html) | The height of the frame |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Sprite.js</a>, <a>line 149</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setFrame (x, y, width, height)

Specifies the region of the image that the tiling sprite will use.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the frame |
| `y` | [Number](Number.html) | The y coordinate of the frame |
| `width` | [Number](Number.html) | The width of the frame |
| `height` | [Number](Number.html) | The height of the frame |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TilingSprite.js</a>, <a>line 122</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) setLoadingImage ()

Sets the source of the "Now Loading" image.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 232</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) setMasterVolume (value)

Sets the master volume of the all audio.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.html) | Master volume (min: 0, max: 1) |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 87</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setTone (r, g, b, gray)

Sets the tone.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.html) | The red strength in the range (-255, 255) |
| `g` | [Number](Number.html) | The green strength in the range (-255, 255) |
| `b` | [Number](Number.html) | The blue strength in the range (-255, 255) |
| `gray` | [Number](Number.html) | The grayscale level in the range (0, 255) |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/ToneSprite.js</a>, <a>line 32</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setTone (r, g, b)

Changes the color of the background.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.html) | The red value in the range (-255, 255) |
| `g` | [Number](Number.html) | The green value in the range (-255, 255) |
| `b` | [Number](Number.html) | The blue value in the range (-255, 255) |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Window.js</a>, <a>line 329</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) setup (url)

Sets up the Html5 Audio.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.html) | The url of the audio file |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Html5Audio.js</a>, <a>line 21</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) setVideoVolume (value)

Sets volume of a video.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.html) |  |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 566</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setWhite ()

Sets white to the color of the screen sprite.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/ScreenSprite.js</a>, <a>line 85</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) showFps ()

Shows the FPSMeter element.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 442</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) snap (stage)

Takes a snapshot of the game screen and returns a new bitmap object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stage` | [Stage](Stage.html) | The stage object |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 214</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

Bitmap

#### (static) startLoading ()

Initializes the counter for displaying the "Now Loading" image.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 253</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) stop ()

Stops the audio.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Html5Audio.js</a>, <a>line 281</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### stop ()

Stops the audio.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WebAudio.js</a>, <a>line 410</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) stringify (object) → {[String](String.html)}

Converts an object to a JSON string with object information.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `object` | Object | The object to be converted |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/JsonEx.js</a>, <a>line 26</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The JSON string
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) tickEnd ()

Marks the end of each frame for FPSMeter.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 144</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) tickStart ()

Marks the beginning of each frame for FPSMeter.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 132</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### touch ()

touch the resource
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Bitmap.js</a>, <a>line 266</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) update ()

Updates the touch data.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TouchInput.js</a>, <a>line 68</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### update ()

Updates the window for each frame.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Window.js</a>, <a>line 252</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### update ()

Updates the tiling sprite for each frame.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/TilingSprite.js</a>, <a>line 93</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) update ()

Updates the input data.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Input.js</a>, <a>line 113</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### update ()

Updates the tilemap for each frame.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Tilemap.js</a>, <a>line 184</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### update ()

Updates the sprite for each frame.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Sprite.js</a>, <a>line 124</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### update ()

Updates the window layer for each frame.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/WindowLayer.js</a>, <a>line 90</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### update ()

Updates the weather for each frame.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Weather.js</a>, <a>line 50</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateBitmaps ()

Call after you update tileset
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/ShaderTilemap.js</a>, <a>line 71</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### (static) updateLoading ()

Increments the loading counter and displays the "Now Loading" image if necessary.
<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>rpg_core/Graphics.js</a>, <a>line 327</a>
                        </li>
                    </ul>
                </dd>
            </dl>

### Type Definitions

#### DecomposedDataUri

Typedef for decomposeDataUri return object.

##### Type:

* object

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `Media` | mediaType | type, eg. `image` |
| `Sub` | subType | type, eg. `png` |
| `Data` | encoding | encoding, eg. `base64` |
| `The` | data | actual data |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24493</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### FrameObject

##### Type:

* object

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `texture` | [PIXI.Texture](PIXI.Texture.html) | The [PIXI.Texture](PIXI.Texture.html) of the frame |
| `time` | number | the duration of the frame in ms |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 26265</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### Size

Typedef for Size object.

##### Type:

* object

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `Width` | width | component |
| `Height` | height | component |

<dl>
                <dt>Source:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>libs/pixi.js</a>, <a>line 24543</a>
                        </li>
                    </ul>
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
