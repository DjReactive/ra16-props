import PropTypes from 'prop-types';

export default function Block() {
  return (
    <div className="all">
      <div className="card-block">
        <Stars count={3} />
      </div>
      <div className="card-block">
        <Stars count={1} />
      </div>
      <div className="card-block">
        <Stars count={0} />
      </div>
    </div>
  );
}

function Stars({count}) {
  let counter = [];
  for (let i = 0; i < count; i++) {
    counter.push(<Star key={i}/>)
  }
  return (
    <ul className="card-body-stars">{counter}</ul>
  );
}

function Star() {
  return (
    <li>
      <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
        <path d="M0 0h18v18H0z" fill="none"/>
      </svg>
    </li>
  );
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number.isRequired
}
