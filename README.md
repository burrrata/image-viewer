# React Image Viewer

## What 
A web app that allows users to submit a list of URLs that point to images, and then view a slideshow displaying those URLs/images.

## How 

### File Upload
An interface is created to allow the user to upload a list of items.

The inface might look something like this:
- https://ipfs.pics/

I think the easiest way to do this would be to make the initial background picture sem-transparent with an "Upload URL List" button on top
Then, on load the latest randomly chosen image takes over the screen

### txt2array 
The text file is formatted into a URLArray with every new line as an item
- function formatTextFile() 

### Display State ✔️
A React component is created with a state that holds an array and an output that displays an item from that state 
- The URLArray is added to the React component state. 
- The component displays a new URL from this.state.URLs[Math.floor(Math.random()*this.state.URLs.length)]



# Notes

Ummm ? I assumed that React would be the best for this since you get state, client side execution, and modular components. That being said... you *could* probably do this all in Python... 
- downloads a list or URLs
- picks a starting image and a target image
- displays the autoencoder's representation of the starting image
- morphs towards the target image
- once it's close to the target image it downloads a new target image and repeats the process 
