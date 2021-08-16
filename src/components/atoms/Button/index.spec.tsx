import { shallow } from 'enzyme';
import { Button } from './index';

it('should execute onClick function on "click" event', function () {
  const clickFn = jest.fn();
  const component = shallow(<Button onClick={clickFn} />);
  component.simulate('click');
  expect(clickFn).toHaveBeenCalled();
});
