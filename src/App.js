import './App.css';
import { dataSample } from './data';
import NameList from "./components/NameList"
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(dataSample)

  const clearData = () => {
    if (people.length > 0) {
      setPeople([])
    } else {
      setPeople(dataSample)
    }
  }
  return (
    <div className="App">
      <h1>{people.length} {people.length > 1 ? "birthdays" : "birthday"} today</h1>
      <NameList data={people} clearData={clearData} />
    </div>
  );
}

export default App;
