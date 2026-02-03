
export function toggleButton(b) {
    b.disabled ? b.className = "w3-green w3-padding" : b.className = "w3-gray w3-padding";
    b.disabled = !b.disabled;
}