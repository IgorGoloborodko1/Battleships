import { Fleet } from './fleet';
import { Ship } from './shipModel';
import { getCellsToExripe } from './coordinateGenerators';
import { ProgressBar } from './progresBar';

export function onCellClick(event, fleet: Fleet) {
    const classList = event.target.classList;
    const targetElementId: string = event.target.id;
    const targetShip: Ship = getTargetShip(fleet.fleetSquad, targetElementId);

    if (!classList.contains('cell')) {
        return;
    }
    
    if(targetShip) {
        const targetCoordinatesIndex: number = targetShip.coordinates.indexOf(targetElementId);
        const targetShipIndex: number = getTargetShipIndex(fleet.fleetSquad, targetShip);

        classList.add('hit');
        getShipsElements();
        targetShip.coordinates.splice(targetCoordinatesIndex, 1);

		if(!targetShip.coordinates.length) {
			fleet.fleetSquad.splice(targetShipIndex, 1);

			const cellsToExpire: string[] = getCellsToExripe(targetShip);

			cellsToExpire.forEach(id => {
				const expired = document.getElementById(id);
				expired.classList.add('miss');
            });
        }
        
        // event.target.removeEventListener('click', onCellClick);
    } else {
        classList.add('miss');
        ProgressBar.move();
        // event.target.removeEventListener('click', onCellClick);
    }
}

function getTargetShip(fleetSquad: Ship[], targetElementId): Ship {
    return fleetSquad.find(s => s.coordinates.includes(targetElementId));
}

function getTargetShipIndex(fleetSquad: Ship[], ship: Ship): number {
    return fleetSquad.indexOf(ship);
}

function getShipsElements() {
    const ships = document.querySelectorAll('.ships__item-image-container');
    console.log(ships);
    
    const hole = document.createElement('div');
    const holeCont = document.createElement('div');

    holeCont.className = 'hole-container';
    hole.className = 'hole';
    ships.forEach(s => {
        holeCont.appendChild(hole)
    });
    ships.forEach(s => {
        s.appendChild(holeCont)
    });
}