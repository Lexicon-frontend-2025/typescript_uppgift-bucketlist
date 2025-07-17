/**
 * Tar bort alla barn-element från ett givet föräldra-element.
 * @param parentElement Föräldra-elementet vars barn ska tas bort.
 */
export function clearChildren(parentElement: HTMLElement): void {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}