import {
  WithTempClass,
  WithTempClassProps,
} from '@root/hocs/WithTempClass/index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockedProps: WithTempClassProps = {
  className: 'test',
  duration: 500,
  trigger: 'onClick',
  renderTarget: jest.fn(({ className }) => <div className={className} />),
};

let unmount: () => void;
beforeEach(
  () => (unmount = render(<WithTempClass {...mockedProps} />).unmount)
);
afterEach(() => unmount());

describe('WithTempClass works correctly', () => {
  it(`should pass class ${mockedProps.className} to the render function on trigger ${mockedProps.trigger}`, function () {
    userEvent.click(screen.getByTestId('trigger-box'));
    expect(mockedProps.renderTarget).toHaveBeenLastCalledWith(
      expect.objectContaining({ className: mockedProps.className })
    );
  });
  it(`should remove className from render function props after  ${mockedProps.duration} ms`, function () {
    userEvent.click(screen.getByTestId('trigger-box'));
    setTimeout(() => {
      expect(mockedProps.renderTarget).toHaveBeenLastCalledWith(
        expect.objectContaining({ className: '' })
      );
    }, mockedProps.duration);
  });
});
