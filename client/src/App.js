import { ThemeProvider, createTheme } from '@mui/material';
import MainScreen from './pages/mainscreen/MainScreen';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#333'
    }
  }
})

function App() {

  return (
    <div>
      <MainScreen />
    </div>
  );
}

export default App;
