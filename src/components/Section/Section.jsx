import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = props => {
  return (
    <div>
      <h2 className={css.section__title}>{props.title}</h2>
      {props.children}
    </div>
  );
};

Section.protoType = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
