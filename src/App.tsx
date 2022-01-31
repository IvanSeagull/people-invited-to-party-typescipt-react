import React, {useState} from 'react';

import './App.css';
import List from "./components/List"
import AddToList from './components/AddToList';

export interface IState{
  people:{
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}


function App() {
  const [people, setPeople] = useState<IState['people']>([{
    name: "LeBron James",
    url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg",
    age: 34,
    note: "Good guy"
  }])


  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
