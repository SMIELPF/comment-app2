import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps ={
        comments:[]
    }

    handleOnDelete(i)
    {
        this.props.onDelete(i);
    }

    render(){
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} index={i} onDelete={this.handleOnDelete.bind(this)}/>
                )}
            </div>)
    }
}

export default CommentList