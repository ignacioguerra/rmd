import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkO, faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faHeart, faShareAlt, faComment } from '@fortawesome/free-solid-svg-icons';


const ArticleActions = (props) => {
    const bookmarkIcon = (props.readLater) ? faBookmark : faBookmarkO;
    const heartkIcon = (props.liked) ? faHeart : faHeartO;
  
    return (
        <div className="options">
            <ul>
                <li><a href="#"><FontAwesomeIcon icon={bookmarkIcon} /> Leer más tarde</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faShareAlt} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faComment} /> {props.comments}</a></li>
                <li><a href="#"><FontAwesomeIcon icon={heartkIcon} /></a></li>
            </ul>
        </div>
    );
}

export default ArticleActions;