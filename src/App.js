import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar title="ProjectTitle" />
      <Button/>
      <Card/>
      <Card/>
    </div>
  );
}

export default App;
