import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monster : [
        {
          name: 'Linda',
          key : '1'
        },
        {
          name: 'Frank',
          key : '2'
        },
        {
          name: 'Jacky',
          key : '3'
        },
        {
          name:'Andrei',
          key : '4'
        }
      ]
    
      
    }
  }
  render (){
    return (
      <div className="App">
        {
          this.state.monster.map((monster) => {

            return (
              <div  key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            ) 
          } )
        }
  
      </div>
    ); 
  }

}

export default App;
