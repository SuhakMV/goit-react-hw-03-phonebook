import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = props => {
  return (
    <div>
      <ul className={css.contact__list}>
        {props.contacts.map(({ id, name, number }) => (
          <li className={css.list__item} key={id}>
            <p className={css.list__text}>
              {name}: {number}
            </p>

            <button className={css.list__btn} type="submit" onClick={() => props.onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.protoType = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),

  onDeleteContact: PropTypes.func,
};

export default ContactList;
