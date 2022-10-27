import React from "react";
import Image from "next/image";

import commonStyles from "../styles/commons.module.scss";
import styles from "../styles/home.module.scss";

const introStep = ({ navForward }) => {
	return (
		<main className={commonStyles.container}>
			{/*  Welcome page */}
			<section className={commonStyles.logo}>
				recyc | <span>ABLE</span>
			</section>
			<section>
				<Image
					src="/LogoHomescreen.svg"
					alt="Home screen logo for recyclable"
					width={350}
					height={350}
				/>
			</section>
			<section className={styles.textContainer}>
				The Recyclable concept aims to revolutionise the way society thinks of
				recycling rubbish.
				<br />
				<br />
				<span>Together we can make a change.</span>
			</section>
			<button className={commonStyles.button} onClick={navForward}>
				Scan Rubbish
			</button>
		</main>
	);
};

export default introStep;
