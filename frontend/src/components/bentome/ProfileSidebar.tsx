import type { UserProfile } from '../../lib/types';

interface ProfileSidebarProps {
    profile: UserProfile;
}

export function ProfileSidebar({ profile }: ProfileSidebarProps) {
    return (
        <aside className="bentome-sidebar">
            <div className="flex flex-col items-center lg:items-start">
                <img
                    src={profile.avatar}
                    alt={profile.displayName}
                    className="bentome-avatar mb-6"
                />

                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-3">
                    {profile.displayName}
                </h1>

                <p className="text-gray-500 leading-relaxed text-center lg:text-left">
                    {profile.bio}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
                    <span className="font-medium">@{profile.username}</span>
                </div>
            </div>
        </aside>
    );
}
