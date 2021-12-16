import React from 'react'

const LayoutGrid3Icon = ({ color } : { color?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            >
            <path
                fill={color || "#292D32"}
                d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"
            ></path>
            <path
                fill={color || "#292D32"}
                d="M22 10.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75z"
            ></path>
            <path
                fill={color || "#292D32"}
                d="M12 22.75c-.41 0-.75-.34-.75-.75V10c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75z"
            ></path>
        </svg>
    )
}

export default LayoutGrid3Icon