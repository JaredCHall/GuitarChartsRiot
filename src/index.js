import { mount } from "riot";
import { register} from 'riot'

// Import components
import App from './components/App.riot'

// Register components globally
register('App', App)

mount('[data-riot-component]')