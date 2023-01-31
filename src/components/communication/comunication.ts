// Aqui tenemos un componente
import { Component, InsertPosition } from '../component/component';

// ESTO ES LA CLASE CONCRETA
export class Comunication extends Component {
  // Va a tener un selector, un template que depende del header, y un mtodo template
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate(); // Delegamos a un método crear el templte para no escribilo aui directamente
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <p class="comunications__text display-1">Una frase que dice alguien</p>
    <img class="comunications__picture" src="img/no-one.jpg" alt="Nombre y familia del que habla" />
  `;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}

// EN ALGUN LADO ALGUIEN QUERRÁ ALGUN NEW HEADER
// new Header('.foo');

// Ver components.html
