import './App.css';
import { Component } from "react";
import { Provider } from 'react-redux';
import store from "./redux/Store.js";
import { Phonebook } from "./Phonebook.js";

export class App extends Component {
render(){
  return (
    <Provider store={store}>
      <Phonebook>
      </Phonebook>
    </Provider>
  );
}
}

export default App;
