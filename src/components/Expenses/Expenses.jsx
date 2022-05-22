import React from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import {Component} from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';

class Expenses extends Component{
	constructor() {
		super()
		this.state = {
			filteredYear:'2022'
		}
		
	}
	filterChangeHandler(selectedYear){
		this.setState({
           filteredYear:selectedYear
		})
	}
	
	render() {
		const filteredExpenses = this.props.expenses.filter((expense) => {
			return expense.date.getFullYear().toString() === this.state.filteredYear
		})
		return (
			<Card className='expenses'>
			<ExpensesFilter
				filteredYear={this.state.filteredYear}
				onChangeFilter={this.filterChangeHandler.bind(this)}
			/>
			<ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}/>
	    	</Card>
		)
	}
}
export default Expenses


