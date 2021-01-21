import logo from './logo.svg';
import './App.css';
import Home from './pages/home/index.jsx'
import { store } from './store'
import ComA from './pages/comA/index.jsx'
import ComB from './pages/comB/index.jsx'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComA />
        <ComB />
      </div>
    </Provider>
  );
}

export default App;
