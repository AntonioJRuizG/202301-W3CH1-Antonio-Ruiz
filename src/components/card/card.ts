// Aqui tenemos un componente
export abstract class Component {
  // La hacemos abstract para que sea padre de todas las demas clases
  // Todos los componentes van a tener un selector y un template
  selector!: string;
  element!: HTMLElement;
  template!: string;
  // Constructor() {}  no se necesita constructor

  render() {
    const element = document.querySelector(this.selector) as HTMLElement;
    element.insertAdjacentHTML('afterbegin', this.template);
  }
}

// ESTO ES LA CLASE CONCRETA
export class Header extends Component {
  // Va a tener un selector, un template que depende del header, y un mtodo template
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate(); // Delegamos a un método crear el templte para no escribilo aui directamente
    this.render();
  }

  private createTemplate() {
    return `<header class="header">
    <h1>Learning DOMMM</h1>
    <p>Segundo díaaa</p>
    <button> BOTON </button>
  </header>
  `;
  }
}

// EN ALGUN LADO ALGUIEN QUERRÁ ALGUN NEW HEADER
// new Header('.foo');

// Ver components.html
