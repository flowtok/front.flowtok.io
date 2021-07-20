import { useTranslation } from 'react-i18next';
import { Button } from '../../../../atoms/Button';
import { WalletType } from '../../../../../types/types.temp';

export interface MethodsBtnGroupProps {
  onClickAction: (type: WalletType) => void;
}

export const MethodsBtnGroup = ({ onClickAction }: MethodsBtnGroupProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Button
        preset={'payment-method'}
        onClick={() => onClickAction(WalletType.Yandex)}
      >
        {t('payment-methods.yandex')}
      </Button>
      <Button
        preset={'payment-method'}
        onClick={() => onClickAction(WalletType.Qiwi)}
      >
        {t('payment-methods.qiwi')}
      </Button>
      <Button
        preset={'payment-method'}
        onClick={() => onClickAction(WalletType.Wmr)}
      >
        {t('payment-methods.webmoney-r')}
      </Button>
      <Button
        preset={'payment-method'}
        onClick={() => onClickAction(WalletType.Wmz)}
      >
        {t('payment-methods.webmoney-z')}
      </Button>
      <Button
        preset={'payment-method'}
        onClick={() => onClickAction(WalletType.Card)}
      >
        {t('payment-methods.card')}
      </Button>
      <Button
        preset={'payment-method'}
        onClick={() => onClickAction(WalletType.Phone)}
      >
        {t('payment-methods.phone-number')}
      </Button>
    </>
  );
};
