import React, { Component } from 'react';

const PostContainer = props => {
    return(
        <div>
            {let comments = props.map(item => item.comments)}
            <CommentSection boo = {}/>
        </div>
    );
}