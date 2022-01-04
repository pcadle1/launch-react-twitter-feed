import React from 'react'

const Icons = (props) => {
    const {retweet_count, favorite_count, retweeted, liked} = props.tweetContent
    const likeButtonId = liked ? 'liked' : 'not-liked'
    const retweetedId = retweeted ? 'retweeted' : 'not-retweeted'

    return (
        <div className="icons">
        <i className="fas fa-reply" onClick={event => alert('reply')}></i>
        <i className="fas fa-retweet" id ={retweetedId} onClick={event => alert('retweet')}> {retweet_count}</i>
        <i className='fas fa-heart' id={likeButtonId} onClick={event => alert('like')}>  {favorite_count}</i>
        <i className="fas fa-ellipsis-h" onClick={event => alert('more')}></i>
    </div>
    )
}

export default Icons