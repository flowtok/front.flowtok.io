import { render, screen } from '@utils/tests';

import {
  NEW_CODE_TIK_TOK,
  VERIFY_TIK_TOK,
} from '@components/molecules/VerificationPopup/mutations';
import { VerificationPopup } from './index';

const mocks = [
  {
    request: {
      query: VERIFY_TIK_TOK,
    },
    result: { data: { verifyTikTok: false } },
  },
  {
    request: {
      query: NEW_CODE_TIK_TOK,
    },
    result: { data: { newCodeTikTok: '💜🍓🤑🙏' } },
  },
];

let unmount: () => void;
beforeEach(() => {
  unmount = render(<VerificationPopup />, {
    addTypename: false,
    mocks,
  }).unmount;
});
afterEach(() => unmount());

describe('VerificationPopup works correctly', () => {
  it('should render SwiperButton', () => {
    expect(screen.queryByTestId('swiper-button')).toBeDefined();
  });
});
