export default function EditorPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Editor Coming Soon
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    The drag-and-drop editor is currently under development
                </p>
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                    <h2 className="text-xl font-semibold mb-4">What's Next:</h2>
                    <ul className="text-left space-y-2 text-gray-700">
                        <li>✅ Project initialized</li>
                        <li>⏳ Widget components</li>
                        <li>⏳ Drag-and-drop editor</li>
                        <li>⏳ Preview panel</li>
                        <li>⏳ Settings</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
