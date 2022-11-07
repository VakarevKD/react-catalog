import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import App from './App';
import './style.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
	<Provider store={ store }>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
