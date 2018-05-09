import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {

    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }

    constructor(props)
    {
        super(props);
        this.state ={
            userName:props.userName,
            content:""
        }
    }

    componentDidMount(){
        this.textarea.focus();
    }

    handleUserNameOnChange(event)
    {
        this.setState({userName:event.target.value});
    }

    handleUserNameOnBlur(event)
    {
        this.props.onUserNameInputBlur(event.target.value);
    }

    handleContentOnChange(event)
    {
        this.setState({content:event.target.value});
    }

    handleOnClickOnButton()
    {
        if (this.props.onSubmit) {
            let comment = { userName:this.state.userName,content:this.state.content,releaseTime:+new Date()}
            this.props.onSubmit(comment);
        }
        this.setState({ content: '' })
    }
    
    render(){
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input
                            value ={this.state.userName}
                            onChange ={this.handleUserNameOnChange.bind(this)}
                            onBlur={this.handleUserNameOnBlur.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea)=>{this.textarea=textarea} } value={this.state.content} onChange={this.handleContentOnChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleOnClickOnButton.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput