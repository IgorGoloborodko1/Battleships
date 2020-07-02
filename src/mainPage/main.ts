import '../styles.scss';
import { BattleField } from './battleFieldModel';
import { Fleet } from './fleet';
import { createBattleFieldView } from './view';
import { onCellClick } from './eventHandlers';
import { assingDomShipsAttributes } from './view';
import { Timer } from './timer';

const userName = localStorage.getItem('user-name');
console.log(userName);

const time = new Timer().startTimer();
BattleField.createBattleGrid(10, 10);
createBattleFieldView(10, 10);

const battleFieldView = document.querySelector('.battleField');
const fleet = new Fleet();
fleet.fleetSquad.forEach(s => assingDomShipsAttributes(s));
battleFieldView.addEventListener('click', onCellClick);
