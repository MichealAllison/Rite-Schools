import ScrollReveal from "./scroll-reveal";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={className}>
      <div className={`${centered ? "text-center" : ""} max-w-3xl ${centered ? "mx-auto" : ""}`}>
        {subtitle && (
          <span
            className={`inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-4 ${
              light ? "text-gold-400" : "text-gold-600"
            }`}
          >
            {subtitle}
          </span>
        )}
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-lg md:text-xl leading-relaxed max-w-2xl ${
              centered ? "mx-auto" : ""
            } ${light ? "text-gray-300" : "text-gray-600"}`}
          >
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
