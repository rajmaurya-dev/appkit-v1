import { Flame } from "lucide-react";
import { motion } from "motion/react";
import { FeatureCard, springTransition, staggerContainer } from "./feature-card";

const weekData = [
	{ id: "mon", label: "M", active: true },
	{ id: "tue", label: "T", active: true },
	{ id: "wed", label: "W", active: true },
	{ id: "thu", label: "T", active: true },
	{ id: "fri", label: "F", active: true },
	{ id: "sat", label: "S", active: false },
	{ id: "sun", label: "S", active: true },
];

const colors = {
	bg: "bg-rose-50 dark:bg-rose-950/30",
	iconBg: "bg-rose-100 dark:bg-rose-900/50",
	iconText: "text-rose-600 dark:text-rose-400",
};

export function StreakCard() {
	return (
		<FeatureCard
			icon={Flame}
			title="Daily Streaks"
			description="Build consistency with streak tracking, activity calendar, and lifetime stats."
			colorClass={colors}
		>
			{/* Streak counter */}
			<div className="flex items-baseline gap-2 mb-4">
				<motion.span
					className="text-4xl font-bold text-rose-600 dark:text-rose-400 font-mono"
					variants={{
						idle: { opacity: 0.7 },
						hovered: { opacity: 1 },
					}}
				>
					7
				</motion.span>
				<span className="text-sm text-rose-500/70 dark:text-rose-400/70">
					day streak
				</span>
			</div>

			{/* Week grid */}
			<motion.div className="flex gap-1.5" variants={staggerContainer}>
				{weekData.map((day) => (
					<motion.div
						key={day.id}
						className="flex-1 flex flex-col items-center gap-1.5"
						variants={{
							idle: { opacity: 0.6, y: 4 },
							hovered: { opacity: 1, y: 0 },
						}}
						transition={springTransition}
					>
						<div
							className={`w-full aspect-square rounded-lg ${
								day.active
									? "bg-rose-500 dark:bg-rose-500"
									: "bg-rose-200/60 dark:bg-rose-800/30"
							}`}
						/>
						<span className="text-[10px] text-rose-400/70">
							{day.label}
						</span>
					</motion.div>
				))}
			</motion.div>
		</FeatureCard>
	);
}
