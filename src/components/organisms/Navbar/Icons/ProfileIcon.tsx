import React, { FC } from 'react';

type ProfileIconPropsT = {
  isActive?: boolean;
  color?: string;
  isLarge?: boolean;
};

export const ProfileIcon: FC<ProfileIconPropsT> = ({
  isActive,
  color,
  isLarge = false,
}) => {
  if (isLarge) {
    if (isActive) {
      return (
        <svg
          width="23"
          height="26"
          viewBox="0 0 23 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5556 24.0001V21.5556C21.5556 18.8556 19.3667 16.6667 16.6667 16.6667H6.88889C4.18883 16.6667 2 18.8556 2 21.5556V24.0001"
            stroke="url(#paint0_linear)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="11.7778"
            cy="6.88889"
            r="4.88889"
            stroke="url(#paint1_linear)"
            strokeWidth="2.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-11.1999"
              y1="15.0451"
              x2="-8.33962"
              y2="29.7966"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7433F0" />
              <stop offset="1" stopColor="#22198F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="2.00003"
              y1="4.44444"
              x2="6.88892"
              y2="14.2222"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#231990" />
              <stop offset="1" stopColor="#632EDC" />
            </linearGradient>
          </defs>
        </svg>
      );
    } else {
      return (
        <svg
          width="23"
          height="26"
          viewBox="0 0 23 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5556 24.0001V21.5556C21.5556 18.8556 19.3667 16.6667 16.6667 16.6667H6.88889C4.18883 16.6667 2 18.8556 2 21.5556V24.0001"
            stroke={color ?? '#979797'}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="11.7778"
            cy="6.88889"
            r="4.88889"
            stroke={color ?? '#979797'}
            strokeWidth="2.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-11.1999"
              y1="15.0451"
              x2="-8.33962"
              y2="29.7966"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7433F0" />
              <stop offset="1" stopColor="#22198F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="2.00003"
              y1="4.44444"
              x2="6.88892"
              y2="14.2222"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#231990" />
              <stop offset="1" stopColor="#632EDC" />
            </linearGradient>
          </defs>
        </svg>
      );
    }
  } else {
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="9"
            cy="5"
            r="4"
            stroke="url(#paint1_linear)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
              <stop stopColor="#2E1C9C" />
              <stop offset="1" stopColor="#7031E9" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="9"
              y1="12.7231"
              x2="16.4463"
              y2="4.72314"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2E1C9C" />
              <stop offset="1" stopColor="#7031E9" />
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="9"
            cy="5"
            r="4"
            stroke={color ?? '#979797'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};
