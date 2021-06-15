"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
var mariadb = __importStar(require("mariadb"));
var Repository = /** @class */ (function () {
    function Repository() {
        this.pool = mariadb.createPool({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'school',
            connectionLimit: 5
        });
    }
    Repository.prototype.initDB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 13, , 14]);
                        return [4 /*yield*/, this.pool.query("DELETE FROM unit")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.pool.query("DELETE FROM schoolclass")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.pool.query("DELETE FROM teacher")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.pool.query("INSERT INTO teacher VALUES (?,?,?,?)", [1, "Gerald", "Aistleitner", "U12"])];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.pool.query("INSERT INTO teacher VALUES (?,?,?,?)", [2, "Herbert", "Lackinger", "221"])];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.pool.query("INSERT INTO teacher VALUES (?,?,?,?)", [3, "Johannes", "Tumfahrt", "E42"])];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.pool.query("INSERT INTO schoolclass VALUES (?,?)", ["5BHITM", "135"])];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.pool.query("INSERT INTO schoolclass VALUES (?,?)", ["4BHITM", "136"])];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.pool.query("INSERT INTO schoolclass VALUES (?,?)", ["3BHITM", "137"])];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.pool.query("INSERT INTO unit VALUES (?,?,?,?,?,?)", [null, 1, 1, "SEW", 1, "3BHITM"])];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.pool.query("INSERT INTO unit VALUES (?,?,?,?,?,?)", [null, 1, 2, "SEW", 2, "4BHITM"])];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.pool.query("INSERT INTO unit VALUES (?,?,?,?,?,?)", [null, 1, 3, "INSY", 3, "5BHITM"])];
                    case 12:
                        _a.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        ex_1 = _a.sent();
                        console.log(ex_1);
                        return [3 /*break*/, 14];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    Repository.prototype.findAllTeachers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.pool.query("SELECT id, firstname, lastname, room FROM teacher")];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        ex_2 = _a.sent();
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Repository.prototype.findAllSchoolclasses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.pool.query("SELECT * FROM schoolclass")];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        ex_3 = _a.sent();
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Repository.prototype.findByClass = function (className) {
        return __awaiter(this, void 0, void 0, function () {
            var ex_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.pool.query("SELECT * FROM unit WHERE unit.schoolclassID = ?", [className])];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        ex_4 = _a.sent();
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Repository.prototype.saveUnit = function (unitForDatabase) {
        return __awaiter(this, void 0, void 0, function () {
            var ex_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(unitForDatabase.id == 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.pool.query("INSERT INTO unit VALUES (?,?,?,?,?,?)", [0, unitForDatabase.day, unitForDatabase.unit, unitForDatabase.subject, unitForDatabase.teacherID, unitForDatabase.schoolclassID])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.pool.query("update unit set subject=?, teacherID=? where id=?", [unitForDatabase.subject, unitForDatabase.teacherID, unitForDatabase.id])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        ex_5 = _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return Repository;
}());
exports.Repository = Repository;
