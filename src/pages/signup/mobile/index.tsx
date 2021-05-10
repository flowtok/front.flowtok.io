import { useTranslation } from 'react-i18next';
import { PageTemplate } from 'components/templates/Page';
import { SignUpForm } from '../../../components/molecules/SignUp/SignUpForm';

export default () => {
  const { t } = useTranslation();

  return (
    <PageTemplate
      headerProps={{
        title: t('header.signup.title'),
        withAvatar: false,
        withBackArrow: true,
        withSeparator: true,
      }}
      extendedStyleProps={{
        paddingTop: 0,
      }}
    >
      <SignUpForm />
    </PageTemplate>
  );
};
