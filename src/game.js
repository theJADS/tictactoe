"use strict";
exports.__esModule = true;
var player_1 = require("./player");
var board_1 = require("./board");
var GameState;
(function (GameState) {
    GameState[GameState["INITIALISING"] = 0] = "INITIALISING";
    GameState[GameState["PLAYER_1_TURN"] = 1] = "PLAYER_1_TURN";
    GameState[GameState["PLAYER_2_TURN"] = 2] = "PLAYER_2_TURN";
    GameState[GameState["PLAYER_1_WIN"] = 3] = "PLAYER_1_WIN";
    GameState[GameState["PLAYER_2_WIN"] = 4] = "PLAYER_2_WIN";
    GameState[GameState["DRAW"] = 5] = "DRAW";
})(GameState || (GameState = {}));
var Game = /** @class */ (function () {
    function Game(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.gameState = GameState.INITIALISING;
        this.board = new board_1.Board();
        this.player1.setSymbol(player_1.SymbolType.CROSS);
        this.player2.setSymbol(player_1.SymbolType.CIRCLE);
        console.log('player 2 type: ', this.player2.getSymbol());
    }
    Game.prototype.start = function () {
        this.gameState = GameState.PLAYER_1_TURN;
        var winnerFound = false;
        for (var turn = 0; turn < 9; turn++) {
            this.handleState();
            var boardString = this.board.printToString();
            console.log("Turn " + (turn + 1) + ": Board is: \n" + boardString);
            var winnerSymbol = this.board.getWinner();
            if (winnerSymbol === player_1.SymbolType.CROSS) {
                this.player1.win();
                this.player2.lose();
                console.log('Easy dubs Cross');
                winnerFound = true;
                break;
            }
            else if (winnerSymbol === player_1.SymbolType.CIRCLE) {
                this.player2.win();
                this.player1.lose();
                console.log('Easy dubs Circle');
                winnerFound = true;
                break;
            }
        }
        if (!winnerFound) {
            this.player2.draw();
            this.player1.draw();
            console.log("You suck it's a draw");
        }
        console.log("Player " + this.player1.getName() + "'s score is " + this.player1.getScore() + ", Player " + this.player2.getName() + "'s score is " + this.player2.getScore());
    };
    Game.prototype.handleState = function () {
        switch (this.gameState) {
            case GameState.PLAYER_1_TURN:
                this.player1.haveTurn(this.board);
                this.gameState = GameState.PLAYER_2_TURN;
                break;
            case GameState.PLAYER_2_TURN:
                this.player2.haveTurn(this.board);
                this.gameState = GameState.PLAYER_1_TURN;
                break;
        }
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map