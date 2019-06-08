import { CONFIG } from './config';
import { Bot } from './bot'
import { IConfig } from './api';

export class Initializer {

    private _bot: Bot

    constructor(config: IConfig) {
        this._bot = new Bot(config)
     }
}

new Initializer(CONFIG);
