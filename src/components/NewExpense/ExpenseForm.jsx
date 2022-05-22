import React, { useState } from 'react'
import './ExpenseForm.css'
class ExpenseForm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			enteredTitle: '',
			enteredAmount: '',
			enteredDate: ''
		}
	}
	// const [enteredTitle, setEnteredTitle] = useState('')
	// const [enteredAmount, setEnteredAmout] = useState('')

	// const [enteredDate, setEnteredDate] = useState('')

	 titleHandler = (e) => {
		this.setState({enteredTitle:e.target.value})
		console.log(this.state);
	}

	 amountHandler = (e) => {
		this.setState({enteredAmount:e.target.value})
	}
	 dateHandler = (e) => {
		this.setState({enteredDate:e.target.value})
	}

	 submitHanlder = (e) => {
		e.preventDefault()
		const a = ({
			title: this.state.enteredTitle,
			amount: this.state.enteredAmount,
			date: new Date(this.state.enteredDate)
		})
		this.props.onAddData(a)
			console.log(a);
	}
	render(){
	return (
		<form onSubmit={this.submitHanlder}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>title</label>
					<input
						type='text'
						value={this.state.enteredTitle}
						onChange={this.titleHandler.bind(this)}
					/>
				</div>
				<div className='new-expense__control'>
					<label>amount</label>
					<input
						value={this.state.enteredAmount}
						type='number'
						onChange={this.amountHandler.bind(this)}
						min='0.01'
						step='0.01'
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						onChange={this.dateHandler.bind(this)}
						type='date'
						value={this.state.enteredDate}
						min='2021-01-01'
						max='2023-01-01'
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
	}
}

export default ExpenseForm
