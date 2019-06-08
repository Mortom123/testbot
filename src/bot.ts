import * as Discord from 'discord.js';
import * as winston from 'winston';
import { IConfig } from './api';
import * as util from 'util'

export class Bot {

    private _client: Discord.Client;
    private _prefix: string;
    private _logger: winston.Logger

    constructor(config: IConfig) {

        this._client = new Discord.Client();
        this._prefix = config.prefix;
        this._logger = winston.createLogger({
            level: 'debug',
            format: winston.format.json(),
            transports: [
                new winston.transports.File({ filename: 'error.log', level: 'error' }),
                new winston.transports.File({ filename: 'combined.log' }),
               // winston.transports.Console
            ]
        })
        this.setupEvents()
        this._client.login(String(config.token))
    }

    setupEvents() {
        this._client.on("ready", () => {
            this.info("Ready to go")
        })

        this._client.on("message", msg => this.handleMessage(msg))
    }

    handleMessage(msg: Discord.Message) {
        // ignores bot messages
        if (msg.author.bot) { return; }

        //ignores messages without specified prefix
        if (!msg.content.startsWith(this._prefix)) { return ;}


        console.log(util.inspect(msg, false, null, true))
        msg.channel.send(`${msg.author} has the big gay`)
    }

    info(msg: String) {
        this._logger.info(msg)
    }

}
