// import React, { Component } from 'react'
const articlesData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    return data.json()
}

class App extends React.Component {
    state = {
        articleData: [],
    }

    componentDidMount() {
        articlesData().then(data => {
            this.setState({
                articleData: data
            })
        })
    }

    render() {
        return (
            <div>
                <Blog articles={this.state.articleData} isLoggedIn={false} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))



