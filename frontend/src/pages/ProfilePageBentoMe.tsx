import { useParams, Link } from 'react-router-dom';
import { useEditorStore } from '../store/editorStore';
import { Navbar } from '../components/layout/Navbar';
import { BentoMeGrid } from '../components/bentome/BentoMeGrid';
import { ProfileSidebar } from '../components/bentome/ProfileSidebar';

export default function ProfilePageBentoMe() {
    const { username } = useParams();
    const { profile, widgets } = useEditorStore();

    const displayProfile = {
        ...profile,
        username: username || profile.username,
    };

    return (
        <>
            <Navbar user={displayProfile} />

            {/* Ambient Glow */}
            <div className="ambient-glow" />

            <div className="theme-bentome min-h-screen">
                <div className="bentome-layout">
                    {/* Sticky Profile Sidebar */}
                    <ProfileSidebar profile={displayProfile} />

                    {/* Bento Grid */}
                    <main>
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
                            <BentoMeGrid widgets={widgets} />
                        )}
                    </main>
                </div>

                {/* Footer */}
                <footer className="text-center py-12">
                    <Link
                        to="/"
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 hover:text-black transition-colors"
                    >
                        Built with enterrr.me
                    </Link>
                </footer>
            </div>
        </>
    );
}
