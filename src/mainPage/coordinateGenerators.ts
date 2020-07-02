import { CELL_STATE, SHIP_DIRESCTION,  BATTLE_GRID_START_POINT, BATTLE_GRID_END_POINT} from './constants';
import { generateRnd } from './utils';
import { BattleField } from  './battleFieldModel';

export function generateCoordinates(length: number): any[] {
	const direction: string = SHIP_DIRESCTION[generateRnd(1)];
	let startPointVer: number;
    let startPointHor: number;
    
	if (direction === 'horizontal') {
		startPointVer = generateRnd(BATTLE_GRID_END_POINT);
		startPointHor = generateRnd(BATTLE_GRID_END_POINT - length + 1);
	} else {
		startPointVer = generateRnd(BATTLE_GRID_END_POINT - length + 1);
		startPointHor = generateRnd(BATTLE_GRID_END_POINT);
	}

	if(!validateCoordinates(startPointVer, startPointHor, direction, length)) {
		return generateCoordinates(length);
	}

    return [startPointVer, startPointHor, direction, length];
}

export function getCellsToExripe({startPointVer, startPointHor, direction, length}) {
	const [verStart, verEnd, horStart, horEnd] = findValidationEdgePoints(startPointVer, startPointHor, direction, length);

	const coords = [];

	for (let i = verStart; i <= verEnd; i++) {
		for (let j = horStart; j <= horEnd; j++) {
			if (BattleField.grid[i][j] === CELL_STATE.notAvailable) {
				continue;
			}
			coords.push(`${i}:${j}`);
		}
	}

	return coords;
}

function validateCoordinates(startPointVer: number, startPointHor: number, direction: string, length: number): boolean {
	const [verStart, verEnd, horStart, horEnd] = findValidationEdgePoints(startPointVer, startPointHor, direction, length);
 
	for (let i = verStart; i <= verEnd; i++) {
		for (let j = horStart; j <= horEnd; j++) {
			if (BattleField.grid[i][j] === CELL_STATE.notAvailable) {
				return false;
			}
		}
    }
    
	return true;
}

function findValidationEdgePoints(startPointVer: number, startPointHor: number, direction: string, length: number): number[] {
    let verStart: number, verEnd: number, horStart: number, horEnd:number;

    verStart = startPointVer === BATTLE_GRID_START_POINT ?  startPointVer : startPointVer - 1;
	horStart = startPointHor === BATTLE_GRID_START_POINT ?  startPointHor : startPointHor - 1;

	if(direction === 'horizontal') {
		verEnd = startPointVer === BATTLE_GRID_END_POINT ? startPointVer : startPointVer + 1;
		horEnd = (startPointHor + length - 1) === BATTLE_GRID_END_POINT ? (startPointHor + length - 1) : startPointHor + length;
    } else {
		verEnd = (startPointVer + length - 1) === BATTLE_GRID_END_POINT ? (startPointVer + length - 1) : startPointVer + length;
		horEnd = startPointHor === BATTLE_GRID_END_POINT ? startPointHor : startPointHor + 1;
    }
    
    return [verStart, verEnd, horStart, horEnd];
}