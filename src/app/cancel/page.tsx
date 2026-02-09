import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Checkout Cancelled — Cartographer",
};

export default function CancelPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
        <div className="max-w-md text-center">
          <h1 className="font-serif text-4xl text-navy">Changed Your Mind?</h1>
          <p className="mt-4 text-lg text-gray-600">
            No worries — your checkout was cancelled and you haven&apos;t been
            charged. You can start your free trial whenever you&apos;re ready.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/#pricing" variant="primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Pricing
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
