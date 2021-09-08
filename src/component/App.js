import React,{Component} from 'react';
import './App.css';
import FoodContainer from '../container/food-list';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wellcome">
          <h1>Wellcome to react with redux project</h1>
        </div>
        <div className="content">
          <h2>This is a  tutorial React  app with Redux</h2>
        </div>
        <h2>List of foods :</h2>
        <FoodContainer />
        <hr></hr>
        <h2>Food details :</h2>
      </header>
    </div>
  );
}
export default App;
