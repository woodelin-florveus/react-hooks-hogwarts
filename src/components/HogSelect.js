


function HogSelect(props){

    const allHogs = props.hogs.map((j) => {
        return(<option>{j.name}</option>)
    })
    return(
        <select>{allHogs} </select>
    )
}

export default HogSelect;