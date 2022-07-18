import { Slider } from '../rangeSlider/sliders';
import { clearFilters } from '../filter/clearFilters/clearfilters';
import { resetAll } from '../filter/clearFilters/resetAll';
import { buttons } from '../changeButtons/changeButtons';
import { search } from '../search/search';

class App {
  public start(): void {
    buttons();
    Slider();
    clearFilters();
    resetAll();
    search();
  }
}

export default App;
