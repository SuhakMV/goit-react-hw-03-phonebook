import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = (props) => {
  return (
    <div className={css.filter__section}>
      <label>
        <p className={css.filter__text}>Find contacts by name</p>
        <input type="name" value={props.value} onChange={props.onChange} />
      </label>
    </div>
  );
};

Filter.protoType = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
