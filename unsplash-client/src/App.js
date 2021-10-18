
import React from 'react';
import CardsList from './components/CardsLists/CardsList';
import SearchForm from './components/SearchForm/SearchForm';
import Footer from './components/Footers/Footer';
import './App.css';

// import axios from 'axios';


// const api_url = await axios.get('https://api.unsplash.com/collections/833138?client_id=rUPY7FbBpd1sXsZ5D3LiRfuGPoLoIuekwHna1bW5m7w&page=1');

class App extends React.Component {
  state = {
    images: [],
  };

  // loadImages = async () => {
  //   const res = await axios.get('https://api.unsplash.com/collections/833138?client_id=rUPY7FbBpd1sXsZ5D3LiRfuGPoLoIuekwHna1bW5m7w&page=1');
  //   console.log('App', res.data);
  // }

  searchImage = (searchData) => {
    this.setState(
      {
        images: searchData,
      }
    );
  }

  render() {
    // this.loadImages();
    return (
      <div className="App">
        <header className="header">
          <SearchForm onSubmit={this.searchImage} />
        </header>
        <CardsList returnedImages={this.state.images} />
        <Footer />
      </div>
    );
  }
}


export default App;
