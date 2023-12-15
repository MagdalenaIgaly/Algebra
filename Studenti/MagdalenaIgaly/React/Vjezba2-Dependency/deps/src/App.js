import randomstring from 'randomstring';

import './App.css';

function App() {

  return (
    <div className="App">
      <p>Moj random string: {randomstring.generate()}</p>
    </div>
  );
}

export default App;
