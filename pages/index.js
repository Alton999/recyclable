import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useState, useEffect } from "react";

import Step1 from "./introStep";
import Step2 from "./scanningStep";

const firebaseConfig = {
	apiKey: "AIzaSyDMlpK8ieUVC9EKE7LeLEo20GNMXpHf4qk",
	authDomain: "recyclablemobile.firebaseapp.com",
	projectId: "recyclablemobile",
	storageBucket: "recyclablemobile.appspot.com",
	messagingSenderId: "999356890366",
	appId: "1:999356890366:web:7bd4257fa5660f3564b9af",
	measurementId: "G-262FFBE691"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const Home = () => {
	const [step, setStep] = useState(1);

	const navForward = () => {
		setStep(step + 1);
		console.log(step);
	};

	const navBack = () => {
		setStep(step - 1);
	};

	return (
		<>
			{step === 1 && <Step1 navForward={navForward} navBack={navBack} />}
			{step === 2 && <Step2 navForward={navForward} navBack={navBack} />}
		</>
	);
};

export default Home;
