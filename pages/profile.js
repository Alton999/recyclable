import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import commonStyles from "../styles/commons.module.scss";
import styles from "../styles/profiles.module.scss";

const Profile = () => {
	const [name, setName] = useState("User Tester");
	const [allResults, setAllResults] = useState([]);

	// Fetch all results from local storage on first render
	useEffect(() => {
		const results = JSON.parse(localStorage.getItem("allResults"));

		if (results) {
			let tempResults = [];
			for (let item in results) {
				// console.log("ITEM:", results[item]);
				tempResults.push(JSON.parse(results[item]));
			}
			setAllResults(tempResults);
			console.log(allResults);
		}
	}, []);

	// Count how many

	return (
		<section className={styles.container}>
			<section className={styles.header}>
				<Image
					src="/profileAvatar.svg"
					alt="Profile photo"
					width={50}
					height={50}
				/>
				<h2>
					Welcome back,
					<br />
					<span>{name}!</span>
				</h2>
			</section>

			<section className={styles.content}>
				<h3>Here you can view and track your recycling habits.</h3>
				<div className={styles.resultsContainer}>
					<ul>
						{allResults.map((result, i) => {
							console.log(result.bin);

							return (
								<li key={i} bin={result.bin}>
									<p>{i + 1}</p>
									<h4>{result.item}</h4>
									<p>{result.bin}</p>
								</li>
							);
						})}
					</ul>
				</div>
				<Link href="/">
					<button className={commonStyles.button}>Scan more items</button>
				</Link>
			</section>
		</section>
	);
};

export default Profile;
