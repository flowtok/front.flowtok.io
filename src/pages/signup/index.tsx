import { useTranslation } from 'react-i18next';
import { PageTemplate } from 'components/templates/Page';
import { Switch } from 'components/atoms/Switch';

export default () => {
  const { t } = useTranslation();

  return (
    <PageTemplate
      headerProps={{
        title: t('header.profile.title'),
        withAvatar: false,
      }}
      extendedStyleProps={{
        paddingTop: 0,
      }}
    >
      <div>
        <Switch hasLabel={true} />
      </div>
    </PageTemplate>
  );
};
