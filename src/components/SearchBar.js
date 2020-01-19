import React,{ Component } from 'react';


class SearchBar extends React.Component{
    state = {
        term:'',
        
    }
    onFormSubnit = event =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    onInputChange(event) {
        console.log(event.target.value)
    }
     

    render(){ 
        return(
            <div className="ui segment">
                <form action="" onSubmit={this.onFormSubnit} className="ui form">
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        <input type="text" 
                        onChange = {(e) =>this.setState({term:e.target.value})}
                        value = {this.state.term}
                        />
                    </div>
                </form>                
            </div>
        )
    } 
}
export default SearchBar;