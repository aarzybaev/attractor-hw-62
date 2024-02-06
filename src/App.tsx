import {Route, Routes} from "react-router-dom";
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import Appbar from './components/Appbar/Appbar';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route
            path="/"
            element={(
              <Home/>
            )}
          />
          <Route
            path="/about"
            element={(
              <About/>
            )}
          />
          <Route
            path="/contacts"
            element={(
              <Contacts/>
            )}
          />
          <Route
            path="*"
            element={(
              <h3>Oops! 404</h3>
            )}
          />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
