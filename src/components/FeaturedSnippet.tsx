import { Mic } from "lucide-react";

interface FeaturedSnippetProps {
  question: string;
  answer: string;
  example?: string;
}

export default function FeaturedSnippet({ question, answer, example }: FeaturedSnippetProps) {
  return (
    <div className="bg-brand-blue/5 border border-brand-gold/20 p-8 rounded-[2.5rem] my-8 relative overflow-hidden group hover:shadow-lg transition-all">
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
         <Mic className="w-24 h-24 text-brand-blue" />
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
          <Mic className="w-4 h-4 text-brand-gold" />
        </div>
        <h2 className="text-2xl font-bold font-inter text-brand-blue tracking-tight speakable-headline">
          {question}
        </h2>
      </div>
      <div className="speakable-summary text-brand-blue/80 leading-relaxed space-y-3 relative z-10">
        <p className="font-medium text-[15px]">{answer}</p>
        {example && (
          <p className="text-brand-blue/70 text-sm italic border-l-2 border-brand-gold/40 pl-4 bg-white/50 py-2 pr-2 rounded-r-lg">
            <span className="font-semibold not-italic">For example: </span>
            {example}
          </p>
        )}
      </div>
      {/* Bottom element removed as requested by user */}
    </div>
  );
}
