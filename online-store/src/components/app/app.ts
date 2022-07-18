import './app.css';
import { Slider } from '../rangeSlider/sliders';
import { clearFilters } from '../filter/clearFilters/clearfilters';
import { resetAll } from '../filter/clearFilters/resetAll';
import { buttons } from '../changeButtons/changeButtons';
import { search } from '../search/search';
import { activeButtons } from '../changeButtons/activeLocalButtons';
class App {
  public start(): void {
    buttons();
    Slider();
    clearFilters();
    resetAll();
    search();
    activeButtons();
  }
}

export default App;
