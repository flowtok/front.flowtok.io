import { useTranslation } from 'react-i18next';
import { Paper } from '../../../atoms/Paper';
import commonStyles from '../styles.module.scss';
import { Divider } from '../../../atoms/Divider';
import styles from './styles.module.scss';
import { MethodsBtnGroup } from './MethodsBtnGroup';
import { useState } from 'react';
import { PopUp } from '../../PopUp';

export const WithdrawalCard = () => {
  const { t } = useTranslation();

  const [currentMethod, setMethod] = useState<string>('');
  const [isOpenPopUp, setOpenPopUp] = useState<boolean>(false);

  const baseDescription = (
    <p className={commonStyles['description']}>
      {t('pages.settings.cards.withdrawal.helper-text')}
    </p>
  );

  return (
    <>
      <Paper>
        <h3 className={commonStyles['primary-title']}>
          {t('pages.settings.cards.withdrawal.title')}
        </h3>
        <div className={styles['saved-block']}>
          <p className={commonStyles['secondary-title-small']}>
            {t('pages.settings.cards.withdrawal.saved-list')}
          </p>
          {baseDescription}
        </div>
        <Divider />
        <div className={styles['add-method-block']}>
          <p className={commonStyles['secondary-title-small']}>
            {t('pages.settings.cards.withdrawal.add-new-method')}
          </p>
          <div className={styles['btn-group']}>
            <MethodsBtnGroup
              onClickAction={(type: string) => {
                setMethod(type);
                setOpenPopUp(true);
              }}
            />
          </div>
        </div>
      </Paper>
      <PopUp
        isOpen={isOpenPopUp}
        close={() => setOpenPopUp(false)}
        title="test"
      >
        <span>test</span>
      </PopUp>
    </>
  );
};
