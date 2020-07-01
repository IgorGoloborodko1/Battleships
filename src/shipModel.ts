import { SHIP_DIRESCTION } from './constants';

export class Ship {
    private _startPointVer: number
    private _startPointHor: number;
    private _direction: string;
    private _length: number;
    private _hpLeft: number;
    private _coordinates: string[];
    private _name: string;

    constructor(startPointVer: number, startPointHor: number, direction: string, length: number) {
        this._startPointVer = startPointVer;
        this._startPointHor = startPointHor;
        this._direction = direction;
        this._length = length;
        this._hpLeft = length;
        this._coordinates = this.generateCoordinates();
        this._name = this.generateName();
    }

    private generateCoordinates(): string[] {
        const coords: string[] = [];
        let counter: number = this._length;
        let ver: number = this._startPointVer;
        let hor: number = this._startPointHor;

        while(counter) {
            if(this._direction === 'horizontal') {
                coords.push(`${ver}:${hor++}`);
            } else {
                coords.push(`${ver++}:${hor}`);
            }
            counter--;
        }

        return coords;
    }

    private generateName() {
		return `${this._startPointVer}:${this._startPointHor}`;
	}
}