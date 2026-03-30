import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import {
	ArrowRight,
	Check,
	Flame,
	Mail,
	Plus,
	Star,
	X,
} from "lucide-react";
import { FeaturesSection } from "@/components/features";
import { Input } from "@/components/ui/input";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: HomePage,
});

/* ─── Data ─────────────────────────────────────────── */

const pricingPlans = [
	{
		name: "Free",
		price: "$0",
		period: "forever",
		lead: "Start your practice.",
		description:
			"Full access to the mantra library, japa counter, and streak tracking.",
		features: [
			"30+ mantras with Devanagari & IAST",
			"Tap-to-count japa sessions",
			"Digital mala beads",
			"Streak & activity tracking",
		],
		cta: "Download Free",
		ctaVariant: "outline" as const,
		popular: false,
	},
	{
		name: "Devotee",
		price: "$4.99",
		period: "one-time",
		lead: "Deepen your sadhana.",
		description:
			"Unlock audio pronunciations, custom mantras, and advanced stats.",
		features: [
			"Everything in Free",
			"Audio pronunciation for all mantras",
			"Custom mantra entry",
			"Detailed session analytics",
			"Multiple mala modes (27, 54, 108)",
			"Daily reminder notifications",
		],
		cta: "Get Devotee",
		ctaVariant: "default" as const,
		popular: true,
	},
	{
		name: "Lifetime",
		price: "$9.99",
		period: "one-time",
		lead: "All future updates.",
		description:
			"Everything in Devotee plus cloud backup and all upcoming features.",
		features: [
			"Everything in Devotee",
			"Cloud backup & sync",
			"Share session stats",
			"Early access to new features",
			"Support app development",
			"Family sharing (up to 5)",
		],
		cta: "Get Lifetime",
		ctaVariant: "default" as const,
		popular: false,
	},
];

const testimonials = [
	{
		name: "Ananya Sharma",
		role: "Daily practitioner",
		content:
			"This app brought discipline to my morning sadhana. The mala counter with haptics feels so natural.",
		rating: 5,
	},
	{
		name: "Raghav Menon",
		role: "Yoga instructor",
		content:
			"Finally an app that gets Devanagari text right. I recommend it to all my students for their mantra practice.",
		rating: 5,
	},
	{
		name: "Priya Patel",
		role: "Meditation practitioner",
		content:
			"The streak tracking keeps me motivated. 45 days and counting — my longest practice streak ever.",
		rating: 5,
	},
];

const stats = [
	{ value: "30+", label: "Mantras & Shlokas" },
	{ value: "108", label: "Bead Mala Counter" },
	{ value: "100%", label: "Offline & Private" },
	{ value: "4.9/5", label: "User Rating" },
];

const faqs = [
	{
		question: "What is Japam?",
		answer:
			"Japam is a focused mantra and shloka recitation app. It provides Devanagari text with IAST transliteration and English meanings, a tap-to-count japa counter, digital mala beads, and streak tracking — all designed for a distraction-free practice.",
	},
	{
		question: "Do I need an internet connection?",
		answer:
			"No. Japam works fully offline. All mantras, audio, and your progress data are stored locally on your device. No account is required to get started.",
	},
	{
		question: "Which mantras are included?",
		answer:
			"Japam includes 30+ mantras across categories like Vedic Mantras, Devotional, Japa, Shlokas, and deity-specific collections (Shiva, Vishnu, Devi, Surya). Each includes the original Devanagari, IAST transliteration, source reference, and English meaning.",
	},
	{
		question: "How does the japa counter work?",
		answer:
			"During a session, tap anywhere on the screen to count each recitation. The app provides haptic feedback, tracks your progress toward the target (27, 54, or 108), and auto-saves so you can resume interrupted sessions.",
	},
	{
		question: "Is my data private?",
		answer:
			"Absolutely. All data is stored locally on your device using AsyncStorage. We collect zero analytics or personal data. Your spiritual practice is entirely private.",
	},
	{
		question: "What platforms does Japam support?",
		answer:
			"Japam is built with Expo and React Native, supporting both iOS and Android. It runs on Expo Go for easy installation — no App Store required during the early access period.",
	},
];

