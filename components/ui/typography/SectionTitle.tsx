interface Props {
  children: React.ReactNode;
  center?: boolean;
}

export default function SectionTitle({
  children,
  center,
}: Props) {
  return (
    <h2
      className={`
        text-4xl
        lg:text-5xl
        font-bold
        text-slate-900
        leading-tight
        ${center ? "text-center" : ""}
      `}
    >
      {children}
    </h2>
  );
}
