import React, { Component } from 'react';
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
class JumbotronForm extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:8001');
    this.state = {
      connected: false,
      open: false,
      handleForm: (e) => {
        e.preventDefault();
        console.log('Button is clicked... sending data from frontend to backend.');
        const text = document.getElementById('exampleEmail').value;
        this.socket.send(JSON.stringify({
          event: 'text',
          test: text
        }));
      }
    };
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Search</Label>
          <Input type="text" id="exampleEmail" refs="messageText" placeholder="Choose news feed to add..." />
          <Button className="btn-primary" type="button" onClick={this.state.handleForm}>
          </Button>
        </FormGroup>
      </Form>
    );
  }
}
export default JumbotronForm;
