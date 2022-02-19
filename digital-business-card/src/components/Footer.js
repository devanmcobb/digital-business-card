import Twitter from '../img/icons/Twitter Icon.png';
import Facebook from '../img/icons/Facebook Icon.png';
import Instagram from '../img/icons/Instagram Icon.png';
import GitHub from '../img/icons/GitHub Icon.png';

function Footer() {
	return (
		<div className="footer">
			<footer className="social-wrapper">
				<img src={Twitter} className="icon" />
				<img src={Facebook} className="icon" />
				<img src={Instagram} className="icon" />
				<img src={GitHub} className="icon" />
			</footer>
		</div>
	);
}

export default Footer;
