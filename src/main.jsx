  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';
  import App from './App.jsx';
  import './index.css';

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );



// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';

// const rootElement = document.getElementById('root');
// if (rootElement) {
//   createRoot(rootElement).render(
//     <StrictMode>
//       <App />
//     </StrictMode>
//   );
// }
