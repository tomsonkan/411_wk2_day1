import React, {Component} from 'react';
import Details from './Details';
import logo from './logo.svg';
import './App.css';

//isLoaded False since array has not been populated
class App extends Component {
  constructor(props) {
      super (props) 
        this.state = {
          isLoaded: false,
          users: [],
          uuid: []
        }
  }


  //fetches and loads list 
  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
    .then(res => res.json())
    .then(json => {
        this.setState({
          isLoaded: true,
          users: json.results,
        })
    })
    .catch(error => console.log('parsing failed'. error))
  }

  
//calling Details function from Details.js file
  render() {
    console.log(this.state);
    return (
      <>
      {this.state.users.map(person => (
      <div className="App" key ={person.login.uuid}>
              <Details person = {person}/>
      </div>
            ))}
      </>
    );
  }
}
  export default App;

