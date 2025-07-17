import { Dream } from "../models/dreams";
import { dreams as defaultDreams } from "../variables.js";

export function getNameFromLocalStorage(): string {
    return localStorage.getItem("currentUser") ?? "";
};
export function setUsernameInLocalStorage(username: string): void {
    localStorage.setItem("currentUser", username);
};

export function getDreamsFromLocalStorage(): Dream[] {
    const LSdreams = localStorage.getItem("dreams");
    return LSdreams ? JSON.parse(LSdreams) : defaultDreams;
};

export function saveDreamsToLocalStorage(dreamsList: Dream[]): void {
    localStorage.setItem("dreams", JSON.stringify(dreamsList));
};