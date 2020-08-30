import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

// Tutorial  https://www.youtube.com/watch?v=WQMglp-JASk&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=17

class App extends Component {
  state = {
    ninjas : [
      {name: 'Ryu', age: 30, belt: 'Black', id:1},
      {name: 'Farry', age: 24, belt: 'Black', id:2},
      {name: 'Def', age: 20, belt: 'Black', id:3}
    ]
  }
  // Episode 18
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  // Episode 19
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id 
    });
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount() {
    console.log('compinent mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('compontent updates');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <p>Sup</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;