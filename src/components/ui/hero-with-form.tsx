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
            <div className="container mx-auto px-4 md:px-6 min-h-[calc(100vh-16rem)] py-8 md:py-16 flex flex-col justify-center">
                <div className="w-full max-w-xl mx-auto">
                    <div className="text-center relative z-10">
                        <div className="absolute -inset-x-[100vw] -inset-y-[50vh] -z-10">
                            <div className="absolute inset-0 backdrop-blur-xl [mask-image:radial-gradient(15%_15%_at_50%_50%,black_40%,transparent_100%)]" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent  [mask-image:radial-gradient(15%_15%_at_50%_50%,black_40%,transparent_100%)]" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="relative z-10">
                                <h1 className="text-4xl uppercase md:text-5xl font-extrabold scale-y-110 scale-x-90 mb-6 md:mb-8 text-black">
                                    {words.map((word, wordIndex) => (
                                        <span
                                            key={wordIndex}
                                            className="inline-block mr-4 last:mr-0"
                                        >
                                            {word.split("").map((letter, letterIndex) => (
                                                <motion.span
                                                    key={`${wordIndex}-${letterIndex}`}
                                                    initial={{ y: 100, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        delay:
                                                            wordIndex * 0.1 +
                                                            letterIndex * 0.03,
                                                        type: "spring",
                                                        stiffness: 150,
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
                                    className="text-base px-8 md:text-lg text-neutral-700 dark:text-neutral-300 mb-8 md:mb-12"
                                >
                                    Step into a new era where AI-driven solutions revolutionize how businesses operate. We're pioneering breakthrough technologies that transform outdated business processes into powerful, automated workflows.
                                </motion.p>
                            </div>
                            <div className="relative z-10">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="text-base px-8 md:text-lg  text-neutral-700 dark:text-neutral-300 mb-8 md:mb-12"
                                >
                                    While we're crafting our suite of specialized solutions, we invite you to be among the first to experience the power of AI transformation. Share your email below, and we'll reach out personally to discuss AI opportunities tailored to your business.
                                </motion.p>
                            </div>
                            <div className="relative z-10 max-w-md mx-auto">
                                <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-lg rounded-none p-2 shadow-lg border border-white/20 dark:border-neutral-800/30">
                                    {children}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
