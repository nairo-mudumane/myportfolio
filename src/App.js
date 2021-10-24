import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './global/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
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
    </BrowserRouter>
  );
}

export default App;
