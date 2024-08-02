import './Css/Todoitems.css'
import close from './Assets/close.png'
import tick from "./Assets/tick.png"
import untick from "./Assets/untick.png"


 const Todoitems = ({no,display,text,setTodos}) => {
  const deletetodo =(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    data=data.filter((todo)=>todo.no!==no)
      setTodos(data);
    }
    
  
  const toggle = () => {
    let data=JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++)
      {
if(data[i].no===no){
  if(data[i].display===" "){
    data[i].display="line-through"
}
else
{
  data[i].display=" ";
}
break;

  }
}
setTodos(data);
}

  return (
    <div className='todoitems'>

      <div className={'todoitems-container $ {display}'} onClick={()=>{toggle(no)}}>
        
        {display===" "? <img src={untick} alt=""/>:<img src={tick} alt=""/>}
        
        <div className="todoitems-text">{text}</div>
       
         </div>
         <img className='todoitems-close-icon' onClick={()=>{deletetodo(no)}} src={close} alt=""/>

    </div>
  )
}
export default Todoitems