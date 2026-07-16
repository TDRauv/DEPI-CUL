interface Props {
  children: React.ReactNode;
}

export default function SectionBadge({
  children,
}: Props) {
  return (
    <span
      className="
      inline-flex
      rounded-full
      bg-blue-50
      px-4
      py-2
      text-sm
      font-semibold
      uppercase
      tracking-[0.25em]
      text-[#003B70]"
    >
      {children}
    </span>
  );
}
