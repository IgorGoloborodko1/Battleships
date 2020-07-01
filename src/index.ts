import './styles.scss';
import { BattleFieldModel } from './battleFieldModel';
import { SHIP_TYPES } from './shipTypes';
import { generateCoordinates } from './coordinateGenerators';
import { Fleet } from './fleet';
import { createBattleFieldView } from './view';

BattleFieldModel.createBattleGrid(10, 10);
console.log(BattleFieldModel.grid);

const fleet = new Fleet();
console.log(fleet);

createBattleFieldView(10, 10);
