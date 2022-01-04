import React from 'react';
import Tweet from './Tweet'
const TwitterFeed = (props) => {
  
const tweets = props.data.map((post) => {
    return <Tweet key={post.id_str} tweetContent={post}/>
  })
  return(
    <ul>
      {tweets}
    </ul>
  )
};

export default TwitterFeed;
