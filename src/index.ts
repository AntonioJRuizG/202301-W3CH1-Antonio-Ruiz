import { mockTasks } from './mocks/characters';
import { Taskstructure } from './tasks';
console.log('Day 2');
const root = document.querySelector('#root') as HTMLDivElement;
const headerTemplate = `<header class="header">
    <h1>Learning DOMMM</h1>
    <p>Segundo díaaa</p>
    <button> BOTON </button>
  </header>
  `;

root.insertAdjacentHTML('afterbegin', headerTemplate);

const renderList = (data: Taskstructure[]) => {
  let tasksTemplate = '';

  mockTasks.forEach((item) => {
    tasksTemplate = '';
    root.insertAdjacentHTML('beforebegin', tasksTemplate);
    data.forEach((item) => {
      `<p>
    id: ${item.id},
    title: ${item.title},
    responsible: ${item.responsible},
    isComplete: ${item.isComplete}</p>
    <button id="${item.id}">bBoton ${item.id}</button>`;
    });
  });
};

renderList();

const handlerDelete = (event: Event) => {
  // Como estamos en TS hay que tupar el event, para eso hay un objeto especial llamado Event
  const element = event.target as HTMLButtonElement;
  const id = Number(element.dataset.id);
  console.log('click', id);
  // E console.dir(id); // Cuando se quiere hacer un console.log de un elemento html y verlo bien en dom
  const data = mockTasks.filter((item) => item.id !== id);
  console.log(data);
  document.querySelector('.lista')!.innerHTML = '';
  renderList(data);
};

const buttons = document.querySelectorAll('button');
buttons.forEach((item) => item.addEventListener('click', handlerDelete)); // En término sistemico maneja el clic, logica de negocios lo que hace es la actividad del click (borrar algo, submit..)
