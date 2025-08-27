import Pageheader from '@/components/Pageheader';
import Services1 from '@/components/Services1';
import Cta1 from '@/components/Cta1';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Pageheader />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Services1 />
      </section>
      <section id="section-2" className="scroll-mt-16">
        <Cta1 />
      </section>
    </main>
  );
}