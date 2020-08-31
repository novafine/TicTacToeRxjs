import { Player } from "./types.type";
import { Injectable } from '@angular/core';

@Injectable()
export class GameLogic {
    gameboard: string[][] = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
    player: Player = "X";
    winner: Player = undefined;

    resetGameboard() {
        this.gameboard = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
        this.player = "X";
        this.winner = undefined;
    }

    updateGameboard(row: number, col: number) {
        this.gameboard[row][col] = this.player;

        if (!this.isWin()) {
            this.player = this.player === "X" ? "O" : "X";
            console.log(this.gameboard);

        } else {
            console.log(this.gameboard, "win!");
            this.winner = this.player;
            // TODO: emit winning

            //TODO: tie case
        }
    }

    isWin() {
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