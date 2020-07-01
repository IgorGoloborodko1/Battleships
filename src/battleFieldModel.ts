import { CELL_STATE } from './constants';
import {Ship} from './shipModel';

export class BattleFieldModel {
    public static grid: string[][];

    public static createBattleGrid(rows, cells): void {
        BattleFieldModel.grid = Array(rows).fill('').map(()=>Array(cells).fill('available'));
    }

    public static martNotAvailableCells(startPointVer, startPointHor, direction, length): void {
        while(length--) {
            if(direction === 'horizontal') {
                BattleFieldModel.grid[startPointVer][startPointHor++] = CELL_STATE.notAvailable;
            } else {
                BattleFieldModel.grid[startPointVer++][startPointHor] = CELL_STATE.notAvailable;
            }
        }
    }
}