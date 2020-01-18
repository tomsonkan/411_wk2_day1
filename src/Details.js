import React, {Component} from 'react'

class Details extends Component {
  state = {
    toggle: false,
    show: true
  }

//function displays detail once button is pressed
handleDetail = () => {
  const newState = !this.state.toggle;
  // const newInfo = !this.state.show;
  this.setState({
    toggle: newState,
    show: !this.state.show
  })
  console.log("**This state**", this.state.toggle)
}

render() {

  const {toggle} = this.state;
  const textValue = toggle ? "Hide Detail" : "Show Detail";
  const buttonColor = toggle ? "blackButton" : "whiteButton";

  return <div>
    <h1>{this.props.person.name.first} {this.props.person.name.last} </h1>
              <img src = {this.props.person.picture.large} alt = "undefined"></img>
      <button 
        onClick={() => this.handleDetail()}
        style={{margin:5, flex:1,height:60,backgroundColor:buttonColor,justifyContent:'center'}}>
        {textValue}
      </button>
      {!this.state.show && <Child person = {this.props.person}/>}
  </div>
}
}

//created Child formatted   to put in JSX
const Child = ({person}) => {
  console.log("***check***", person)
  let {street, city, state, country} = person.location
  return <>
  
  <div className='addlInfo' >
  <ul>
  <li>{street.number} {street.name} 
  <p>{city} {state} {country}  </p>
  </li>
  <li>
    { person.email}
  </li>
  </ul>
    </div>
  </>
}


  export default Details