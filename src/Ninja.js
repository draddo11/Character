import React,{Component} from 'react';


class  Ninja extends Component {    
  render(){
    const { ninja } = this.props;
    const ninjaList = ninja.map(ninja => {
      return (
      <div className="ninja" key={ninja.id}>
      <div className='name'> Name:{ninja.name} </div>
      <div className='age'> Age:{ninja.age}</div>
      <div className='planet'> Planet:{ninja.planet}</div>
      <hr/>
      <div className='race'> Race:{ninja.race}</div>
      <hr/>
      <div className='hair_color'> Hair Color:{ninja.hair_color}</div>
      <hr/>
      </div>
      )
    })
     return (
      <div className="ninja-list">
      {ninjaList}
     
      </div>
     )
  }
}
   export default Ninja ;