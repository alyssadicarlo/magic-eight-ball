import Konami from 'konami';

import SearchForm from './components/SearchForm';

import './App.css';

function App() {
  let easter_egg = new Konami('https://portfolio.alyssadicarlo.com');

  return (
    <div className="App">
      <br />
      <h1>Magic Eight Ball</h1>
      <br />
      <SearchForm />
    </div>
  );
}

export default App;
