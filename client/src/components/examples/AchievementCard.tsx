import AchievementCard from '../AchievementCard';

export default function AchievementCardExample() {
  return (
    <div className="p-8 max-w-xl">
      <AchievementCard
        title="TryHackMe Top 8% | Level 8"
        description="Learned cybersecurity skills and hands-on experience by solving rooms and labs on the platform."
        icon="target"
      />
    </div>
  );
}
