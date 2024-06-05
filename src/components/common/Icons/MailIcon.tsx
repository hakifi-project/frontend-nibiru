import React from 'react';

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x=".7" width="24" height="24" rx="2" fill="#F37B23" />
            <path d="M7.837 6.402c-.333-.002-.594.016-.897.226-.244.169-.316.747.078 1.046l4.92 3.721c.2.152.46.226.72.226.261 0 .522-.075.722-.226l4.92-3.721c.394-.299.322-.877.077-1.046-.302-.21-.564-.236-.896-.226-3.37.095-6.12.016-9.644 0zm12.138 1.931-6.322 4.787c-.555.419-1.448.419-2.002 0L5.338 8.347A1.24 1.24 0 0 0 4.3 9.558v6.812c0 .681.568 1.23 1.272 1.23h14.257c.704 0 1.271-.549 1.271-1.23V9.558c0-.633-.49-1.156-1.125-1.225z" fill="#000" />
        </svg>
    );
};

export default MailIcon;
