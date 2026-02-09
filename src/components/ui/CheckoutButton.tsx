"use client";

import { useState } from "react";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Failed to create checkout session");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full cursor-pointer rounded-lg bg-blue px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue/90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Redirecting..." : "Start Your Free Trial"}
    </button>
  );
}
