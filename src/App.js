import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header className="App-header">
      <h1>Welcome to {props.name}'s {props.store}</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Eve" store="kitchen"/>
    </div>
  );
}

export default App;
