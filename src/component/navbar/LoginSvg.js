import {useState} from "react";

const LoginSvg = ({}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const strokeColor = isHovered ? 'red':'#1F1F1F';

    return (
        <svg onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             stroke= {strokeColor}
             xmlns="http://www.w3.org/2000/svg"
             width={32}
             height={32}
             fill="none"
             strokeWidth={1.5}
             data-automation="logged-out"
             viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 22c0-4.487 5.476-8.333 10-8.333m0 0c4.524 0 10 3.846 10 8.333m-10-8.333A5.833 5.833 0 1 0 12 2a5.833 5.833 0 0 0 0 11.667z"
            />
        </svg>
    )
}

export default LoginSvg