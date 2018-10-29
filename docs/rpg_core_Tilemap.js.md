# Source: rpg_core/Tilemap.js

```
//-----------------------------------------------------------------------------
/**
 * The tilemap which displays 2D tile-based game map.
 *
 * @class Tilemap
 * @constructor
 */
function Tilemap() {
    this.initialize.apply(this, arguments);
}

Tilemap.prototype = Object.create(PIXI.Container.prototype);
Tilemap.prototype.constructor = Tilemap;

Tilemap.prototype.initialize = function() {
    PIXI.Container.call(this);

    this._margin = 20;
    this._width = Graphics.width + this._margin * 2;
    this._height = Graphics.height + this._margin * 2;
    this._tileWidth = 48;
    this._tileHeight = 48;
    this._mapWidth = 0;
    this._mapHeight = 0;
    this._mapData = null;
    this._layerWidth = 0;
    this._layerHeight = 0;
    this._lastTiles = [];

    /**
     * The bitmaps used as a tileset.
     *
     * @property bitmaps
     * @type Array
     */
    this.bitmaps = [];

    /**
     * The origin point of the tilemap for scrolling.
     *
     * @property origin
     * @type Point
     */
    this.origin = new Point();

    /**
     * The tileset flags.
     *
     * @property flags
     * @type Array
     */
    this.flags = [];

    /**
     * The animation count for autotiles.
     *
     * @property animationCount
     * @type Number
     */
    this.animationCount = 0;

    /**
     * Whether the tilemap loops horizontal.
     *
     * @property horizontalWrap
     * @type Boolean
     */
    this.horizontalWrap = false;

    /**
     * Whether the tilemap loops vertical.
     *
     * @property verticalWrap
     * @type Boolean
     */
    this.verticalWrap = false;

    this._createLayers();
    this.refresh();
};

/**
 * The width of the screen in pixels.
 *
 * @property width
 * @type Number
 */
Object.defineProperty(Tilemap.prototype, 'width', {
    get: function() {
        return this._width;
    },
    set: function(value) {
        if (this._width !== value) {
            this._width = value;
            this._createLayers();
        }
    }
});

/**
 * The height of the screen in pixels.
 *
 * @property height
 * @type Number
 */
Object.defineProperty(Tilemap.prototype, 'height', {
    get: function() {
        return this._height;
    },
    set: function(value) {
        if (this._height !== value) {
            this._height = value;
            this._createLayers();
        }
    }
});

/**
 * The width of a tile in pixels.
 *
 * @property tileWidth
 * @type Number
 */
Object.defineProperty(Tilemap.prototype, 'tileWidth', {
    get: function() {
        return this._tileWidth;
    },
    set: function(value) {
        if (this._tileWidth !== value) {
            this._tileWidth = value;
            this._createLayers();
        }
    }
});

/**
 * The height of a tile in pixels.
 *
 * @property tileHeight
 * @type Number
 */
Object.defineProperty(Tilemap.prototype, 'tileHeight', {
    get: function() {
        return this._tileHeight;
    },
    set: function(value) {
        if (this._tileHeight !== value) {
            this._tileHeight = value;
            this._createLayers();
        }
    }
});

/**
 * Sets the tilemap data.
 *
 * @method setData
 * @param {Number} width The width of the map in number of tiles
 * @param {Number} height The height of the map in number of tiles
 * @param {Array} data The one dimensional array for the map data
 */
Tilemap.prototype.setData = function(width, height, data) {
    this._mapWidth = width;
    this._mapHeight = height;
    this._mapData = data;
};

/**
 * Checks whether the tileset is ready to render.
 *
 * @method isReady
 * @type Boolean
 * @return {Boolean} True if the tilemap is ready
 */
Tilemap.prototype.isReady = function() {
    for (var i = 0; i < this.bitmaps.length; i++) {
        if (this.bitmaps[i] && !this.bitmaps[i].isReady()) {
            return false;
        }
    }
    return true;
};

/**
 * Updates the tilemap for each frame.
 *
 * @method update
 */
Tilemap.prototype.update = function() {
    this.animationCount++;
    this.animationFrame = Math.floor(this.animationCount / 30);
    this.children.forEach(function(child) {
        if (child.update) {
            child.update();
        }
    });
    for (var i=0; i<this.bitmaps.length;i++) {
        if (this.bitmaps[i]) {
            this.bitmaps[i].touch();
        }
    }
};

/**
 * Forces to repaint the entire tilemap.
 *
 * @method refresh
 */
Tilemap.prototype.refresh = function() {
    this._lastTiles.length = 0;
};

/**
 * Forces to refresh the tileset
 *
 * @method refresh
 */
Tilemap.prototype.refreshTileset = function() {

};

/**
 * @method updateTransform
 * @private
 */
Tilemap.prototype.updateTransform = function() {
    var ox = Math.floor(this.origin.x);
    var oy = Math.floor(this.origin.y);
    var startX = Math.floor((ox - this._margin) / this._tileWidth);
    var startY = Math.floor((oy - this._margin) / this._tileHeight);
    this._updateLayerPositions(startX, startY);
    if (this._needsRepaint || this._lastAnimationFrame !== this.animationFrame ||
        this._lastStartX !== startX || this._lastStartY !== startY) {
        this._frameUpdated = this._lastAnimationFrame !== this.animationFrame;
        this._lastAnimationFrame = this.animationFrame;
        this._lastStartX = startX;
        this._lastStartY = startY;
        this._paintAllTiles(startX, startY);
        this._needsRepaint = false;
    }
    this._sortChildren();
    PIXI.Container.prototype.updateTransform.call(this);
};

/**
 * @method _createLayers
 * @private
 */
Tilemap.prototype._createLayers = function() {
    var width = this._width;
    var height = this._height;
    var margin = this._margin;
    var tileCols = Math.ceil(width / this._tileWidth) + 1;
    var tileRows = Math.ceil(height / this._tileHeight) + 1;
    var layerWidth = tileCols * this._tileWidth;
    var layerHeight = tileRows * this._tileHeight;
    this._lowerBitmap = new Bitmap(layerWidth, layerHeight);
    this._upperBitmap = new Bitmap(layerWidth, layerHeight);
    this._layerWidth = layerWidth;
    this._layerHeight = layerHeight;

    /*
     * Z coordinate:
     *
     * 0 : Lower tiles
     * 1 : Lower characters
     * 3 : Normal characters
     * 4 : Upper tiles
     * 5 : Upper characters
     * 6 : Airship shadow
     * 7 : Balloon
     * 8 : Animation
     * 9 : Destination
     */

    this._lowerLayer = new Sprite();
    this._lowerLayer.move(-margin, -margin, width, height);
    this._lowerLayer.z = 0;

    this._upperLayer = new Sprite();
    this._upperLayer.move(-margin, -margin, width, height);
    this._upperLayer.z = 4;

    for (var i = 0; i < 4; i++) {
        this._lowerLayer.addChild(new Sprite(this._lowerBitmap));
        this._upperLayer.addChild(new Sprite(this._upperBitmap));
    }

    this.addChild(this._lowerLayer);
    this.addChild(this._upperLayer);
};

/**
 * @method _updateLayerPositions
 * @param {Number} startX
 * @param {Number} startY
 * @private
 */
Tilemap.prototype._updateLayerPositions = function(startX, startY) {
    var m = this._margin;
    var ox = Math.floor(this.origin.x);
    var oy = Math.floor(this.origin.y);
    var x2 = (ox - m).mod(this._layerWidth);
    var y2 = (oy - m).mod(this._layerHeight);
    var w1 = this._layerWidth - x2;
    var h1 = this._layerHeight - y2;
    var w2 = this._width - w1;
    var h2 = this._height - h1;

    for (var i = 0; i < 2; i++) {
        var children;
        if (i === 0) {
            children = this._lowerLayer.children;
        } else {
            children = this._upperLayer.children;
        }
        children[0].move(0, 0, w1, h1);
        children[0].setFrame(x2, y2, w1, h1);
        children[1].move(w1, 0, w2, h1);
        children[1].setFrame(0, y2, w2, h1);
        children[2].move(0, h1, w1, h2);
        children[2].setFrame(x2, 0, w1, h2);
        children[3].move(w1, h1, w2, h2);
        children[3].setFrame(0, 0, w2, h2);
    }
};

/**
 * @method _paintAllTiles
 * @param {Number} startX
 * @param {Number} startY
 * @private
 */
Tilemap.prototype._paintAllTiles = function(startX, startY) {
    var tileCols = Math.ceil(this._width / this._tileWidth) + 1;
    var tileRows = Math.ceil(this._height / this._tileHeight) + 1;
    for (var y = 0; y < tileRows; y++) {
        for (var x = 0; x < tileCols; x++) {
            this._paintTiles(startX, startY, x, y);
        }
    }
};

/**
 * @method _paintTiles
 * @param {Number} startX
 * @param {Number} startY
 * @param {Number} x
 * @param {Number} y
 * @private
 */
Tilemap.prototype._paintTiles = function(startX, startY, x, y) {
    var tableEdgeVirtualId = 10000;
    var mx = startX + x;
    var my = startY + y;
    var dx = (mx * this._tileWidth).mod(this._layerWidth);
    var dy = (my * this._tileHeight).mod(this._layerHeight);
    var lx = dx / this._tileWidth;
    var ly = dy / this._tileHeight;
    var tileId0 = this._readMapData(mx, my, 0);
    var tileId1 = this._readMapData(mx, my, 1);
    var tileId2 = this._readMapData(mx, my, 2);
    var tileId3 = this._readMapData(mx, my, 3);
    var shadowBits = this._readMapData(mx, my, 4);
    var upperTileId1 = this._readMapData(mx, my - 1, 1);
    var lowerTiles = [];
    var upperTiles = [];

    if (this._isHigherTile(tileId0)) {
        upperTiles.push(tileId0);
    } else {
        lowerTiles.push(tileId0);
    }
    if (this._isHigherTile(tileId1)) {
        upperTiles.push(tileId1);
    } else {
        lowerTiles.push(tileId1);
    }

    lowerTiles.push(-shadowBits);

    if (this._isTableTile(upperTileId1) && !this._isTableTile(tileId1)) {
        if (!Tilemap.isShadowingTile(tileId0)) {
            lowerTiles.push(tableEdgeVirtualId + upperTileId1);
        }
    }

    if (this._isOverpassPosition(mx, my)) {
        upperTiles.push(tileId2);
        upperTiles.push(tileId3);
    } else {
        if (this._isHigherTile(tileId2)) {
            upperTiles.push(tileId2);
        } else {
            lowerTiles.push(tileId2);
        }
        if (this._isHigherTile(tileId3)) {
            upperTiles.push(tileId3);
        } else {
            lowerTiles.push(tileId3);
        }
    }

    var lastLowerTiles = this._readLastTiles(0, lx, ly);
    if (!lowerTiles.equals(lastLowerTiles) ||
            (Tilemap.isTileA1(tileId0) && this._frameUpdated)) {
        this._lowerBitmap.clearRect(dx, dy, this._tileWidth, this._tileHeight);
        for (var i = 0; i < lowerTiles.length; i++) {
            var lowerTileId = lowerTiles[i];
            if (lowerTileId < 0) {
                this._drawShadow(this._lowerBitmap, shadowBits, dx, dy);
            } else if (lowerTileId >= tableEdgeVirtualId) {
                this._drawTableEdge(this._lowerBitmap, upperTileId1, dx, dy);
            } else {
                this._drawTile(this._lowerBitmap, lowerTileId, dx, dy);
            }
        }
        this._writeLastTiles(0, lx, ly, lowerTiles);
    }

    var lastUpperTiles = this._readLastTiles(1, lx, ly);
    if (!upperTiles.equals(lastUpperTiles)) {
        this._upperBitmap.clearRect(dx, dy, this._tileWidth, this._tileHeight);
        for (var j = 0; j < upperTiles.length; j++) {
            this._drawTile(this._upperBitmap, upperTiles[j], dx, dy);
        }
        this._writeLastTiles(1, lx, ly, upperTiles);
    }
};

/**
 * @method _readLastTiles
 * @param {Number} i
 * @param {Number} x
 * @param {Number} y
 * @private
 */
Tilemap.prototype._readLastTiles = function(i, x, y) {
    var array1 = this._lastTiles[i];
    if (array1) {
        var array2 = array1[y];
        if (array2) {
            var tiles = array2[x];
            if (tiles) {
                return tiles;
            }
        }
    }
    return [];
};

/**
 * @method _writeLastTiles
 * @param {Number} i
 * @param {Number} x
 * @param {Number} y
 * @param {Array} tiles
 * @private
 */
Tilemap.prototype._writeLastTiles = function(i, x, y, tiles) {
    var array1 = this._lastTiles[i];
    if (!array1) {
        array1 = this._lastTiles[i] = [];
    }
    var array2 = array1[y];
    if (!array2) {
        array2 = array1[y] = [];
    }
    array2[x] = tiles;
};

/**
 * @method _drawTile
 * @param {Bitmap} bitmap
 * @param {Number} tileId
 * @param {Number} dx
 * @param {Number} dy
 * @private
 */
Tilemap.prototype._drawTile = function(bitmap, tileId, dx, dy) {
    if (Tilemap.isVisibleTile(tileId)) {
        if (Tilemap.isAutotile(tileId)) {
            this._drawAutotile(bitmap, tileId, dx, dy);
        } else {
            this._drawNormalTile(bitmap, tileId, dx, dy);
        }
    }
};

/**
 * @method _drawNormalTile
 * @param {Bitmap} bitmap
 * @param {Number} tileId
 * @param {Number} dx
 * @param {Number} dy
 * @private
 */
Tilemap.prototype._drawNormalTile = function(bitmap, tileId, dx, dy) {
    var setNumber = 0;

    if (Tilemap.isTileA5(tileId)) {
        setNumber = 4;
    } else {
        setNumber = 5 + Math.floor(tileId / 256);
    }

    var w = this._tileWidth;
    var h = this._tileHeight;
    var sx = (Math.floor(tileId / 128) % 2 * 8 + tileId % 8) * w;
    var sy = (Math.floor(tileId % 256 / 8) % 16) * h;

    var source = this.bitmaps[setNumber];
    if (source) {
        bitmap.bltImage(source, sx, sy, w, h, dx, dy, w, h);
    }
};

/**
 * @method _drawAutotile
 * @param {Bitmap} bitmap
 * @param {Number} tileId
 * @param {Number} dx
 * @param {Number} dy
 * @private
 */
Tilemap.prototype._drawAutotile = function(bitmap, tileId, dx, dy) {
    var autotileTable = Tilemap.FLOOR_AUTOTILE_TABLE;
    var kind = Tilemap.getAutotileKind(tileId);
    var shape = Tilemap.getAutotileShape(tileId);
    var tx = kind % 8;
    var ty = Math.floor(kind / 8);
    var bx = 0;
    var by = 0;
    var setNumber = 0;
    var isTable = false;

    if (Tilemap.isTileA1(tileId)) {
        var waterSurfaceIndex = [0, 1, 2, 1][this.animationFrame % 4];
        setNumber = 0;
        if (kind === 0) {
            bx = waterSurfaceIndex * 2;
            by = 0;
        } else if (kind === 1) {
            bx = waterSurfaceIndex * 2;
            by = 3;
        } else if (kind === 2) {
            bx = 6;
            by = 0;
        } else if (kind === 3) {
            bx = 6;
            by = 3;
        } else {
            bx = Math.floor(tx / 4) * 8;
            by = ty * 6 + Math.floor(tx / 2) % 2 * 3;
            if (kind % 2 === 0) {
                bx += waterSurfaceIndex * 2;
            }
            else {
                bx += 6;
                autotileTable = Tilemap.WATERFALL_AUTOTILE_TABLE;
                by += this.animationFrame % 3;
            }
        }
    } else if (Tilemap.isTileA2(tileId)) {
        setNumber = 1;
        bx = tx * 2;
        by = (ty - 2) * 3;
        isTable = this._isTableTile(tileId);
    } else if (Tilemap.isTileA3(tileId)) {
        setNumber = 2;
        bx = tx * 2;
        by = (ty - 6) * 2;
        autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
    } else if (Tilemap.isTileA4(tileId)) {
        setNumber = 3;
        bx = tx * 2;
        by = Math.floor((ty - 10) * 2.5 + (ty % 2 === 1 ? 0.5 : 0));
        if (ty % 2 === 1) {
            autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
        }
    }

    var table = autotileTable[shape];
    var source = this.bitmaps[setNumber];

    if (table && source) {
        var w1 = this._tileWidth / 2;
        var h1 = this._tileHeight / 2;
        for (var i = 0; i < 4; i++) {
            var qsx = table[i][0];
            var qsy = table[i][1];
            var sx1 = (bx * 2 + qsx) * w1;
            var sy1 = (by * 2 + qsy) * h1;
            var dx1 = dx + (i % 2) * w1;
            var dy1 = dy + Math.floor(i / 2) * h1;
            if (isTable && (qsy === 1 || qsy === 5)) {
                var qsx2 = qsx;
                var qsy2 = 3;
                if (qsy === 1) {
                    qsx2 = [0,3,2,1][qsx];
                }
                var sx2 = (bx * 2 + qsx2) * w1;
                var sy2 = (by * 2 + qsy2) * h1;
                bitmap.bltImage(source, sx2, sy2, w1, h1, dx1, dy1, w1, h1);
                dy1 += h1/2;
                bitmap.bltImage(source, sx1, sy1, w1, h1/2, dx1, dy1, w1, h1/2);
            } else {
                bitmap.bltImage(source, sx1, sy1, w1, h1, dx1, dy1, w1, h1);
            }
        }
    }
};

/**
 * @method _drawTableEdge
 * @param {Bitmap} bitmap
 * @param {Number} tileId
 * @param {Number} dx
 * @param {Number} dy
 * @private
 */
Tilemap.prototype._drawTableEdge = function(bitmap, tileId, dx, dy) {
    if (Tilemap.isTileA2(tileId)) {
        var autotileTable = Tilemap.FLOOR_AUTOTILE_TABLE;
        var kind = Tilemap.getAutotileKind(tileId);
        var shape = Tilemap.getAutotileShape(tileId);
        var tx = kind % 8;
        var ty = Math.floor(kind / 8);
        var setNumber = 1;
        var bx = tx * 2;
        var by = (ty - 2) * 3;
        var table = autotileTable[shape];

        if (table) {
            var source = this.bitmaps[setNumber];
            var w1 = this._tileWidth / 2;
            var h1 = this._tileHeight / 2;
            for (var i = 0; i < 2; i++) {
                var qsx = table[2 + i][0];
                var qsy = table[2 + i][1];
                var sx1 = (bx * 2 + qsx) * w1;
                var sy1 = (by * 2 + qsy) * h1 + h1/2;
                var dx1 = dx + (i % 2) * w1;
                var dy1 = dy + Math.floor(i / 2) * h1;
                bitmap.bltImage(source, sx1, sy1, w1, h1/2, dx1, dy1, w1, h1/2);
            }
        }
    }
};

/**
 * @method _drawShadow
 * @param {Bitmap} bitmap
 * @param {Number} shadowBits
 * @param {Number} dx
 * @param {Number} dy
 * @private
 */
Tilemap.prototype._drawShadow = function(bitmap, shadowBits, dx, dy) {
    if (shadowBits & 0x0f) {
        var w1 = this._tileWidth / 2;
        var h1 = this._tileHeight / 2;
        var color = 'rgba(0,0,0,0.5)';
        for (var i = 0; i < 4; i++) {
            if (shadowBits & (1 << i)) {
                var dx1 = dx + (i % 2) * w1;
                var dy1 = dy + Math.floor(i / 2) * h1;
                bitmap.fillRect(dx1, dy1, w1, h1, color);
            }
        }
    }
};

/**
 * @method _readMapData
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number}
 * @private
 */
Tilemap.prototype._readMapData = function(x, y, z) {
    if (this._mapData) {
        var width = this._mapWidth;
        var height = this._mapHeight;
        if (this.horizontalWrap) {
            x = x.mod(width);
        }
        if (this.verticalWrap) {
            y = y.mod(height);
        }
        if (x >= 0 && x < width && y >= 0 && y < height) {
            return this._mapData[(z * height + y) * width + x] || 0;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
};

/**
 * @method _isHigherTile
 * @param {Number} tileId
 * @return {Boolean}
 * @private
 */
Tilemap.prototype._isHigherTile = function(tileId) {
    return this.flags[tileId] & 0x10;
};

/**
 * @method _isTableTile
 * @param {Number} tileId
 * @return {Boolean}
 * @private
 */
Tilemap.prototype._isTableTile = function(tileId) {
    return Tilemap.isTileA2(tileId) && (this.flags[tileId] & 0x80);
};

/**
 * @method _isOverpassPosition
 * @param {Number} mx
 * @param {Number} my
 * @return {Boolean}
 * @private
 */
Tilemap.prototype._isOverpassPosition = function(mx, my) {
    return false;
};

/**
 * @method _sortChildren
 * @private
 */
Tilemap.prototype._sortChildren = function() {
    this.children.sort(this._compareChildOrder.bind(this));
};

/**
 * @method _compareChildOrder
 * @param {Object} a
 * @param {Object} b
 * @private
 */
Tilemap.prototype._compareChildOrder = function(a, b) {
    if (a.z !== b.z) {
        return a.z - b.z;
    } else if (a.y !== b.y) {
        return a.y - b.y;
    } else {
        return a.spriteId - b.spriteId;
    }
};

// Tile type checkers

Tilemap.TILE_ID_B      = 0;
Tilemap.TILE_ID_C      = 256;
Tilemap.TILE_ID_D      = 512;
Tilemap.TILE_ID_E      = 768;
Tilemap.TILE_ID_A5     = 1536;
Tilemap.TILE_ID_A1     = 2048;
Tilemap.TILE_ID_A2     = 2816;
Tilemap.TILE_ID_A3     = 4352;
Tilemap.TILE_ID_A4     = 5888;
Tilemap.TILE_ID_MAX    = 8192;

Tilemap.isVisibleTile = function(tileId) {
    return tileId > 0 && tileId < this.TILE_ID_MAX;
};

Tilemap.isAutotile = function(tileId) {
    return tileId >= this.TILE_ID_A1;
};

Tilemap.getAutotileKind = function(tileId) {
    return Math.floor((tileId - this.TILE_ID_A1) / 48);
};

Tilemap.getAutotileShape = function(tileId) {
    return (tileId - this.TILE_ID_A1) % 48;
};

Tilemap.makeAutotileId = function(kind, shape) {
    return this.TILE_ID_A1 + kind * 48 + shape;
};

Tilemap.isSameKindTile = function(tileID1, tileID2) {
    if (this.isAutotile(tileID1) && this.isAutotile(tileID2)) {
        return this.getAutotileKind(tileID1) === this.getAutotileKind(tileID2);
    } else {
        return tileID1 === tileID2;
    }
};

Tilemap.isTileA1 = function(tileId) {
    return tileId >= this.TILE_ID_A1 && tileId < this.TILE_ID_A2;
};

Tilemap.isTileA2 = function(tileId) {
    return tileId >= this.TILE_ID_A2 && tileId < this.TILE_ID_A3;
};

Tilemap.isTileA3 = function(tileId) {
    return tileId >= this.TILE_ID_A3 && tileId < this.TILE_ID_A4;
};

Tilemap.isTileA4 = function(tileId) {
    return tileId >= this.TILE_ID_A4 && tileId < this.TILE_ID_MAX;
};

Tilemap.isTileA5 = function(tileId) {
    return tileId >= this.TILE_ID_A5 && tileId < this.TILE_ID_A1;
};

Tilemap.isWaterTile = function(tileId) {
    if (this.isTileA1(tileId)) {
        return !(tileId >= this.TILE_ID_A1 + 96 && tileId < this.TILE_ID_A1 + 192);
    } else {
        return false;
    }
};

Tilemap.isWaterfallTile = function(tileId) {
    if (tileId >= this.TILE_ID_A1 + 192 && tileId < this.TILE_ID_A2) {
        return this.getAutotileKind(tileId) % 2 === 1;
    } else {
        return false;
    }
};

Tilemap.isGroundTile = function(tileId) {
    return this.isTileA1(tileId) || this.isTileA2(tileId) || this.isTileA5(tileId);
};

Tilemap.isShadowingTile = function(tileId) {
    return this.isTileA3(tileId) || this.isTileA4(tileId);
};

Tilemap.isRoofTile = function(tileId) {
    return this.isTileA3(tileId) && this.getAutotileKind(tileId) % 16 < 8;
};

Tilemap.isWallTopTile = function(tileId) {
    return this.isTileA4(tileId) && this.getAutotileKind(tileId) % 16 < 8;
};

Tilemap.isWallSideTile = function(tileId) {
    return (this.isTileA3(tileId) || this.isTileA4(tileId)) &&
            this.getAutotileKind(tileId) % 16 >= 8;
};

Tilemap.isWallTile = function(tileId) {
    return this.isWallTopTile(tileId) || this.isWallSideTile(tileId);
};

Tilemap.isFloorTypeAutotile = function(tileId) {
    return (this.isTileA1(tileId) && !this.isWaterfallTile(tileId)) ||
            this.isTileA2(tileId) || this.isWallTopTile(tileId);
};

Tilemap.isWallTypeAutotile = function(tileId) {
    return this.isRoofTile(tileId) || this.isWallSideTile(tileId);
};

Tilemap.isWaterfallTypeAutotile = function(tileId) {
    return this.isWaterfallTile(tileId);
};

// Autotile shape number to coordinates of tileset images

Tilemap.FLOOR_AUTOTILE_TABLE = [
    [[2,4],[1,4],[2,3],[1,3]],[[2,0],[1,4],[2,3],[1,3]],
    [[2,4],[3,0],[2,3],[1,3]],[[2,0],[3,0],[2,3],[1,3]],
    [[2,4],[1,4],[2,3],[3,1]],[[2,0],[1,4],[2,3],[3,1]],
    [[2,4],[3,0],[2,3],[3,1]],[[2,0],[3,0],[2,3],[3,1]],
    [[2,4],[1,4],[2,1],[1,3]],[[2,0],[1,4],[2,1],[1,3]],
    [[2,4],[3,0],[2,1],[1,3]],[[2,0],[3,0],[2,1],[1,3]],
    [[2,4],[1,4],[2,1],[3,1]],[[2,0],[1,4],[2,1],[3,1]],
    [[2,4],[3,0],[2,1],[3,1]],[[2,0],[3,0],[2,1],[3,1]],
    [[0,4],[1,4],[0,3],[1,3]],[[0,4],[3,0],[0,3],[1,3]],
    [[0,4],[1,4],[0,3],[3,1]],[[0,4],[3,0],[0,3],[3,1]],
    [[2,2],[1,2],[2,3],[1,3]],[[2,2],[1,2],[2,3],[3,1]],
    [[2,2],[1,2],[2,1],[1,3]],[[2,2],[1,2],[2,1],[3,1]],
    [[2,4],[3,4],[2,3],[3,3]],[[2,4],[3,4],[2,1],[3,3]],
    [[2,0],[3,4],[2,3],[3,3]],[[2,0],[3,4],[2,1],[3,3]],
    [[2,4],[1,4],[2,5],[1,5]],[[2,0],[1,4],[2,5],[1,5]],
    [[2,4],[3,0],[2,5],[1,5]],[[2,0],[3,0],[2,5],[1,5]],
    [[0,4],[3,4],[0,3],[3,3]],[[2,2],[1,2],[2,5],[1,5]],
    [[0,2],[1,2],[0,3],[1,3]],[[0,2],[1,2],[0,3],[3,1]],
    [[2,2],[3,2],[2,3],[3,3]],[[2,2],[3,2],[2,1],[3,3]],
    [[2,4],[3,4],[2,5],[3,5]],[[2,0],[3,4],[2,5],[3,5]],
    [[0,4],[1,4],[0,5],[1,5]],[[0,4],[3,0],[0,5],[1,5]],
    [[0,2],[3,2],[0,3],[3,3]],[[0,2],[1,2],[0,5],[1,5]],
    [[0,4],[3,4],[0,5],[3,5]],[[2,2],[3,2],[2,5],[3,5]],
    [[0,2],[3,2],[0,5],[3,5]],[[0,0],[1,0],[0,1],[1,1]]
];

Tilemap.WALL_AUTOTILE_TABLE = [
    [[2,2],[1,2],[2,1],[1,1]],[[0,2],[1,2],[0,1],[1,1]],
    [[2,0],[1,0],[2,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],
    [[2,2],[3,2],[2,1],[3,1]],[[0,2],[3,2],[0,1],[3,1]],
    [[2,0],[3,0],[2,1],[3,1]],[[0,0],[3,0],[0,1],[3,1]],
    [[2,2],[1,2],[2,3],[1,3]],[[0,2],[1,2],[0,3],[1,3]],
    [[2,0],[1,0],[2,3],[1,3]],[[0,0],[1,0],[0,3],[1,3]],
    [[2,2],[3,2],[2,3],[3,3]],[[0,2],[3,2],[0,3],[3,3]],
    [[2,0],[3,0],[2,3],[3,3]],[[0,0],[3,0],[0,3],[3,3]]
];

Tilemap.WATERFALL_AUTOTILE_TABLE = [
    [[2,0],[1,0],[2,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],
    [[2,0],[3,0],[2,1],[3,1]],[[0,0],[3,0],[0,1],[3,1]]
];

// The important members from Pixi.js

/**
 * [read-only] The array of children of the tilemap.
 *
 * @property children
 * @type Array
 */

/**
 * [read-only] The object that contains the tilemap.
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
