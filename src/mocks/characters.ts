// Este es el origen de los datos que necesito para trabajar porque no tenemos backend o servidor de donde extraerlos.
// Se podría llamar CHARACKTERS_MOCK en mayuscula, porque es una constante muy constante.
// Como es un módulo tiene que exportar cosas

import { Character } from '../models/character';
import { King } from '../models/king';
import { Fighter } from '../models/fighter';
import { Adviser } from '../models/adviser';
import { Squire } from '../models/squire';
// Import { Taskstructure } from '../tasks';

export const mockCharacters: Character[] = [
  new King('Joffrey', 'Barathon', 23, 2),
  new Fighter('Jaime', 'Lannister', 22, 'sword', 7.8),
  new Fighter('Daenerys', 'Targaryen ', 24, 'Dagger', 2),
];

mockCharacters.push(new Adviser('Tyrion', 'Lannister', 30, mockCharacters[2]));
mockCharacters.push(new Squire('Bronn', 'none', 40, mockCharacters[1].name));

// MockCharacters.push(new Adviser('Tyrion', 'Lannister', 34, mockCharacters[2])),
