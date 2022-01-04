import React from 'react'
import Icons from './Icons'
import UserDetails from './UserDetails'

const Tweet = (props) => {
    const {text, entities, timestamp_ms} = props.tweetContent

    let mediaList
    if (Object.keys(entities).length > 0){
        mediaList = entities.media.map((item) => {
            return <img src={item.media_url} key={item.media_url} className="media"></img>
        })
    }

    const postDate = new Date(parseInt(timestamp_ms))
    const dateString = postDate.toLocaleDateString(undefined, {month: 'long', day: 'numeric'})
    
    return(
        <li className = 'tweet'>
            <UserDetails tweetContent={props.tweetContent} />
            <p className="date">{dateString}</p>
            <p className="text">{text}</p>
            {mediaList}
            <Icons tweetContent={props.tweetContent}/>
        </li>
    )
}
export default Tweet;
