import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{t.contact.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{t.contact.info.title}</h2>
          <p>
            <strong>{t.contact.info.addressLabel}:</strong> {t.contact.info.address}
          </p>
          <p>
            <strong>{t.contact.info.phoneLabel}:</strong> {t.contact.info.phone}
          </p>
          <p>
            <strong>{t.contact.info.emailLabel}:</strong> {t.contact.info.email}
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">{t.contact.hours.title}</h3>
            <p>{t.contact.hours.weekdays}</p>
            <p>{t.contact.hours.weekend}</p>
          </div>
        </div>
        <div className="h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2472.6898366454747!2d8.462799776677012!3d49.49793785901699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc246a57d7c7%3A0x288f5981bc6aa12e!2sH3%203%2C%2068159%20Mannheim!5e0!3m2!1str!2sde!4v1709766544932!5m2!1str!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact; 