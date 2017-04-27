import React, { Component } from 'react';

function Tweet({ tweet }) {
  // console.log(tweet);
  const profile_image_url = tweet.user.profile_image_url;
  const screen_name = tweet.user.screen_name;
  const text = tweet.text;

  return (
    <div>
      <img src={profile_image_url} />
      <div>{screen_name}</div>
      <div>{text}</div>
    </div>
  );
};

export default Tweet;
