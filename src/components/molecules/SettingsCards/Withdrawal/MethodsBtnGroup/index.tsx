import { useTranslation } from 'react-i18next';
import { Button } from '../../../../atoms/Button';

export interface MethodsBtnGroupProps {
  onClickAction: (type: string) => void;
}

export const MethodsBtnGroup = ({ onClickAction }: MethodsBtnGroupProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Button preset={'payment-method'} onClick={() => onClickAction('yandex')}>
        {t('payment-methods.yandex')}
      </Button>
      <Button preset={'payment-method'} onClick={() => onClickAction('qiwi')}>
        {t('payment-methods.qiwi')}
      </Button>
      <Button
        preset={'payment-method'}
        onClick={() => onClickAction('webmoney-r')}
      >
        {t('payment-methods.webmoney-r')}
      </Button>
      <Button
        preset={'payment-method'}
        onClick={() => onClickAction('webmoney-z')}
      >
        {t('payment-methods.webmoney-z')}
      </Button>
      <Button preset={'payment-method'} onClick={() => onClickAction('card')}>
        {t('payment-methods.card')}
      </Button>
      <Button
        preset={'payment-method'}
        onClick={() => onClickAction('phone-number')}
      >
        {t('payment-methods.phone-number')}
      </Button>
    </>
  );
};
