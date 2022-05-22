import React, { Component } from 'react';
import './ExpensesFilter.css';

class ExpensesFilter extends Component {

    dropdownChangeHandler(e){
        this.props.onChangeFilter(e.target.value)
        }
    render(){
        return (
            <div className='expenses-filter'>

            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={this.props.filteredYear} onChange={this.dropdownChangeHandler.bind(this)}>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>
            
        </div>
        )
    }
}
export default ExpensesFilter