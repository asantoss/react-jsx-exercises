let TextInput = (props) => {
    const { inputName } = props;
    return <input type="text" name={inputName || null} id="" />
}

let YesNoRadio = () => {
    return <div className="radios">
        <label htmlFor="">Yes</label>
        <input type="radio" name="" id="" />
        <label htmlFor="">No</label>
        <input type="radio" name="" id="" />
    </div>
}

let SubmitButton = () => {
    return <button type="submit">Submit</button>
}

let Form = () => {
    return <form action="">
        <TextInput inputName="Name" />
        <TextInput inputName="Date" />
        <TextInput />
        <YesNoRadio />
        <YesNoRadio />
        <SubmitButton />
    </form>
}


// ReactDOM.render(<Form />, document.getElementById('root'))