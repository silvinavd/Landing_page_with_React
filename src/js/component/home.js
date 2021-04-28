import React from "react";
import { Cards } from "./cards.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<div className="container">
				<div className="row">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
		</div>
	);
}
