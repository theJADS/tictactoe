"use strict";
exports.__esModule = true;
var tile_1 = require("./tile");
var assert_1 = require("assert");
var player_1 = require("./player");
describe('testing the setting of a tile', function () {
    var tile;
    beforeEach(function () {
        tile = new tile_1.Tile();
    });
    it('tile is initialise to empty', function () {
        assert_1.equal(tile.getSymbol(), null);
    });
    describe('setting the state to circle', function () {
        beforeEach(function () {
            tile.setSymbol(player_1.SymbolType.CIRCLE);
        });
        it('tile is set to Circle', function () {
            assert_1.equal(tile.getSymbol(), player_1.SymbolType.CIRCLE);
        });
    });
    describe('setting the state to cross', function () {
        beforeEach(function () {
            tile.setSymbol(player_1.SymbolType.CROSS);
        });
        it('tile is set to Cross', function () {
            assert_1.equal(tile.getSymbol(), player_1.SymbolType.CROSS);
        });
    });
});
//# sourceMappingURL=tile.test.js.map