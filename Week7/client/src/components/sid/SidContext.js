import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class SidContextProvider extends Component {
  state = {
    achievements: [
      {
        factOne: "Info",
        factTwo: "D.O.B. 8/7/87",
        factThree: "Cole, Harbour, NS, CAN",
        forth: "Center",
      },
      {
        factOne: "Drafted",
        factTwo: "2005",
        factThree: "#1 Pick",
        forth: "Pittsburgh Penguins",
      },
      {
        factOne: "Stats",
        factTwo: "Games: 1,033",
        factThree: "Goals: 482",
        forth: "Assists: 837",
        fifth: "Points: 1319"
      },
      {
        factOne: "Awards",
        factTwo: "Ted Lindsay Award x 3",
        factThree: "Art Ross Trophy x 2",
        forth: "Hart Memorila Trophy x 2",
        fifth: "Rocket Richard Trophy x 2",
      },
      {
          factOne: "Post Season",
          factTwo: "Games: 168",
          factThree: "Goals: 68",
          forth: "Assists: 121",
          fifth: "Points: 189"
      },
      {
        factOne: "Other Awards",
        factTwo: "Stanley Cup Champion x 3",
        factThree: "Conn Smythe Award x 2",
        forth: "All-Star x 9",
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
          fifth: this.state.fifth,
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { SidContextProvider, Consumer as SidContextConsumer };