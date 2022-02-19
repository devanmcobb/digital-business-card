import ProfilePic from '../img/headshot.jpg';
import LinkedIn from '../img/icons/LinkedIn.svg';
import Mail from '../img/icons/Mail.svg';

function Info() {
	return (
		<div className="info">
			<img src={ProfilePic} className="nav-img" />
			<h3 className="name">Devan Corleone</h3>
			<p className="title">Software Engineer</p>
			<p className="email">devancobb.dev@gmail.com</p>
			<button className="btn email-btn">
				{/* <img src={Mail} className="btn-img" /> */}
				<span>Email</span>
			</button>
			<button className="btn linkedin-btn">
				{/* <img src={LinkedIn} className="btn-img" /> */}
				<span>LinkedIn</span>
			</button>
		</div>
	);
}

export default Info;
