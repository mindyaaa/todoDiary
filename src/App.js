import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New.';


function App() {
  return (
    <BrowserRouter>
      <div className='MainPage'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />}/>
          <Route path='/diary' element={<Diary />}/>
          <Route path='/edit/:id' element={<Edit />}/>
          <Route path='/new' element={<New />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
