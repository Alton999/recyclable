import React, { useState, useEffect, Component } from "react";

import ResultsCard from "../components/ResultsCard";
// import styles from "../../styles/scanner.module.css";

import { Html5Qrcode } from "html5-qrcode";

class ScanningStep extends Component {
	constructor(props) {
		super(props);
		// this.navForward = this.navForward.bind(this);
		this.state = {
			// isScanning: true,
			isLoading: false,
			decodedResult: null,
			showScanner: true,
			showResults: false,
			allResults: []
		};
	}

	componentDidMount() {
		const onScanSuccess = (decodedText, decodedResult) => {
			this.setState((state) => (state.decodedResult = JSON.parse(decodedText)));

			// We want to append the result to a local storage array for global access
			let existingResults = JSON.parse(localStorage.getItem("allResults"));
			if (existingResults == null) existingResults = [];

			localStorage.setItem("currentItem", decodedText);

			existingResults.push(JSON.parse(decodedText));
			localStorage.setItem("allResults", JSON.stringify(existingResults));
			// console.log("DecodedText Mobile:", decodedText);

			this.setState({ showScanner: false, showResults: true });

			stopScanner();

			// this.$emit('result:', decodedText, decodedResult)
		};

		const config = {
			fps: 10,
			qrbox: 250
		};

		Html5Qrcode.getCameras()
			.then((devices) => {
				if (devices && devices.length) {
					if (!document.getElementById("qr-reader")) return;
					const html5QrCode = new Html5Qrcode("qr-reader");
					this.setState({ scanner: html5QrCode });
					// this.state.scanner = html5QrCode;
					html5QrCode.start(
						{ facingMode: "environment" },
						config,
						onScanSuccess
					);
				}
			})
			.catch((err) => {
				/* eslint-disable no-console */
				console.log(err);
			});

		const stopScanner = () => {
			this.state.scanner
				.stop()
				.then((ignore) => {
					console.log("Stop function worked");
					// QR Code scanning is stopped.
				})
				.catch((err) => {
					console.log("Stop failed: ", err);
				});
		};
	}

	render() {
		return (
			<>
				<section>
					<div>
						<div>
							{this.state.showScanner ? (
								<div>
									<div id="qr-reader" />
								</div>
							) : (
								<ResultsCard results={this.state.decodedResult} />
							)}
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default ScanningStep;
