

function HogInfo({name, specialty, weight, greased, hog}){

    return(
        <div className="hogInfo">
            <div className="ui eight wide column">
                <h1>Name: {name}</h1>
                <p>specialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <p>Greased? {greased}</p>
            </div>
        </div>
    )
}



export default HogInfo;