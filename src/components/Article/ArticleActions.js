import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkO, faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faHeart, faShareAlt, faComment } from '@fortawesome/free-solid-svg-icons';


const ArticleActions = (props) => {
    const bookmarkIcon = (props.readLater) ? faBookmark : faBookmarkO;
    const heartkIcon = (props.liked) ? faHeart : faHeartO;
    
    const bookmark = (props.bookmark || (!props.share && !props.likes && !props.bookmark)) && <li><a href="#"><FontAwesomeIcon icon={bookmarkIcon} /> {props.reduced ? '' : 'Leer más tarde'}</a></li>;
    const share = (props.share || (!props.share && !props.likes && !props.bookmark)) && <li><a href="#"><FontAwesomeIcon icon={faShareAlt} /></a></li>;
    const comments = (props.comments !== undefined || (!props.share && !props.likes && !props.bookmark)) && <li><a href="#"><FontAwesomeIcon icon={faComment} /> {props.comments}</a></li>;
    const likes = (props.likes || (!props.share && !props.likes && !props.bookmark)) && <li><a href="#"><FontAwesomeIcon icon={heartkIcon} /></a></li>;
    
    return (
        <div className="options">
            <ul>
                {bookmark}
                {share}
                {comments}
                {likes}
            </ul>
        </div>
    );
}

export default ArticleActions;