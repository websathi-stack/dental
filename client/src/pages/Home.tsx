import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  Menu,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const clinicImage =
  "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1800";

const faqs = [
  {
    question: "What should I expect when I get in touch?",
    answer:
      "The enquiry form is a starting point, not an appointment confirmation. The clinic team can add its verified process here once supplied.",
  },
  {
    question: "Where is the clinic located?",
    answer:
      "[Clinic Address] is currently a placeholder. Add the verified address, local area, parking details, and public transport guidance before launch.",
  },
  {
    question: "How do I arrange an appointment?",
    answer:
      "Use the short enquiry form or the verified phone number once it has been supplied. The team will confirm the next step directly.",
  },
];

const treatments = [
  {
    index: "01",
    title: "[Verified Service]",
    description:
      "Add a concise, patient-friendly explanation of the verified treatment and the type of concern it may address.",
    note: "Verified treatment detail pending",
  },
  {
    index: "02",
    title: "[Verified Service]",
    description:
      "Keep this section focused on what a patient needs to know before deciding whether to enquire.",
    note: "Verified treatment detail pending",
  },
  {
    index: "03",
    title: "[Verified Service]",
    description:
      "Replace this placeholder with accurate treatment information, expectations, and a clear next step.",
    note: "Verified treatment detail pending",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f7f3] text-[#202b2b]">
      <header className="sticky top-0 z-50 border-b border-[#dfe4df] bg-[#f8f7f3]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[74px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <button className="group flex items-center gap-3 text-left" onClick={() => navigate("top")} aria-label="Return to the top of the page">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#173b3b] text-[#e8f0e8] transition-transform duration-200 group-hover:rotate-6">
              <Sparkles size={17} strokeWidth={1.7} />
            </span>
            <span>
              <span className="block font-display text-[18px] leading-none tracking-[-0.03em]">[Clinic Name]</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6f7b78]">Dental practice</span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            <button className="nav-link" onClick={() => navigate("treatments")}>Treatments</button>
            <button className="nav-link" onClick={() => navigate("approach")}>Our approach</button>
            <button className="nav-link" onClick={() => navigate("faqs")}>FAQs</button>
            <button className="nav-link" onClick={() => navigate("contact")}>Contact</button>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <span className="hidden text-right xl:block">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#78837f]">Call the clinic</span>
              <span className="mt-1 block text-sm font-semibold text-[#173b3b]">[Phone Number]</span>
            </span>
            <button className="button-primary" onClick={() => navigate("contact")}>Make an enquiry <ArrowUpRight size={16} /></button>
          </div>

          <button className="grid h-11 w-11 place-items-center rounded-full border border-[#d4ddd6] text-[#173b3b] lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#dfe4df] bg-[#f8f7f3] px-5 py-5 lg:hidden">
            <nav className="mx-auto flex max-w-[1320px] flex-col gap-1" aria-label="Mobile navigation">
              {[['Treatments', 'treatments'], ['Our approach', 'approach'], ['FAQs', 'faqs'], ['Contact', 'contact']].map(([label, id]) => (
                <button key={id} className="rounded-xl px-3 py-3 text-left text-[15px] font-medium hover:bg-[#edf1eb]" onClick={() => navigate(id)}>{label}</button>
              ))}
              <button className="button-primary mt-3 justify-center" onClick={() => navigate("contact")}>Make an enquiry <ArrowUpRight size={16} /></button>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative mx-auto grid max-w-[1320px] gap-10 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-16 lg:px-12 lg:pb-28 lg:pt-24">
          <div className="relative z-10 max-w-[600px]">
            <div className="eyebrow"><span className="eyebrow-dot" /> A calmer way to visit the dentist</div>
            <h1 className="mt-7 max-w-[650px] font-display text-[clamp(3.4rem,7vw,6.8rem)] leading-[0.92] tracking-[-0.065em] text-[#173b3b]">
              Care that starts with a conversation.
            </h1>
            <p className="mt-8 max-w-[500px] text-[17px] leading-8 text-[#65716d] sm:text-[18px]">
              Clear, practical dental care from a team you can talk to. This is a considered starting point for [Clinic Name], in [Clinic Location].
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="button-primary justify-center" onClick={() => navigate("contact")}>Make an enquiry <ArrowUpRight size={17} /></button>
              <button className="button-quiet justify-center" onClick={() => navigate("treatments")}>Explore treatments <span aria-hidden="true">↓</span></button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#dfe4df] pt-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#74817c]">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={15} className="text-[#7b9b86]" /> Verified information only</span>
              <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-[#7b9b86]" /> [Clinic Location]</span>
            </div>
          </div>
          <div className="relative min-h-[420px] sm:min-h-[550px] lg:min-h-[650px]">
            <div className="absolute -right-5 -top-6 h-32 w-32 rounded-full border border-[#b9cdbd] sm:-right-8 sm:-top-8 sm:h-44 sm:w-44" aria-hidden="true" />
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#dce4dc] shadow-[0_24px_70px_rgba(31,61,55,0.12)]">
              <img src={clinicImage} alt="Bright modern dental clinic treatment room with clean lines and natural light" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173b3b]/55 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <p className="max-w-[250px] text-sm leading-6 text-white/90">A clear, welcoming environment makes the first visit feel more familiar.</p>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm"><ArrowUpRight size={19} /></span>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-4 max-w-[220px] rounded-2xl border border-[#dce4dc] bg-[#f8f7f3] px-5 py-4 shadow-[0_14px_30px_rgba(31,61,55,0.1)] sm:-left-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#71817a]">Good to know</p>
              <p className="mt-2 font-display text-[19px] leading-tight text-[#173b3b]">You can ask questions before you decide.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#dfe4df] bg-[#edf1eb]" aria-label="Clinic principles">
          <div className="mx-auto grid max-w-[1320px] divide-y divide-[#d4ddd6] px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
            {[['01', 'Plain speaking', 'Understand what is being recommended and why.'], ['02', 'No rushed decisions', 'Take the time you need to feel comfortable.'], ['03', 'A useful next step', 'Leave with clarity about what happens next.']].map(([number, title, description]) => (
              <div key={number} className="flex gap-5 py-7 md:px-8 md:py-9 first:md:pl-0 last:md:pr-0">
                <span className="font-display text-2xl text-[#91aa99]">{number}</span>
                <div><h2 className="font-display text-xl tracking-[-0.03em] text-[#173b3b]">{title}</h2><p className="mt-1 text-sm leading-6 text-[#6a7771]">{description}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="treatments" className="scroll-mt-24 mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> Treatments</div>
              <h2 className="mt-5 max-w-[390px] font-display text-5xl leading-[0.97] tracking-[-0.055em] text-[#173b3b] sm:text-6xl">The right detail, at the right time.</h2>
              <p className="mt-7 max-w-[350px] text-[15px] leading-7 text-[#6a7771]">Only verified services should appear here. The structure is ready for the clinic’s real treatment information, without making promises on its behalf.</p>
            </div>
            <div className="border-t border-[#cfd9d0]">
              {treatments.map((treatment) => (
                <article key={treatment.index} className="grid gap-5 border-b border-[#cfd9d0] py-7 sm:grid-cols-[64px_1fr_auto] sm:items-start sm:gap-8 sm:py-9">
                  <span className="font-display text-2xl text-[#9aac9f]">{treatment.index}</span>
                  <div><h3 className="font-display text-3xl tracking-[-0.04em] text-[#173b3b]">{treatment.title}</h3><p className="mt-3 max-w-[530px] text-[15px] leading-7 text-[#6a7771]">{treatment.description}</p></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#84918a] sm:pt-2">{treatment.note}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="scroll-mt-24 bg-[#173b3b] text-[#eef3ee]">
          <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-24 lg:px-12 lg:py-32">
            <div>
              <div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> Our approach</div>
              <h2 className="mt-6 max-w-[680px] font-display text-5xl leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl">A visit should leave you feeling more informed, not more overwhelmed.</h2>
            </div>
            <div className="border-l border-[#648078] pl-7 lg:pl-10">
              <p className="text-[17px] leading-8 text-[#d7e1d9]">[Verified clinic philosophy or team introduction] can live here once the practice supplies accurate information. Keep the writing human, specific, and grounded in the actual patient experience.</p>
              <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#dbe9dd] underline decoration-[#8aa995] underline-offset-8" onClick={() => navigate("contact")}>Talk to the clinic <ArrowUpRight size={16} /></button>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1320px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-12 lg:py-32">
          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-[#dfe9df] sm:-left-8 sm:h-36 sm:w-36" aria-hidden="true" />
            <img src={clinicImage} alt="Bright dental clinic environment with treatment equipment and daylight" className="relative aspect-[4/3] w-full rounded-[1.7rem] object-cover grayscale-[12%]" loading="lazy" />
            <p className="relative mt-4 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#77837e]">Real clinic photography to be supplied · current image: Daniel Frank / Pexels</p>
          </div>
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> Before you visit</div>
            <h2 className="mt-5 max-w-[560px] font-display text-5xl leading-[0.98] tracking-[-0.055em] text-[#173b3b] sm:text-6xl">Know who to contact and what happens next.</h2>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {[['01', 'Send an enquiry', 'Use the short form to share how the clinic can help.'], ['02', 'Hear from the team', 'The verified contact process can be added here.'], ['03', 'Choose your next step', 'The clinic will confirm what is appropriate for you.']].map(([number, title, description]) => (
                <div key={number} className="border-t border-[#cfd9d0] pt-4 last:sm:col-span-2"><span className="font-display text-xl text-[#91aa99]">{number}</span><h3 className="mt-2 font-display text-2xl tracking-[-0.035em] text-[#173b3b]">{title}</h3><p className="mt-1 text-sm leading-6 text-[#6a7771]">{description}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="scroll-mt-24 border-y border-[#dfe4df] bg-[#edf1eb]">
          <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-12 lg:py-28">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> Helpful answers</div><h2 className="mt-5 max-w-[360px] font-display text-5xl leading-[0.98] tracking-[-0.055em] text-[#173b3b]">A little more certainty.</h2><p className="mt-6 max-w-[330px] text-[15px] leading-7 text-[#6a7771]">Questions should reduce uncertainty, not fill a page. Replace these placeholders with answers the clinic has verified.</p></div>
            <div className="border-t border-[#cfd9d0]">{faqs.map((faq, index) => { const isOpen = openFaq === index; return <div key={faq.question} className="border-b border-[#cfd9d0]"><button className="flex w-full items-center justify-between gap-6 py-6 text-left" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span className="font-display text-2xl tracking-[-0.035em] text-[#173b3b]">{faq.question}</span><ChevronDown size={19} className={`shrink-0 text-[#789187] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} /></button>{isOpen && <div className="pb-6 pr-8 text-[15px] leading-7 text-[#6a7771]">{faq.answer}</div>}</div>; })}</div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-[#f8f7f3]">
          <div className="mx-auto grid max-w-[1320px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.76fr_1.24fr] lg:gap-24 lg:px-12 lg:py-32">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> Make an enquiry</div><h2 className="mt-5 max-w-[420px] font-display text-5xl leading-[0.96] tracking-[-0.055em] text-[#173b3b] sm:text-6xl">Start with what you need to know.</h2><p className="mt-7 max-w-[360px] text-[15px] leading-7 text-[#6a7771]">This form is a front-end enquiry point only. It does not confirm an appointment, and it should be connected to the clinic’s real workflow before launch.</p><div className="mt-10 space-y-4 text-sm text-[#61706a]"><p className="flex items-center gap-3"><Phone size={17} className="text-[#7b9b86]" /> [Phone Number]</p><p className="flex items-center gap-3"><Mail size={17} className="text-[#7b9b86]" /> [Email Address]</p><p className="flex items-center gap-3"><Clock3 size={17} className="text-[#7b9b86]" /> [Opening Hours]</p></div></div>
            <div className="rounded-[1.7rem] bg-[#edf1eb] p-6 sm:p-9"><form className="grid gap-5" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} aria-label="Appointment enquiry form"><div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Your name<input required className="form-input" name="name" placeholder="Name" /></label><label className="form-label">Email or phone<input required className="form-input" name="contact" placeholder="How should we reach you?" /></label></div><label className="form-label">What can we help with?<select className="form-input" name="reason" defaultValue=""><option value="" disabled>Select an option</option><option value="general">General enquiry</option><option value="appointment">Appointment enquiry</option><option value="verified-service">[Verified Service]</option></select></label><label className="form-label">A little more detail <span className="font-normal normal-case tracking-normal text-[#89958f]">(optional)</span><textarea className="form-input min-h-[120px] resize-y" name="message" placeholder="Share only what feels useful at this stage." /></label><div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between"><button className="button-primary justify-center" type="submit">Send enquiry <ArrowUpRight size={17} /></button><p className="max-w-[250px] text-[11px] leading-5 text-[#78857e]">Your message will need a verified destination before this form is live.</p></div>{submitted && <div role="status" className="flex items-center gap-2 rounded-xl border border-[#bed3c2] bg-[#e4f0e5] px-4 py-3 text-sm text-[#315a43]"><Check size={17} /> Demo received. No appointment has been booked.</div>}</form></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#dfe4df] bg-[#173b3b] text-[#e3eee4]"><div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_auto_auto] lg:items-end lg:px-12"><div><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#dcebdc] text-[#173b3b]"><Sparkles size={17} /></span><span className="font-display text-2xl tracking-[-0.04em]">[Clinic Name]</span></div><p className="mt-5 max-w-[300px] text-sm leading-6 text-[#b8c9bd]">A calm, clear place to begin. Verified clinic information will replace the placeholders before launch.</p></div><div><p className="footer-label">Visit</p><p className="mt-3 text-sm leading-6 text-[#c1d1c5]">[Clinic Address]<br />[Clinic Location]</p></div><div><p className="footer-label">Contact</p><p className="mt-3 text-sm leading-6 text-[#c1d1c5]">[Phone Number]<br />[Email Address]</p></div></div><div className="mx-auto flex max-w-[1320px] flex-col gap-2 border-t border-[#3b5b53] px-5 py-5 text-[11px] text-[#9eb5a5] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><span>© [Year] [Clinic Name]</span><span>Real image: Daniel Frank / Pexels · Details pending verification</span></div></footer>
    </div>
  );
}
