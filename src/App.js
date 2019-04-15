import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import './App.css'

// The image viewing app
// - note: written with React hooks so will not work with classes
function App() {
	
	// init the state
	const [URLs, setURLs] = useState(null)
	const [currentURL, setCurrentURL] = useState('https://apod.nasa.gov/apod/image/1904/M87bh_EHT_2629.jpg')
	const [dropzoneView, setDropzoneView] = useState('over')
	
	// dropzone component for the user to upload a text file with a unique URL on every line
	// each URL needs to be a direct link to an image
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
		const {getRootProps, getInputProps} = useDropzone({onDrop})
		// return the dropzone component
		return (
			<div className={dropzoneView} >
				<div {...getRootProps()} >
					<input {...getInputProps()} />
					<p className='dropzone-text'>
						Click to upload a text file.
					</p>	
				</div>
			</div>
		)
	}

	// image display component
	function Image() {
		return(
			<div className='img-box'>
				<img src={currentURL} className='under center-fit' alt='' />
			</div>
		)
	}

	// randomly select the currentURL from the URLs list on a recurring basis
	useEffect(() => {
		const interval = setInterval(() => {
			if (URLs != null) {
				setDropzoneView('hidden')
				const newURL = URLs[Math.floor(Math.random()*URLs.length)]
				setCurrentURL(newURL)
			}
		}, 5000)
		return function cleanup() {
			clearInterval(interval)	
		}
	})

	// return the app components
	return (
		<div className='app'>
			<Image />
			<FileDropzone />
		</div>
	)
}

// export the app
export default App
