import React from 'react';
import { Component } from 'react';
import {changeUserColor} from '../../../src/store/actions/profileActions';

class ChangeColor extends Component{
    constructor(){
        super();
        this.state = {
            colorId : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    async handleSubmit(e){
        e.preventDefault();
        const{uid, alert} = this.props;
        const{colorId} = this.state;

        const msg = await changeUserColor(uid, colorId);

        if(msg){
            alert.success("User color changed successfully");
        } else{
            alert.error("Error processing request!");
        }

        this.setState( {
            colorId: ''
        });
    }
    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    render(){
        const {colorId} = this.state;

        return(
            <form className="changeColor" onSubmit={this.handleSubmit}>
                <h3>Change Display Picture Color</h3>
                <label for="colors">Choose a color:</label>
                <select name={colorId} id="colors" required onChange={this.handleChange}>
                    <option value="#03adfc">Light Blue</option>
                    <option value="#0356fc">Dark Blue</option>
                    <option value="#5a03fc">Purple</option>
                    <option value="#9803fc">Pink</option>
                    <option value="#fc0303">Red</option>
                    <option value="#3b6978">Sea Blue</option>
                    <option value="#db6400">Orange</option>
                    <option value="#ffa36c">Tan</option>
                    <option value="#a0ffe6">Turquoise </option>
                    <option value="#03fc90">Green</option>
                </select>
            </form>
        )
    }
}

export default ChangeColor;