const app = document.getElementById('app');
const toggleDarkMode = document.getElementById('toggleDarkMode');
let darkMode = localStorage.getItem('darkMode')==='true';
if(darkMode) document.body.classList.add('dark-mode');
toggleDarkMode.onclick = ()=>{
document.body.classList.toggle('dark-mode');
darkMode = document.body.classList.contains('dark-mode');
localStorage.setItem('darkMode',darkMode);
};


let meals = JSON.parse(localStorage.getItem('mealHistory'))||[];
function render(){
app.innerHTML = '<h1>Mis Comidas</h1>'; // aquí iría el render completo de tus comidas, modales y botones
}
render();
