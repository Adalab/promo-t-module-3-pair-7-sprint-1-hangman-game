import '../scss/main.scss';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);
  const wordLetters = word.split('');
  
  
  const renderSolutionLetters = () => {
    return wordLetters.map((oneLetter, index)=> {
      if (userLetters.includes(oneLetter)) {
        return <li className="letter" key={index}>{oneLetter}</li>
      } else {
        return <li className="letter" key={index}></li>
      }
    })
  };

  const renderErrorLetters = () => {
    return userLetters.map((oneLetter, index) => {
      if(!wordLetters.includes(oneLetter)) {
        return <li className="letter" key={index}>{oneLetter}</li>
      }
      if(userLetters.includes(oneLetter)) {
        return <li className="letter" key={index}></li>
      }
    })
  };

  const handleLetter = (ev) => {
    const regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]/;
    const match = regex.test(ev.target.value);
    if (match || ev.target.value === '') {
      setLastLetter(ev.target.value);
      if (ev.target.value !== '' && !userLetters.includes(ev.target.value)) {
      setUserLetters([...userLetters, ev.target.value])
      };
    };
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);
  };

  
  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'>
              {renderSolutionLetters()}
            </ul>
          </div>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>
              {renderErrorLetters()}
            </ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              value={lastLetter}
              onChange={handleLetter}
            />
          </form>
          <button onClick={handleClick}>Incrementar</button>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
    </div>
  );
}

export default App;
