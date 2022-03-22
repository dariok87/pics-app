import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";


class App extends React.Component {
  state = { images: [] };
  
  async onClickSearchSubmit(term) { // It will be used for fetching images, api request
    const response = await axios
    .get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 
          'Client-ID FL3iIEC7RqreG5Ij2so5jGlZ77KUNOK3SLf5QZ4Bu5M'
      }
    });

    console.log(response.data.results);
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onClickSearchSubmit} /> {/* It does not have to be called onSubmit*/}
      </div>
    );
  }
}

export default App;