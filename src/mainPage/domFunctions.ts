import { Ship } from './ship';

export function createBattleFieldView(rows: number, cells: number): void {
    const root = document.querySelector('.battlefield-container');
    const battleField = document.createElement('div');
    battleField.className = 'battleField';

    for(let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'row';

        for(let j = 0; j < cells; j++) {
			const cell = document.createElement('div');
			cell.className = 'cell';
			cell.setAttribute('id', `${i}:${j}`);
            row.appendChild(cell);
        }

        battleField.appendChild(row)
    }

    root.prepend(battleField);
}

export function assingDomShipsAttributes(ship: Ship): void {
    const [quadruple, triples, doubles, singles] = getDomShips();

    if(ship.length === 4) quadruple.dataset.name = ship.name;

    if(ship.length === 3) asssignAttributes(triples, ship);

    if(ship.length === 2) asssignAttributes(doubles, ship);

    if(ship.length === 1) asssignAttributes(singles, ship);
}

function getDomShips(): any[] {
    const quadruple = document.querySelector('.quadruple');
    const triples = document.querySelectorAll('.triple');
    const doubles = document.querySelectorAll('.double');
    const singles = document.querySelectorAll('.single');

    return [quadruple, triples, doubles, singles];
}

function asssignAttributes(shipDomElement, ship: Ship): void {
    for(const el of shipDomElement) {
        if(!el.dataset.name) {
            el.dataset.name = ship.name;
            return;
        }
    }
}