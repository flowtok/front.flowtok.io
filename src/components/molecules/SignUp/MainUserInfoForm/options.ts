import { Themes } from '../../../../models/models';
import i18n from '../../../../i18n';

const themes = Object.keys(Themes);

export const options = themes.splice(themes.length / 2).map((theme) => {
  return {
    data: theme,
    label: i18n.t(`pages.signup.themes.${theme}`),
    color: `#${(Math.random().toString(16) + '000000')
      .substring(2, 8)
      .toUpperCase()}`,
    value: theme,
  };
});
