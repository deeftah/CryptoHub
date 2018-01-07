import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

 class Main extends Component {
   constructor(props) {
     super(props);
     this.state = {
       message:'',
     };
   }
   render() {
     return(
       <div>
        <Grid fluid={true}>
          <Row>
          <Col xs={12} sm={12} md={6} lg={6} >
           <p>Hey there</p>
           </Col>
           <Col xs={12} sm={12} md={6} lg={6}>
           <p>Hello</p>
           </Col>
          </Row>
        </Grid
       </div>
     );
   }
 }

export default Main;
