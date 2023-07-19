import {  useSelector, useDispatch } from "react-redux";
import { ButtonDelete, ContactItem, List } from "./ContactList.styled";
import { getContacts, getFilter } from "redux/selectors";
import {deleteContacts} from 'service/getApi'

import { Loader } from "components/Loader/Loader";





export const ContactList = () => {
  const {  error, isLoading} = useSelector(state=>state.contacts.contacts);
 const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch()



const filtredContacts = contacts?.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase()))

  
  return (<>
  {isLoading && <Loader></Loader>}
    <List>
      {filtredContacts.map(({id, name, phone}) => (
        <ContactItem key={id}>
          {name}: {phone}
          <ButtonDelete type="button" onClick={()=>{dispatch(deleteContacts(id))}}>Delete</ButtonDelete>
        </ContactItem>
      ))}
    </List>
    {error && <p>{error}</p>}

    </>
  );
};
