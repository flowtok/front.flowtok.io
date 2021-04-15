import { useTranslation } from 'react-i18next';
import { PageTemplate } from 'components/templates/Page';
import { Switch } from 'components/atoms/Switch';
import { useState } from 'react';

export default () => {
  const { t } = useTranslation();

  const [isBonus, setIsBonus] = useState(true);

  const onSwitch = () => {
    setIsBonus((prev) => !prev);
  };

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
        <Switch
          label={isBonus ? '+ 1.00 ₽' : ''}
          onChange={onSwitch}
          defaultChecked={isBonus}
        />
      </div>
    </PageTemplate>
  );
};
