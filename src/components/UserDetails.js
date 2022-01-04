import React, {Fragment} from 'react'

const UserDetails = (props) => {
    const {user} = props.tweetContent
    return (
        <>
            <img src={user.profile_image_url} className = 'profile-photo'></img>
            <p className = 'usernames'>{user.name}</p>
            <p className = 'usernames screen-name'>@{user.screen_name}</p>
        </>
    )
}

export default UserDetails