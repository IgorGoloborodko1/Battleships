import { Fleet } from './fleet';
import { Ship } from './ship';
import { getCellsToExripe } from './coordinateGenerators';
import { ProgressBar } from './progresBar';

export function gionCellClick(event, fleet: Fleet) {
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
        showDamage(targetShip.name);
        targetShip.coordinates.splice(targetCoordinatesIndex, 1);

		if(!targetShip.coordinates.length) {
			fleet.fleetSquad.splice(targetShipIndex, 1);

			const cellsToExpire: string[] = getCellsToExripe(targetShip);

			cellsToExpire.forEach(id => {
				const expired = document.getElementById(id);
				expired.classList.add('miss');
            });
        }

        if(!fleet.fleetSquad.length) {
            window.location = './won.html';
        }
        
        // event.target.removeEventListener('click', onCellClick);
    } else {
        classList.add('miss');
        ProgressBar.move();
        // event.target.removeEventListener('click', onCellClick);
    }

    event.stopPropagation();
}

function getTargetShip(fleetSquad: Ship[], targetElementId): Ship {
    return fleetSquad.find(s => s.coordinates.includes(targetElementId));
}

function getTargetShipIndex(fleetSquad: Ship[], ship: Ship): number {
    return fleetSquad.indexOf(ship);
}

function showDamage(attributeName: string): void {
    const container = document.querySelector(`div[data-name="${attributeName}"] .hole-container`);
    const hole = document.createElement('div');
    hole.className = 'hole';
    container.appendChild(hole);
}