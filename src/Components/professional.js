import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class Professional extends Component {
    render() {
        var data = this.props.description;
        var sameMonth = this.props.startMonth === this.props.endMonth;
        var sameYear = this.props.startYear === this.props.endYear;
        return (<div>
            <Grid>
                <Cell col={5}>
                    <div><b>{this.props.name}</b></div>
                    <div>{sameYear && sameMonth ? (
                        this.props.startMonth + " " + this.props.startYear)
                        : sameYear ? (this.props.startMonth + "-" + this.props.endMonth + " " + this.props.startYear)
                            : this.props.startMonth + " " + this.props.startYear + "-" + this.props.endMonth + ", " + this.props.endYear}
                    </div>
                    <div>{this.props.city}</div>
                </Cell>
                <Cell col={7} style={{ textAlign: 'left' }}>
                    <div><b>{this.props.position}</b></div>
                    <div>{data.map(function (d, idx) { return (<li key={idx}>{d.description}</li>) })}</div>
                </Cell>
            </Grid>
        </div>)
    }
}

export default Professional