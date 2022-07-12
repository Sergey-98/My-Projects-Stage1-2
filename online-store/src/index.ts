import './global.css';
import { drawCardList } from './components/createCard/cardBlock';
import { changeDataFilter } from './components/filter/changeFilter';
import { buttons } from './components/changeButtons/changeButtons';
import data from './DateBase.json';

drawCardList(data);
buttons();
