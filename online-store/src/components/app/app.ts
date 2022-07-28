import './app.css';
import { Slider } from '../rangeSlider/sliders';
import { clearFilters } from '../filter/clearFilters/clearfilters';
import { resetAll } from '../filter/clearFilters/resetAll';
import { changeButtons } from '../changeButtons/changeButtons';
import { search } from '../search/search';
import { activateButtons } from '../changeButtons/activeLocalButtons';

function App() {
  changeButtons();
  Slider();
  clearFilters();
  resetAll();
  search();
  activateButtons();
}

export default App;
