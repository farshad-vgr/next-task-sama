import React, { Component } from "react";
import { ArcaptchaWidget } from "arcaptcha-react";

class CaptchaBox extends Component {
	constructor() {
		super();
		this.ArRef = React.createRef();
	}
	getToken = (token) => {
		//do something with your token.
	};
	render() {
		return (
			<div>
				<ArcaptchaWidget ref={this.ArRef} site-key="i6qqnsxay6" callback={this.getToken} />
			</div>
		);
	}
}

export default CaptchaBox;
