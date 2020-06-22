import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component{
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        const searchText = 'type here to search';
        return (
            <input
                className="form-control search-input"
                placeholder={searchText}
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        );
    }
}