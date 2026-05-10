import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { InfoCard } from '../components/Card'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [level, setLevel] = useState('Primary 5')
  const [message, setMessage] = useState('')

  const mailto = `mailto:hindifunlearn@gmail.com?subject=${encodeURIComponent(
    `Class enquiry — ${level} (${name || 'parent'})`,
  )}&body=${encodeURIComponent(
    `Hello Pooja,\n\nMy name is ${name || '____'}.\nMy child is in: ${level}\nReply email: ${email || '____'}\n\n${message || 'I would like to enquire about Hindi tuition.'}\n\nThank you.`,
  )}`

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        hindi="संपर्क करें"
        title="Book a class with Pooja"
        tone="green"
      >
        Send a quick message and Pooja will get back to you, usually within a day. Fees are discussed based on your child's level and weekly schedule.
      </PageHeader>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-5 gap-6">
        <InfoCard className="md:col-span-3">
          <h2 className="text-xl font-extrabold text-navy mb-4">Send a message</h2>
          <form
            onSubmit={(e) => { e.preventDefault(); window.location.href = mailto }}
            className="space-y-4"
          >
            <Field label="Your name">
              <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none" />
            </Field>
            <Field label="Your email">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none" />
            </Field>
            <Field label="Student's level">
              <select value={level} onChange={(e) => setLevel(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none bg-white">
                {['Pre-school', 'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6 (PSLE)', 'Secondary 1', 'Secondary 2', 'Secondary 3', 'Secondary 4 (O-Level)', 'JC1', 'JC2 (A-Level)'].map(l => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </Field>
            <Field label="Message">
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="Tell Pooja about your child's needs, preferred days/times, etc." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none resize-y" />
            </Field>
            <button type="submit" className="w-full bg-saffron text-white font-bold py-4 rounded-xl hover:bg-saffron-dark transition shadow-lg shadow-saffron/30">
              Send message
            </button>
            <p className="text-xs text-gray-500 text-center">
              This opens your email app pre-filled. No data is stored on this site.
            </p>
          </form>
        </InfoCard>

        <div className="md:col-span-2 space-y-4">
          <InfoCard>
            <div className="text-xs font-bold uppercase tracking-wider text-saffron mb-3">Direct contact</div>
            <ContactRow icon="📧" label="Email" href="mailto:hindifunlearn@gmail.com" text="hindifunlearn@gmail.com" />
            <ContactRow icon="📱" label="WhatsApp" href="https://wa.me/6588849220" text="+65 8884 9220" />
            <ContactRow icon="🔗" label="LinkedIn" href="https://www.linkedin.com/in/dr-pooja-chandra-9452a1251/" text="Dr. Pooja Chandra" />
          </InfoCard>

          <InfoCard>
            <div className="text-xs font-bold uppercase tracking-wider text-india-green mb-3">What to expect</div>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Free 15-minute discovery chat</li>
              <li>Personalised lesson plan based on your child's level</li>
              <li>Singapore MOE syllabus aligned</li>
              <li>Online classes (Zoom / Google Meet)</li>
              <li>Fee discussed based on schedule</li>
            </ul>
          </InfoCard>
        </div>
      </section>
    </>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-sm font-semibold text-gray-700 mb-1">{label}</div>
      {children}
    </label>
  )
}

function ContactRow({ icon, label, href, text }: { icon: string; label: string; href: string; text: string }) {
  return (
    <a href={href} target="_blank" rel="noopener" className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0 hover:text-saffron-dark">
      <span className="text-xl">{icon}</span>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-gray-500">{label}</div>
        <div className="font-semibold text-gray-900 truncate">{text}</div>
      </div>
    </a>
  )
}
