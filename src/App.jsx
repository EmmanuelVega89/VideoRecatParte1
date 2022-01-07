//_rafce =  da la estructura de un componente.
// const App = () => {
//     return <div className="container"> Mi primer componente!!!</div>;
// };

import contador from "./components/contador";
import Frutas from "./components/Frutas";

// export default App;

// const App = () => <div className="container"> Mi primer componente!!!</div>;

// export default App;

// const App = () => {
//     const saludo = "variable"
//     const clasesObjeto = {
//         primary: "text-primary",
//         danger: "text-danger",
//     };
//     return(
//         <div className="container">
//             <p className={clasesObjeto.primary}>{saludo}</p>
//         </div>
//     );
// };
// export default App;
/////////////////////////////////////////////////////////////////////////
//Renderizado condicional
/////////////////////////////////////////////////////////////////////////
const App = () => {
    const saludo = "variable"
    const clasesObjeto = {
        primary: "text-primary",
        danger: "text-danger",
    };
    const user = true;

    const SaludoBienvenida = () => (
        <h2 className="text-success">Bienvenido!!!!</h2>
    );
    const SaludoDespedida = () => {
        return <h2 className="text-danger">Adios!!!</h2>;
    };
    const funcionClick = (nombre) => {
        console.log('me diste click desde una funcion '+nombre)
    }
    const frutas = ["🍉","🍌","🍓","🥃"]
    return(
        <div className="container">
            <contador />
            <p className={clasesObjeto.primary}>{saludo}</p>
            {user ? <SaludoBienvenida/> : <SaludoDespedida/>}
            <Frutas frutasApp={frutas}/>
            <button
                className="btn btn-primary"
                onClick={() => funcionClick('Emmanuel')}
            >
                dame click
            </button>
        </div>
    );
};
//props
export default App;