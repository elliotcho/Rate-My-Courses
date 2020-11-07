import React, {Component} from 'react';
import {changeUserColor} from '../../../src/store/actions/profileActions';
import './css/ChangeColor.css';

class ChangeColor extends Component{
    constructor(){
        super();

        this.state = {
            choice : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    async handleSubmit(e){
        e.preventDefault();

        const{uid, alert} = this.props;
        const{choice} = this.state;

        const isChanged = await changeUserColor(uid, choice);

        if(isChanged){
            alert.success("User color changed successfully");

            this.setState( {
                choice: ''
            });
        } else{
            alert.error("Something went wrong");
        }
    }
  
    handleChange(e){
        this.setState({choice : e.target.value});
    }

    render(){
        const {choice} = this.state;
        const colors = ["#fc0303","#db6400","#ffa36c","#a0ffe6","#03fc90", "#03adfc"];

        return(
            <form className="changeColor" onSubmit={this.handleSubmit}>
                <h3>Change Display Picture Color</h3>

                <label for="colors">Choose a color:</label>
                <select id="colors" onChange={this.handleChange} value={choice} style={{background: choice}} required>
                    <option value=''>--SELECT A COLOR--</option>

                    {colors.map(color =>
                        <option value={color} style={{background: color}}>
                            {color}
                        </option>    
                    )}
                </select>

                <button className='btn btn-block btn-outline-info btn-lg'>
                    CHANGE
                </button>
            </form>
        )
    }
}

export default ChangeColor;