"use client";

import { MapPin, Phone, Clock, Globe } from "lucide-react";

interface NAPProps {
  branch: {
    name: string;
    address: string;
    city: string;
    country: string;
    phones: string[];
    hours: string;
    mapEmbed: string;
  };
}

export default function NAPSection({ branch }: NAPProps) {
  return (
    <section className="py-24 bg-brand-white border-t border-brand-gold/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* NAP Info */}
          <div className="space-y-8">
            <div>
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Office Presence</span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mt-4 mb-6 ">
                {branch.name}
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mr-6 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue uppercase tracking-widest text-xs mb-1">Our Address</h4>
                  <p className="text-brand-blue/60  font-medium">{branch.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mr-6 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue uppercase tracking-widest text-xs mb-1">Direct Contact</h4>
                  <div className="space-y-1">
                    {branch.phones.map((p) => (
                      <a 
                        key={p} 
                        href={`tel:${p}`} 
                        className="block text-brand-blue/60 hover:text-brand-gold transition-colors  font-medium"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mr-6 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue uppercase tracking-widest text-xs mb-1">Business Hours</h4>
                  <p className="text-brand-blue/60  font-medium">{branch.hours}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-brand-beige/30 rounded-[2.5rem] border border-brand-gold/10">
               <p className="text-sm text-brand-blue/60  leading-relaxed">
                 Barkat Al Madinah is committed to providing consistent and reliable support across all our branches. Our staff is trained to handle complex visa documentation and transport logistics specific to {branch.city}.
               </p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white relative group">
            <iframe
              src={branch.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
