import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


class App extends React.Component {
  state = { images: [] };
  
  onClickSearchSubmit = async (term) => { // It will be used for fetching images, api request
    const response = await unsplash.get('/search/photos', { 
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onClickSearchSubmit} /> {/* It does not have to be called onSubmit*/}
        <ImageList />
      </div>
    );
  }
}

export default App;