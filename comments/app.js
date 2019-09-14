
const comment = {
    imgUrl: './image.jpeg',
    userName: 'Alexander Santos',
    body: 'Wow this is a great article'
}


let ProfilePic = (props) => {
    const { imgUrl } = props;
    return (
        <div className="profileImg">
            <img src={imgUrl} alt="" srcSet="" />
        </div>
    )
}

let CommentBody = (props) => {
    const { userName, body } = props
    return (<div className="commentBody">
        <h3>{userName}</h3>
        <p>{body}</p>
    </div>)
}

let Comment = (props) => {
    const { imgUrl, userName, body } = props
    return <div className="comment">
        <ProfilePic imgUrl={imgUrl} />
        <CommentBody userName={userName} body={body} />
    </div>
}

let Comments = (props) => {
    const { comments } = props
    return <div className="commentsContainer">
        {comments.map((comment, i) => {
            return (
                <Comment imgUrl={comment.imgUrl} userName={comment.userName} body={comment.body} key={i} />
            )
        })}
    </div>
}

// ReactDOM.render(<Comments comments={[comment]} />, document.getElementById('root'))