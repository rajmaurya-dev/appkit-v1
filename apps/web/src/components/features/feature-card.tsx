import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

/** Shared animation variants for staggered list children */
export const staggerContainer = {
	hovered: { transition: { staggerChildren: 0.05 } },
};

export const staggerItem = {
	idle: { opacity: 0.7, scale: 0.95, y: 4 },
	hovered: { opacity: 1, scale: 1, y: 0 },
};

export const staggerItemSlide = {
	idle: { opacity: 0.7, x: -6 },
	hovered: { opacity: 1, x: 0 },
};

export const springTransition = {
	type: "spring" as const,
	stiffness: 400,
	damping: 20,
};

interface FeatureCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
	/** Tailwind color classes for bg/icon — e.g. "amber", "rose", "emerald" */
	colorClass: {
		bg: string;
		iconBg: string;
		iconText: string;
	};
	/** Makes the card span 2 rows in the bento grid */
	tall?: boolean;
	/** Additional className on the Card */
	cardClassName?: string;
	children: ReactNode;
}

export function FeatureCard({
	icon: Icon,
	title,
	description,
	colorClass,
	tall,
	cardClassName,
	children,
}: FeatureCardProps) {
	return (
		<motion.div
			initial="idle"
			whileHover="hovered"
			animate="idle"
			className={cn(tall && "md:row-span-2 h-full")}
		>
			<Card
				className={cn(
					"rounded-3xl border-0 shadow-none p-0 h-full",
					colorClass.bg,
					tall && "flex flex-col",
					cardClassName,
				)}
			>
				<CardHeader className="p-8 pb-0">
					<div
						className={cn(
							"w-10 h-10 rounded-xl flex items-center justify-center mb-2",
							colorClass.iconBg,
						)}
					>
						<Icon className={cn("h-5 w-5", colorClass.iconText)} />
					</div>
					<CardTitle className="text-2xl font-bold">{title}</CardTitle>
					<CardDescription className="leading-relaxed">
						{description}
					</CardDescription>
				</CardHeader>
				<CardContent
					className={cn("p-8 pt-4", tall && "flex-1 flex flex-col justify-end")}
				>
					{children}
				</CardContent>
			</Card>
		</motion.div>
	);
}
