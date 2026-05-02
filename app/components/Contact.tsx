"use client";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  MessageSquare,
  MessageCircle,
  Linkedin,
  Github,
} from "lucide-react";
import { useForm } from "@formspree/react";
import { contactInfo } from "../data";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeonadnq");

  return (
    <section className="max-w-7xl mx-auto py-5 relative mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-10">
          <div>
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
              className="text-slate-400 text-md max-w-md"
            >
              Let&apos;s bridge the gap between imagination and reality, Whether
              you have a question or a brilliant project idea, my inbox is
              always open for innovation.
            </motion.p>
          </div>
          <div className="flex flex-col gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-xl glassmorphism flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                    {info.label}
                  </p>
                  <p className="text-white font-medium ">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-48 rounded-3xl overflow-hidden relative glassmorphism border border-white/5"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-neon-blue/20 to-neon-violet/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <MessageSquare
                size={64}
                className="text-white/10 animate-pulse"
              />
            </div>
            {[Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-4 h-4 rounded-full bg-white/10 "
                style={{ top: 20 + i * 15 + "%", left: 10 + i * 20 + "%" }}
              />
            ))}
          </motion.div>
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
              disabled={state.submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-2 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59, 130,246,0.2)] ${state.succeeded ? "bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]" : "bg-neon-blue text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"}`}
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
          <div className="flex justify-center gap-5 mt-15">
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
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
