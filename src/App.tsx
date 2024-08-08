import './App.scss';
import Categories from './components/Categories';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Categories />
    </div>
  );
}

export default App;
