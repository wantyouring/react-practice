import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoPlay from './components/video_play';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCLdIOxIvNCPev6g0OgLp1rHojIylTZxbg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos:[],
      selectedVideo: null,
    };

    this.videoSearch('원추링TV');

    this.videoSearch = this.videoSearch.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  videoSearch(term) {
    console.log('Search video : ',term);
    YTSearch({key: API_KEY, term: term}, videos =>  {
      console.log('result videos : ',videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  onVideoSelect(video) {
    this.setState({selectedVideo:video});
  }

  render() {
    return (
      <div className="App container-fluid">
        <SearchBar videoSearch={this.videoSearch}/>
        <VideoPlay video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    );
  }
}

export default App;
