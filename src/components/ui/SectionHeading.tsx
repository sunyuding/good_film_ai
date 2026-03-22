interface SectionHeadingProps {
  readonly title: string;
  readonly subtitle: string;
  readonly dark?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <h2
        className={`text-3xl font-bold md:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-cinema-black"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 text-lg ${
          dark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {subtitle}
      </p>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
    </div>
  );
}
