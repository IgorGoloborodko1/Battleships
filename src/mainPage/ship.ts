export class Ship {
    public startPointVer: number
    public startPointHor: number;
    public direction: string;
    public length: number;
    public hpLeft: number;
    public coordinates: string[];
    public name: string;

    constructor(startPointVer: number, startPointHor: number, direction: string, length: number) {
        this.startPointVer = startPointVer;
        this.startPointHor = startPointHor;
        this.direction = direction;
        this.length = length;
        this.hpLeft = length;
        this.coordinates = this.generateCoordinates();
        this.name = this.generateName();
    }

    private generateCoordinates(): string[] {
        const coords: string[] = [];
        let counter: number = this.length;
        let ver: number = this.startPointVer;
        let hor: number = this.startPointHor;

        while(counter) {
            if(this.direction === 'horizontal') {
                coords.push(`${ver}:${hor++}`);
            } else {
                coords.push(`${ver++}:${hor}`);
            }
            counter--;
        }

        return coords;
    }

    private generateName() {
		return `${this.startPointVer}:${this.startPointHor}`;
	}
}