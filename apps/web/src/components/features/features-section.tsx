import { Badge } from "@/components/ui/badge";
import { DevanagariCard } from "./devanagari-card";
import { JapaCounterCard } from "./japa-counter-card";
import { MalaBeadsCard } from "./mala-beads-card";
import { MantraLibraryCard } from "./mantra-library-card";
import { OfflineCard } from "./offline-card";
import { StreakCard } from "./streak-card";

export function FeaturesSection() {
	return (
		<section id="features" className="py-20 lg:py-28">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
				<div className="text-center mb-14">
					<Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
						Features
					</Badge>
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
						Everything for your daily sadhana
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						A focused, beautiful app for mantra recitation — with Devanagari
						text, japa counting, mala beads, and streak tracking.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<MantraLibraryCard />
					<JapaCounterCard />
					<StreakCard />
					<MalaBeadsCard />
					<DevanagariCard />
					<OfflineCard />
				</div>
			</div>
		</section>
	);
}
