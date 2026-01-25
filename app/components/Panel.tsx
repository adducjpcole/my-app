import { PropsWithChildren } from "react";

export default function Panel({ className, children }: { className?: string; } & PropsWithChildren) {
    return (
        <div className={`p-4 border-2 rounded-xl m-4 ${className || ''}`}>
            {children}
        </div>
    );
}