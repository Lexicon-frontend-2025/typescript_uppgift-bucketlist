/**
 * Tar bort alla barn-element från ett givet föräldra-element.
 * @param parentElement Föräldra-elementet vars barn ska tas bort.
 */
export function clearChildren(parentElement: HTMLElement): void {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

/**
 * Skapar ett nytt HTML-element med angiven tagg och valfria CSS-klasser.
 * @param tagName HTML-tagg att skapa (t.ex. 'div', 'p', 'button').
 * @param classNames Valfria CSS-klasser att lägga till.
 * @returns Det skapade HTMLElementet.
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    ...classNames: string[]
): HTMLElementTagNameMap[K] {
    const element = document.createElement(tagName);
    if (classNames.length > 0) {
        element.classList.add(...classNames);
    }
    return element;
}