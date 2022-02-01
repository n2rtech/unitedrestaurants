import React, { Fragment } from 'react';
import {Container} from 'reactstrap'
import {MAINTENANCE} from "../constant";
const Maintenance = (props) => {
    return (
        <Fragment>
        <div className="page-wrapper">
        <div className="error-wrapper maintenance-bg">
          <Container>
            <ul className="maintenance-icons">
              <li><i className="fa fa-cog"></i></li>
              <li><i className="fa fa-cog"></i></li>
              <li><i className="fa fa-cog"></i></li>
            </ul>
            <div className="maintenance-heading">
              <h2 className="headline">{MAINTENANCE}</h2>
            </div>
            <h4 className="sub-content">{"Our Site is Currently under maintenance We will be back Shortly"}<br/>{"Thank You For Patience"}</h4>
          </Container>
        </div>
      </div>
      </Fragment>
    );
}

export default Maintenance;