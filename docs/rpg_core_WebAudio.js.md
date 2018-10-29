# Source: rpg_core/WebAudio.js

```
//-----------------------------------------------------------------------------
/**
 * The audio object of Web Audio API.
 *
 * @class WebAudio
 * @constructor
 * @param {String} url The url of the audio file
 */
function WebAudio() {
    this.initialize.apply(this, arguments);
}

WebAudio._standAlone = (function(top){
    return !top.ResourceHandler;
})(this);

WebAudio.prototype.initialize = function(url) {
    if (!WebAudio._initialized) {
        WebAudio.initialize();
    }
    this.clear();

    if(!WebAudio._standAlone){
        this._loader = ResourceHandler.createLoader(url, this._load.bind(this, url), function() {
            this._hasError = true;
        }.bind(this));
    }
    this._load(url);
    this._url = url;
};

WebAudio._masterVolume   = 1;
WebAudio._context        = null;
WebAudio._masterGainNode = null;
WebAudio._initialized    = false;
WebAudio._unlocked       = false;

/**
 * Initializes the audio system.
 *
 * @static
 * @method initialize
 * @param {Boolean} noAudio Flag for the no-audio mode
 * @return {Boolean} True if the audio system is available
 */
WebAudio.initialize = function(noAudio) {
    if (!this._initialized) {
        if (!noAudio) {
            this._createContext();
            this._detectCodecs();
            this._createMasterGainNode();
            this._setupEventHandlers();
        }
        this._initialized = true;
    }
    return !!this._context;
};

/**
 * Checks whether the browser can play ogg files.
 *
 * @static
 * @method canPlayOgg
 * @return {Boolean} True if the browser can play ogg files
 */
WebAudio.canPlayOgg = function() {
    if (!this._initialized) {
        this.initialize();
    }
    return !!this._canPlayOgg;
};

/**
 * Checks whether the browser can play m4a files.
 *
 * @static
 * @method canPlayM4a
 * @return {Boolean} True if the browser can play m4a files
 */
WebAudio.canPlayM4a = function() {
    if (!this._initialized) {
        this.initialize();
    }
    return !!this._canPlayM4a;
};

/**
 * Sets the master volume of the all audio.
 *
 * @static
 * @method setMasterVolume
 * @param {Number} value Master volume (min: 0, max: 1)
 */
WebAudio.setMasterVolume = function(value) {
    this._masterVolume = value;
    if (this._masterGainNode) {
        this._masterGainNode.gain.setValueAtTime(this._masterVolume, this._context.currentTime);
    }
};

/**
 * @static
 * @method _createContext
 * @private
 */
WebAudio._createContext = function() {
    try {
        if (typeof AudioContext !== 'undefined') {
            this._context = new AudioContext();
        } else if (typeof webkitAudioContext !== 'undefined') {
            this._context = new webkitAudioContext();
        }
    } catch (e) {
        this._context = null;
    }
};

/**
 * @static
 * @method _detectCodecs
 * @private
 */
WebAudio._detectCodecs = function() {
    var audio = document.createElement('audio');
    if (audio.canPlayType) {
        this._canPlayOgg = audio.canPlayType('audio/ogg');
        this._canPlayM4a = audio.canPlayType('audio/mp4');
    }
};

/**
 * @static
 * @method _createMasterGainNode
 * @private
 */
WebAudio._createMasterGainNode = function() {
    var context = WebAudio._context;
    if (context) {
        this._masterGainNode = context.createGain();
        this._masterGainNode.gain.setValueAtTime(this._masterVolume, context.currentTime);
        this._masterGainNode.connect(context.destination);
    }
};

/**
 * @static
 * @method _setupEventHandlers
 * @private
 */
WebAudio._setupEventHandlers = function() {
    var resumeHandler = function() {
        var context = WebAudio._context;
        if (context && context.state === "suspended" && typeof context.resume === "function") {
            context.resume().then(function() {
                WebAudio._onTouchStart();
            })
        } else {
            WebAudio._onTouchStart();
        }
    };
    document.addEventListener("keydown", resumeHandler);
    document.addEventListener("mousedown", resumeHandler);
    document.addEventListener("touchend", resumeHandler);
    document.addEventListener('touchstart', this._onTouchStart.bind(this));
    document.addEventListener('visibilitychange', this._onVisibilityChange.bind(this));
};

/**
 * @static
 * @method _onTouchStart
 * @private
 */
WebAudio._onTouchStart = function() {
    var context = WebAudio._context;
    if (context && !this._unlocked) {
        // Unlock Web Audio on iOS
        var node = context.createBufferSource();
        node.start(0);
        this._unlocked = true;
    }
};

/**
 * @static
 * @method _onVisibilityChange
 * @private
 */
WebAudio._onVisibilityChange = function() {
    if (document.visibilityState === 'hidden') {
        this._onHide();
    } else {
        this._onShow();
    }
};

/**
 * @static
 * @method _onHide
 * @private
 */
WebAudio._onHide = function() {
    if (this._shouldMuteOnHide()) {
        this._fadeOut(1);
    }
};

/**
 * @static
 * @method _onShow
 * @private
 */
WebAudio._onShow = function() {
    if (this._shouldMuteOnHide()) {
        this._fadeIn(0.5);
    }
};

/**
 * @static
 * @method _shouldMuteOnHide
 * @private
 */
WebAudio._shouldMuteOnHide = function() {
    return Utils.isMobileDevice();
};

/**
 * @static
 * @method _fadeIn
 * @param {Number} duration
 * @private
 */
WebAudio._fadeIn = function(duration) {
    if (this._masterGainNode) {
        var gain = this._masterGainNode.gain;
        var currentTime = WebAudio._context.currentTime;
        gain.setValueAtTime(0, currentTime);
        gain.linearRampToValueAtTime(this._masterVolume, currentTime + duration);
    }
};

/**
 * @static
 * @method _fadeOut
 * @param {Number} duration
 * @private
 */
WebAudio._fadeOut = function(duration) {
    if (this._masterGainNode) {
        var gain = this._masterGainNode.gain;
        var currentTime = WebAudio._context.currentTime;
        gain.setValueAtTime(this._masterVolume, currentTime);
        gain.linearRampToValueAtTime(0, currentTime + duration);
    }
};

/**
 * Clears the audio data.
 *
 * @method clear
 */
WebAudio.prototype.clear = function() {
    this.stop();
    this._buffer = null;
    this._sourceNode = null;
    this._gainNode = null;
    this._pannerNode = null;
    this._partialArray = null;
    this._wholeArray = null;
    this._chunkGainRate = 5;
    this._chunkSize = 75 * 1024;
    this._loadedSize = 0;
    this._totalTime = 0;
    this._sampleRate = 0;
    this._loopStart = 0;
    this._loopLength = 0;
    this._startTime = 0;
    this._offset = 0;
    this._volume = 1;
    this._pitch = 1;
    this._pan = 0;
    this._endTimer = null;
    this._loadListeners = [];
    this._stopListeners = [];
    this._hasError = false;
    this._autoPlay = false;
};

/**
 * [read-only] The url of the audio file.
 *
 * @property url
 * @type String
 */
Object.defineProperty(WebAudio.prototype, 'url', {
    get: function() {
        return this._url;
    },
    configurable: true
});

/**
 * The volume of the audio.
 *
 * @property volume
 * @type Number
 */
Object.defineProperty(WebAudio.prototype, 'volume', {
    get: function() {
        return this._volume;
    },
    set: function(value) {
        this._volume = value;
        if (this._gainNode) {
            this._gainNode.gain.setValueAtTime(this._volume, WebAudio._context.currentTime);
        }
    },
    configurable: true
});

/**
 * The pitch of the audio.
 *
 * @property pitch
 * @type Number
 */
Object.defineProperty(WebAudio.prototype, 'pitch', {
    get: function() {
        return this._pitch;
    },
    set: function(value) {
        if (this._pitch !== value) {
            this._pitch = value;
            if (this.isPlaying()) {
                this.play(this._sourceNode.loop, 0);
            }
        }
    },
    configurable: true
});

/**
 * The pan of the audio.
 *
 * @property pan
 * @type Number
 */
Object.defineProperty(WebAudio.prototype, 'pan', {
    get: function() {
        return this._pan;
    },
    set: function(value) {
        this._pan = value;
        this._updatePanner();
    },
    configurable: true
});

/**
 * Checks whether the audio data is ready to play.
 *
 * @method isReady
 * @return {Boolean} True if the audio data is ready to play
 */
WebAudio.prototype.isReady = function() {
    return !!this._buffer && this._buffer.duration >= this._offset;
};

/**
 * Checks whether a loading error has occurred.
 *
 * @method isError
 * @return {Boolean} True if a loading error has occurred
 */
WebAudio.prototype.isError = function() {
    return this._hasError;
};

/**
 * Checks whether the audio is playing.
 *
 * @method isPlaying
 * @return {Boolean} True if the audio is playing
 */
WebAudio.prototype.isPlaying = function() {
    return !!this._sourceNode;
};

/**
 * Plays the audio.
 *
 * @method play
 * @param {Boolean} loop Whether the audio data play in a loop
 * @param {Number} offset The start position to play in seconds
 */
WebAudio.prototype.play = function(loop, offset) {
    this._offset = offset = offset || 0;
    if (this.isReady()) {
        this._startPlaying(loop, offset);
    } else if (WebAudio._context) {
        this._autoPlay = true;
        this.addLoadListener(function() {
            if (this._autoPlay) {
                this.play(loop, offset);
            }
        }.bind(this));
    }
};

/**
 * Stops the audio.
 *
 * @method stop
 */
WebAudio.prototype.stop = function() {
    this._autoPlay = false;
    this._removeEndTimer();
    this._removeNodes();
    if (this._stopListeners) {
        while (this._stopListeners.length > 0) {
            var listner = this._stopListeners.shift();
            listner();
        }
    }
};

/**
 * Performs the audio fade-in.
 *
 * @method fadeIn
 * @param {Number} duration Fade-in time in seconds
 */
WebAudio.prototype.fadeIn = function(duration) {
    if (this.isReady()) {
        if (this._gainNode) {
            var gain = this._gainNode.gain;
            var currentTime = WebAudio._context.currentTime;
            gain.setValueAtTime(0, currentTime);
            gain.linearRampToValueAtTime(this._volume, currentTime + duration);
        }
    } else if (this._autoPlay) {
        this.addLoadListener(function() {
            this.fadeIn(duration);
        }.bind(this));
    }
};

/**
 * Performs the audio fade-out.
 *
 * @method fadeOut
 * @param {Number} duration Fade-out time in seconds
 */
WebAudio.prototype.fadeOut = function(duration) {
    if (this._gainNode) {
        var gain = this._gainNode.gain;
        var currentTime = WebAudio._context.currentTime;
        gain.setValueAtTime(this._volume, currentTime);
        gain.linearRampToValueAtTime(0, currentTime + duration);
    }
    this._autoPlay = false;
};

/**
 * Gets the seek position of the audio.
 *
 * @method seek
 */
WebAudio.prototype.seek = function() {
    if (WebAudio._context) {
        var pos = (WebAudio._context.currentTime - this._startTime) * this._pitch;
        if (this._loopLength > 0) {
            while (pos >= this._loopStart + this._loopLength) {
                pos -= this._loopLength;
            }
        }
        return pos;
    } else {
        return 0;
    }
};

/**
 * Add a callback function that will be called when the audio data is loaded.
 *
 * @method addLoadListener
 * @param {Function} listner The callback function
 */
WebAudio.prototype.addLoadListener = function(listner) {
    this._loadListeners.push(listner);
};

/**
 * Add a callback function that will be called when the playback is stopped.
 *
 * @method addStopListener
 * @param {Function} listner The callback function
 */
WebAudio.prototype.addStopListener = function(listner) {
    this._stopListeners.push(listner);
};

/**
 * @method _load
 * @param {String} url
 * @private
 */
WebAudio.prototype._load = function(url) {
    if (WebAudio._context) {
        var xhr = new XMLHttpRequest();
        if(Decrypter.hasEncryptedAudio) url = Decrypter.extToEncryptExt(url);
        xhr.open('GET', url);
        if (typeof require === 'undefined') {
            xhr.setRequestHeader('Range', 'bytes=' + this._loadedSize + '-' + (this._loadedSize + this._chunkSize - 1));
        }
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
            if (xhr.status < 400) {
                this._onXhrLoad(xhr);
            }
        }.bind(this);
        xhr.onerror = this._loader || function(){this._hasError = true;}.bind(this);
        xhr.send();
    }
};

/**
 * @method _onXhrLoad
 * @param {XMLHttpRequest} xhr
 * @private
 */
WebAudio.prototype._onXhrLoad = function(xhr) {
    if (xhr.status === 206) {
        this._onPartialLoad(xhr);
    } else {
        this._onWholeLoad(xhr.response);
    }
};

/**
 * @method _onPartialLoad
 * @param {XMLHttpRequest} xhr
 * @private
 */
WebAudio.prototype._onPartialLoad = function(xhr) {
    var array = xhr.response;
    if (!this._partialArray) {
        this._partialArray = new Uint8Array(+xhr.getResponseHeader('Content-Range').split('/').pop());
        this._chunkSize *= this._chunkGainRate - 1;
    } else {
        this._chunkSize = this._partialArray.byteLength;
    }
    this._partialArray.set(new Uint8Array(array), this._loadedSize);
    this._loadedSize += array.byteLength;
    if (this._loadedSize < this._partialArray.byteLength) {
        array = this._partialArray.buffer.slice(0, this._loadedSize);
        this._load(this._url);
    } else {
        array = this._partialArray.buffer;
        this._partialArray = null;
    }
    if (Decrypter.hasEncryptedAudio) {
        array = Decrypter.decryptArrayBuffer(array);
    }
    this._readLoopComments(new Uint8Array(array));
    WebAudio._context.decodeAudioData(array, this._onDecode.bind(this));
};

/**
 * @method _onWholeLoad
 * @param {ArrayBuffer} array
 * @private
 */
WebAudio.prototype._onWholeLoad = function(array) {
    if (array) {
        if (Decrypter.hasEncryptedAudio) {
            array = Decrypter.decryptArrayBuffer(array);
        }
        this._readLoopComments(new Uint8Array(array));
        if (this._chunkSize < array.byteLength) {
            this._wholeArray = array;
            array = this._wholeArray.slice(0, this._chunkSize);
            this._chunkSize *= this._chunkGainRate;
        }
    } else if (this._chunkSize < this._wholeArray.byteLength) {
        array = this._wholeArray.slice(0, this._chunkSize);
        this._chunkSize = this._wholeArray.byteLength;
    } else {
        array = this._wholeArray;
        this._wholeArray = null;
    }
    WebAudio._context.decodeAudioData(array, this._onDecode.bind(this), function() {
        this._onWholeLoad();
    }.bind(this));
};

/**
 * @method _onDecode
 * @param {AudioBuffer} buffer
 * @private
 */
WebAudio.prototype._onDecode = function(buffer) {
    if (!this._buffer || this._buffer.length < buffer.length) {
        this._buffer = buffer;
        this._totalTime = buffer.duration;
        if (this.isPlaying()) {
            this._startPlaying(this._sourceNode.loop, this.seek());
        }
        if (this.isReady()) {
            this._onLoad();
        }
        if (this._wholeArray) {
            this._onWholeLoad();
        }
    }
};

/**
 * @method _startPlaying
 * @param {Boolean} loop
 * @param {Number} offset
 * @private
 */
WebAudio.prototype._startPlaying = function(loop, offset) {
    this._removeEndTimer();
    this._removeNodes();
    this._createNodes();
    this._connectNodes();
    this._sourceNode.loop = loop;
    this._sourceNode.start(0, offset);
    this._startTime = WebAudio._context.currentTime - offset / this._pitch;
    this._createEndTimer();
};

/**
 * @method _createNodes
 * @private
 */
WebAudio.prototype._createNodes = function() {
    var context = WebAudio._context;
    this._sourceNode = context.createBufferSource();
    this._sourceNode.buffer = this._buffer;
    if (this._buffer.duration > this._loopStart) {
        this._sourceNode.loopStart = this._loopStart;
        this._sourceNode.loopEnd = this._loopStart + this._loopLength;
    }
    this._sourceNode.playbackRate.setValueAtTime(this._pitch, context.currentTime);
    this._gainNode = context.createGain();
    this._gainNode.gain.setValueAtTime(this._volume, context.currentTime);
    this._pannerNode = context.createPanner();
    this._pannerNode.panningModel = 'equalpower';
    this._updatePanner();
};

/**
 * @method _connectNodes
 * @private
 */
WebAudio.prototype._connectNodes = function() {
    this._sourceNode.connect(this._gainNode);
    this._gainNode.connect(this._pannerNode);
    this._pannerNode.connect(WebAudio._masterGainNode);
};

/**
 * @method _removeNodes
 * @private
 */
WebAudio.prototype._removeNodes = function() {
    if (this._sourceNode) {
        this._sourceNode.stop(0);
        this._sourceNode = null;
        this._gainNode = null;
        this._pannerNode = null;
    }
};

/**
 * @method _createEndTimer
 * @private
 */
WebAudio.prototype._createEndTimer = function() {
    if (this._sourceNode && !this._sourceNode.loop) {
        var endTime = this._startTime + this._totalTime / this._pitch;
        var delay =  endTime - WebAudio._context.currentTime;
        this._endTimer = setTimeout(function() {
            this.stop();
        }.bind(this), delay * 1000);
    }
};

/**
 * @method _removeEndTimer
 * @private
 */
WebAudio.prototype._removeEndTimer = function() {
    if (this._endTimer) {
        clearTimeout(this._endTimer);
        this._endTimer = null;
    }
};

/**
 * @method _updatePanner
 * @private
 */
WebAudio.prototype._updatePanner = function() {
    if (this._pannerNode) {
        var x = this._pan;
        var z = 1 - Math.abs(x);
        this._pannerNode.setPosition(x, 0, z);
    }
};

/**
 * @method _onLoad
 * @private
 */
WebAudio.prototype._onLoad = function() {
    while (this._loadListeners.length > 0) {
        var listner = this._loadListeners.shift();
        listner();
    }
};

/**
 * @method _readLoopComments
 * @param {Uint8Array} array
 * @private
 */
WebAudio.prototype._readLoopComments = function(array) {
    if (this._sampleRate === 0) {
        this._readOgg(array);
        this._readMp4(array);
        if (this._loopLength > 0 && this._sampleRate > 0) {
            this._loopStart /= this._sampleRate;
            this._loopLength /= this._sampleRate;
        }
    }
};

/**
 * @method _readOgg
 * @param {Uint8Array} array
 * @private
 */
WebAudio.prototype._readOgg = function(array) {
    var index = 0;
    while (index < array.length) {
        if (this._readFourCharacters(array, index) === 'OggS') {
            index += 26;
            var vorbisHeaderFound = false;
            var numSegments = array[index++];
            var segments = [];
            for (var i = 0; i < numSegments; i++) {
                segments.push(array[index++]);
            }
            for (i = 0; i < numSegments; i++) {
                if (this._readFourCharacters(array, index + 1) === 'vorb') {
                    var headerType = array[index];
                    if (headerType === 1) {
                        this._sampleRate = this._readLittleEndian(array, index + 12);
                    } else if (headerType === 3) {
                        var size = 0;
                        for (; i < numSegments; i++) {
                            size += segments[i];
                            if (segments[i] < 255) {
                                break;
                            }
                        }
                        this._readMetaData(array, index, size);
                    }
                    vorbisHeaderFound = true;
                }
                index += segments[i];
            }
            if (!vorbisHeaderFound) {
                break;
            }
        } else {
            break;
        }
    }
};

/**
 * @method _readMp4
 * @param {Uint8Array} array
 * @private
 */
WebAudio.prototype._readMp4 = function(array) {
    if (this._readFourCharacters(array, 4) === 'ftyp') {
        var index = 0;
        while (index < array.length) {
            var size = this._readBigEndian(array, index);
            var name = this._readFourCharacters(array, index + 4);
            if (name === 'moov') {
                index += 8;
            } else {
                if (name === 'mvhd') {
                    this._sampleRate = this._readBigEndian(array, index + 20);
                }
                if (name === 'udta' || name === 'meta') {
                    this._readMetaData(array, index, size);
                }
                index += size;
                if (size <= 1) {
                    break;
                }
            }
        }
    }
};

/**
 * @method _readMetaData
 * @param {Uint8Array} array
 * @param {Number} index
 * @param {Number} size
 * @private
 */
WebAudio.prototype._readMetaData = function(array, index, size) {
    for (var i = index; i < index + size - 10; i++) {
        if (this._readFourCharacters(array, i) === 'LOOP') {
            var text = '';
            while (array[i] > 0) {
                text += String.fromCharCode(array[i++]);
            }
            if (text.match(/LOOPSTART=([0-9]+)/)) {
                this._loopStart = parseInt(RegExp.$1);
            }
            if (text.match(/LOOPLENGTH=([0-9]+)/)) {
                this._loopLength = parseInt(RegExp.$1);
            }
            if (text == 'LOOPSTART' || text == 'LOOPLENGTH') {
                var text2 = '';
                i += 16;
                while (array[i] > 0) {
                    text2 += String.fromCharCode(array[i++]);
                }
                if (text == 'LOOPSTART') {
                    this._loopStart = parseInt(text2);
                } else {
                    this._loopLength = parseInt(text2);
                }
            }
        }
    }
};

/**
 * @method _readLittleEndian
 * @param {Uint8Array} array
 * @param {Number} index
 * @private
 */
WebAudio.prototype._readLittleEndian = function(array, index) {
    return (array[index + 3] * 0x1000000 + array[index + 2] * 0x10000 +
            array[index + 1] * 0x100 + array[index + 0]);
};

/**
 * @method _readBigEndian
 * @param {Uint8Array} array
 * @param {Number} index
 * @private
 */
WebAudio.prototype._readBigEndian = function(array, index) {
    return (array[index + 0] * 0x1000000 + array[index + 1] * 0x10000 +
            array[index + 2] * 0x100 + array[index + 3]);
};

/**
 * @method _readFourCharacters
 * @param {Uint8Array} array
 * @param {Number} index
 * @private
 */
WebAudio.prototype._readFourCharacters = function(array, index) {
    var string = '';
    for (var i = 0; i < 4; i++) {
        string += String.fromCharCode(array[index + i]);
    }
    return string;
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
