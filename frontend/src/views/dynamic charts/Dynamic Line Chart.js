import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 1000;

class DynamicLineChart extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	updateChart() {
		yVal = yVal + Math.round(7 + Math.random() * (-5 - 5));
		dps.push({ x: xVal, y: yVal });
		xVal++;
		if (dps.length > 10) {
			dps.shift();
		}
		this.chart.render();
	}
	render() {
		const options = {
			title: {
				text: ""
			},
			data: [{
				type: "line",
				dataPoints: dps
			}]
		}

		return (
			<div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content p-4">
						<button type="button" className="close text-right" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<div>
							<h1 className="text-center pt-0">Gráfico Estadístico de Publicaciones</h1>
							<CanvasJSChart options={options}
								onRef={ref => this.chart = ref}
							/>
							{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default DynamicLineChart;