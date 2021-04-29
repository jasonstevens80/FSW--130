import React, { Component } from "react";
import { OviContextConsumer } from "./OviContext";
import OviHeader from "./OviHeader"
import Footer from "../footer/Footer"
import "../alignment.css"
import "./OviImage.css"

class Ovi extends Component {
  render() {
    return (
      <OviContextConsumer>
        {(ovi) => (
          <div>
            <OviHeader/>
            <div className="ovi-bg">
              <div className="items">
                {ovi.achievements.map((index) => (
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
      </OviContextConsumer>
    );
  }
}

export default Ovi;