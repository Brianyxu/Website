import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";


class Projects extends Component {
    render() {
        const data = this.props.description;
        const sameYear = this.props.startYear === this.props.endYear;
        const sameMonth = this.props.startMonth === this.props.endMonth
        return (
            <Grid>
                <Cell col={5}>
                    <div><b>{this.props.name}</b></div>
                    <div>{sameYear && sameMonth ? (
                        this.props.startMonth + " " + this.props.startYear)
                        : sameYear ? (this.props.startMonth + " - " + this.props.endMonth + " " + this.props.startYear)
                            : this.props.startMonth + " " + this.props.startYear + " - " + this.props.endMonth + ", " + this.props.endYear}
                    </div>
                </Cell>
                <Cell col={7} style={{ textAlign: 'left' }}>
                    <div>{data.map(function (d, idx) { return (<li key={idx}>{d.description}</li>) })}</div>
                </Cell>
            </Grid>
        )
    }
}

export default Projects