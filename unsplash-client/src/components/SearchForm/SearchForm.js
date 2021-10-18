import React from 'react';
import axios from 'axios';
import './SearchForm.css';


const client_id = 'rUPY7FbBpd1sXsZ5D3LiRfuGPoLoIuekwHna1bW5m7w';

class SearchForm extends React.Component {
    search = React.createRef();

    handleSearch = async (e) => {
        e.preventDefault();
        const resp = await axios.get(`https://api.unsplash.com/search/photos?client_id=rUPY7FbBpd1sXsZ5D3LiRfuGPoLoIuekwHna1bW5m7w&page=1&per_page=20&query=${this.search.current.value}`);
        console.log(resp.data.results);
        // send this data back to App
        this.props.onSubmit(resp.data.results)
    }

    render() {
        return (
            <form onSubmit={this.handleSearch} className="example">
                <input type="text" placeholder="Search.." name="search" ref={this.search} />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchForm;