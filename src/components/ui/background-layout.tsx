import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

interface BackgroundLayoutProps {
    children?: ReactNode;
}

export function BackgroundLayout({ children }: BackgroundLayoutProps) {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-400 via-neutral-300 to-neutral-200 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-400/50 via-white/80 to-neutral-400/50 dark:from-neutral-900/50 dark:via-neutral-800/30 dark:to-neutral-900/50" />
            <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_50%,white_0%,transparent_100%)] opacity-30 dark:opacity-5" />
            <div className="absolute inset-0 z-0 opacity-90 md:opacity-100 -top-20">
                <FloatingPaths position={0} />
                <FloatingPaths position={-2} />

            </div>
            <div className="relative z-10 flex flex-col min-h-screen">
                {children}
            </div>
        </div>
    );
}

function FloatingPaths({ position }: { position: number }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * (isMobile ? 8 : 5) * position} -${189 + i * (isMobile ? 9 : 6)}C-${380 - i * (isMobile ? 8 : 5) * position
            } -${189 + i * (isMobile ? 9 : 6)} -${312 - i * (isMobile ? 8 : 5) * position} ${216 - i * (isMobile ? 9 : 6)} ${152 - i * (isMobile ? 8 : 5) * position
            } ${343 - i * (isMobile ? 9 : 6)}C${616 - i * (isMobile ? 8 : 5) * position} ${470 - i * (isMobile ? 9 : 6)} ${684 - i * (isMobile ? 8 : 5) * position
            } ${875 - i * (isMobile ? 9 : 6)} ${684 - i * (isMobile ? 8 : 5) * position} ${875 - i * (isMobile ? 9 : 6)}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: isMobile ? 1.2 + i * 0.06 : 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-gray-400 md:text-gray-500 dark:text-white origin-center  scale-150 md:scale-100"
                viewBox="0 0 696 316"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.2 + path.id * 0.02}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.3, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
