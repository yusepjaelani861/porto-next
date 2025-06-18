export default function DefaultFooter() {
  return (
    <footer className="py-16 bg-gray-50 border-t-8 border-orange-1 font-thin">
      <p className="text-center">
        Copyright © {new Date().getFullYear()} Yusep Jaelani
      </p>
    </footer>
  );
}
