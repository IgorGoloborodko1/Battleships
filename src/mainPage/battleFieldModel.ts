import { CELL_STATE } from './constants';

export class BattleField {
    public static grid: string[][];

    public static createBattleGrid(rows, cells): void {
        BattleField.grid = Array(rows).fill('').map(()=>Array(cells).fill('available'));
    }

    public static martNotAvailableCells(startPointVer, startPointHor, direction, length): void {
        while(length--) {
            if(direction === 'horizontal') {
                BattleField.grid[startPointVer][startPointHor++] = CELL_STATE.notAvailable;
            } else {
                BattleField.grid[startPointVer++][startPointHor] = CELL_STATE.notAvailable;
            }
        }
    }
}