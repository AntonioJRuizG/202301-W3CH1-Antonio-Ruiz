/* eslint-disable no-new */

import { MainPage } from './components/page/mainpage';
import { Card } from './components/card/card';
import { Comunication } from './components/communication/comunication';

import './style.css';

new MainPage('.app');
new Card('.characters-list');
new Comunication('.comunications');
