"use strict";
exports.__esModule = true;
var player_1 = require("./player");
/**
 * The tile can be of 3 states, empty, cross or circle
 */
var Tile = /** @class */ (function () {
    /**
     * The tile state is not exported, but manipulated internally
     */
    function Tile() {
        this.symbol = null;
        this.symbol = null;
    }
    Tile.prototype.setSymbol = function (symbolType) {
        this.symbol = symbolType;
    };
    Tile.prototype.reset = function () {
        this.symbol = null;
    };
    Tile.prototype.getSymbol = function () {
        return this.symbol;
    };
    Tile.prototype.printToString = function () {
        var output = ' ';
        switch (this.symbol) {
            case null:
                output = '_';
                break;
            case player_1.SymbolType.CIRCLE:
                output = 'O';
                break;
            case player_1.SymbolType.CROSS:
                output = 'X';
                break;
            default:
                throw new Error("Unkonwn state");
        }
        return output;
    };
    return Tile;
}());
exports.Tile = Tile;
//# sourceMappingURL=tile.js.map