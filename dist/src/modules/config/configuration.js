"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_port = exports.db_password = exports.db_user = exports.db_name = exports.db_host = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db_host = String(process.env.DB_HOST) || '';
exports.db_name = String(process.env.DB_NAME) || '';
exports.db_user = String(process.env.DB_USER) || '';
exports.db_password = String(process.env.DB_PASSWORD) || '';
exports.db_port = parseInt(process.env.DB_PORT) || 3000;
//# sourceMappingURL=configuration.js.map