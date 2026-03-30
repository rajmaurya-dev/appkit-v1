import { BookOpen } from "lucide-react";
import { motion } from "motion/react";
import {
	FeatureCard,
	springTransition,
	staggerContainer,
	staggerItemSlide,
} from "./feature-card";

const mantras = [
	{ id: "gayatri", name: "Gayatri Mantra", source: "Rig Veda", reps: 108 },
	{ id: "mrityunjaya", name: "Mahamrityunjaya", source: "Rig Veda", reps: 108 },
	{ id: "shiva", name: "Om Namah Shivaya", source: "Yajur Veda", reps: 108 },
	{ id: "hare-krishna", name: "Hare Krishna", source: "Kali-Santarana", reps: 108 },
];

const colors = {
	bg: "bg-amber-50 dark:bg-amber-950/30",
	iconBg: "bg-amber-100 dark:bg-amber-900/50",
	iconText: "text-amber-700 dark:text-amber-400",
};

export function MantraLibraryCard() {
	return (
		<FeatureCard
			icon={BookOpen}
			title="Mantra Library"
			description="30+ curated mantras and shlokas with Devanagari text, transliteration, and meaning."
			colorClass={colors}
		>
			<motion.div className="space-y-2" variants={staggerContainer}>
				{mantras.map((m) => (
					<motion.div
						key={m.id}
						className="flex items-center justify-between rounded-lg bg-amber-100/70 dark:bg-amber-900/30 px-3 py-2"
						variants={staggerItemSlide}
						transition={springTransition}
					>
						<div className="flex flex-col">
							<span className="text-xs font-medium text-amber-800 dark:text-amber-300">
								{m.name}
							</span>
							<span className="text-[10px] text-amber-600/70 dark:text-amber-500/70">
								{m.source}
							</span>
						</div>
						<span className="text-[10px] font-mono text-amber-600 dark:text-amber-500">
							{m.reps}x
						</span>
					</motion.div>
				))}
			</motion.div>
		</FeatureCard>
	);
}