/* ─── Page ─────────────────────────────────────────── */

function HomePage() {
	return (
		<div className="flex flex-col min-h-screen bg-background text-foreground">
			{/* Hero */}
			<section className="relative overflow-hidden pt-24 pb-16 lg:pt-40 lg:pb-28">
				<div className="pointer-events-none absolute inset-0 -z-10">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-amber-500/5 blur-3xl" />
				</div>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
					<Badge
						variant="secondary"
						className="mb-6 px-4 py-1.5 text-sm font-medium"
					>
						<Flame className="mr-1.5 h-3.5 w-3.5" />
						Mantra recitation, reimagined
					</Badge>

					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
						Your daily
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
							sadhana companion
						</span>
					</h1>

					<p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
						Recite mantras and shlokas with Devanagari text, a digital mala, japa
						counter, and streak tracking — all offline and completely private.
					</p>

					<div className="flex flex-col sm:flex-row justify-center gap-3">
						<Button
							size="lg"
							className="h-12 px-8 text-base rounded-xl"
							asChild
						>
							<Link to="/auth">
								Start Practicing
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="h-12 px-8 text-base rounded-xl"
						>
							View Mantra Library
						</Button>
					</div>

					{/* Social proof strip */}
					<div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
						<div className="flex -space-x-2">
							{[...Array(5)].map((_, i) => (
								<div
									key={`avatar-${i}`}
									className="h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium"
								>
									{["🙏", "🕉️", "📿", "🔱", "☀️"][i]}
								</div>
							))}
						</div>
						<div className="flex items-center gap-1">
							{[...Array(5)].map((_, i) => (
								<Star
									key={`star-${i}`}
									className="h-4 w-4 fill-yellow-400 text-yellow-400"
								/>
							))}
							<span className="ml-1.5 font-medium text-foreground">4.9/5</span>
							<span>from practitioners</span>
						</div>
					</div>
				</div>
			</section>

			{/* Stats bar */}
			<section className="border-y bg-muted/30">
				<div className="container mx-auto px-4 max-w-5xl">
					<div className="grid grid-cols-2 md:grid-cols-4 divide-x">
						{stats.map((stat) => (
							<div
								key={stat.label}
								className="py-8 md:py-10 text-center px-4"
							>
								<div className="text-2xl md:text-3xl font-bold text-foreground">
									{stat.value}
								</div>
								<div className="text-sm text-muted-foreground mt-1">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<FeaturesSection />

			{/* Testimonials */}
			<section className="py-20 lg:py-28 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="text-center mb-14">
						<Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
							Testimonials
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
							Loved by practitioners
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Join thousands who have deepened their practice with Japam.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{testimonials.map((t) => (
							<div
								key={t.name}
								className="rounded-2xl bg-white dark:bg-card p-6 space-y-4"
							>
								<div className="flex items-center gap-1">
									{[...Array(t.rating)].map((_, i) => (
										<Star
											key={`${t.name}-star-${i}`}
											className="h-4 w-4 fill-yellow-400 text-yellow-400"
										/>
									))}
								</div>
								<p className="text-sm leading-relaxed text-foreground">
									"{t.content}"
								</p>
								<div className="pt-2">
									<div className="text-sm font-semibold">{t.name}</div>
									<div className="text-xs text-muted-foreground">{t.role}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section id="pricing" className="py-20 lg:py-28">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
					<div className="text-center mb-14">
						<Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
							Pricing
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
							Simple, honest pricing
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Free to start. Pay once for premium features, no subscriptions.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6 items-start">
						{pricingPlans.map((plan) => (
							<div
								key={plan.name}
								className="rounded-2xl bg-white dark:bg-card p-6 flex flex-col"
							>
								{/* Name badge + popular tag */}
								<div className="flex items-center gap-3 mb-6">
									<Badge
										variant="outline"
										className="text-sm font-medium px-3 py-1"
									>
										{plan.name}
									</Badge>
									{plan.popular && (
										<span className="text-sm font-medium text-primary">
											Most popular
										</span>
									)}
								</div>

								{/* Price */}
								<div className="mb-4">
									<span className="text-5xl font-bold tracking-tight">
										{plan.price}
									</span>
									<span className="text-sm text-muted-foreground ml-2">
										/{plan.period}
									</span>
								</div>

								{/* Description */}
								<p className="text-sm text-muted-foreground mb-6">
									<span className="font-semibold text-foreground">
										{plan.lead}
									</span>{" "}
									{plan.description}
								</p>

								{/* CTA */}
								<Button
									variant={plan.ctaVariant}
									className="w-full h-12 rounded-full text-base font-semibold mb-8"
									asChild
								>
									<Link to="/auth">{plan.cta}</Link>
								</Button>

								{/* Features */}
								<ul className="space-y-3 flex-1">
									{plan.features.map((f) => (
										<li
											key={f}
											className="flex items-start gap-2.5 text-sm"
										>
											<Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
											<span>{f}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section id="faq" className="py-20 lg:py-28 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
					<div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
						<div className="md:sticky md:top-24">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
								Frequently
								<br />
								asked
								<br />
								questions
							</h2>
						</div>
						<Accordion type="single" collapsible className="w-full">
							{faqs.map((faq, i) => (
								<AccordionItem
									key={faq.question}
									value={`faq-${i}`}
									className="border-b-0 rounded-xl px-4 transition-colors data-[state=open]:bg-primary/5 data-[state=open]:border-dashed data-[state=open]:border data-[state=open]:border-primary/20"
								>
									<AccordionTrigger
										className="text-base font-semibold hover:no-underline gap-3 [&[data-state=open]>svg]:rotate-0"
										icon={
											<>
												<Plus className="size-4 shrink-0 text-primary [[data-state=open]>&]:hidden" />
												<X className="size-4 shrink-0 text-primary [[data-state=closed]>&]:hidden" />
											</>
										}
									>
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground leading-relaxed">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			{/* CTA / Newsletter */}
			<section className="py-20 lg:py-28">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
					<div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-16 sm:py-20 text-center">
						{/* Background glow */}
						<div className="pointer-events-none absolute inset-0">
							<div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-white/10 blur-3xl" />
							<div className="absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
						</div>

						<div className="relative z-10">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary-foreground mb-4">
								Begin your practice today
							</h2>
							<p className="text-base md:text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed">
								Download Japam and bring focus, discipline, and peace to your
								daily mantra recitation. Free to start, no account needed.
							</p>

							<div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
								<Button
									size="lg"
									className="h-12 px-8 text-base rounded-full bg-white text-primary hover:bg-white/90 font-semibold"
									asChild
								>
									<Link to="/auth">
										Start Practicing
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>

							<div className="max-w-md mx-auto">
								<p className="text-sm text-primary-foreground/60 mb-3">
									Get notified when we launch on the App Store
								</p>
								<div className="rounded-full bg-white/10 backdrop-blur-sm p-1.5 flex flex-col sm:flex-row gap-1.5">
									<div className="relative flex-1">
										<Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-foreground/40" />
										<Input
											type="email"
											placeholder="Enter your email"
											className="h-10 pl-10 border-0 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-0 text-sm rounded-full"
										/>
									</div>
									<Button
										size="sm"
										className="h-10 rounded-full px-6 bg-white text-primary hover:bg-white/90 font-medium shrink-0"
									>
										Notify Me
									</Button>
								</div>
								<p className="text-xs text-primary-foreground/40 mt-3">
									No spam. Unsubscribe at any time.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
