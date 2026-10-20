"use client";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Download,
  MessageCircle,
  Linkedin,
  Github,
} from "lucide-react";
import { useForm } from "@formspree/react";
import { contactInfo } from "../data";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeonadnq");

  return (
    <section className="max-w-7xl mx-auto py-5 relative">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl text-green-500 md:text-4xl font-bold mb-5"
        >
          Let&apos;s Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-md max-w-md mx-auto"
        >
          Let&apos;s bridge the gap between imagination and reality. Whether you
          have a question or a brilliant project idea, my inbox is always open
          for innovation.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            {contactInfo.map((info, i) => {
              const label = info.label.toLowerCase();
              const href = label.includes("email")
                ? `mailto:${info.value}`
                : label.includes("phone")
                  ? `https://wa.me/${info.value.replace(/\D/g, "").replace(/^00/, "")}`
                  : null;

              const content = (
                <>
                  <div className="w-12 h-12 rounded-xl glassmorphism flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                      {info.label}
                    </p>
                    <p
                      className={`text-white font-medium transition-colors ${
                        href ? "group-hover:text-neon-blue" : ""
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-6"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-6">{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full rounded-3xl glassmorphism border border-white/5 p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
              </span>
              <h3 className="text-white font-bold">Available for work</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Open to full-time roles, freelance projects, and collaborations.
              Usually replies within 24 hours.
            </p>
            <a
              href="/Hla-Hijazi-CV.pdf"
              download="Hla-Hijazi-CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neon-blue/10 border border-neon-blue/50 text-neon-blue text-sm font-semibold hover:bg-neon-blue hover:text-[#ffffff] transition-all"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <div className="flex justify-center gap-5">
            {[
              {
                icon: <Github size={20} />,
                href: "https://github.com/hlahijazi2002",
                label: "GitHub",
              },
              {
                icon: <Linkedin size={20} />,
                href: "https://www.linkedin.com/in/hla-hijazi-a86a57369/",
                label: "LinkedIn",
              },
              {
                icon: <MessageCircle size={20} />,
                href: "https://wa.me/970594814452",
                label: "WhatsApp",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-2xl glassmorphism flex items-center justify-center text-slate-400 hover:text-neon-blue border border-white/5 transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glassmorphism p-8 md:p-12 rounded-4xl border-white/5 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-blue/10 blur-[80px] rounded-full" />

          <form
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-2"
              >
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Hla Hijazi"
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-2"
              >
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="hlahijazi22@gmail.com"
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-2"
            >
              <label className="text-sm font-medium text-slate-300 ml-1">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                required
                placeholder="Project Inquiry"
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-2"
            >
              <label className="text-sm font-medium text-slate-300 ml-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell me about your vision..."
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-2 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] ${state.succeeded ? "bg-green-500 text-[#ffffff] shadow-[0_0_20px_rgba(34,197,94,0.4)]" : "bg-neon-blue text-[#ffffff] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"}`}
            >
              {state.succeeded ? (
                <>
                  <CheckCircle2 size={20} />
                  Message Sent!
                </>
              ) : state.submitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={18} />
                  Transmit Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
