interface Props {
  children: React.ReactNode;
  center?: boolean;
}

export default function SectionSubtitle({
  children,
  center,
}: Props) {
  return (
    <p
      className={`
        mt-6
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
