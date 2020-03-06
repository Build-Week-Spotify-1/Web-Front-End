import React from 'react';
import { connect } from "react-redux";
import { songSuggest } from "../actions/SuggestAction";
import Plot from 'react-plotly.js';

function SongPlot({suggested}) {
  const makeTrace = track => {
    var features = track.features;
    var trace = {
      x: Object.keys(features),
      y: Object.values(features),
      name: track.info.title,
      type: "bar"
    };
    return trace;
  };

  console.log(suggested);

  return (
    <Plot
      data={suggested.tracks.map(track => makeTrace(track))}
      layout={ {width: 1280, height: 450, barmode: "group", title: "Audio Features of Song Suggestions in Proportion to the Input Song"} }
    />
  );
}

const mapStateToProps = state => {
    return state;
  };
  
export default connect(mapStateToProps, { songSuggest })(SongPlot);