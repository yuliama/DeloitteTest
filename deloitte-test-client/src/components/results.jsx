import React, { Component } from 'react';

class Results extends Component {
    render() { 
        return ( 
            <div className="searchResults">
                <ul>
                    {this.props.value}
                </ul>
            </div>
         );
    }
}
 
export default Results;