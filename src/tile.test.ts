import { Tile } from "./tile";
import { equal } from "assert";
import { SymbolType } from "./player";



describe('testing the setting of a tile', () => {
    let tile: Tile;

    beforeEach(() => {
        tile = new Tile();
    });

    it('tile is initialise to empty', ()=> {
        equal(tile.getSymbol(), null);
    });

    describe('setting the state to circle', () => {
        beforeEach(() => {
            tile.setSymbol(SymbolType.CIRCLE);
        });

        it('tile is set to Circle', ()=> {
            equal(tile.getSymbol(), SymbolType.CIRCLE);
        });
    
    });

    describe('setting the state to cross', () => {
        beforeEach(() => {
            tile.setSymbol(SymbolType.CROSS);
        });

        it('tile is set to Cross', ()=> {
            equal(tile.getSymbol(), SymbolType.CROSS);
        });
    
    })

})