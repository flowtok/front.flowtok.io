import { shallow } from 'enzyme';
import { Avatar, AvatarProps } from './index';

const mockedProps: AvatarProps = {
  image: 'fake.img',
  size: 32,
};

describe('should render image', () => {
  const component = shallow(
    <Avatar image={mockedProps.image} size={mockedProps.size} />
  );
  it('should render image with true src', function () {
    const src = component.find('img').prop('src');
    expect(src).toEqual(mockedProps.image);
  });
  it('should render image with true size', function () {
    const width = component.find('img').prop('style')?.width;
    const height = component.find('img').prop('style')?.height;
    expect(width).toEqual(mockedProps.size);
    expect(height).toEqual(mockedProps.size);
  });
});
