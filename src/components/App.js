import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onClickSearchSubmit(term) { // It will be used for fetching images, api request
    console.log(term);
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