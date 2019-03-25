import React, { Component } from "react";
import { InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import { gql } from 'apollo-boost'

const getTracksQuery = gql`
    query Tracks($searchTerm: String, $searchType: [String]){
        tracks(searchTerm: $searchTerm, searchType: $searchType){
            items{
                name
                id
                duration_ms
                explicit
                href
                popularity
                artists {
                    name
                }
            }
        }
    }
`

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    async handleClick() {
        const { client, searchType, searchTerm } = this.props;
        // debugger
        const { data } = await client.query({
            query: getTracksQuery,
            variables: { searchTerm, searchType: [searchType] },
        })

        this.props.setSearchResults(data)
    }
    render() {
        return (
            <InputGroup className="mt-5">
                <FormControl
                    placeholder="search term"
                    aria-label=""
                    aria-describedby=""
                    onChange={this.props.setSearchTerm}
                />

                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title={this.props.searchType || "dropdown"}
                    id="input-group-dropdown-2"
                >
                    <Dropdown.Item onClick={this.props.setSearchType}>artist</Dropdown.Item>
                    <Dropdown.Item onClick={this.props.setSearchType}>track</Dropdown.Item>
                    <Dropdown.Item onClick={this.props.setSearchType}>album</Dropdown.Item>
                </DropdownButton>

                <InputGroup.Append>
                    <Button onClick={this.handleClick} variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
};