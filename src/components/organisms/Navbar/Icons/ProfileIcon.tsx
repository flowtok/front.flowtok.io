import React, { FC } from 'react';

type ProfileIconPropsT = {
  isActive?: boolean;
  color?: string;
};

export const ProfileIcon: FC<ProfileIconPropsT> = ({ isActive, color }) => {
  if (isActive) {
    return (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 19V17C17 14.7909 15.2091 13 13 13H5C2.79086 13 1 14.7909 1 17V19"
          stroke="url(#paint0_linear)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          cx="9"
          cy="5"
          r="4"
          stroke="url(#paint1_linear)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="9"
            y1="21.7924"
            x2="12.4842"
            y2="11.8103"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E1C9C" />
            <stop offset="1" stop-color="#7031E9" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="9"
            y1="12.7231"
            x2="16.4463"
            y2="4.72314"
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
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 19V17C17 14.7909 15.2091 13 13 13H5C2.79086 13 1 14.7909 1 17V19"
          stroke={color ?? '#979797'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          cx="9"
          cy="5"
          r="4"
          stroke={color ?? '#979797'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
};
