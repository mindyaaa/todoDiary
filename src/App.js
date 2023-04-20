import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import NewDiary from './pages/NewDiary';
import React, { useReducer } from 'react';

const initialState = {
  count : 1,
  diary :[
      {
      id : Date.now(),
      author: "MINDY"
  }]
};

const reducer = (state, action) => {
  console.log('리듀서 작동', state, action);

  switch(action.type) {
      case "add" : {
          const newDiary = {
              id:Date.now(),
              author:action.payload.author
          } ;
          return {
              count : state.count+1,
              diary : [...state.diary, newDiary]
          }
      }

      case "remove" : {
          return state
      }

      case "edit" : {
          return state
      }

      default : return state
  }
};



export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();


function App() {

  const [diaryList, dispatch] = useReducer(reducer, initialState);

  // const onCreate = (author) => {
  //   dispatch({type:"add", payload:{author}})
  // };
  
  // const onRemove = () => {
  //   dispatch({type:"remove"})
  // };
  
  // const onEdit = () => {
  //   dispatch({type:"edit"})
  // };


  return (
    <DiaryStateContext.Provider value={diaryList}>
      <DiaryDispatchContext.Provider value={dispatch}>
      <BrowserRouter>

        <div className='MainPage'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todo' element={<Todo />}/>
            <Route path='/diary' element={<Diary />}/>
            <Route path='/edit/:id' element={<Edit />}/>
            <Route path='/newDiary' element={<NewDiary />}/>
          </Routes>
        </div>


      </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>


  );
}

export default App;
