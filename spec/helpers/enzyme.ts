import jasmineEnzyme from "jasmine-enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: Adapter() });

beforeEach(function() {
  jasmineEnzyme();
});
