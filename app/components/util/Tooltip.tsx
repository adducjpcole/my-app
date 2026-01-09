import { JSX } from "react";

export default function Tooltip({ tip, className, children }: { tip: JSX.Element; className?: string; } & React.PropsWithChildren) {
    return (
        <div className="group relative">
            {children}

            <div className={`absolute scale-0 group-hover:scale-100 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 left-0 top-0 transition-all -translate-x-1/2 ${className}`}>
                {tip}
            </div>
        </div>
    );
}
