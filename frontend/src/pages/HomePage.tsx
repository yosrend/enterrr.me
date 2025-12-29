import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="text-center px-4">
                <h1 className="text-6xl font-bold text-primary-600 mb-4">
                    enterrr.me
                </h1>
                <p className="text-2xl text-gray-700 mb-2">
                    The Beautiful, Free Bento.me Alternative
                </p>
                <p className="text-lg text-gray-600 mb-8">
                    Create your perfect link-in-bio page with drag-and-drop simplicity
                </p>
                <Link
                    to="/editor"
                    className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                    Start Building →
                </Link>
                <div className="mt-12 text-sm text-gray-500">
                    <p>✨ Free Forever • 🎨 Fully Customizable • 📱 Mobile Responsive</p>
                </div>
            </div>
        </div>
    );
}
