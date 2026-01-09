import { PropsWithChildren } from "react";
import Panel from "./Panel";

export default function LightPanel({ className, children }: { className?: string; } & PropsWithChildren) {
    return (
        <Panel className={`bg-foreground text-background border-foreground ${className}`}>
            {children}
        </Panel>
    );
}