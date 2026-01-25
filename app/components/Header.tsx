import { Home, CircleUserRound, MessagesSquare } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="sticky top-0 flex justify-center z-50 transition-all">
            <nav className="flex flex-row w-1/2 md:w-1/4 justify-between m-2 mt-4 p-2 border-2 rounded-2xl bg-background">
                <Link className="mr-2 rounded" href="/"><Home /></Link>
                <Link className="mr-2 rounded" href="/about"><CircleUserRound /></Link>
                <Link className="mr-2 rounded" href="/contact"><MessagesSquare /></Link>
            </nav>
        </div>
    );
}