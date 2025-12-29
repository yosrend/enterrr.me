import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';

export default function HomePage() {
    return (
        <>
            <Navbar />

            <div className="min-h-screen pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest mb-10"
                    >
                        Claim your unique space
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-7xl md:text-[100px] font-extrabold font-display leading-[0.9] tracking-tighter mb-12"
                    >
                        The clean <br />
                        <span className="text-gray-300">link-in-bio.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto mb-16 leading-relaxed"
                    >
                        Curate your best work, profiles, and music in a beautiful bento grid.
                        Minimal, professional, and entirely you.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="/editor"
                            className="px-10 py-5 bg-black text-white rounded-[24px] text-xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-black/10"
                        >
                            Start building for free
                        </Link>
                        <Link
                            to="/p/alex"
                            className="px-10 py-5 bg-white border border-gray-200 text-black rounded-[24px] text-xl font-bold hover:bg-gray-50 transition-colors"
                        >
                            View Example
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
