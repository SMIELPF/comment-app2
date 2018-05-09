import React, { Component } from 'react'
import CommentInputContainer from './CommentInputContainer'
import CommentListContainer from "./CommentListContainer";

export default class CommentApp extends Component{

    render(){
        return(
            <div className='wrapper'>
                <CommentInputContainer/>
                <CommentListContainer/>
            </div>
        )
    }
}