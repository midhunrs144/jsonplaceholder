import React, { Component } from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		buttonName:"My Post",
    	isToggleOn: true};

    
    this.handleClick = this.handleClick.bind(this);
  }


	//toggles the state in response with toggle button
	handleClick() {
		
		this.state.buttonName=="My Post"? this.setState({buttonName:"All Post"}) : this.setState({buttonName:"My Post"});
		this.props.toggle();
		
		this.setState(function(prevState) {
			
			return {isToggleOn: !prevState.isToggleOn};

		});
	}
	
	

  render() {
    return (
		//toggles the button name fetched from state 
      <button ref="button" onClick={this.handleClick}>
       {this.state.buttonName}

      </button>
    );
  }
}

export default Toggle;