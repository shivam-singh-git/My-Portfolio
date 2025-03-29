import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-md h-20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Shivam Singh
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 