import { Tile } from "./tile";
import { Position } from "./position";
import { SymbolType } from "./player";

const LENGTH_X = 3 ;
const LENGTH_Y = 3 ;

interface WinningPosition {
    p1: Position;
    p2: Position;
    p3: Position;
}


export class Board {
    private tiles: Tile[][];
    possibleWins: WinningPosition[];

    constructor(){
        this.tiles = [];
        for(let y = 0; y < LENGTH_Y; y++) {
            this.tiles[y] = [];
            for(let x = 0; x < LENGTH_X; x++) {
                this.tiles[y][x] = new Tile();
            }
        }
        this.setupWins();
    }

    setupWins() {
        // lets do the rows
        this.possibleWins = [];
        let winningPosition;
        for (let index = 0; index < 3; index++) {
            let winningPosition = {
                p1: {x: 0, y: index},
                p2: {x: 1, y: index},
                p3: {x: 2, y: index}
            } 
            this.possibleWins.push(winningPosition);

            winningPosition = {
                p1: {x: index, y: 0},
                p2: {x: index, y: 1},
                p3: {x: index, y: 2}
            } 
            this.possibleWins.push(winningPosition);
        }
        winningPosition = {
            p1: {x: 0, y: 0},
            p2: {x: 1, y: 1},
            p3: {x: 2, y: 2}
            
        } 
        this.possibleWins.push(winningPosition);
        winningPosition = {
            p1: {x: 2, y: 0},
            p2: {x: 1, y: 1},
            p3: {x: 0, y: 2}
        }
        this.possibleWins.push(winningPosition);
    }

    getWinner(): SymbolType {
        let winningSymbol: SymbolType = null;
        this.possibleWins.some(possibleWin => {
            winningSymbol = this.checkLine(possibleWin);
            return !!winningSymbol;
        });

        return winningSymbol;
    }

    getPositionSymbol(p: Position) {
        return this.tiles[p.y][p.x].getSymbol();
    }

    positionsSymbolsAreEqual(p1, p2) {
        const p1Symbol = this.getPositionSymbol(p1);
        return p1Symbol && p1Symbol === this.getPositionSymbol(p2);
    }

    checkLine(winningPosition : WinningPosition) : SymbolType {
        if (this.positionsSymbolsAreEqual(winningPosition.p1, winningPosition.p2) && 
            this.positionsSymbolsAreEqual(winningPosition.p1, winningPosition.p3)) {
            return this.getPositionSymbol(winningPosition.p1);
        } 
    } 

    isEmpty(position: Position): boolean {
        const tile = this.getTile(position);
        return tile.getSymbol() === null;
    }

    getTile(position: Position): Tile {
        return this.tiles[position.y][position.x];
    }

    setTile(position: Position, symbol: SymbolType): any {
        const tile = this.getTile(position);
        tile.setSymbol(symbol);
    }

    public printToString() {
        let output = '';
        for(let y = 0; y < LENGTH_Y; y++) {
            for(let x = 0; x < LENGTH_X; x++) {
                output += this.tiles[y][x].printToString() + ' ';
            }
            output += '\n';
        }
        return output;
    }

    public getDimensions() : Position {
        return {
            x: LENGTH_X,
            y: LENGTH_Y
        }
    }
}

