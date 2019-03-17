import { Player } from "../player";
import { Board } from "../board";
import { Position } from "../position";

export class VeryDumbAi extends Player {
    public haveTurn(board: Board) {
        // 1. find a random tile from board
        const dimensions = board.getDimensions();
        let emptySquareFound = false;
        while (!emptySquareFound) {
            const randomX = getRandomInt(dimensions.x);
            const randomY = getRandomInt(dimensions.y);
            const randomPosition: Position = {
                x: randomX,
                y: randomY,
            };
            // 2. check if tile is empty
            if (board.isEmpty(randomPosition)) {
            // 3. if full, goto 1.
                emptySquareFound = true;
                // 4. put symbol on tile
                console.log('the symbol is ' + this.getSymbol() );
                board.setTile(randomPosition, this.getSymbol());
                break;
            }
        }
        
    }


}

function getRandomInt(max: number) {
    const min = 0;
    return Math.floor(Math.random() * max);
}
