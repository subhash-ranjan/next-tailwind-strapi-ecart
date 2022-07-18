export const CameraIcon = ({ className }: any): any => {
    return (
        <svg className={`${className}`} version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path d="M6.59,3.41L2,8L6.59,12.6L8,11.18L4.82,8L8,4.82L6.59,3.41M12.41,3.41L11,4.82L14.18,8L11,11.18L12.41,12.6L17,8L12.41,3.41M21.59,11.59L13.5,19.68L9.83,16L8.42,17.41L13.5,22.5L23,13L21.59,11.59Z" />
        </svg>
    );
};

export const GithubIcon = ({ className, viewbox }: any): any => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox={viewbox} className={`${className}`}>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
    );
};

export const DotsSvg = ({ className }: any): any => {
    return (
        <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#4e3ee9" />
            <circle cx="2.5" cy="24.5" r="2.5" fill="#4e3ee9" />
            <circle cx="2.5" cy="46.5" r="2.5" fill="#4e3ee9" />
            <circle cx="2.5" cy="68.5" r="2.5" fill="#4e3ee9" />
            <circle cx="2.5" cy="90.5" r="2.5" fill="#4e3ee9" />
            <circle cx="24.5" cy="2.5" r="2.5" fill="#4e3ee9" />
            <circle cx="24.5" cy="24.5" r="2.5" fill="#4e3ee9" />
            <circle cx="24.5" cy="46.5" r="2.5" fill="#4e3ee9" />
            <circle cx="24.5" cy="68.5" r="2.5" fill="#4e3ee9" />
            <circle cx="24.5" cy="90.5" r="2.5" fill="#4e3ee9" />
            <circle cx="46.5" cy="2.5" r="2.5" fill="#4e3ee9" />
            <circle cx="46.5" cy="24.5" r="2.5" fill="#4e3ee9" />
            <circle cx="46.5" cy="46.5" r="2.5" fill="#4e3ee9" />
            <circle cx="46.5" cy="68.5" r="2.5" fill="#4e3ee9" />
            <circle cx="46.5" cy="90.5" r="2.5" fill="#4e3ee9" />
            <circle cx="68.5" cy="2.5" r="2.5" fill="#4e3ee9" />
            <circle cx="68.5" cy="24.5" r="2.5" fill="#4e3ee9" />
            <circle cx="68.5" cy="46.5" r="2.5" fill="#4e3ee9" />
            <circle cx="68.5" cy="68.5" r="2.5" fill="#4e3ee9" />
            <circle cx="68.5" cy="90.5" r="2.5" fill="#4e3ee9" />
            <circle cx="90.5" cy="2.5" r="2.5" fill="#4e3ee9" />
            <circle cx="90.5" cy="24.5" r="2.5" fill="#4e3ee9" />
            <circle cx="90.5" cy="46.5" r="2.5" fill="#4e3ee9" />
            <circle cx="90.5" cy="68.5" r="2.5" fill="#4e3ee9" />
            <circle cx="90.5" cy="90.5" r="2.5" fill="#4e3ee9" />
        </svg>
    );
};

export const LoaderCircle = ({ classes, height, width, viewbox }: any): any => {
    return (
        <svg
            version="1.1"
            id="L7"
            viewBox="0 0 100 100"
            height={height}
            width={width}
            className={`${classes} inline-block`}
        >
            <path
                d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
            >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="2s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                />
            </path>
            <path
                d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
            >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="1s"
                    from="0 50 50"
                    to="-360 50 50"
                    repeatCount="indefinite"
                />
            </path>
            <path
                d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
            >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="2s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                />
            </path>
        </svg>
    );
};

export const LoaderSquare = ({ className, height, width, viewbox }: any): any => {
    return (
        <svg
            version="1.1"
            id="L6"
            viewBox="0 0 100 100"
            height={height}
            width={width}
            className={`${className} inline-block`}
        >
            <rect fill="none" stroke="#fff" strokeWidth="4" x="25" y="25" width="50" height="50">
                <animateTransform
                    attributeName="transform"
                    dur="0.5s"
                    from="0 50 50"
                    to="180 50 50"
                    type="rotate"
                    id="strokeBox"
                    attributeType="XML"
                    begin="rectBox.end"
                />
            </rect>
            <rect x="27" y="27" width="46" height="50" fill="white">
                <animate
                    attributeName="height"
                    dur="1.3s"
                    attributeType="XML"
                    from="50"
                    to="0"
                    id="rectBox"
                    fill="freeze"
                    begin="0s;strokeBox.end"
                />
            </rect>
        </svg>
    );
};
