type DemoNoteProps = {
  children: React.ReactNode;
};

export function DemoNote({ children }: DemoNoteProps) {
  return (
    <p className="rounded-2xl border border-dashed border-accent/20 bg-accentSoft px-4 py-3 text-sm text-muted">
      {children}
    </p>
  );
}
