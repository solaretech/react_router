import React from 'react';
import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More"
    ].map((title, i) => <Article key={i} title={title} />);

    const AdText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5"
    ];

    const randomAd = AdText[Math.round(Math.random() * (AdText.length - 1))];

    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
