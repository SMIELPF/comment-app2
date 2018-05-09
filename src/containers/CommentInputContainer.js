import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import {addComment} from "../reducers/comments";

class CommentInputContainer extends Component{

    static propTypes={
        comments:PropTypes.array,
        onSubmit:PropTypes.func
    }

    constructor()
    {
        super();
        this.state ={
            userName:''
        }
    }

    _loadUserName(){
        let userName = localStorage.getItem('userName');
        this.setState({userName:userName});
    }


    componentWillMount()
    {
        this._loadUserName();
    }

    handleOnSubmit(comment)
    {
        //console.log(comment.userName);
        //console.log(comment.content);
        if (!comment) return
        if (!comment.userName) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        //表单验证

        this._saveContent(comment);
        //将评论内容保存到localStorage
        console.log('点击提交按钮')
        this.props.onSubmit(comment);
        //将评论内容添加到store中
    }

    _saveUserName(userName){
        localStorage.setItem('userName',userName);
    }

    _saveContent(comment)
    {
        /*let comments = this.props.comments;
        comments.push(comment);*/
        let comments = this.props.comments;
        let newComments = [...comments,comment]
        localStorage.setItem('comments',JSON.stringify(newComments));
    }

    handleUserNameInputBlur()
    {
        this._saveUserName(this.state.userName);
    }

    render(){
        return <CommentInput
            userName={this.state.userName}
            onSubmit={this.handleOnSubmit.bind(this)}
            onUserNameInputBlur={this.handleUserNameInputBlur.bind(this)}/>
    }
}

const mapStateToProps=(state)=>{
    return {
        comments:state.comments
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onSubmit:(comment)=>{dispatch(addComment(comment))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentInputContainer)