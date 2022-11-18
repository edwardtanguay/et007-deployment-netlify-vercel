import employment from '../assets/employment.jpg';

export const PageDashboard = () => {
	return (
		<div className="page pageDashboard">
			<p>This is the Dashboard page.</p>
			<img className="employment" src={employment} />
			<div>
				<img src="images/job.jpg" />
			</div>
			<h2>Here is the big employement image:</h2>
			<div>
				<img src="../../src/assets/employment.jpg"/>
			</div>
		</div>
	);
};
