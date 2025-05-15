interface SkillProgressProps {
  name: string;
  level: number;
}

export default function SkillProgress({ name, level }: SkillProgressProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-primary/50 rounded-full h-2.5">
        <div
          className="bg-accent h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
} 