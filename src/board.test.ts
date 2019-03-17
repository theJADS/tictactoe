import { Tile } from "./tile";
import { equal } from "assert";
import { Board } from "./board";



describe('testing the Board', () => {
    let board: Board;

    beforeEach(() => {
        board = new Board();
    });

    it('board is initialise to empty', ()=> {
        console.log('board', board);
        const stringOutput = board.printToString();
        expect(board).toBeTruthy();
    });

})