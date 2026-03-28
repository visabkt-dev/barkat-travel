import { CheckCircle, Award, Linkedin, Briefcase } from "lucide-react";
import SchemaMarkup from "./SchemaMarkup";

interface AuthorProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  credentials: string[];
  linkedinUrl?: string;
}

export default function AuthorProfile({ name, role, bio, imageUrl, credentials, linkedinUrl }: AuthorProps) {
  return (
    <div className="my-16 bg-white p-8 rounded-[3rem] border border-brand-gold/20 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Background Decor */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl"></div>
      
      {/* Dynamic Person Schema for EEAT */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": name,
            "jobTitle": role,
            "description": bio,
            "image": imageUrl,
            "knowsAbout": credentials,
            "worksFor": {
              "@type": "TravelAgency",
              "name": "Barkat Travel Qatar"
            },
            ...(linkedinUrl && { "sameAs": [linkedinUrl] })
          })
        }}
      />

      <div className="relative shrink-0 border-4 border-brand-gold/30 rounded-full p-1">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-32 h-32 rounded-full object-cover shadow-inner"
        />
        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm" title="Verified Expert">
           <CheckCircle className="w-4 h-4" />
        </div>
      </div>

      <div className="flex-1 text-center md:text-left z-10">
        <h3 className="text-2xl font-bold font-inter text-brand-blue flex items-center justify-center md:justify-start gap-2">
           {name}
        </h3>
        <p className="text-brand-gold font-bold uppercase tracking-widest text-[10px] my-2">
           {role}
        </p>
        <p className="text-brand-blue/70 text-sm leading-relaxed mb-4 max-w-xl">
           {bio}
        </p>
        
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
           {credentials.map((cred, i) => (
             <span key={i} className="flex items-center text-[10px] bg-brand-beige/50 text-brand-blue px-3 py-1.5 rounded-full border border-brand-gold/10 font-bold uppercase tracking-wider">
               <Award className="w-3 h-3 mr-1.5 text-brand-gold" />
               {cred}
             </span>
           ))}
        </div>

        {linkedinUrl && (
           <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold text-[#0A66C2] mt-6 hover:underline">
              <Linkedin className="w-4 h-4 mr-1.5" /> View Professional Profile
           </a>
        )}
      </div>
    </div>
  );
}
