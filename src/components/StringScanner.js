import React, { useState, useContext} from "react";
import { ScannedContext } from "./contextAPI/ScannedContext";

const StringScanner = () => {
	const [encodedUrl, setencodedUrl] = useState(null);
    const { scan, setScan } = useContext(ScannedContext);

	// const { qr, setQr } = useContext(qrContext);
	// const { scan, setScan } = useContext(ScannedContext);

	// useEffect(() => {
	// 	if (scanner) {
	// 		scanner.render(onScanSuccess);
	// 	}
	// }, [scanner]);

    const handleChange = (event) => {
        setencodedUrl(event.target.value);
    }

	const submitString = () => {

		const presentPageURL = window.location.href;
        // encode presentPageURL
        const decodedUrl = btoa(presentPageURL);

        console.log(decodedUrl);

		if (encodedUrl === decodedUrl) {
			setScan(true);
      		window.alert("matched successfully");
		}
    	else { 
			window.alert("wrong string entered");
		}

		// console.log(scan);
		// // window.location.href = decodedText;
		// 
		// scanner.stop();
	};

	return (
		<div style={{textAlign:"center", marginTop:"30px"}}>
			<div id="reader"></div>
            <input type="text" onChange={handleChange} />
			<button onClick={submitString}>Enter</button>
		</div>
	);
};

export default StringScanner;