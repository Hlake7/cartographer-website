import {
  TrendingUp,
  ClipboardCheck,
  FileText,
  Compass,
} from "lucide-react";
import { USE_CASES } from "@/lib/constants";
import Card from "@/components/ui/Card";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  ClipboardCheck,
  FileText,
  Compass,
};

export default function UseCases() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-navy md:text-5xl">
            Built for Professionals
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you&apos;re investing, appraising, or planning — Cartographer
            gives you the data you need.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((useCase) => {
            const Icon = iconMap[useCase.icon];
            return (
              <Card key={useCase.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10">
                  <Icon className="h-6 w-6 text-emerald" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
