import React, { Component } from "react";
import { SidContextConsumer } from "./SidContext";
import SidHeader from "./SidHeader"
import Footer from "../footer/Footer"
import "../alignment.css"
import "./SidImage.css"

class Sid extends Component {
  render() {
    return (
      <SidContextConsumer>
        {(sid) => (
          <div>
            <SidHeader/>
            <div className="sid-bg">
              <div className="items">
              {sid.achievements.map((index) => (
                <div className="page-content">
                  <div className="card">
                    <div className="content">
                      <h2 className="title">{index.factOne}</h2>
                      <p className="copy">{index.factTwo}</p>
                      <p className="copy">{index.factThree}</p>
                      <p className="copy">{index.forth}</p>
                      <p className="copy">{index.fifth}</p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
            <Footer/>
          </div>
        )}
      </SidContextConsumer>
    );
  }
}

export default Sid;