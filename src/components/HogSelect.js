

function HogSelect({hogs, handleSelectName}){

    const selectHogs = hogs.map((hog) => {
        return(
            <option key={hog}>
                {hog.name}
            </option>
        )
    })

     
    

   return(
    <select onChange={handleSelectName}>
        {selectHogs}
    </select>
   )
}






export default HogSelect
