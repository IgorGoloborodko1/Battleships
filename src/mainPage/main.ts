import '../styles.scss';
import { BattleField } from './battleField';
import { Fleet } from './fleet';
import { createBattleFieldView } from './domFunctions';
import { switchToWonPage, getTargetShipIndex, getTargetShip, showDamage} from './eventHelpers';
import { assingDomShipsAttributes } from './domFunctions';
import { Timer } from './timer';
import { ProgressBar } from './progresBar';
import { Ship } from './ship';
import { getCellsToExripe } from './coordinateGenerators';

const userName = localStorage.getItem('user-name');
console.log(userName);

const time = new Timer();
time.startTimer();
BattleField.createBattleGrid(10, 10);
createBattleFieldView(10, 10);

const battleFieldView = document.querySelector('.battleField');
const fleet = new Fleet();
fleet.fleetSquad.forEach(s => assingDomShipsAttributes(s));
battleFieldView.addEventListener('click', onCellClick);

function onCellClick(event) {
    const classList = event.target.classList;
    if(classList.contains('hit') || classList.contains('miss')) return;

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
            saveWinningResult();
            switchToWonPage();
        }
    } else {
        classList.add('miss');
        ProgressBar.move();
    }

    event.target.stopEventPropagation();
}

function saveWinningResult():void {
    const id = Math.random().toString();
    const res = [];

    res.push(userName);
    res.push(ProgressBar.getShotsLeft());
    res.push(time.getCurrentTime());

    localStorage.setItem(id, JSON.stringify(res));
}