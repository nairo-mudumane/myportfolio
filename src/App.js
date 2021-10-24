import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './global/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import SmoothScrollbar from './components/data/SmoothScrollbar';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <SmoothScrollbar>
        <Routes>
          <Route
            end
            exat
            path="/"
            element={
              <div>
                <p>home</p>
              </div>
            }
          />
        </Routes>
      </SmoothScrollbar>
    </BrowserRouter>
  );
}

export default App;
