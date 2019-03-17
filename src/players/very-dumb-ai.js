"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var player_1 = require("../player");
var VeryDumbAi = /** @class */ (function (_super) {
    __extends(VeryDumbAi, _super);
    function VeryDumbAi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VeryDumbAi.prototype.haveTurn = function (board) {
        // 1. find a random tile from board
        var dimensions = board.getDimensions();
        var emptySquareFound = false;
        while (!emptySquareFound) {
            var randomX = getRandomInt(dimensions.x);
            var randomY = getRandomInt(dimensions.y);
            var randomPosition = {
                x: randomX,
                y: randomY
            };
            // 2. check if tile is empty
            if (board.isEmpty(randomPosition)) {
                // 3. if full, goto 1.
                emptySquareFound = true;
                // 4. put symbol on tile
                console.log('the symbol is ' + this.getSymbol());
                board.setTile(randomPosition, this.getSymbol());
                break;
            }
        }
    };
    return VeryDumbAi;
}(player_1.Player));
exports.VeryDumbAi = VeryDumbAi;
function getRandomInt(max) {
    var min = 0;
    return Math.floor(Math.random() * max);
}
//# sourceMappingURL=very-dumb-ai.js.map