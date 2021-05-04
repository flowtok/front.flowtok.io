import React, { FC } from 'react';

type SettingsIconPropsT = {
  isActive?: boolean;
};

export const SettingsIcon: FC<SettingsIconPropsT> = ({ isActive }) => {
  if (isActive) {
    return (
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
            stroke="url(#paint0_linear)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_2"
            d="M4.5 8V1"
            stroke="url(#paint1_linear)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_3"
            d="M12.5 19V10"
            stroke="url(#paint2_linear)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_4"
            d="M12.5 6V1"
            stroke="url(#paint3_linear)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_5"
            d="M20.5 19V14"
            stroke="url(#paint4_linear)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_6"
            d="M20.5 10V1"
            stroke="url(#paint5_linear)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_7"
            d="M1 11.5H7"
            stroke="url(#paint6_linear)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_8"
            d="M9 6.5H15"
            stroke="url(#paint7_linear)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_9"
            d="M17 13.5H23"
            stroke="url(#paint8_linear)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="4.5"
            y1="22.2577"
            x2="6.459"
            y2="21.9571"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E1C9C" />
            <stop offset="1" stop-color="#7031E9" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="4.5"
            y1="11.2577"
            x2="6.459"
            y2="10.9571"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E1C9C" />
            <stop offset="1" stop-color="#7031E9" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12.5"
            y1="23.1885"
            x2="14.477"
            y2="22.9525"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E1C9C" />
            <stop offset="1" stop-color="#7031E9" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12.5"
            y1="8.32696"
            x2="14.4167"
            y2="7.91512"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E1C9C" />
            <stop offset="1" stop-color="#7031E9" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="20.5"
            y1="21.327"
            x2="22.4167"
            y2="20.9151"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E1C9C" />
            <stop offset="1" stop-color="#7031E9" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="20.5"
            y1="14.1885"
            x2="22.477"
            y2="13.9525"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E1C9C" />
            <stop offset="1" stop-color="#7031E9" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="4"
            y1="12.4654"
            x2="4.28273"
            y2="10.6429"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E1C9C" />
            <stop offset="1" stop-color="#7031E9" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="12"
            y1="7.46539"
            x2="12.2827"
            y2="5.64289"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E1C9C" />
            <stop offset="1" stop-color="#7031E9" />
          </linearGradient>
          <linearGradient
            id="paint8_linear"
            x1="20"
            y1="14.4654"
            x2="20.2827"
            y2="12.6429"
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
    );
};
