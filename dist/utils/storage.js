import { dreams as defaultDreams } from "../variables.js";
export function getNameFromLS() {
    var _a;
    return (_a = localStorage.getItem("currentUser")) !== null && _a !== void 0 ? _a : "";
}
;
export function getDreams() {
    const LSdreams = localStorage.getItem("dreams");
    return LSdreams ? JSON.parse(LSdreams) : defaultDreams;
}
;
//# sourceMappingURL=storage.js.map