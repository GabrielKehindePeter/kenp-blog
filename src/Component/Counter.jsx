import React, { Component } from 'react';
class Counter extends Component {
     state = {
        count:0,
        img:"https://picsum.photos/200"
     }

     styles = {
        fontSize:30,
        fontWeight:"bold"
     }

     

    render() { 

        let classes = this.getBadgeClassess();
        return (
            <React.Fragment>
                <img src={this.state.img} alt="" /><br /><br />
                <span style={this.styles} className={classes}>{this.formatCount()}</span>
                <button className='btn btn-secondary'>Increment</button>
            </React.Fragment>
        );
    }

    getBadgeClassess() {
        let classes = "badge m-2 badge-";
        classes += this.state.count == 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count  === 0? "Zerro" : count;
    }
}
 
export default Counter;