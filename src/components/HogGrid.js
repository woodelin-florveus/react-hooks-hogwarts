
import HogInfo from "./HogInfo"

function HogGrid({hogs, handleFilter}){

    const hogList = hogs.map((hog) => {
        // console.log(hog)
        return (
            <HogInfo 
            key={hog}
            name={hog.name}
            specialty={hog.specialty}
            weight={hog.weight}
            greased={hog.greased}
            handleFilter={handleFilter}
            />
        )
    })

    return(
        <div className="ui grid container">
        {hogList}
        </div>
    )
}




export default HogGrid;