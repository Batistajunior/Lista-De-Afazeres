import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Importe o seu store Redux
import App from './App'; // Importe o componente raiz da sua aplicação

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
