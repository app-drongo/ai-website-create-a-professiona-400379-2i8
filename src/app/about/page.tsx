import Pageheader1 from '@/components/Pageheader1';
import Aboutabout from '@/components/Aboutabout';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Pageheader1 />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Aboutabout />
      </section>
    </main>
  );
}