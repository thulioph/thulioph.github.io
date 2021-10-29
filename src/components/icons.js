import React from 'react'

export const LogoIcon = ({ width, height }) => {
  return (
    <React.Fragment>
      <svg
        width={width}
        height={height}
        viewBox="0 0 53 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="52.9851" height="52.9851" rx="10" fill="white" />
        <rect x="1" y="1" width="50" height="50" rx="10" fill="black" />

        <path
          d="M24.6914 19.7852H19.4648V34H15.9492V19.7852H10.793V16.9375H24.6914V19.7852ZM30.2227 27.9883V34H26.707V16.9375H33.3633C34.6445 16.9375 35.7695 17.1719 36.7383 17.6406C37.7148 18.1094 38.4648 18.7773 38.9883 19.6445C39.5117 20.5039 39.7734 21.4844 39.7734 22.5859C39.7734 24.2578 39.1992 25.5781 38.0508 26.5469C36.9102 27.5078 35.3281 27.9883 33.3047 27.9883H30.2227ZM30.2227 25.1406H33.3633C34.293 25.1406 35 24.9219 35.4844 24.4844C35.9766 24.0469 36.2227 23.4219 36.2227 22.6094C36.2227 21.7734 35.9766 21.0977 35.4844 20.582C34.9922 20.0664 34.3125 19.8008 33.4453 19.7852H30.2227V25.1406Z"
          fill="white"
        />
      </svg>
    </React.Fragment>
  )
}
