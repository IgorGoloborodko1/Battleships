import { Ship } from "./shipModel";
import { SHIP_TYPES } from './shipTypes';
import { generateCoordinates } from "./coordinateGenerators";
import { BattleFieldModel } from "./battleFieldModel";

export class Fleet {
    private _fleetSquad: Ship[];
    constructor() {
        this._fleetSquad = this.initSquad();
    }

    private initSquad(): Ship[] {
        const arr = [];

        SHIP_TYPES.forEach(type => {
            let numOfInstances = type.num;
            while(numOfInstances--) {
                const [startPointVer, startPointHor, direction, length] = generateCoordinates(type.length);
                arr.push(new Ship(startPointVer, startPointHor, direction, length));

                BattleFieldModel.martNotAvailableCells(startPointVer, startPointHor, direction, length);
            }
        });

        return arr;
    }
}