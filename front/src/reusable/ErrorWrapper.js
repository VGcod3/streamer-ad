import React, { Component } from "react";
import ErrorComponent from "../components/Error";

export default class ErrorWrapper extends Component {
    state = {
        error: false,
    };

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return <ErrorComponent />;
        }

        return this.props.children;
    }
}
