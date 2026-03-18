import {StrictMode} from "react";
import {createRoot} from 'react-dom/client';
import {DataTableProvider} from "./providers";
import {App} from './App.tsx';
import 'antd/dist/reset.css';
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <DataTableProvider>
          <App />
      </DataTableProvider>

  </StrictMode>,
);
