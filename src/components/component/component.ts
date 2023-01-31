export type InsertPosition =
  | 'afterbegin'
  | 'afterend'
  | 'beforebegin'
  | 'beforeend';

export abstract class Component {
  // La hacemos abstract para que sea padre de todas las demas clases
  // Todos los componentes van a tener un selector y un template
  selector!: string;
  element!: HTMLElement;
  template!: string;
  // Constructor() {}  no se necesita constructor

  // eslint-disable-next-line no-unused-vars
  render(place: InsertPosition) {
    const element = document.querySelector(this.selector) as HTMLElement;
    element.insertAdjacentHTML('afterbegin', this.template);
  }
}
