export default function BookACallPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-[#0f0f1a] text-white py-14 px-4 text-center">
        <h1 className="font-serif text-4xl font-bold mb-2">Book a Free Call</h1>
        <p className="text-gray-400">30 minutes. No pressure. Just good advice.</p>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 mb-8 text-lg">
          Ready to take the next step? Book a free 30-minute call and lets talk about your real estate goals.
        </p>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ minHeight: '650px' }}>
          <iframe
            src="https://calendly.com/your-link?embed_type=Inline"
            width="100%"
            height="650"
            frameBorder="0"
            title="Book a Call"
          />
        </div>
        <p className="mt-6 text-sm text-gray-400">
          Prefer email? <a href="mailto:kice@kicetanha.com" className="text-yellow-600 hover:underline">kice@kicetanha.com</a>
        </p>
      </div>
    </div>
  );
}
