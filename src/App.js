import React,{Component} from 'react';
import Ninja from './Ninja';
import './App.css';
 
class  App extends Component  {
  state = {
    ninja:[
    {name: 'Shin', age: '18', hair_color: 'black',planet:'Earth 212',race:'Chinese', id:1},
    {name: 'Kakashi', age: '28', hair_color: 'Yellow',planet:'Mars',race:'Arab',  id:2},
    {name: 'Asta', age: '17', hair_color: 'white',planet:'Jupiter',race:'Asian', id:3},
    {name: 'Yuno', age :'17' ,hair_color:'Red',planet:'Venus',race:'Caucasian', id: 4}
  
  ]
 
}

  render(){
    
  return (
    <div className="App">
      
        <p className ='name_component'>
        Names Component 
    
        </p>    
        
    <hr/>
    <Ninja ninja={this.state.ninja}/>


 
    </div>
  );
}
}
export default App;
