import './App.css';
import CardShrol from './components/CardShrol';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='block1'>        <a className='App-link' href='https://www.rshu.edu.ua/'>
          РДГУ
        </a>
        </div>
        <div className='block2'>
          <span>ГРУПА ІПЗ-21 </span>
        </div>
      </header>
      <main>
        
        <CardShrol/>
        <hr/>
        <h2>Список студентів</h2>
        <hr/>
        {/* карти студентів */}


      </main>
    </div>
  );
}

export default App;
