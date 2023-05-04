import ReactDOM from 'react-dom/client';
import { ROUTER } from './router';
import { RouterProvider } from 'react-router-dom';

import './server';

function App() {
  return (<RouterProvider router={ROUTER} />)
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
