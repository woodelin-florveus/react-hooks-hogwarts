function HogFilter({handleFilter}){

    function handleClick(event){
        console.log(event.target)
    }

    return(
        <div>
            <button onClick={handleFilter}>Display Greased</button>
        </div>
    )
}




export default HogFilter;

