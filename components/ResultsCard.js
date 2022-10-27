import React from "react";
import Link from "next/link";
import styles from "../styles/resultsCard.module.scss";
import commonStyles from "../styles/commons.module.scss";

const ResultsCard = ({ results }) => {
	return (
		<section className={styles.cardContainer}>
			<div className={styles.card}>
				<h1>
					Successful disposal of a {results.item} {results.material}.
				</h1>
				<p>
					Your contributions have not gone unnoticed. This disposal has been
					added to your profile.
				</p>
				<Link href="/profile">
					<button className={commonStyles.button}>View Profile</button>
				</Link>
			</div>
		</section>
	);
};

export default ResultsCard;
