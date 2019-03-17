import { Player, SymbolType } from "./player";
import { Board } from "./board";

enum GameState {
    INITIALISING,
    PLAYER_1_TURN,
    PLAYER_2_TURN,
    PLAYER_1_WIN,
    PLAYER_2_WIN,
    DRAW,
}

export  class Game {
    gameState: GameState;
    board: Board;
    turnCounter: number;

    constructor(private readonly player1: Player, private readonly player2: Player){
        this.gameState = GameState.INITIALISING;
        this.board = new Board();
        this.player1.setSymbol(SymbolType.CROSS);
        this.player2.setSymbol(SymbolType.CIRCLE);

        console.log('player 2 type: ', this.player2.getSymbol());
    }

    public start(){
        this.gameState = GameState.PLAYER_1_TURN;
        let winnerFound = false;
        for (let turn = 0; turn < 9; turn++) {
            this.handleState();
            const boardString = this.board.printToString();
            console.log(`Turn ${turn + 1}: Board is: \n${boardString}`);
            const winnerSymbol = this.board.getWinner();
            if (winnerSymbol === SymbolType.CROSS) {
                this.player1.win();
                this.player2.lose();
                console.log('Easy dubs Cross');
                winnerFound = true;
                break;
            }
            else if (winnerSymbol === SymbolType.CIRCLE){
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
            console.log(`You suck it's a draw`);
        }
        console.log(`Player ${this.player1.getName()}'s score is ${this.player1.getScore()}, Player ${this.player2.getName()}'s score is ${this.player2.getScore()}`)

    }

    private handleState() {
        switch(this.gameState) {
            case GameState.PLAYER_1_TURN:
                this.player1.haveTurn(this.board);
                this.gameState = GameState.PLAYER_2_TURN;
                break;    
            case GameState.PLAYER_2_TURN:
                this.player2.haveTurn(this.board);
                this.gameState = GameState.PLAYER_1_TURN;
                break;    

        }
    }



 }