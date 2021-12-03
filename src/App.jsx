import React, {useState, useEffect} from "react";
import "./App.css";
import PrincipalCard from "./components/principalCard/principalCard.jsx";
import SecundaryCard from "./components/secundaryCard/secundaryCard.jsx";

function App() {
	let [visibility, setVisibility] = useState("Weather");
	let [response, setResponse] = useState({
		city: "None",
		region: "None",
		day: "None",
		temp: "None",
		wind: "None",
		description: "None",

		tomorrow: {
			day: "None",
			temp: "None",
			wind: "None",
			description: "None"
		},

		afterTomorrow: {
			day: "None",
			temp: "None",
			wind: "None",
			description: "None"
		}

	});

	useEffect(() => {
		const apiFetch = async () => {

			let ip = await fetch(`https://get.geojs.io/v1/ip/geo.json`)
				.then(data => data.json())
				.catch(e => alert("No se puede reconocer tu ubicación ip"));

			let weather = await fetch(`https://wttr.in/${ip.city}?format=j1`)
				.then(data => data.json())
				.catch(e => alert("No se puede cargar la información, intenta más tarde"));

			try{
				setResponse({
					city: weather.nearest_area[0].areaName[0].value,
					region: weather.nearest_area[0].region[0].value,
					day: weather.weather[0].date,
					temp: `${weather.current_condition[0].temp_C}°C`,
					wind: `${weather.current_condition[0].windspeedKmph} km/h`,
					description: weather.current_condition[0].weatherDesc[0].value,

					tomorrow: {
						day: weather.weather[1].date,
						temp: `${weather.weather[1].avgtempC}°C`,
						wind: `${weather.weather[1].hourly[0].windspeedKmph} km/h`,
						description: weather.weather[1].hourly[0].weatherDesc[0].value
					},

					afterTomorrow: {
						day: weather.weather[2].date,
						temp: `${weather.weather[2].avgtempC}°C`,
						wind: `${weather.weather[2].hourly[0].windspeedKmph} km/h`,
						description: weather.weather[2].hourly[0].weatherDesc[0].value
					}
				});
			}catch(e){
				console.log(e);
			}

			setVisibility("Weather opacity");

		}

		try{
			apiFetch();
		}catch(e){
			console.log(e)
		}
		return;
	},[]);
	


	return (
	<div className="App">

		<div className="Head">
			<h1> Weather Knows </h1>
			<h3> know your wheather </h3>
		</div>

		<div className={visibility}>
			<div>
				<PrincipalCard 
					temp={response.temp} 
					wind={response.wind} 
					description={response.description}
					city={response.city}
					region={response.region}
					day={response.day}
				/>
			</div>

			<div>
				<SecundaryCard
					temp={response.tomorrow.temp}
					wind={response.tomorrow.wind}
					description={response.tomorrow.description}
					day={response.tomorrow.day}
				/>
				<SecundaryCard
					temp={response.afterTomorrow.temp}
					wind={response.afterTomorrow.wind}
					description={response.afterTomorrow.description}
					day={response.afterTomorrow.day}
				/>
			</div>
		</div>

		<div className="Foot">
			<h5> Made by <a href="https://github.com/CarlosDanielEspinoza">Carlos Espinoza</a> </h5>
		</div>

	</div>


	);
}

export default App;


