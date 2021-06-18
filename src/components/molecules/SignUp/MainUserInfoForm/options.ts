import { Themes } from '../../../../models/models';
import i18n from '../../../../i18n';

export const options = [
  {
    data: Themes.animals,
    label: i18n.t('pages.signup.themes.animals'),
    color: '#00B8D9',
    value: 'animals',
  },
  {
    data: Themes.dancing,
    label: i18n.t('pages.signup.themes.dancing'),
    color: '#0052CC',
    value: 'dancing',
  },
  {
    data: Themes.auto,
    label: i18n.t('pages.signup.themes.auto'),
    color: '#5243AA',
    value: 'auto',
  },
  /* continue here pls */
];
