import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const Navbar = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['row']}>
        <Link to="/profile" className={styles['row-item']}>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 19V17C17 14.7909 15.2091 13 13 13H5C2.79086 13 1 14.7909 1 17V19"
              stroke="#979797"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="9"
              cy="5"
              r="4"
              stroke="#979797"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <Link to="/tasks" className={styles['row-item']}>
          <svg
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="briefcase">
              <rect
                id="Rectangle"
                x="1"
                y="5.0481"
                width="20.24"
                height="14.168"
                rx="2.024"
                stroke="#979797"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Path"
                d="M15.1683 18.204V2.91156C15.1683 1.85583 14.2621 1 13.1443 1H9.09627C7.97844 1 7.07227 1.85583 7.07227 2.91156V18.204"
                stroke="#979797"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </Link>
        <Link to="/settings" className={styles['row-item']}>
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="sliders">
              <path
                id="Path"
                d="M4.5 19V12"
                stroke="#979797"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Path_2"
                d="M4.5 8V1"
                stroke="#979797"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Path_3"
                d="M12.5 19V10"
                stroke="#979797"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Path_4"
                d="M12.5 6V1"
                stroke="#979797"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Path_5"
                d="M20.5 19V14"
                stroke="#979797"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Path_6"
                d="M20.5 10V1"
                stroke="#979797"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Path_7"
                d="M1 11.5H7"
                stroke="#979797"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Path_8"
                d="M9 6.5H15"
                stroke="#979797"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Path_9"
                d="M17 13.5H23"
                stroke="#979797"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
};
