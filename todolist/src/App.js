import './assets/Global.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header/Header';
import ToDoList from './components/toDoList/ToDoList';

function App() {
  return (
    <div className="App bg-dark text-light">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
