let ListGroupItem = (props) => {
    const { itemInfo } = props
    return <li className="list-group-item">{itemInfo}</li>
}

let ListGroup = (props) => {
    const { items } = props
    return (<ul className="list-group">{items.map((item, i) => <ListGroupItem itemInfo={item} key={i} />)}</ul>)
}


// ReactDOM.render(<ListGroup items={['Hello', 'world']} />, document.getElementById('root'))