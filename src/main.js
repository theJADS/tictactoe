"use strict";
exports.__esModule = true;
var very_dumb_ai_1 = require("./players/very-dumb-ai");
var game_1 = require("./game");
var player1 = new very_dumb_ai_1.VeryDumbAi('AI 1');
var player2 = new very_dumb_ai_1.VeryDumbAi('AI 2');
for (var gameCount = 0; gameCount < 1000; gameCount++) {
    var game = new game_1.Game(player1, player2);
    game.start();
    game = new game_1.Game(player2, player1);
    game.start();
}
//# sourceMappingURL=main.js.map