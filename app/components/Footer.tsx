'use client';

import { ArrowUp } from "lucide-react";
import { Ref, useEffect, useRef } from "react";

export default function Footer() {
    const refButton: Ref<HTMLButtonElement> = useRef(null);
    let isScrollAnimCancelled = false;

    const updateRefButton = () => {
        if (!refButton.current)
            return;

        let scrolledByPixels = window.scrollY || window.pageYOffset;
        if (scrolledByPixels > 50) {
            refButton.current.classList.remove("opacity-0", "translate-y-28");
            refButton.current.classList.add("opacity-100");
        } else {
            refButton.current.classList.add("opacity-0", "translate-y-28");
            refButton.current.classList.remove("opacity-100");
        }

        isScrollAnimCancelled = true;
    };

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (!isScrollAnimCancelled && c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        } else {
            
        }
    };

    useEffect(() => {
        document.addEventListener("wheel", updateRefButton);
        return () => {
            document.removeEventListener("wheel", updateRefButton);
        };
    }, []);


    return (
        <div className="fixed bottom-0 right-0 text-center m-4">
            <button ref={refButton} className="appearance-none opacity-0 translate-y-28 transition-all" onClick={() => {
                isScrollAnimCancelled = false;
                scrollToTop();
            }}>
                <ArrowUp />
            </button>
        </div>
    );
}
