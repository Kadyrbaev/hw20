import React, { Component } from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

class Chart extends Component {
	render(){
		const dataPointValues = this.props.dataPoints.map((dataPoint) => dataPoint.value)
	const totalMax = Math.max(...dataPointValues)
		return(
			<div className='chart'>
			{this.props.dataPoints.map((el) => (
				<ChartBar
					key={el.label}
					value={el.value}
					maxValue={totalMax}
					label={el.label}
				/>
			))}
		</div>
		)
	}
}
export default Chart