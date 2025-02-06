import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeroWithFormProps {
    children?: ReactNode;
}

export function HeroWithForm({ children }: HeroWithFormProps) {
    const title = "The Future of Business Efficiency";
    const words = title.split(" ");

    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-8 flex flex-col justify-center">
                <div className="w-full max-w-xl mx-auto">
                    <div className="text-center relative z-10">
                        <div className="absolute -inset-x-[100vw] -inset-y-[50vh] -z-10">
                            <div className="absolute inset-0 backdrop-blur-md md:backdrop-blur-xl [mask-image:radial-gradient(15%_15%_at_50%_50%,black_40%,transparent_100%)]" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 md:via-white/40 to-transparent [mask-image:radial-gradient(15%_15%_at_50%_50%,black_40%,transparent_100%)]" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="relative z-10">
                                <h1 className="text-5xl uppercase md:text-7xl font-staatliches mb-6 md:mb-8 text-black">
                                    {words.map((word, wordIndex) => (
                                        <span
                                            key={wordIndex}
                                            className="inline-block mr-4 last:mr-0"
                                        >
                                            {word.split("").map((letter, letterIndex) => (
                                                <motion.span
                                                    key={`${wordIndex}-${letterIndex}`}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        delay:
                                                            wordIndex * 0.1 +
                                                            letterIndex * 0.03,
                                                        type: "spring",
                                                        stiffness: 100,
                                                        damping: 25,
                                                    }}
                                                    className="inline-block"
                                                >
                                                    {letter}
                                                </motion.span>
                                            ))}
                                        </span>
                                    ))}
                                </h1>
                            </div>
                            <div className="relative z-10">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="text-base px-6 md:text-lg text-neutral-900 md:text-neutral-700 dark:text-neutral-200 md:dark:text-neutral-300 mb-4 md:mb-8 [text-shadow:0_0_1px_rgba(255,255,255,0.5)] md:[text-shadow:none]"
                                >
                                    We leverage breakthrough AI technologies to achieve unprecedented operational efficiencies. Through strategic implementation of artificial intelligence, we deliver transformative results that redefine industry standards—achieving levels of performance previously considered impossible.                                </motion.p>
                            </div>
                            <div className="relative z-10">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="text-base px-6 md:text-lg text-neutral-900 md:text-neutral-700 dark:text-neutral-200 md:dark:text-neutral-300 mb-4 [text-shadow:0_0_1px_rgba(255,255,255,0.5)] md:[text-shadow:none]"
                                >
                                    Our core solutions are on the horizon, but we're actively seeking partners in unique business domains to co-create bespoke AI solutions. Provide your email below, and we'll be in touch to discuss your specific needs and explore a collaboration.                           </motion.p>
                            </div>
                            <div className="relative z-10 max-w-md mx-auto flex justify-center">
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
