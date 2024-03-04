
const Button = ({ onClick, id }) => {
   return (
       <button onClick={() => onClick(id)} className="button">Click me</button>
   )
}

export default Button
