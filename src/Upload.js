import React, { Component } from "react";
import Overlay from './Overlay.js'
import UploadFile from './UploadFile.js'
import './Upload.css'
class Upload extends Component{
	state = {
		overlayActive:false
	}
	closeOverlay=()=>{
		this.setState({
			overlayActive:false
		})
	}
	showOverlay=()=>{
		this.setState({
			overlayActive:true
		})
	}
	render(){
		return (
			<div>
				{this.state.overlayActive && <Overlay onClose={this.closeOverlay}><UploadFile closeOverlay={this.closeOverlay}/></Overlay>}
				<button className='clickToUpload' onClick={this.showOverlay}>upload file</button>
			</div>
			)
	}
}

export default Upload;

		