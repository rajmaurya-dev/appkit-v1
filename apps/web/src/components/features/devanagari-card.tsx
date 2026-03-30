import { Languages } from "lucide-react";
import { motion } from "motion/react";
import { FeatureCard } from "./feature-card";

const colors = {
	bg: "bg-violet-50 dark:bg-violet-950/30",
	iconBg: "bg-violet-100 dark:bg-violet-900/50",
	iconText: "text-violet-700 dark:text-violet-400",
};

const springTransition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 20,
};

export function DevanagariCard() {
	return (
		<FeatureCard
			icon={Languages}
			title="Devanagari & IAST"
			description="Every mantra in original Devanagari script with accurate IAST transliteration and English meaning."
			colorClass={colors}
		>
			<motion.div
				className="rounded-xl bg-violet-100/70 dark:bg-violet-900/30 p-4 space-y-3"
				variants={{
					idle: { opacity: 0.7 },
					hovered: { opacity: 1 },
				}}
			>
				<motion.p
					className="text-lg font-medium text-violet-900 dark:text-violet-200 leading-relaxed"
					variants={{ idle: { y: 4 }, hovered: { y: 0 } }}
					transition={springTransition}
				>
					ॐ भूर्भुवः स्वः
				</motion.p>
				<motion.p
					className="text-sm italic text-violet-600 dark:text-violet-400"
					variants={{ idle: { y: 4, opacity: 0.5 }, hovered: { y: 0, opacity: 1 } }}
					transition={{ ...springTransition, delay: 0.05 }}
				>
					oṃ bhūr bhuvaḥ svaḥ
				</motion.p>
				<motion.p
					className="text-xs text-violet-500/70 dark:text-violet-400/60"
					variants={{ idle: { y: 4, opacity: 0.3 }, hovered: { y: 0, opacity: 0.8 } }}
					transition={{ ...springTransition, delay: 0.1 }}
				>
					Earth, atmosphere, and heavens
				</motion.p>
			</motion.div>
		</FeatureCard>
	);
}
