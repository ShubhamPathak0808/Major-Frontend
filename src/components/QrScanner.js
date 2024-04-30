import React, { useState, useContext, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { qrContext } from "./contextAPI/qrContext";
import { ScannedContext } from "./contextAPI/ScannedContext";

const QrScanner = () => {
	const [scanner, setScanner] = useState(null);

	const { qr, setQr } = useContext(qrContext);
	const { scan, setScan } = useContext(ScannedContext);

	useEffect(() => {
		if (scanner) {
			scanner.render(onScanSuccess);
		}
	}, [scanner, scan]);

	const onScanSuccess = (decodedText, decodedResult) => {
		// setQr(decodedText);
		// console.log(decodedText);


		const presentPageURL = window.location.href;

		console.log(decodedText);
		console.log(presentPageURL)

		if (decodedText === presentPageURL) {
			setScan(true);
      		window.alert("matched successfully");
		}
    	else { 
			window.alert("wrong qr code scanned");
		}

		console.log(scan);
		// window.location.href = decodedText;
		console.log(`Code matched = ${decodedText}`, decodedResult);
		// scanner.stop();
	};

	const startScanner = () => {
		const config = { fps: 10, qrbox: 300 };
		console.log(qr); //checkpoint

		const scanner = new Html5QrcodeScanner("reader", config);
		setScanner(scanner);

		scanner.render(onScanSuccess);
	};

	return (
		<div style={{textAlign:"center"}}>
			<div id="reader"></div>
			<button onClick={startScanner}>Scan QR code</button>
		</div>
	);
};

export default QrScanner;
