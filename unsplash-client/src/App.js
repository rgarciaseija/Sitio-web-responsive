
import React from 'react';
import CardsList from './components/CardsLists/CardsList';
import SearchForm from './components/SearchForm/SearchForm';
import './App.css';

class App extends React.Component {
  state = {
    images: [],
  };
  searchImage = (searchData) => {
    this.setState(
      {
        images: searchData,
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchForm onSubmit={this.searchImage} />
        </header>

        <CardsList returnedImages={this.state.images} />
      </div>
    );
  }
}


export default App;
