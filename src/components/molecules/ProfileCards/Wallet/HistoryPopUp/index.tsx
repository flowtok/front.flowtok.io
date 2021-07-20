import React, { forwardRef, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { HistoryItemComponent } from '../HistoryItem';
import { Divider } from '../../../../atoms/Divider';
import { PopUp } from '../../../PopUp';
import { HistoryPayment, Maybe } from '../../../../../types/graphql';
import { EmptyHistory } from '../EmptyHistory';

interface HistoryPopUpProps {
  isOpen: boolean;
  close: () => void;
  historyList?: Maybe<any>[];
}

export const HistoryPopUp = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HistoryPopUpProps>
>(({ isOpen, close, historyList }, ref) => {
  const { t } = useTranslation();

  return (
    <PopUp
      isOpen={isOpen}
      close={() => close()}
      title={t('pages.profile.wallet.popup-title')}
    >
      <div>
        {historyList && historyList.length > 0 ? (
          historyList.map(
            (h, key) =>
              h && (
                <>
                  <HistoryItemComponent item={h} key={'history-item-' + key} />
                  {history.length !== 1 && <Divider />}
                </>
              )
          )
        ) : (
          <EmptyHistory />
        )}
      </div>
    </PopUp>
  );
});
