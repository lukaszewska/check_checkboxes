const checkboxes = document.querySelectorAll('input[type="checkbox"');
console.log(checkboxes);

let lastChecked;
function handleCheck(e) {
    let inBetween = false; //zmienne pomiędzy checkami są false
    if(e.shiftKey && this.checked) { //jeśli shift jest wciśniety a my zaznaczamy (a nie odznaczamy)
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))