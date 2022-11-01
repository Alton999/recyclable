import { useState, useEffect } from "react";

import Step1 from "./introStep";
import Step2 from "./scanningStep";

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
