import React, {Fragment} from "react";
import Sun from "../img/sun.png";
import Clouds from "../img/cloud.png";
import Rain from "../img/rain.png";
import "./principalCard.css";

const PrincipalCard = (props) => {
	const sunny = ["Sunny","Clear"];
	const cloudy = ["Cloudy","Partly cloud","Mist","Overcast","Partly cloudy"];

	const change = () => {
		if (sunny.find(item => item === props.description)) return Sun;
		else if(cloudy.find(item => item === props.description)) return Clouds;
		else return Rain;
	}

	return (
		<Fragment>
			<div className="principalCard">
				<div className="contentOne">
					<div className="imgWeather">
						<img src={change()} alt="CloudStates" width="110px" />
					</div>

					<div className="infoWeather">
						<h1 className="infoTemp"> {props.temp} </h1>
						<h3 className="infoSecond"> Wind: {props.wind} </h3>
						<h3 className="infoSecond"> {props.description} </h3>
					</div>
				</div>
				
				<div className="contentTwo">
					<h3 className="infoLocal"> {props.city}, {props.region} </h3>
					<h3 className="infoSecond"> {props.day} </h3>
				</div>
			</div>
		</Fragment>
	);
}

export default PrincipalCard;