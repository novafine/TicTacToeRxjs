import { Player } from "./types.type";
import { Injectable } from '@angular/core';

@Injectable()
export class GameLogic {
    gameboard: string[][] = [["", "", ""], ["", "", ""], ["", "", ""]];
    player: Player = "X";

    updateGameboard(row: number, col: number) {
        this.gameboard[row][col] = this.player;
        
        if (!this.isWin(this.gameboard, this.player)) {
            this.player = this.player === "X" ? "O" : "X";
            console.log(this.gameboard);

        } else {
            console.log(this.gameboard, "win!");
        }
    }

    isWin(gameboard: string[][], player: Player) {
        return (this.isRowSameSign(gameboard, player) ||
            this.isColumnSameSign(gameboard, player) ||
            this.isMainCrossSameSign(gameboard, player) ||
            this.isSecondCrossSameSign(gameboard, player));
    }

    private isRowSameSign(gameboard: string[][], player: Player) {
        let isRowSame: Boolean;

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
        let isColSame: Boolean;

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