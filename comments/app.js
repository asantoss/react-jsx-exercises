


let ProfilePic = (props) => {
    const styles = {
        backgroundImage: `url(${props.imgUrl})`
    };
    return <div className="profileImg" style={styles}></div >
};

let CommentBody = (props) => {
    const { userName, body } = props;
    return (<div className="commentBody">
        <h3>{userName}</h3>
        <p>{body}</p>
    </div>)
};

let Comment = (props) => {
    const { imgUrl, userName, body } = props
    return (<div className="comment">
        <ProfilePic imgUrl={imgUrl} />
        <CommentBody userName={userName} body={body} />
    </div>)
};


class Comments extends React.Component {
    state = {
        isCommentFormOpen: false
    }
    newComment = (e) => {
        this.setState({
            ...this.state, isCommentFormOpen: !this.state.isCommentFormOpen
        })
    }
    render() {
        const { comments } = this.props;
        return (<div className="commentsContainer">
            {comments.map((comment, i) => {
                return (
                    <Comment imgUrl="./image.jpeg" userName={comment.email} body={comment.body} key={i} />
                )
            })}
            <button onClick={this.newComment}>Add Comment</button>
            {this.state.isCommentFormOpen && <Form />}
        </div>)
    }
}


// ReactDOM.render(<Comments comments={[comment]} />, document.getElementById('root'))