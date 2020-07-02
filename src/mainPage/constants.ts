export enum CELL_STATE {
    available = 'available',
    notAvailable = 'notAvailable',
}

export enum SHIPS_TYPES {
    quadruple = 1,
    triple = 2,
    double = 3,
    single = 4,
}

export const SHIP_DIRESCTION  = [ 'vertical', 'horizontal'];

export const BATTLE_GRID_START_POINT = 0;

export const BATTLE_GRID_END_POINT = 9;

const QUADRUPLE =  {
    name: 'quadruple',
    num: 1,
    length: 4,
}

const TRIPLE =  {
    name: 'triple',
    num: 2,
    length: 3,
}

const DOUBLE =  {
    name: 'double',
    num: 3,
    length: 2,
}

const SINGLE =  {
    name: 'single',
    num: 4,
    length: 1,
}

export const SHIP_TYPES = [
    SINGLE, DOUBLE, TRIPLE, QUADRUPLE
];

if(length === 4) {
    
}