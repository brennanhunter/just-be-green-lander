export default function Footer() {
  return (
    <footer className="w-full bg-white text-black py-8">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <p className="text-sm text-gray-700">
          &copy; {new Date().getFullYear()} JustBeGreen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
