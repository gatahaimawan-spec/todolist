function tutupdanfokus() {
document.getElementById('check').checked = false;
document.getElementById('todo-input').focus();
if (checkbox){
    checkbox.checked = false;
}
}
 if (InputTeks){
    setTimeout(() => {
        InputTeks.focus();
    }, 300);
 }