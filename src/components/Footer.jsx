export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
      <p>© {new Date().getFullYear()} KI Support – Alle Rechte vorbehalten.</p>
      <div className="mt-2 space-x-4">
        <a href="/impressum" className="hover:underline">Impressum</a>
        <a href="/datenschutz" className="hover:underline">Datenschutz</a>
      </div>
    </footer>
  );
}
