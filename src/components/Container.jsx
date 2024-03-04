import Button from './Button';
import Content from './Content';
const Container = ({ onClick, collapsedLabel, ...props }) => {

     return (
         <div className={collapsedLabel ? "container show" : "container"}>
              <Button id="collapsedLabel" onClick={onClick} />
              <Button id="expandedLabel" onClick={onClick} />
              <Content {...props }/>
         </div>
     )
}

export default Container;
