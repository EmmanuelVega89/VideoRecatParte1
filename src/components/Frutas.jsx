import react from "react"

const Frutas = (props) => {
    //const frutas = ["🍉","🍌","🍓","🥃"]
    return (
        <>
            <ul>
                {props.frutasApp.map((fruta, index) => (
                    <li key={fruta}>{index + 1}-{fruta}</li>
                ))}
            </ul>
            <p>lo</p>
        </>
    )
}
//props
export default Frutas
