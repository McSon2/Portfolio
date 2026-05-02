export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-[58px]"
      style={{ borderTop: "1px solid var(--color-terminal-black)" }}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-center px-[30px] py-[30px]">
        <p className="text-caption uppercase tracking-wider">
          © {year} — Maxime Saltet
        </p>
      </div>
    </footer>
  );
}
