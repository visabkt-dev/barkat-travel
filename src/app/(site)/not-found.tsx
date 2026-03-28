import Link from "next/link";
import { MoveLeft, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-brand-white px-4">
      <div className="text-center max-w-lg">
        <div className="w-24 h-24 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <HelpCircle className="w-12 h-12 text-brand-gold" />
        </div>
        <h1 className="text-7xl font-bold font-inter tracking-tight text-brand-blue mb-4">404</h1>
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Oops! Lost in the Desert?</h2>
        <p className="text-brand-blue/60 mb-10  leading-relaxed text-lg">
          The page you are looking for doesn't exist or has been moved. Let's get you back on the right track for your journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-brand-blue text-brand-white px-10 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-brand-gold hover:text-brand-blue transition-all"
          >
            <MoveLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link 
            href="/contact/" 
            className="border border-brand-blue text-brand-blue px-10 py-4 rounded-full font-bold hover:bg-brand-beige transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
