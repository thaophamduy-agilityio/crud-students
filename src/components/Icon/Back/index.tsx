// Libs
import type { JSX, SVGProps } from "react";

interface BackIconProps extends SVGProps<SVGSVGElement> {
    width?: string;
    height?: string;
    color?: string;
}

const BackIcon = ({
    width = "18",
    height = "18",
    color = "#C4C4C4",
    ...props
}: BackIconProps): JSX.Element => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.8164 4.18359 17.7187 9 17.7188C13.8164 17.7188 17.7187 13.8164 17.7188 9ZM9 16.5938C4.82695 16.5938 1.40625 13.2152 1.40625 9C1.40625 4.82695 4.78477 1.40625 9 1.40625C13.173 1.40625 16.5938 4.78477 16.5938 9C16.5938 13.173 13.2152 16.5938 9 16.5938ZM10.125 12.375L6.75 9L10.125 5.625L10.125 12.375ZM11.25 5.625C11.25 4.62656 10.0371 4.12031 9.33047 4.83047L5.95547 8.20547C5.51602 8.64492 5.51602 9.35859 5.95547 9.79805L9.33047 13.173C10.0371 13.8797 11.25 13.3805 11.25 12.3785L11.25 5.625Z" fill={color}
            />
        </svg>
    );
}

export default BackIcon;