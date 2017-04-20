import React, { Component } from 'react';

function FetchTweetsButton({ onFetchTweets }) {
  return <button onClick={ onFetchTweets }>Fetch Tweets</button>
};

export default FetchTweetsButton;
