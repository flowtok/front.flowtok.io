import React, { FC } from 'react';

type TasksIconPropsT = {
  isActive?: boolean;
  color?: string;
};
export const TasksIcon: FC<TasksIconPropsT> = ({ isActive, color }) => {
  if (isActive) {
    return (
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
            y="5.04883"
            width="20.24"
            height="14.168"
            rx="2.024"
            stroke="url(#paint0_linear)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path"
            d="M15.168 18.204V2.91156C15.168 1.85583 14.2618 1 13.144 1H9.09602C7.9782 1 7.07202 1.85583 7.07202 2.91156V18.204"
            stroke="url(#paint1_linear)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="11.12"
            y1="25.8105"
            x2="23.2144"
            y2="7.248"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E1C9C" />
            <stop offset="1" stop-color="#7031E9" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="11.12"
            y1="26.2106"
            x2="24.0489"
            y2="19.674"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E1C9C" />
            <stop offset="1" stop-color="#7031E9" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else
    return (
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
            stroke={color ?? '#979797'}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path"
            d="M15.1683 18.204V2.91156C15.1683 1.85583 14.2621 1 13.1443 1H9.09627C7.97844 1 7.07227 1.85583 7.07227 2.91156V18.204"
            stroke={color ?? '#979797'}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    );
};
