type Props = { thin?: boolean };

export function Separator({ thin = false }: Props) {
  return (
    <hr
      className="my-0 w-full border-0"
      style={{
        height: thin ? "1px" : "1.5px",
        background: "var(--color-terminal-black)",
      }}
    />
  );
}
