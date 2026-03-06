type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left'
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-100 px-4 py-2 font-medium text-slate-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-tight text-ink">
        {title}
      </h2>
      <p className="mt-4 text-base text-muted">{description}</p>
    </div>
  );
}
