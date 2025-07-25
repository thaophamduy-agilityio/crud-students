// Libs
import type { JSX, SVGProps } from "react";

interface CourseIconProps extends SVGProps<SVGSVGElement> {
    width?: string;
    height?: string;
    color?: string;
}

const CourseIcon = ({
    width = "12",
    height = "15",
    color = "black",
    ...props
}: CourseIconProps): JSX.Element => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.5 0H10.5C11.3284 0 12 0.62959 12 1.40625V15L6 11.7188L0 15V1.40625C0 0.62959 0.671562 0 1.5 0ZM1 13.3678L6 10.6334L11 13.3678V1.40625C11 1.14779 10.7757 0.9375 10.5 0.9375H1.5C1.22431 0.9375 1 1.14779 1 1.40625V13.3678Z" fill={color}
            />
        </svg>
    );
}

export default CourseIcon;