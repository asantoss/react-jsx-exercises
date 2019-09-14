

let FirstComponent = () => {
    const mainStyle = {
        width: '400px',
        display: 'flex',
        flexWrap: '1'
    }
    return (<div style={mainStyle}>
        <div className="row">
            <div style={{ backgroundColor: 'orange', }} className="square" ></div>
            <div style={{ backgroundColor: 'blue' }} className="square"></div>
        </div>
        <div className="row">
            <div style={{ backgroundColor: 'lime' }} className="square"></div>
            <div style={{ backgroundColor: 'yellow' }} className="square"></div>
        </div>

    </div>)
}

// ReactDOM.render(<FirstComponent />, document.getElementById('root'))
