import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function NotFound() {
  return (
    <section className="py-64 md:py-64">
      <Container className="space-y-6">
        <h1 className="text-4xl tracking-tight md:text-5xl">Page not found</h1>
        <p className="max-w-2xl text-[var(--gc-taupe)] px-1">
          Oops... This page doesn’t exist ;-;
        </p>
        <div className="flex gap-3 px-0">
          <Button to="/">Back to Home</Button>
          <Button to="/directory" variant="secondary">
            Explore Directory
          </Button>
        </div>
      </Container>
    </section>
  );
}
