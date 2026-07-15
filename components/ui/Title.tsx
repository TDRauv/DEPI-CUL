interface TitleProps {
  children: React.ReactNode;
  center?: boolean;
}

export default function Title({
  children,
  center = false,
}: TitleProps) {
  return (
    <h2
      className={`
        text-4xl
        lg:text-5xl
        font-bold
        text-slate-900
        mb-6
        ${center ? "text-center" : ""}
      `}
    >
      {children}
    </h2>
  );
}