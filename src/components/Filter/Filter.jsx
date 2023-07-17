import { useDispatch, useSelector } from "react-redux";
import { Conteiner, Input } from "./Filter.styled";
import { setFilter } from "redux/filterSlice";



export const Filter = () => {
  const dispatch = useDispatch()
  
  const contacts = useSelector(state=>state)
  console.log(contacts)
  const onChange = (e) => {
  
    dispatch(setFilter(e.target.value))
  }


  return (<>
    {contacts.length > 0 ?
    (<Conteiner>
      <p>Find contacts by name</p>
      <Input
        type="text"
        name="filter"
        placeholder="Enter name"
        onChange={onChange}
      />
    </Conteiner>) : (<p>Please add your first contact</p>)}
    
  
    </>
  );
};
