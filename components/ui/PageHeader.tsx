import { Container } from "./Container";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-neutral-700 md:text-xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
