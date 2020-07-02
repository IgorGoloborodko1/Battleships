import '../styles.scss';
import { BattleField } from './battleFieldModel';
import { Fleet } from './fleet';
import { createBattleFieldView } from './view';
import { onCellClick } from './eventHandlers';
import { Timer } from './timer';

BattleField.createBattleGrid(10, 10);
createBattleFieldView(10, 10);

const battleFieldView = document.querySelector('.battleField');

const fleet = new Fleet();

battleFieldView.addEventListener('click', function() { onCellClick(event, fleet) }, false);
