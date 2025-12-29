import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEditorStore } from '../store/editorStore';
import { Navbar } from '../components/layout/Navbar';
import { BentoGrid } from '../components/bento/BentoGrid';

export default function ProfilePage() {
    const { username } = useParams();
    const { profile, widgets } = useEditorStore();

    // Use profile from store or default
    const displayProfile = {
        ...profile,
        username: username || profile.username,
    };

    return (
        <>
            <Navbar user={displayProfile} />

            <div className="min-h-screen pt-32 pb-24 px-6 bg-[#f7f7f7]">
                <div className="max-w-[700px] mx-auto">
                    {/* Profile Header */}
                    <header className="mb-20 text-center flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-32 h-32 rounded-[32px] bg-white border-4 border-white shadow-2xl shadow-black/5 overflow-hidden mb-8"
                        >
                            <img
                                src={displayProfile.avatar}
                                alt={displayProfile.displayName}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.h1
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl font-black font-display tracking-tighter mb-4"
                        >
                            {displayProfile.displayName}
                        </motion.h1>

                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 font-medium text-lg leading-relaxed max-w-sm"
                        >
                            {displayProfile.bio}
                        </motion.p>
                    </header>

                    {/* Bento Grid */}
                    {widgets.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-gray-400 mb-4">No widgets to display</p>
                            <Link
                                to="/editor"
                                className="px-6 py-3 bg-black text-white rounded-full font-bold text-sm"
                            >
                                Create Profile
                            </Link>
                        </div>
                    ) : (
                        <BentoGrid widgets={widgets} />
                    )}

                    {/* Footer */}
                    <footer className="mt-24 text-center">
                        <Link
                            to="/"
                            className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 hover:text-black transition-colors"
                        >
                            Built with enterrr.me
                        </Link>
                    </footer>
                </div>
            </div>
        </>
    );
}
