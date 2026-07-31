"use client";

import { motion } from "framer-motion";
import { Shield, Wifi, Lock, ServerCog } from "lucide-react";
import Link from "next/link";

const trustItems = [
  {
    icon: Shield,
    title: "30-Day Money-Back Guarantee On Every IPTV Subscription You Buy",
    description:
      "Not satisfied with the service? Contact support within 30 days and every penny returns same-day. No forms, no retention scripts, no exceptions. A safety net that eliminates all financial risk.",
  },
  {
    icon: Wifi,
    title: "99.9% Uptime On Strong IPTV Servers",
    description:
      "A live status page tracks server health minute by minute. If uptime dips below 99.9 percent, service credits apply automatically. Your purchase is protected by infrastructure that does not cut corners.",
  },
  {
    icon: Lock,
    title: "Secure Proxy Add-On — Optional IPTV Privacy Layer",
    description:
      "An optional Secure Proxy encrypts your stream traffic with no latency penalty and reduces ISP-side filtering. No bandwidth cap, no logs, no separate subscription. Available at checkout from £4.75 per term.",
  },
  {
    icon: ServerCog,
    title: "24/7 UK Support — A British IPTV Service That Backs Every Buyer",
    description:
      "A named British team answers live chat, WhatsApp and email around the clock. Average first response: under four minutes. Post-checkout support that matches the pre-checkout promise.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-11 lg:py-16">
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-4">
            Four Promises That Protect Your Purchase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Buy IPTV Guarantee &mdash; Four Promises{" "}
            <span className="gradient-text">That Protect Your Purchase</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            Spending money online requires trust. Every commitment below is published, measured and backed by a full{" "}
            <Link href="/refund" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              same-day refund
            </Link>.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 transition-all group-hover:border-emerald-200 group-hover:bg-emerald-100 group-hover:shadow-lg group-hover:shadow-emerald-100/50">
                <item.icon className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
