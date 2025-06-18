import Container from "@/components/basic/container";
export default function Blanklayout({ children }) {
  return (
    <>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
