interface SectionHeadingProps {
  readonly title: string;
  readonly subtitle: string;
  readonly dark?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
        {subtitle}
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}
