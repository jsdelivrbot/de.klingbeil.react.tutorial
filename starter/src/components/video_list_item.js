import React from 'react';

const VideoListItem = ({video}) => {

    const imageURL = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item">
            <div className="media-left">
                <img src={imageURL} className="media-object" />
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </li>
    )
}

export default VideoListItem;