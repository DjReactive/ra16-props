import logo from '../logo.svg';
import './App.css';
import Listing from './Listing';
import PropTypes from 'prop-types';
import { data } from './defines.js';

function App() {
  return (
    <div className="content">
      <Listing items={data} />
    </div>
  );
}

Listing.defaultProps = {
  items: []
}
Listing.propTypes = {
  items: PropTypes.instanceOf(Array)
}

export default App;
