import React from 'react';

import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((it) => {
        const {id, ...itProps} = it;
        return (
            
            <li key={id} className='list-group-item'>
                <PostListItem {...itProps} />

            </li>
        )
    })

    return (

        <ul className="app-list list-group">
            {elements}
        </ul>

    )
}

export default PostList;