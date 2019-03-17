"use strict";
exports.__esModule = true;
var SymbolType;
(function (SymbolType) {
    SymbolType["CIRCLE"] = "CIRCLE";
    SymbolType["CROSS"] = "CROSS";
})(SymbolType = exports.SymbolType || (exports.SymbolType = {}));
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.totalScore = 0;
    }
    Player.prototype.setSymbol = function (symbolType) {
        this.symbolType = symbolType;
    };
    Player.prototype.getSymbol = function () {
        return this.symbolType;
    };
    Player.prototype.getScore = function () {
        return this.totalScore;
    };
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.win = function () {
        this.totalScore = this.totalScore + 3;
        this.totalGamesPlayed++;
    };
    Player.prototype.draw = function () {
        this.totalScore = this.totalScore + 1;
        this.totalGamesPlayed++;
    };
    Player.prototype.lose = function () {
        this.totalGamesPlayed++;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=player.js.map