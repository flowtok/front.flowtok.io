import { forwardRef, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { PopUp } from '../../PopUp';
import { useTranslation } from 'react-i18next';

export enum TasksPopUpTypes {
  thatIsDone = 'thatDone',
  howToDo = 'todo',
}

interface TasksPopUpProps {
  isOpen: boolean;
  close: () => void;
  type: string;
  tasks: { value: string; isDone: boolean }[];
}

export const TasksPopUp = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TasksPopUpProps>
>(({ isOpen, close, type, tasks }, ref) => {
  const { t } = useTranslation();
  let title = t('task-cards.popup-titles.how-to-do');

  if (type === TasksPopUpTypes.thatIsDone && tasks.find((t) => t.isDone)) {
    title = t('task-cards.popup-titles.that-is-done');
  }
  if (type === TasksPopUpTypes.thatIsDone && tasks.find((t) => !t.isDone)) {
    title = t('task-cards.popup-titles.that-is-not-done');
  }

  return (
    <PopUp isOpen={isOpen} close={close} title={title} size="s">
      <ul className={styles['task-list']}>
        {tasks.map((task, key) => {
          if (type === TasksPopUpTypes.thatIsDone && task.isDone) {
            return (
              <li key={'task' + key} style={{ textDecoration: 'line-through' }}>
                {task.value}
              </li>
            );
          }
          return <li key={'task' + key}>{task.value}</li>;
        })}
      </ul>
    </PopUp>
  );
});
