import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component
{
    static propTypes ={
        onDelete:PropTypes.func
    }

    constructor()
    {
        super();
        this.state = {
            timeString:'刚刚'
        }
    }

    handleOnClickOnDelete()
    {
        this.props.onDelete(this.props.index);
    }

    _getTimeString()
    {
        let durationSeconds = ( Date.now() - this.props.comment.releaseTime )/1000;//单位为秒
        if(durationSeconds<60)
        {
            return `${Math.round(durationSeconds)}秒前`
        }
        else
        {
            return `${Math.round(durationSeconds/60)}分钟前`
        }
    }

    componentWillMount()
    {
        this.setState({timeString:this._getTimeString()});
        this._timer = setInterval(()=>{this.setState({timeString:this._getTimeString()})},5000);
    }

    componentWillUnmount()
    {
        clearInterval(this._timer)
    }

    render()
    {
        return (
            <div className='comment'>
                <div className='comment-username'>
                    <span>{this.props.comment.userName} </span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete' onClick={this.handleOnClickOnDelete.bind(this)}>
                    删除
                </span>
            </div>

        )
    }
}

export default Comment