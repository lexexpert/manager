import React from 'react';
import {Picker, Text} from 'react-native';
import {connect} from "react-redux";
import {employeeUpdate} from "../actions";
import {Card, CardSection, Input, Button} from "./common";

class EmployeeCreate extends React.Component {
  render(){
    return (
      <Card>
        <CardSection>
          <Input
            label={'Name'}
            placeholder={'John'}
            value={this.props.name}
            onChangeText={name => this.props.employeeUpdate({ prop: 'name', value: name })}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Phone'}
            placeholder={'123-456-7890'}
            value={this.props.phone}
            onChangeText={phone => this.props.employeeUpdate({ prop: 'phone', value: phone })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'row' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
          >
            <Picker.item label={'Monday'} value={'Monday'} />
            <Picker.item label={'Tuesday'} value={'Tuesday'} />
            <Picker.item label={'Wednesday'} value={'Wednesday'} />
            <Picker.item label={'Thursday'} value={'Thursday'} />
            <Picker.item label={'Friday'} value={'Friday'} />
            <Picker.item label={'Saturday'} value={'Saturday'} />
            <Picker.item label={'Sunday'} value={'Sunday'} />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 82,
    alignSelf: 'center'
  }
};

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);
