export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-8">Preise</h2>
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-2">KI Support Pro</h3>
        <p className="text-lg mb-4">€29 / Monat</p>
        <ul className="text-left mb-6 space-y-2">
          <li>✅ 24/7 AI Chatbot</li>
          <li>✅ 1 Website / 1 Chatbot</li>
          <li>✅ Support per E-Mail</li>
        </ul>
        <a
          href="https://checkout.stripe.com/pay/https://buy.stripe.com/cNi8wOaw6gfY1NEbqw9oc00"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
        >
          Jetzt abonnieren
        </a>
      </div>
    </section>
  );
}
