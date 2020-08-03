import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import { Provider } from 'react-redux'
import store from "./store"
const App = () => (
  <Provider store={store}>
    <main>

      <TodoInput />
      <TodoList />


    </main>
  </Provider>

)

export default App;
