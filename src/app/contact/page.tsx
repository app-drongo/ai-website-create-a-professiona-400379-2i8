import Pageheader2 from '@/components/Pageheader2';
import Contactcontact from '@/components/Contactcontact';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Pageheader2 />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Contactcontact />
      </section>
    </main>
  );
}