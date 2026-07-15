interface SubtitleProps {
  children: React.ReactNode;
  center?: boolean;
}

export default function Subtitle({
  children,
  center = false,
}: SubtitleProps) {
  return (
    <p
      className={`
        text-lg
        text-slate-600
        leading-8
        max-w-3xl
        ${center ? "mx-auto text-center" : ""}
      `}
    >
      {children}
    </p>
  );
}

