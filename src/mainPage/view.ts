export function createBattleFieldView(rows: number, cells: number): void {
    const root =document.querySelector('#root');
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