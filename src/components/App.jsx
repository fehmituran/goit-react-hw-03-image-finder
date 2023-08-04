import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

import pixabayApi from '../services/api';

const INITIAL_STATE = {
  searchQuery: '',
  page: 1,
  images: [],
  isLoading: false,
  error: null,
  totalPage: null,
  showModal: false,
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ loading: true });

      try {
        const response = await pixabayApi(searchQuery, page);

        const { hits, totalHits } = response.data;

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalPage: totalHits / 12,
        }));
      } catch (error) {
        this.setState({ error: 'Something wrong. Please try again.' });
      } finally {
      }
    }
  }

  onSubmit = async searchQuery => {
    this.setState({
      searchQuery,
      images: [],
      page: 1,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, totalPage, page, isLoading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />

        {isLoading && <Loader />}

        <ImageGallery images={images} openModal={this.onOpenModal} />

        {totalPage > page && <Button loadMore={this.onLoadMore} />}
      </div>
    );
  }
}
