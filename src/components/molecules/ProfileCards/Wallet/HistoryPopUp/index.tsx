import { forwardRef, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { HistoryItemComponent } from '../HistoryItem';
import { Divider } from '../../../../atoms/Divider';
import { PopUp } from '../../../PopUp';
import { HistoryItem } from '../../../../../models/models';

interface HistoryPopUpProps {
  isOpen: boolean;
  close: () => void;
  historyList: HistoryItem[];
}

export const HistoryPopUp = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HistoryPopUpProps>
>(({ isOpen, close, historyList }) => {
  const { t } = useTranslation();

  return (
    <PopUp
      isOpen={isOpen}
      close={() => close()}
      title={t('pages.profile.wallet.popup-title')}
    >
      <div>
        {historyList.map((h, key) => (
          <>
            <HistoryItemComponent item={h} key={'history-item-' + key} />
            {history.length !== 1 && <Divider />}
          </>
        ))}
      </div>
    </PopUp>
  );
});
