import { Ship } from './ship';

export function getTargetShip(fleetSquad: Ship[], targetElementId: string): Ship {
    return fleetSquad.find(s => s.coordinates.includes(targetElementId));
}

export function getTargetShipIndex(fleetSquad: Ship[], ship: Ship): number {
    return fleetSquad.indexOf(ship);
}

export function showDamage(attributeName: string): void {
    const container = document.querySelector(`div[data-name="${attributeName}"] .hole-container`);
    const hole = document.createElement('div');
    hole.className = 'hole';
    container.appendChild(hole);
}

export function switchToLostPage(): void {
    window.location = './lost.html';
}

export function switchToWonPage(): void {
    window.location = './won.html';
}