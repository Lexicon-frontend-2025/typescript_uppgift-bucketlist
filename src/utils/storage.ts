import { Dream } from "../models/dreams";
import { dreams as defaultDreams } from "../variables.js";

export function getNameFromLS(): string {
    return localStorage.getItem("currentUser") ?? "";
};

export function getDreams(): Dream[] {
    const LSdreams = localStorage.getItem("dreams");
    return LSdreams ? JSON.parse(LSdreams) : defaultDreams;
};