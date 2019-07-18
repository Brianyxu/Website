import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";

class Education extends Component {
    render() {
        const data = this.props.description;
        return (
            <Grid>
                <Cell col={5}>
                    <div><b>{this.props.schoolName}</b></div>
                    <div>{this.props.city}</div>
                    <div>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</div>
                </Cell>
                <Cell col={7} style={{ textAlign: "left" }}>
                    <div><b>{this.props.degree}</b></div>
                    <div>{data.map(function (d, idx) { return (<li key={idx}>{d.description}</li>) })}</div>
                </Cell>
            </Grid>
        )
    }
}

export default Education;