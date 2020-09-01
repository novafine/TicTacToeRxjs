import { Player, Winner } from "./types.type";
import { Injectable } from '@angular/core';

@Injectable()
export class GameLogic {
    gameboard: string[][] = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
    numOfMarkedCells: number = 0;
    player: Player = "X";
    winner: Winner = undefined;

    resetGameboard() {
        this.gameboard = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
        this.numOfMarkedCells = 0;
        this.player = "X";
        this.winner = undefined;
    }

    isGameOver(row: number, col: number): boolean {
        this.gameboard[row][col] = this.player;
        this.numOfMarkedCells++;

        if (!this.isWin()) {

            // Checking case of tie
            if (this.isTie()) {
                this.winner = "tie";
                return true;
            }

            // No tie
            this.player = this.player === "X" ? "O" : "X";
            return false;
        } else {
            this.winner = this.player;
            console.log(this.gameboard, "win!");
            return true;
        }
    }

    getWinner(): Winner {
        return this.winner;
    }

    private isTie() {
        return this.numOfMarkedCells === (this.gameboard.length * this.gameboard[0].length);
    }

    private isWin() {
        return (this.isRowSameSign(this.gameboard, this.player) ||
            this.isColumnSameSign(this.gameboard, this.player) ||
            this.isMainCrossSameSign(this.gameboard, this.player) ||
            this.isSecondCrossSameSign(this.gameboard, this.player));
    }

    private isRowSameSign(gameboard: string[][], player: Player) {
        let isRowSame: boolean;

        for (let i = 0; i < gameboard.length; i++) {
            isRowSame = true;

            for (let j = 0; j < gameboard[0].length; j++) {
                if (gameboard[i][j] !== player) {
                    isRowSame = false;
                }
            }

            if (isRowSame) {
                return true;
            }
        }

        return false;
    }

    private isColumnSameSign(gameboard: string[][], player: Player) {
        let isColSame: boolean;

        for (let i = 0; i < gameboard.length; i++) {
            isColSame = true;

            for (let j = 0; j < gameboard[0].length; j++) {
                if (gameboard[j][i] !== player) {
                    isColSame = false;
                }
            }

            if (isColSame) {
                return true;
            }
        }

        return false;
    }

    private isMainCrossSameSign(gameboard: string[][], player: Player) {

        for (let i = 0; i < gameboard.length; i++) {

            if (gameboard[i][i] !== player) {
                return false;
            }
        }

        return true;
    }

    private isSecondCrossSameSign(gameboard: string[][], player: Player) {
        for (let i = 0; i < gameboard.length; i++) {

            if (gameboard[i][gameboard.length - 1 - i] !== player) {
                return false;
            }
        }

        return true;
    }
}