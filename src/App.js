import React, {useCallback, useState, useEffect, Component} from 'react'
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


// This manages the state for the App
function App() {
	
	// init the state
	const [URLs, setURLs] = useState(null)
	const [currentURL, setCurrentURL] = useState('https://apod.nasa.gov/apod/image/1904/M87bh_EHT_2629.jpg')
	const [dropzoneView, setDropzoneView] = useState('over')
	
	// parse the uploaded files and use setURLs to add them to the state
	function FileDropzone() {
		// process files when they are dropped
		const onDrop = useCallback(acceptedFiles => {
			const reader = new FileReader()
			reader.onabort = () => console.log('file reading was aborted')
			reader.onerror = () => console.log('file reading has failed')
			reader.onload = () => {
				// binaryStr is a string with each URL separated by a space
				// we then split the string by spaces and add each new string to
				// an array where each URL is an item
				const binaryStr = reader.result
				const droppedURLArray = binaryStr.split(/(\s)/).filter( e => e.trim().length > 0)
				// update the state
				setURLs(droppedURLArray)
			}
			acceptedFiles.forEach(file => reader.readAsBinaryString(file))
		}, [])
		// not sure what this does
		const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
		// return the dropzone component
		return (
			<div {...getRootProps()} className={dropzoneView}>
				<input {...getInputProps()} />
				<p>
					Click to upload a text file.
				</p>	
			</div>
		)
	}

	// Image display component
	function Image() {
		return(
			<img src={currentURL} className='under' alt='' />
		)
	}

	// randomly select the currentURL from the URLs list on a recurring basis
	useEffect(() => {
		const interval = setInterval(() => {
			if (URLs != null) {
				setDropzoneView('hidden')
				const newURL = URLs[Math.floor(Math.random()*URLs.length)]
				setCurrentURL(newURL)
				// Check the state for testing
				//console.log(URLs)
				//console.log(`URLs length: ${URLs.length}`)
				//console.log(currentURL)
			}
		}, 3000)
		return function cleanup() {
			clearInterval(interval)	
		}
	})

	// return the app components
	return (
		<div className='app'>
			<FileDropzone />
			<Image />
		</div>
	)
}

// export the app
export default App
