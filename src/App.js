import React, { Component } from 'react';
import './App.css';

// The main React component
class App extends Component {

	// init the state
	constructor(props) {
		super(props)
		this.state = {
			images: [`https://apod.nasa.gov/apod/image/1904/JMD_Rosette_Rotated.jpg`]
		}
	}

	// render the images
  render() {
    return (
      <div className='app'>
				<img src={this.state.images[0]} />
    	</div>
    );
  }
}

// export the app
export default App;
