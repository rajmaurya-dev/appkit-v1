import { Circle } from "lucide-react";
import { motion } from "motion/react";
import { FeatureCard } from "./feature-card";

const BEAD_COUNT = 18;

const BEAD_POSITIONS = Array.from({ length: BEAD_COUNT }, (_, i) => {
	const angle = (i / BEAD_COUNT) * 360 - 90;
	const rad = (angle * Math.PI) / 180;
	return {
		id: `bead-pos-${angle.toFixed(0)}`,
		index: i,
		x: 50 + 42 * Math.cos(rad),
		y: 50 + 42 * Math.sin(rad),
	};
});

const colors = {
	bg: "bg-emerald-50 dark:bg-emerald-950/30",
	iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
	iconText: "text-emerald-700 dark:text-emerald-400",
};

export function MalaBeadsCard() {
	return (
		<FeatureCard
			icon={Circle}
			title="Digital Mala"
			description="A beautiful 108-bead mala counter. Tap to advance beads with satisfying animations and haptic feedback."
			colorClass={colors}
			tall
		>
			{/* Mala bead ring visualization */}
			<div className="relative w-48 h-48 mx-auto mt-auto">
				<motion.div
					className="w-full h-full"
					variants={{
						idle: { rotate: 0 },
						hovered: { rotate: 20 },
					}}
					transition={{ type: "spring", stiffness: 100, damping: 20 }}
				>
					{BEAD_POSITIONS.map((bead) => {
						const isActive = bead.index < 7;
						return (
							<motion.div
								key={bead.id}
								className={`absolute w-3 h-3 rounded-full ${
									isActive
										? "bg-emerald-600 dark:bg-emerald-400"
										: "bg-emerald-300/60 dark:bg-emerald-700/40"
								}`}
								style={{
									left: `${bead.x}%`,
									top: `${bead.y}%`,
									transform: "translate(-50%, -50%)",
								}}
								variants={{
									hovered: isActive
										? {
												scale: [1, 1.4, 1],
												transition: { delay: bead.index * 0.04 },
											}
										: {},
								}}
							/>
						);
					})}
				</motion.div>
				{/* Center counter */}
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<motion.span
						className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 font-mono"
						variants={{
							idle: { scale: 1 },
							hovered: { scale: 1.1 },
						}}
					>
						42
					</motion.span>
					<span className="text-[10px] text-emerald-500/60">/ 108</span>
				</div>
			</div>

			{/* Rounds */}
			<div className="text-center mt-4">
				<span className="text-xs text-emerald-600/70 dark:text-emerald-400/70">
					Rounds completed:{" "}
				</span>
				<span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
					2
				</span>
			</div>
		</FeatureCard>
	);
}
