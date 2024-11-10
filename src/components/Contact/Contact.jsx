import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsSlice';


export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch(); //--------------------------------
  return (
    <>
      <div className={css.contactItem}>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
        <button
          className={css.contactButton}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </>
  );
}
