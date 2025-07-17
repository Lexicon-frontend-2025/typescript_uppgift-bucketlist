import { dreams as defaultDreams } from "../variables.js";
export function getNameFromLocalStorage() {
    var _a;
    return (_a = localStorage.getItem("currentUser")) !== null && _a !== void 0 ? _a : "";
}
;
export function setUsernameInLocalStorage(username) {
    localStorage.setItem("currentUser", username);
}
;
export function getDreamsFromLocalStorage() {
    const LSdreams = localStorage.getItem("dreams");
    return LSdreams ? JSON.parse(LSdreams) : defaultDreams;
}
;
export function saveDreamsToLocalStorage(dreamsList) {
    localStorage.setItem("dreams", JSON.stringify(dreamsList));
}
;
//# sourceMappingURL=storage.js.map