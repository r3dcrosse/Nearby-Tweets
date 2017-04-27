import React, { Component } from 'react';
import Tweet from './Tweet.jsx';

function TweetList({ tweets }) {
  return (
    <div>
      {
        tweets.map((tweet) => {
          return <Tweet tweet={tweet} key={tweet.id}/>
        })
      }
    </div>
  );
};

export default TweetList;
