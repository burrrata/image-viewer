import React, { Component } from 'react';
import './App.css';

// testing the random rotation
const APODURLs = [
'https://apod.nasa.gov/apod/image/1904/SaturnMoon_Schmitz_960.jpg',
'https://apod.nasa.gov/apod/image/1904/AzurePlumesNorway_Sutie_960.jpg',
'https://apod.nasa.gov/apod/image/1904/scorpio_guisard_960.jpg',
'https://apod.nasa.gov/apod/image/1904/ISS4panelMar28Addis1024.jpg',
'https://apod.nasa.gov/apod/image/1904/STScI-H-1912b-panstarrs1024.jpg',
'https://apod.nasa.gov/apod/image/1904/potw1913aM2_1024.jpg',
'https://apod.nasa.gov/apod/image/1904/HorseheadFlame_Zauner_960.jpg',
'https://apod.nasa.gov/apod/image/1904/IssMoon_Holland_960.jpg']


// The main React component
class App extends Component {

	// init the state
	constructor(props) {
		super(props)
		this.state = {
			URLs: APODURLs,
		}
	}

	// returns a random URL from the state
	getRandomURL() {
		return this.state.URLs[Math.floor(Math.random()*this.state.URLs.length)]
	}
	// render the images
  render() {
    return (
      <div className='app'>
				<img src={this.getRandomURL()} />
    	</div>
    );
  }
}

// export the app
export default App;
