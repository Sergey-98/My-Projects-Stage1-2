import './global.css';
import { Slider } from './components/rangeSlider/sliders';
import { clearFilters } from './components/filter/clearFilters/clearfilters';
import { buttons } from './components/changeButtons/changeButtons';
import { search } from './components/search/search';

buttons();
Slider();
clearFilters();
search();
