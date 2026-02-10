import { Check } from "lucide-react";
import { PRICING } from "@/lib/constants";
import CheckoutButton from "@/components/ui/CheckoutButton";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-navy md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            One plan. Everything included. No surprises.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-md rounded-2xl border-2 border-blue bg-white p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-navy">
                {PRICING.name}
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-navy">
                  ${PRICING.price}
                </span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-sm text-emerald font-medium">
                Beta Access
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {PRICING.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CheckoutButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
