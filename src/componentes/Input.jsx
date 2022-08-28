function Input(props) {
    return <div>
        <h5>{props.subtitulo}</h5>
        <input type="text" placeholder="ingresa un texto" 
        onChange={(event) => props.setUser(event.target.value)}
        value={props.value} />
    </div>
    }
    export default Input