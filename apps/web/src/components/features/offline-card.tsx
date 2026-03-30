import { WifiOff } from "lucide-react";
import { motion } from "motion/react";
import {
	FeatureCard,
	springTransition,
	staggerContainer,
	staggerItem,
} from "./feature-card";

const features = [
	{ id: "bundled", label: "Bundled mantras & audio" },
	{ id: "local", label: "Local progress storage" },
	{ id: "no-account", label: "No account required" },
	{ id: "no-data", label: "Zero data collection" },
];

const colors = {
	bg: "bg-slate-100 dark:bg-slate-900/50",
	iconBg: "bg-slate-200 dark:bg-slate-800",
	iconText: "text-slate-600 dark:text-slate-400",
};

export function OfflineCard() {
	return (
		<FeatureCard
			icon={WifiOff}
			title="Fully Offline"
			description="Works without internet. All mantras, progress, and stats are stored locally on your device."
			colorClass={colors}
		>
			<motion.div className="flex flex-wrap gap-2" variants={staggerContainer}>
				{features.map((feature) => (
					<motion.div
						key={feature.id}
						className="rounded-lg bg-slate-200/70 dark:bg-slate-800/70 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300"
						variants={staggerItem}
						transition={springTransition}
					>
						{feature.label}
					</motion.div>
				))}
			</motion.div>
		</FeatureCard>
	);
}
