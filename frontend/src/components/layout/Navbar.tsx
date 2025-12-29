import { Link } from 'react-router-dom';
import type { UserProfile } from '../../lib/types';

interface NavbarProps {
    user?: UserProfile | null;
}

export function Navbar({ user }: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f7f7f7]/80 backdrop-blur-md h-20 flex items-center justify-between px-8">
            <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl font-display">E</span>
                </div>
                <span className="text-xl font-extrabold font-display tracking-tighter">enterrr.me</span>
            </Link>

            <div className="flex items-center space-x-6">
                {user ? (
                    <>
                        <Link
                            to={`/editor`}
                            className="text-sm font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest"
                        >
                            Editor
                        </Link>
                        <Link
                            to={`/p/${user.username}`}
                            className="w-10 h-10 rounded-full bg-gray-200 border border-white overflow-hidden shadow-sm"
                        >
                            <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                        </Link>
                    </>
                ) : (
                    <button className="px-6 py-2.5 bg-black text-white rounded-full font-bold text-sm tracking-wide">
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}
