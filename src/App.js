import { Component } from 'react';
import './App.css';
import { Cardlist } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';
class App extends Component{
  constructor(){
    super();
     
    this.state ={ 
      monsters : [ ],
      searchField : ''
    }; 
  }
  componentDidMount(){

    fetch("https://jsonplaceholder.typicode.com/users")
    .then (response => response.json())
    .then (users => this.setState({monsters: users})) 
  }
handleChange = (e) =>  {
  this.setState({searchField : e.target.value})
}


  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
     
          <div className="App">
            <h1> Monsters ROlodex </h1>

            <SearchBox
            placeholder='Search Monsters'
            handleChange={this.handleChange}
            />
            
           <Cardlist monsters = {filteredMonsters} /> 
          
          </div>
        );
  } 
}

export default App;
