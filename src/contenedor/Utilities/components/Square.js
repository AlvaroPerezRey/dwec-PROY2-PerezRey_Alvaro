import Classes from './Style.module.css';

//Funcion para darle funcionalidad con los eventos onClick a nuestro tablero
const Square = (props) => {
    return (
        <button className={Classes.Square} onClick={props.onClick}>
            {props.value===null?".":props.value}
        </button>
     );
}
 
export default Square;