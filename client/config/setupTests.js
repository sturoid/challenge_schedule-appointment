import 'cross-fetch/polyfill'; // Needed for compiled code to run correctly on Apollo Client.
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
