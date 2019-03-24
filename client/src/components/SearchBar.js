import React, { Component } from "react";
import { InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap'
export default class SearchBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <InputGroup className="mt-5">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />

                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title={this.props.searchType || "dropdown"}
                    id="input-group-dropdown-2"
                >
                    <Dropdown.Item onClick={this.props.setSearchType}>Artist</Dropdown.Item>
                    <Dropdown.Item onClick={this.props.setSearchType}>Tracks</Dropdown.Item>
                    <Dropdown.Item onClick={this.props.setSearchType}>Album</Dropdown.Item>
                </DropdownButton>

                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
};