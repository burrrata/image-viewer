import React, {useCallback, Component} from 'react'
import Dropzone, {useDropzone} from 'react-dropzone'
import './App.css'

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


// TODO have this push the binaryStr to the App component state
// File drop zone
function FileDropzone() {

	// process files when they are dropped
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader()
    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result
      console.log(binaryStr)
    }
    acceptedFiles.forEach(file => reader.readAsBinaryString(file))
  }, [])

	// not sure what this does
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className='over'>
			<input {...getInputProps()} onDrop={() => this.props.onDrop()} />
			<p>
				Click to upload a text file.
			</p>	
    </div>
  )
}


// TODO have this pull the state from the App component
// Image display component
function Image(props) {
	return(
		<img src={props.value} className='under' />
	)
}


// The main React component
// - this manages the state for the App
class App extends Component {

	// init the state
	constructor(props) {
		super(props)
		this.state = {
			URLs: null,
			currentURL: 'https://apod.nasa.gov/apod/image/1904/M87bh_EHT_2629.jpg',
		}
	}

	// regularly updates the state currentURL with a random item from URLs
	componentDidMount() {
		this.interval = setInterval(() => {
			if (this.state.URLs != null) {
				this.setState({
					currentURL: this.state.URLs[Math.floor(Math.random()*this.state.URLs.length)]
				})
			} else {
				this.setState({
					currentURL: this.state.currentURL
				})
			}
		}, 5000)	
	}
	componentWillUnmount() {
		clearInterval(this.interval)
	}
	
	// FILE UPLOAD STUFF GOES HERE

	// render the images
  render() {
    return (
      <div className='app'>
				<FileDropzone />
				<Image value={this.state.currentURL} />
    	</div>
    )
  }
}

// export the app
export default App
