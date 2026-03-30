import { Hand } from "lucide-react";
import { motion } from "motion/react";
import { FeatureCard } from "./feature-card";

const colors = {
	bg: "bg-orange-50 dark:bg-orange-950/30",
	iconBg: "bg-orange-100 dark:bg-orange-900/50",
	iconText: "text-orange-700 dark:text-orange-400",
};

export function JapaCounterCard() {
	return (
		<FeatureCard
			icon={Hand}
			title="Tap to Recite"
			description="Distraction-free session screen. Tap to count each recitation with haptic feedback and auto-save."
			colorClass={colors}
			tall
		>
			{/* Mock session screen */}
			<div className="rounded-2xl bg-orange-950 dark:bg-orange-950/80 p-6 text-center space-y-4 mt-auto">
				<p className="text-orange-300/60 text-xs font-medium tracking-wider uppercase">
					Gayatri Mantra
				</p>
				<motion.div
					className="text-5xl font-bold text-orange-100 font-mono tabular-nums"
					variants={{
						idle: { scale: 1 },
						hovered: { scale: [1, 1.08, 1] },
					}}
					transition={{ duration: 0.4 }}
				>
					72
				</motion.div>
				<p className="text-orange-400/50 text-sm font-mono">/ 108</p>

				{/* Progress bar */}
				<div className="h-1.5 rounded-full bg-orange-900 overflow-hidden">
					<motion.div
						className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
						variants={{
							idle: { width: "0%" },
							hovered: { width: "67%" },
						}}
						transition={{
							type: "spring",
							stiffness: 200,
							damping: 25,
						}}
					/>
				</div>

				{/* Tap area hint */}
				<motion.div
					className="mt-2 w-16 h-16 mx-auto rounded-full border-2 border-dashed border-orange-700 flex items-center justify-center"
					variants={{
						idle: { scale: 1, borderColor: "rgba(194,65,12,0.4)" },
						hovered: {
							scale: [1, 0.92, 1],
							borderColor: "rgba(251,146,60,0.8)",
						},
					}}
					transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
				>
					<span className="text-orange-500/60 text-[10px]">TAP</span>
				</motion.div>
			</div>
		</FeatureCard>
	);
}
