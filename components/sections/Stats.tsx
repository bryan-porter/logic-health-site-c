import { Container } from "@/components/ui/Container";
import { Stat } from "@/lib/types";

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-3xl font-semibold text-primary-600 md:text-4xl">
                {stat.value}
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
