import React from "react";
import youtube from "../Api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
    this.onFormSubmit("react")
  }

  onFormSubmit = async (input) => {
    // console.log(input.toLowerCase())
    const response = await youtube.get("/search", {
      params: {
        q: input,
      },
    });
    // console.log(response);
    const item = response.data.items;
    console.log(item);
    this.setState({ videos: item, selectedVideo:item[0]});
  };

  onVideoSelect = (video) => {
    // console.log("from the app component", video)
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
