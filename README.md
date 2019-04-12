# React Image Viewer

### Goals
A web app that allows users to submit a list of URLs that point to images, and then view a slideshow displaying those URLs/images.

### Details
An interface is created to allow the user to upload a list of items.
The inface might look something like this:
- https://ipfs.pics/

//The text file is formatted into a URLArray with every new line as an item
function formatTextFile() 

A React component is created with a state that holds an array and an output that displays an item from that state 
- The URLArray is added to the React component state. 
- The component displays a new URL from this.state.URLs[Math.floor(Math.random()*items.length)]

