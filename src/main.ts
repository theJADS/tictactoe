import { VeryDumbAi } from "./players/very-dumb-ai";
import { Game } from "./game";

 



 const player1 = new VeryDumbAi('AI 1');
 const player2 = new VeryDumbAi('AI 2');

 for (let gameCount = 0; gameCount < 1000; gameCount++) {
    let game = new Game(player1, player2);
    game.start();
    
    game = new Game(player2, player1);
    game.start();   

 }
 