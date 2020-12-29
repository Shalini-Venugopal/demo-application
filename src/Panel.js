import React, { Component } from "react";

class Panel extends Component {
    render() {
        const branch = this.props.branch;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">{branch.Name}</div>
                <div className="panel-body">
                    <p>State : {branch.State}</p>
                    <p>
                        Country : {branch.Country}{" "}
                        <img
                            src="https://restcountries.eu/data/ind.svg"
                            height="15px"
                        />
                    </p>
                    <p>Description : {branch.Description}</p>
                    <p>Pincode : {branch.Pincode}</p>
                </div>
            </div>
        );
    }
}

export default Panel;

