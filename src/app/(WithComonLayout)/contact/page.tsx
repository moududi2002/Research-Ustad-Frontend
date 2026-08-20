// import ContactUs from '@/components/module/home/ContactPage/ContactUs';
import ContactSection from "@/components/home/ContactSection";

const page = () => {
  return (
    <div>
      <ContactSection />
      <section className="max-w-7xl mx-auto py-10 px-6">
        <h3 className="text-brand-primary text-3xl md:text-4xl font-bold  mb-4">
          Location
        </h3>
        <div className="h-96 bg-muted rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=109+Harvey+Dr+%23084,+Statesboro,+GA+30458,+USA&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
        <p className="text-center text-gray-600 mt-4 text-xl">
          Available for remote work worldwide.
        </p>
      </section>
    </div>
  );
};

export default page;
