import ReactDOM from 'react-dom/client';
import { Router } from './router';

function App() {
  return (<Router />);
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
