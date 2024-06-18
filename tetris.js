import { PLAYFIELD_COLUMNS, PLAYFIELD_ROWS } from "./utilities.js";

export class Tetris {
    constructor() {
        this.playfield;
        this.init();
    }

    init() {
        this.generatePlayfield();
    }

    generatePlayfield() {
        this.playfield = new Array(PLAYFIELD_ROWS).fill()
            .map(() => new Array(PLAYFIELD_COLUMNS).fill(0));
        
    }
}