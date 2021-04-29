import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class OviContextProvider extends Component {
  state = {
    achievements: [
      {
        factOne: "Info",
        factTwo: "D.O.B. 9/17/1985",
        factThree: "Moscow, Russia",
        forth: "Position: Left-Wing",
      },
       
      {
        factOne: "Drafted",
        factTwo: "2004",
        factThree: "#1 Overall",
        forth: "Washington Capitals",
      },
      {
        factOne: "Stats",
        factTwo: "Games: 1,195",
        factThree: "Goals: 730",
        forth: "Assists: 590",
        fifth: "Points: 1320"
      },
      {
        factOne: "Awards",
        factTwo: "Calder Memorial Trophy",
        factThree: "Art Ross Trophy",
        forth: "Hart Memorila Trophy x 3",
        fifth: "Rocket Richard Trophy x 8",
        
      },
      {
        factOne: "Post Season",
        factTwo: "Games: 136",
        factThree: "Goals: 69",
        forth: "Assists: 62",
        fifth: "Points: 131"
      },
      {
        factOne: "Other Awards",
        factTwo: "Stanley Cup Champion",
        factThree: "Conn Smythe Award",
        forth: "All-Star x 12",
      },
    ],
    email: ""
  };

  emailUpdate = (email) => {
    this.setState({
      email: email
    }) 

  };

  render() {
    return (
      <Provider
        value={{
          achievements: this.state.achievements,
          factOne: this.state.factOne,
          factTwo: this.state.factTwo,
          factThree: this.state.factThree,
          forth: this.state.forth,
          fifth:this.state.fifth,
          
          email: this.state.email,
          emailUpdate: this.emailUpdate
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { OviContextProvider, Consumer as OviContextConsumer };