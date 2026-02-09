import { Layers, User, RefreshCw, Map, Globe } from "lucide-react";
import { FEATURES } from "@/lib/constants";
import Card from "@/components/ui/Card";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  User,
  RefreshCw,
  Map,
  Globe,
};

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-navy md:text-5xl">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful parcel data, delivered seamlessly to Google Earth Pro.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FEATURES.slice(0, 3).map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card key={feature.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-light">
                  <Icon className="h-6 w-6 text-blue" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {FEATURES.slice(3).map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card key={feature.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-light">
                  <Icon className="h-6 w-6 text-blue" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
