import React from 'react';
import {Card, CardSection, Input, Button} from "./common";

class EmployeeCreate extends React.Component {
  render(){
    return (
      <Card>
        <CardSection>
          <Input label={'Name'} placeholder={'John'}/>
        </CardSection>

        <CardSection>
          <Input label={'Phone'} placeholder={'123-456-7890'}/>
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeCreate;
