import { Badge, CalendarRange } from "lucide-react";

export default function JobPanelContent({ jobTitle, dateStart, dateEnd, children }: { jobTitle: string, dateStart: string, dateEnd: string, className?: string; } & React.PropsWithChildren) {
    return (
        <>
            <h1 className="flex flex-row mb-2 font-bold text-2xl">
                <Badge className="mx-1 h-8" />{jobTitle}
            </h1>
            <section className="mb-4">
                {children}
            </section>
            <h2 className="flex flex-row">
                <CalendarRange className="mx-1" />{dateStart} - {dateEnd}
            </h2>
        </>
    );
}