"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const bot_1 = require("./bot");
class Initializer {
    constructor(config) {
        this._bot = new bot_1.Bot(config);
    }
}
exports.Initializer = Initializer;
new Initializer(config_1.CONFIG);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBa0M7QUFDbEMsK0JBQTJCO0FBRzNCLE1BQWEsV0FBVztJQUlwQixZQUFZLE1BQWU7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM5QixDQUFDO0NBQ0w7QUFQRCxrQ0FPQztBQUVELElBQUksV0FBVyxDQUFDLGVBQU0sQ0FBQyxDQUFDIn0=