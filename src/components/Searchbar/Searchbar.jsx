import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Headers, Form, Button, Span, Input } from './Searchbar.styled';
import Notiflix from 'notiflix';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const searchQuery = this.state.searchQuery.trim().toLowerCase();
    if (!searchQuery) {
        Notiflix.Notify.warning('The input field must not be empty! Try again');
      return;
    }
    this.props.onSubmit({ ...this.state });
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <Headers>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Span>
              <FaSearch size={20} />
            </Span>
          </Button>

          <Input
            type="text"
            placeholder="Search images and photos"
            name="name"
            value={searchQuery}
            onChange={this.handleChange}
            
          />
        </Form>
      </Headers>
    );
  }
}

export default Searchbar;
