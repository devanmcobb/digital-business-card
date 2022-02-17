import ProfilePic from '../img/headshot.jpg';

function Info() {
	return (
		<div className="info">
			<img src={ProfilePic} className="nav-img" width="317" />
			<h3 className="name">Devan Corleone</h3>
			<p className="title">Software Engineer</p>
			<p className="email">devancobb.dev@gmail.com</p>
			<button className="email-btn">Email</button>
			<button className="linkedin-btn">LinkedIn</button>
		</div>
	);
}

export default Info;
