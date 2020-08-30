import { Player } from "./types.type";

class GameLogic {
    private gameboard: string[][] = [["", "", ""], ["", "", ""], ["", "", ""]];

    changeCellValue(row: number, col: number, value: Player) {
        this.gameboard[row][col] = value;
    }

    isWin(player: Player) {
        if (this.isRowSameSign(player) ||
            this.isColumnSameSing(player) ||
            this.isMainCrossSameSign(player) ||
            this.isSecondCrossSameSign(player)) {
            return true;
        }

        return false;
    }

    private isRowSameSign(player: Player) {
        let isRowSame: Boolean;

        for (let i = 0; i < this.gameboard.length; i++) {
            isRowSame = true;

            for (let j = 0; j < this.gameboard[0].length; j++) {
                if (this.gameboard[i][j] !== player) {
                    isRowSame = false;
                }
            }

            if (isRowSame) {
                return true;
            }
        }

        return false;
    }

    private isColumnSameSing(player: Player) {
        let isColSame: Boolean;

        for (let i = 0; i < this.gameboard.length; i++) {
            isColSame = true;

            for (let j = 0; j < this.gameboard[0].length; j++) {
                if (this.gameboard[j][i] !== player) {
                    isColSame = false;
                }
            }

            if (isColSame) {
                return true;
            }
        }

        return false;
    }

    private isMainCrossSameSign(player: Player) {

        for (let i = 0; i < this.gameboard.length; i++) {

            if (this.gameboard[i][i] !== player) {
                return false;
            }
        }

        return true;
    }

    private isSecondCrossSameSign(player: Player) {
        for (let i = 0; i < this.gameboard.length; i++) {

            if (this.gameboard[i][this.gameboard.length - 1 - i] !== player) {
                return false;
            }
        }

        return true;
    }
}