import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-16 bg-black/90">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-12">
          {t.contact.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* İletişim Bilgileri */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl">
            <h2 className="text-2xl text-primary font-bold mb-6">
              {t.contact.info.title}
            </h2>
            <div className="space-y-4 text-white">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">{t.contact.info.addressLabel}</h3>
                <p>{t.contact.info.address}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">{t.contact.info.phoneLabel}</h3>
                <p>
                  <a 
                    href="tel:+496211815150" 
                    className="hover:text-primary transition-colors"
                  >
                    {t.contact.info.phone}
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">{t.contact.info.emailLabel}</h3>
                <p>{t.contact.info.email}</p>
              </div>
              {/* Çalışma Saatleri */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">{t.contact.hours.title}</h3>
                <p className="text-lg font-semibold">{t.contact.hours.schedule}</p>
                <p className="text-lg">{t.contact.hours.time}</p>
              </div>
            </div>
          </div>

          {/* Harita */}
          <div className="h-[400px] rounded-xl overflow-hidden">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.8604983906466!2d8.463893776687667!3d49.48893785901821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc24fb312edb%3A0x920e7a61e665c05c!2sH3%203%2C%2068159%20Mannheim!5e0!3m2!1sen!2sde!4v1710337558613!5m2!1sen!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 