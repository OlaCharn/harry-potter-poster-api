import './App.css';
import CharactersApi from './CharactersApi';
import CharactersAll from './CharactersAll';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ChangeBooksMovies from './ChangeBooksMovies';
import Spell from './Spells';
import Heading from './Heading';
import Expression from './Expression';
import Footer from './Footer';


function App() {
  return(
    <Router>

    <div className='Width' >
      <div className='BorderForAll'>
          <div>
              <Heading />
          </div>
      <div className='MainDivider'>
        <div className='ExprCharacters' >
              <Expression />        
                  <div className='DivideLine'>
                          <nav className='NavBar'>
                              <Link to="/CharactersAll" className='LinkDecor'> <p className='NavChar' > CHARACTERS </p> </Link>
                          </nav>
                          <Routes  >
                              <Route path="/"  element= { <  CharactersAll /> } />
                              <Route path="/CharactersAll" element={< CharactersAll />} />
                              <Route path="/CharactersApi/:id" element={ < CharactersApi /> } />
                          </Routes>
                  </div>
        </div>
        <div className='BooksMoviesSpells'>
            <ChangeBooksMovies />
            <Spell />
        </div>

      </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
    </Router>

  )

  
}

export default App;
