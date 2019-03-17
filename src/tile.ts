import { SymbolType } from "./player";

/**
 * The tile can be of 3 states, empty, cross or circle
 */
export class Tile {
    symbol: SymbolType = null;
    /**
     * The tile state is not exported, but manipulated internally
     */
    
    constructor() {
        this.symbol = null;
    }

    public setSymbol(symbolType: SymbolType) : void {
        this.symbol = symbolType; 
    }

    public reset() : void {
        this.symbol = null;
    }

    public getSymbol() : SymbolType {
        return this.symbol; 
    }
    public printToString() : string {
        let output = ' ';
        switch (this.symbol) {
            case null: 
                output = '_';
                break;
            case SymbolType.CIRCLE: 
                output = 'O';
                break;
            case SymbolType.CROSS: 
                output = 'X';
                break;
            default:
                throw new Error("Unkonwn state");
        }
        return output;
    }
}


