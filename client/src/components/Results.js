import React, { Component } from "react";
import SearchBar from "./SearchBar";
import { ApolloConsumer } from 'react-apollo';
import {Card, Button} from 'react-bootstrap'

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: "",
            searchType: "",
            searchResults: null
        }
        this.setSearchTerm = this.setSearchTerm.bind(this);
        this.setSearchType = this.setSearchType.bind(this);
        this.setSearchResults = this.setSearchResults.bind(this);


    }

    setSearchType(event) {
        event.preventDefault();
        const searchType = event.target.innerText

        this.setState({
            searchType
        })
    }

    setSearchResults(searchResults) {
        this.setState({
            searchResults
        })
    }

    setSearchTerm(event) {
        // this is really bad and needs to be changed
        // like really bad code 
        event.preventDefault();
        const searchTerm = event.target.value;
        this.setState({
            searchTerm
        })
    }

    display() {
        const searchResults = this.state.searchResults;
        if (!searchResults) {
            return (<h1>Search Results Go Here</h1>)
        }

        return searchResults.tracks.items.map((item) => {
            return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title and make up the bulk of
                            the card's content.</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            )
    })
}

render() {
    const { searchTerm, searchType } = this.state
    return (
        <div className="container">
            <ApolloConsumer>
                {client => (
                    <div>
                        <SearchBar
                            searchType={searchType}
                            searchTerm={searchTerm}
                            setSearchType={this.setSearchType}
                            setSearchTerm={this.setSearchTerm}
                            setSearchResults={this.setSearchResults}
                            client={client}
                        />
                    </div>
                )}
            </ApolloConsumer>
            {this.display()}
        </div>
    );
}
}

export default Results