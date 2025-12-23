import Header from "./Header";

export default function PageLayout({ children, transparentHeader = false }) {
  return (
    <>
      <Header transparent={transparentHeader} />
      <main style={{ minHeight: "calc(100vh - var(--header-height))" }}>
        {children}
      </main>
    </>
  );
}
