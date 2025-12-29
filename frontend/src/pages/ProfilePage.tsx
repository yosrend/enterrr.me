import { useParams } from 'react-router-dom';

export default function ProfilePage() {
    const { username } = useParams<{ username: string }>();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center max-w-md mx-auto px-4">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl">👤</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        @{username}
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Profile page coming soon
                    </p>
                    <div className="text-sm text-gray-500">
                        <p>This will display the user's custom widgets,</p>
                        <p>links, and personalized content</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
