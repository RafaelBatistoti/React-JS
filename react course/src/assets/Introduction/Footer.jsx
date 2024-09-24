import styles from '../Introduction/intro.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<p>&copy; {new Date().getFullYear()} Your website Name</p>
		</footer>
	);
}

export default Footer;
