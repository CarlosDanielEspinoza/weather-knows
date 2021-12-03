import React, {Fragment} from "react";
import Sun from "../img/sun.png";
import Clouds from "../img/cloud.png";
import Rain from "../img/rain.png";
import "./secundaryCard.css";

const SecundaryCard = (props) => {
	const sunny = ["Sunny","Clear"];
	const cloudy = ["Cloudy","Partly cloud","Mist","Overcast","Partly cloudy"];

	const change = () => {
		if (sunny.find(item => item === props.description)) return Sun;
		else if(cloudy.find(item => item === props.description)) return Clouds;
		else return Rain;
	}
	

	return (
		<Fragment>
			<div className="secundaryCard">
				<div className="secundaryCard_img">
					<img src={change()} alt="Cloud State" width="110px"/>
				</div>

				<div className="secundaryCard_Data">
					<h1 className="Data_Temp"> {props.temp} </h1>
					<h3 className="Data_Other"> Wind: {props.wind} </h3>
					<h3 className="Data_Other"> {props.description} </h3>
					<h3 className="Data_Other"> {props.day} </h3>
				</div>
			</div>
		</Fragment>
	);
}

export default SecundaryCard;