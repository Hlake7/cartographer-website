"use client";

import { useState, FormEvent } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://cartographer-api.azurewebsites.net";

export default function CheckoutButton() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      // Redirect to API's checkout endpoint which handles Stripe session creation
      const checkoutUrl = `${API_URL}/billing/checkout?email=${encodeURIComponent(email)}`;
      window.location.href = checkoutUrl;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={loading}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20 disabled:opacity-60"
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-600">{error}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full cursor-pointer rounded-lg bg-blue px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Redirecting to checkout..." : "Subscribe - $7/month"}
      </button>
      <p className="text-center text-xs text-gray-500">
        Cancel anytime. Your Google Earth link will be sent to this email.
      </p>
    </form>
  );
}
