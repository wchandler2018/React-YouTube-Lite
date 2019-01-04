import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import YTSearch from "youtube-api-search";
import SearchBar from "./Components/Search_Bar";
import VideoList from "./Components/Video_List";
import VideoDetail from "./Components/Video_Detail";
import _ from "lodash";
//YouTube API Key
const API_KEY = "AIzaSyDZsRi3Mqdab75p9GHxmetbtUb9zNbohmM";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <Header />
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
