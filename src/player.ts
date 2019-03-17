import { Board } from "./board";

export enum SymbolType {
    CIRCLE = "CIRCLE",
    CROSS = "CROSS"  
}

export abstract class Player {
    abstract haveTurn(board: Board): any;
    private symbolType: SymbolType;
    totalGamesPlayed: number;
    totalScore: number;

    constructor(private name: string) {
        this.totalScore = 0;
    }

    public setSymbol(symbolType: SymbolType) {
        this.symbolType = symbolType;
    }

    public getSymbol() : SymbolType {
        return this.symbolType;
    }

    getScore(): any {
        return this.totalScore;
    }
    getName(): any {
        return this.name;
    }

    public win() : void {
        this.totalScore = this.totalScore + 3;
        this.totalGamesPlayed++;
    }
    public draw() : void {
        this.totalScore = this.totalScore + 1;
        this.totalGamesPlayed++;
    }
    public lose() : void {
        this.totalGamesPlayed++;
    }
 }
    