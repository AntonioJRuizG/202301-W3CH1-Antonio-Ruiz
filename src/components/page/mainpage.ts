// Aqui tenemos un componente
import { Component, InsertPosition } from '../component/component';

// ESTO ES LA CLASE CONCRETA
export class MainPage extends Component {
  // Va a tener un selector, un template que depende del header, y un mtodo template
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate(); // Delegamos a un método crear el templte para no escribilo aui directamente
    this.render('afterbegin');

  }

  private createTemplate() {
    return `

<ul class="characters-list row list-unstyled">

    </ul>

  `;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}

// EN ALGUN LADO ALGUIEN QUERRÁ ALGUN NEW HEADER
// new Header('.foo');

// Ver components.html
