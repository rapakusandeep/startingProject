import './CoreConceptProps.css';

//how to uses props to use the same component with diff data
export default function CoreConceptProps(props) {
    return (
      <li>
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    );
  }