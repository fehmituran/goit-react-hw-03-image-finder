import React, { Component } from 'react';
import Notiflix from 'notiflix';
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
      this.setState({ isLoading: true });

      try {
        const response = await pixabayApi(searchQuery, page);

        const { hits, totalHits } = response.data;


        if (totalHits === 0) {
          return  Notiflix.Notify.warning(`it couldn't find  ${searchQuery} images for you,`);
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalPage: totalHits / 12,
        }));
      } catch (error) {
        this.setState({ error: 'Something wrong. Please try again.' });
      } finally {
        this.setState({ isLoading: false });
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

    console.log(isLoading);
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />

        {isLoading && <Loader isLoading={isLoading} />}

        <ImageGallery images={images} openModal={this.onOpenModal} />

        {totalPage > page && <Button loadMore={this.onLoadMore} />}
      </div>
    );
  }
}
