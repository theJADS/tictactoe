"use strict";
exports.__esModule = true;
var tile_1 = require("./tile");
var LENGTH_X = 3;
var LENGTH_Y = 3;
var Board = /** @class */ (function () {
    function Board() {
        this.tiles = [];
        for (var y = 0; y < LENGTH_Y; y++) {
            this.tiles[y] = [];
            for (var x = 0; x < LENGTH_X; x++) {
                this.tiles[y][x] = new tile_1.Tile();
            }
        }
        this.setupWins();
    }
    Board.prototype.setupWins = function () {
        // lets do the rows
        this.possibleWins = [];
        var winningPosition;
        for (var index = 0; index < 3; index++) {
            var winningPosition_1 = {
                p1: { x: 0, y: index },
                p2: { x: 1, y: index },
                p3: { x: 2, y: index }
            };
            this.possibleWins.push(winningPosition_1);
            winningPosition_1 = {
                p1: { x: index, y: 0 },
                p2: { x: index, y: 1 },
                p3: { x: index, y: 2 }
            };
            this.possibleWins.push(winningPosition_1);
        }
        winningPosition = {
            p1: { x: 0, y: 0 },
            p2: { x: 1, y: 1 },
            p3: { x: 2, y: 2 }
        };
        this.possibleWins.push(winningPosition);
        winningPosition = {
            p1: { x: 2, y: 0 },
            p2: { x: 1, y: 1 },
            p3: { x: 0, y: 2 }
        };
        this.possibleWins.push(winningPosition);
    };
    Board.prototype.getWinner = function () {
        var _this = this;
        var winningSymbol = null;
        this.possibleWins.some(function (possibleWin) {
            winningSymbol = _this.checkLine(possibleWin);
            return !!winningSymbol;
        });
        return winningSymbol;
    };
    Board.prototype.getPositionSymbol = function (p) {
        return this.tiles[p.y][p.x].getSymbol();
    };
    Board.prototype.positionsSymbolsAreEqual = function (p1, p2) {
        var p1Symbol = this.getPositionSymbol(p1);
        return p1Symbol && p1Symbol === this.getPositionSymbol(p2);
    };
    Board.prototype.checkLine = function (winningPosition) {
        if (this.positionsSymbolsAreEqual(winningPosition.p1, winningPosition.p2) &&
            this.positionsSymbolsAreEqual(winningPosition.p1, winningPosition.p3)) {
            return this.getPositionSymbol(winningPosition.p1);
        }
    };
    Board.prototype.isEmpty = function (position) {
        var tile = this.getTile(position);
        return tile.getSymbol() === null;
    };
    Board.prototype.getTile = function (position) {
        return this.tiles[position.y][position.x];
    };
    Board.prototype.setTile = function (position, symbol) {
        var tile = this.getTile(position);
        tile.setSymbol(symbol);
    };
    Board.prototype.printToString = function () {
        var output = '';
        for (var y = 0; y < LENGTH_Y; y++) {
            for (var x = 0; x < LENGTH_X; x++) {
                output += this.tiles[y][x].printToString() + ' ';
            }
            output += '\n';
        }
        return output;
    };
    Board.prototype.getDimensions = function () {
        return {
            x: LENGTH_X,
            y: LENGTH_Y
        };
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=board.js.map