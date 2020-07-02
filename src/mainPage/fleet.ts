import { Ship } from "./shipModel";
import { SHIP_TYPES } from './constants';
import { generateCoordinates } from "./coordinateGenerators";
import { BattleField } from "./battleFieldModel";

export class Fleet {
    public fleetSquad: Ship[];
    constructor() {
        this.fleetSquad = this.initSquad();
    }

    private initSquad(): Ship[] {
        const arr = [];

        SHIP_TYPES.forEach(type => {
            let numOfInstances = type.num;
            while(numOfInstances--) {
                const [startPointVer, startPointHor, direction, length] = generateCoordinates(type.length);
                arr.push(new Ship(startPointVer, startPointHor, direction, length));

                BattleField.martNotAvailableCells(startPointVer, startPointHor, direction, length);
            }
        });

        return arr;
    }
}