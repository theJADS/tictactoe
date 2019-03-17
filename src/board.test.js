"use strict";
exports.__esModule = true;
var board_1 = require("./board");
describe('testing the Board', function () {
    var board;
    beforeEach(function () {
        board = new board_1.Board();
    });
    it('board is initialise to empty', function () {
        console.log('board', board);
        var stringOutput = board.printToString();
        expect(board).toBeTruthy();
    });
});
//# sourceMappingURL=board.test.js.map