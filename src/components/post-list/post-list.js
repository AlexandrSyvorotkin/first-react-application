import React from 'react';

import PostListItem from '../post-list-item/post-list-item';
import { ListGroup } from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((it) => {
        const {id, ...itProps} = it;
        return (

            <li key={id} className='list-group-item'>
                <PostListItem {...itProps} 
                    onDelete={()=> onDelete(id)}/>

            </li>
        )
    })

    return (

        <ListGroup className="app-list">
            {elements}
        </ListGroup>

    )
}

export default PostList;