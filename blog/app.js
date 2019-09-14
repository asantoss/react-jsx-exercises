let Header = (props) => {
    const { isLoggedIn } = props;
    return (<div className="header">
        <div className="logo"></div>
        <div className="header-links">
            <div className="link">Home</div>
            <div className="link">About</div>
            <div className="link">Contact</div>
            <div className="link">{isLoggedIn ? 'Sign Out' : 'Sign In'}</div>
        </div>
    </div>)
}

let Article = (props) => {
    const { articleName, articleAuthor, articleBody, articleDate } = props;
    return (<div className="article">
        <h3>{articleName}</h3>
        <div><h5>{articleAuthor}</h5><span>{articleDate}</span></div>
        <div className="articleBody">
            <p>{articleBody}</p>
        </div>
    </div>)
}


let Footer = (props) => {
    const { isLoggedIn } = props
    return (
        <div className="footerContainer">
            <ul className="footerLinks">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>{!isLoggedIn && 'Sign Out'}</li>
            </ul>
        </div>
    )
}

let Blog = (props) => {
    const { articles, isLoggedIn } = props;
    return (
        <div className="blogContainer">
            <Header isLoggedIn={isLoggedIn} />
            {articles && articles.map((article, i) => {
                return <Article articleName={article.title} articleAuthor={article.userId} articleBody={article.body} key={article.id} />
            })}
            <Footer isLogedIn={isLoggedIn} />
        </div>
    )
}


// ReactDOM.render(<Blog articles={[{ name: 'How far is the moon?', author: 'Alexander Santos', body: 'Hello world writing from the moon I am really far away', date: '09/06/1996' }]} isLoggedIn={true} />, document.getElementById('root'))