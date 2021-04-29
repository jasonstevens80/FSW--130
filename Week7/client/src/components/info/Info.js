import React, { Component } from "react";
import { Link } from "react-router-dom";
import { OviContextConsumer } from "../ovi/OviContext";
import Header from "./infoHeader"
import "./info.css";

class Info extends Component {
  render() {
    return (
      <OviContextConsumer>
        {(ovi) => (
          <div>
              <Header/>
            <div class="info-container">
              <div className="info-item">
                <div>
                  <Link to="/" className="btn-2 btn-secondary">
                    HOME
                  </Link>
                </div>
                <div id="emailDisplay">
                <p>Thank you for you signing up.</p>
                  <p>
                    We will add <p className="bold">{ovi.email}</p>
                  </p>
                  <p>to our mailing list</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </OviContextConsumer>
    );
  }
}

export default Info;