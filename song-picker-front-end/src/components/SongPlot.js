import React from 'react';
import Plot from 'react-plotly.js';
var suggestions = {
  "tracks": [
    {
      "features": {
        "acousticness": 167.63005780346822,
        "danceability": 90.26051237704031,
        "energy": 105.6194989844279,
        "instrumentalness": 0.0,
        "key": 99.9900009999,
        "liveness": 88.73596522998913,
        "loudness": 84.83550189267153,
        "mode": 99.9900009999,
        "speechiness": 90.49602423324498,
        "tempo": 92.64679621482075,
        "valence": 114.53870322764925
      },
      "info": {
        "album": "Bet On Me",
        "artist": "Moneybagg Yo",
        "image": "https://i.scdn.co/image/ab67616d00001e02138506ca87fe591ce7fd0da8",
        "title": "Wat U On (feat. Gunna)"
      }
    },
    {
      "features": {
        "acousticness": 201.73410404624278,
        "danceability": 93.39530861528483,
        "energy": 122.09433536447756,
        "instrumentalness": 0.0,
        "key": 99.9900009999,
        "liveness": 82.57877580586744,
        "loudness": 91.12817828844071,
        "mode": 99.9900009999,
        "speechiness": 110.94282468761831,
        "tempo": 108.77870869743185,
        "valence": 100.54270208511855
      },
      "info": {
        "album": "STFU",
        "artist": "Joey Trap",
        "image": "https://i.scdn.co/image/ab67616d00001e02e412e33d16a7b4a293c56bd9",
        "title": "GO CRAZY"
      }
    },
    {
      "features": {
        "acousticness": 64.73988439306359,
        "danceability": 91.99005512917522,
        "energy": 108.10200857594224,
        "instrumentalness": 0.0,
        "key": 199.9800019998,
        "liveness": 109.01847156827236,
        "loudness": 121.84909748171229,
        "mode": 99.9900009999,
        "speechiness": 98.82620219613783,
        "tempo": 97.72329272675029,
        "valence": 121.10825478434735
      },
      "info": {
        "album": "SR3MM",
        "artist": "Rae Sremmurd",
        "image": "https://i.scdn.co/image/ab67616d00001e02ba9015f4504a9dfd7560bfa9",
        "title": "Brxnks Truck - From Jxmtro"
      }
    },
    {
      "features": {
        "acousticness": 227.16763005780348,
        "danceability": 88.96335531293913,
        "energy": 117.80636425186188,
        "instrumentalness": 0.0,
        "key": 99.9900009999,
        "liveness": 78.95689967403115,
        "loudness": 121.60566706021253,
        "mode": 99.9900009999,
        "speechiness": 89.36009087466869,
        "tempo": 102.8975272288487,
        "valence": 82.54784347329334
      },
      "info": {
        "album": "Hutmacher Entertainment Best Of 2017",
        "artist": "Big Toe",
        "image": "https://i.scdn.co/image/ab67616d00001e02d179d707361c1ac905997682",
        "title": "050"
      }
    },
    {
      "features": {
        "acousticness": 284.97109826589593,
        "danceability": 97.7191654956221,
        "energy": 129.7675468291582,
        "instrumentalness": 0.0,
        "key": 99.9900009999,
        "liveness": 92.72002897500904,
        "loudness": 95.21780936963692,
        "mode": 99.9900009999,
        "speechiness": 131.01098068913288,
        "tempo": 103.64562703329925,
        "valence": 102.5421308197658
      },
      "info": {
        "album": "i am > i was",
        "artist": "21 Savage",
        "image": "https://i.scdn.co/image/ab67616d00001e02280689ecc5e4b2038bb5e4bd",
        "title": "break da law"
      }
    },
    {
      "features": {
        "acousticness": 86.12716763005781,
        "danceability": 99.55680466976543,
        "energy": 105.39381629429023,
        "instrumentalness": 238.0,
        "key": 99.9900009999,
        "liveness": 120.97066280333213,
        "loudness": 102.76415243612995,
        "mode": 99.9900009999,
        "speechiness": 45.05868989019311,
        "tempo": 99.93893212794711,
        "valence": 81.97657812053698
      },
      "info": {
        "album": "Dex Meets Dexter",
        "artist": "Famous Dex",
        "image": "https://i.scdn.co/image/ab67616d00001e0224ef7429ba82789623ae8b14",
        "title": "PICK IT UP (feat. A$AP Rocky)"
      }
    }
  ]
};
function makeTrace(index) {
  var track = suggestions["tracks"][index]["features"];
  var trace = {
    x: Object.keys(track),
    y: Object.values(track),
    name: suggestions["tracks"][index]["info"]["title"],
    type: "bar"
  };
  return trace;
}
var trace1 = makeTrace(0);
var trace2 = makeTrace(1);
var trace3 = makeTrace(2);
var trace4 = makeTrace(3);
var trace5 = makeTrace(4);
var trace6 = makeTrace(5);
export default function SongPlot() {
  return (
    <Plot
      data={[trace1, trace2, trace3, trace4, trace5, trace6]}
      layout={ {width: 1280, height: 450, barmode: "group", title: "Audio Features of Song Suggestions in Proportion to the Input Song"} }
    />
  );
}