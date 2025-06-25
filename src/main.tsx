import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import AppRoutes from './routes/AppRoutes.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
)
