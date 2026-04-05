import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Heart,
  Loader2,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useGreet } from "./hooks/useQueries";

// ── Decorative hero mockup card ──────────────────────────────────────────────
function HeroMockup() {
  const skeletonRows = ["w-full", "w-3/4", "w-5/6"];
  return (
    <div className="relative">
      {/* Glow behind */}
      <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl scale-95 translate-y-4" />
      <Card className="relative rounded-3xl border border-border shadow-card-hover overflow-hidden bg-card">
        <CardContent className="p-8 space-y-5">
          {/* Top bar */}
          <div className="flex items-center gap-2 pb-2 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <div className="w-3 h-3 rounded-full bg-green-400/70" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">
              hello-app.ic
            </span>
          </div>

          {/* Greeting preview */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-sm">👋</span>
              </div>
              <div>
                <div className="h-2.5 w-32 rounded-full bg-foreground/10" />
                <div className="h-2 w-20 rounded-full bg-foreground/6 mt-1.5" />
              </div>
            </div>

            {/* Message bubble */}
            <div className="ml-11 bg-accent rounded-2xl rounded-tl-sm p-4">
              <p className="text-sm font-medium text-accent-foreground">
                Hello, World! 👋
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">Just now</p>
            </div>
          </div>

          {/* Skeleton rows */}
          {skeletonRows.map((w) => (
            <div key={w} className={`h-2 ${w} rounded-full bg-foreground/6`} />
          ))}

          {/* CTA row */}
          <div className="flex gap-2 pt-1">
            <div className="h-8 w-24 rounded-lg bg-primary/20" />
            <div className="h-8 w-20 rounded-lg bg-border" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ── Feature cards data ───────────────────────────────────────────────────────
const features = [
  {
    icon: <MessageCircle className="w-5 h-5 text-accent-foreground" />,
    title: "Personalized Greetings",
    description:
      "Every hello is crafted just for you. Enter your name and receive a warm, unique greeting that feels personal every single time.",
  },
  {
    icon: <Zap className="w-5 h-5 text-accent-foreground" />,
    title: "Instant Response",
    description:
      "Powered by the Internet Computer, greetings are generated and delivered in milliseconds — no waiting, no delays.",
  },
  {
    icon: <Heart className="w-5 h-5 text-accent-foreground" />,
    title: "Friendly Design",
    description:
      "A clean, airy interface designed to make you smile. Simple to use, delightful to look at, and accessible to everyone.",
  },
];

const navLinks = ["Features", "About", "Docs"];
const footerLinks = ["Privacy", "Terms", "Contact"];

// ── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [name, setName] = useState("");
  const { mutate: greet, data: greeting, isPending, isError } = useGreet();

  function handleGreet() {
    const trimmed = name.trim();
    if (!trimmed) return;
    greet(trimmed);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleGreet();
  }

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground tracking-tight">
              Hello App
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="nav.link"
              >
                {link}
              </a>
            ))}
            <Button
              size="sm"
              className="rounded-xl"
              data-ocid="nav.primary_button"
            >
              Get Started <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-semibold px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                Now on the Internet Computer
              </div>

              <h1 className="font-display font-extrabold text-5xl md:text-6xl leading-[1.08] tracking-tight text-foreground">
                Say Hello
                <br />
                <span className="text-primary">to the World</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                The simplest way to send a personalized greeting — powered by
                the Internet Computer. Type your name, hit the button, feel the
                warmth.
              </p>

              {/* Input + button */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-sm">
                <Input
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="rounded-xl h-12 text-sm"
                  data-ocid="hero.input"
                />
                <Button
                  onClick={handleGreet}
                  disabled={isPending || !name.trim()}
                  className="rounded-xl h-12 px-6 font-semibold whitespace-nowrap"
                  data-ocid="hero.primary_button"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Saying Hello…
                    </>
                  ) : (
                    "Say Hello 👋"
                  )}
                </Button>
              </div>

              {/* Greeting response */}
              <AnimatePresence mode="wait">
                {isError && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3 text-sm text-destructive"
                    data-ocid="hero.error_state"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
                {greeting && !isError && (
                  <motion.div
                    key="greeting"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-accent border border-accent-foreground/10 rounded-2xl px-5 py-4"
                    data-ocid="hero.success_state"
                  >
                    <p className="text-lg font-bold text-foreground">
                      {greeting.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Delivered instantly ✨
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Social proof */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {["A", "B", "C", "D"].map((letter) => (
                    <div
                      key={letter}
                      className="w-7 h-7 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-bold text-primary"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <span>
                  Trusted by <strong className="text-foreground">2,400+</strong>{" "}
                  friendly humans
                </span>
              </div>
            </motion.div>

            {/* Right column — decorative mockup */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            >
              <HeroMockup />
            </motion.div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="bg-card border-t border-b border-border py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                Why Hello App?
              </h2>
              <p className="mt-3 text-base text-muted-foreground max-w-md mx-auto">
                Simple, fast, and built with care — here&apos;s what makes us
                different.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-7">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <Card
                    className="h-full rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300"
                    data-ocid={`features.item.${i + 1}`}
                  >
                    <CardContent className="p-7 space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                        {f.icon}
                      </div>
                      <h3 className="font-display font-semibold text-xl text-foreground">
                        {f.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {f.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>
            © {currentYear}{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </span>
          <nav className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="/"
                className="hover:text-foreground transition-colors"
                data-ocid="nav.link"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
