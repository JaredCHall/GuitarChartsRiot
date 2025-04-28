import { mount } from "riot";
import { register} from 'riot'

// Import components
import App from './components/app/App.riot'
import CircleOfFifths from "./components/circle-of-fifths/CircleOfFifths.riot";
import FingeringChart from "./components/fingering-chart/FingeringChart.riot";

// Register components globally
register('App', App)
register('circle-of-fifths', CircleOfFifths)
register('fingering-chart', FingeringChart)

mount('[data-riot-component]')