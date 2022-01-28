
import { ThemeProvider } from '@mui/system';

import { LandingPage } from './pages';
import { Layout } from './components';
import theme from './assets/theme/theme';
import './App.css';

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <LandingPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
