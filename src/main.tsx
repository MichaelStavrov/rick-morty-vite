import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import App from '@/components/App';
import '@mantine/core/styles.css';
import './index.scss';

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </BrowserRouter>
);
