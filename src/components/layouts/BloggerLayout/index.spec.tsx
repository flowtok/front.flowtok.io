import { render } from '@utils/tests';
import BloggerLayout from '@components/layouts/BloggerLayout/index';
import { ME } from '@graphql/queries';

const mocks = [
  {
    request: { query: ME },
    result: {
      data: {
        me: {},
      },
    },
  },
];

describe('BloggerLayout works correctly', function () {
  it('should be rendered', function () {
    render(<BloggerLayout />, {
      mocks,
      addTypename: false,
    });
  });
});
