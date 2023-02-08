import { Component, InsertPosition } from '../component/component';

import { mockCharacters } from '../../mocks/characters';

export class Card extends Component {
  // Va a tener un selector, un template que depende del header, y un mtodo template
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string) {
    super(); // EL SUPER ES NECESARIO, CARD ES HIJO DE COMPONENT, LO PRIMERO QUE TIENE QUE HACER ES USAR LAS COSAS DEL PADRE
    this.template = this.createTemplate(); // Delegamos a un método crear el templte para no escribilo aui directamente
    this.render('afterbegin');
  }

  private createTemplate() {
    let characterCard = '';

    mockCharacters.forEach((char) => {
      characterCard += `
    <li class="character col">
        <div class="card character__card">


    <img src="../images/${char.name.toLowerCase()}.jpg" alt="${char.name} ${
        char.family
      }" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${char.name} ${
        char.family
      }</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${char.age} años</li>
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

                <button class="character__action__action btn">habla</button>
                <button class="character__action__action btn">muere</button>
              </div>
            </div>
          </div>          <i class="emoji"></i>
          </div>
      </li>
  `;
 /*  ${char.name.toLowerCase()} */

      /* Const charButton = document.querySelector(
        char.name.toLowerCase()__action .btn'
      );
      charButton.addEventListener('click', char.greetings()); */
    });

    return characterCard;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}
