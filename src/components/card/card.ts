// Aqui tenemos un componente
import { Component, InsertPosition } from '../component/component';

// ESTO ES LA CLASE CONCRETA
export class Card extends Component {
  // Va a tener un selector, un template que depende del header, y un mtodo template
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate(); // Delegamos a un método crear el templte para no escribilo aui directamente
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <li class="character col">
        <div class="card character__card">


    <img src="img/no-one.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">Nombre y familia</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: X años</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: X</li>
                <li>Arma: XXX</li>
                <li>Destreza: X</li>
                <li>Peloteo: X</li>
                <li>Asesora a: X</li>
                <li>Sirve a: X</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
          </div>
      </li>
  `;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}

// EN ALGUN LADO ALGUIEN QUERRÁ ALGUN NEW HEADER
// new Header('.foo');

// Ver components.html