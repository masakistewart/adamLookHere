import React, { Component } from "react";
import SearchBar from "./SearchBar";

export default class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: "",
            searchType: ""
        }
        this.setSearchTerm = this.setSearchTerm.bind(this);
        this.setSearchType = this.setSearchType.bind(this);
        
    }

    setSearchType(event) {
        event.preventDefault();
        const searchType = event.target.innerText
        
        this.setState({ 
            searchType
        })
    }

    setSearchTerm(event) {
        event.preventDefault();
        const searchTerm = event.target.innerText
        
        this.setState({ 
            searchTerm
        })
    }


    render() {
        return (
            <div className="container">
                <SearchBar 
                searchType={this.state.searchType}
                setSearchType={this.setSearchType} 
                setSearchTerm={this.setSearchTerm} 
                />
            </div>
        );
    }
}