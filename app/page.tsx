// @ts-nocheck
"use client";

import { Big_Shoulders_Display, Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import content from "../data/content.json";

// /ui-ux-pro-max → brutalist newspaper-editorial triple stack (compressed display + clean body + mono labels)
const display = Big_Shoulders_Display({ subsets: ["latin"], weight: ["700", "800", "900"] });
const body = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

// /ui-ux-pro-max → Magazine/Blog palette (zinc-black + hot pink + paper)
const INK = "#09090B";       // foreground / masthead black
const INK2 = "#18181B";      // primary ink
const ZINC = "#3F3F46";      // secondary
const PINK = "#EC4899";      // accent
const PAPER = "#FAFAFA";     // background paper
const RULE = "#18181B";      // rule lines
const MUTED = "#64748B";     // muted text
const BORDER = "#E4E4E7";    // hairlines

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);
  const issueDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).toUpperCase();

  return (
    <main
      className={body.className}
      style={{ backgroundColor: PAPER, color: INK, minHeight: "100vh" }}
    >
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(.2,.7,.2,1) forwards; }
        .fade-up-d1 { animation: fadeUp 0.9s cubic-bezier(.2,.7,.2,1) 0.15s forwards; opacity: 0; }
        .fade-up-d2 { animation: fadeUp 0.9s cubic-bezier(.2,.7,.2,1) 0.30s forwards; opacity: 0; }
        .leader {
          background-image: linear-gradient(to right, ${INK} 33%, transparent 0);
          background-position: bottom;
          background-size: 4px 1px;
          background-repeat: repeat-x;
        }
        .col-rule { column-rule: 1px solid ${INK}; }
      `}</style>

      {/* MASTHEAD BAR — thin black band, mono spec line */}
      <div style={{ backgroundColor: INK, color: PAPER }}>
        <div className={`${mono.className} max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-[10px]`} style={{ letterSpacing: "0.18em" }}>
          <span>ISSUE №01 — GLENDALE EDITION</span>
          <span className="hidden md:inline">{issueDate}</span>
          <span>OPEN · 8 AM → 8 PM · DAILY</span>
        </div>
      </div>

      {/* MASTHEAD — newspaper title block */}
      <header style={{ borderBottom: `4px double ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.32em", color: ZINC, textTransform: "uppercase" }}>
                The Glenoaks · Volume 1 · A Coffee Daily
              </p>
              <h1
                className={display.className}
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  fontWeight: 900,
                  lineHeight: 0.85,
                  letterSpacing: "-0.04em",
                  color: INK,
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                N · Café
              </h1>
            </div>
            <div className="hidden md:block text-right">
              <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.2em", color: ZINC, textTransform: "uppercase" }}>
                Sole Proprietor
              </p>
              <p className={display.className} style={{ fontSize: 18, fontWeight: 800, color: INK, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                Nova · Since the day before yesterday
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* SUB-NAV — masthead nav */}
      <nav style={{ borderBottom: `1px solid ${INK}`, backgroundColor: PAPER }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className={mono.className} style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            <a href="#dispatch" className="mr-6 hover:underline">§ Dispatch</a>
            <a href="#menu" className="mr-6 hover:underline">§ The Menu</a>
            <a href="#column" className="mr-6 hover:underline">§ Column</a>
            <a href="#visit" className="hover:underline">§ Address</a>
          </div>
          <a
            href={phoneTel}
            className={mono.className}
            style={{
              backgroundColor: PINK,
              color: INK,
              padding: "9px 18px",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            ☎ {content.contact.phone}
          </a>
        </div>
      </nav>

      {/* HERO — newspaper feature spread */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10">
          {/* Left rail — kicker + headline */}
          <div className="md:col-span-8 fade-up">
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: PINK }}>
              The Lede · Glendale, CA
            </p>
            <h2
              className={display.className}
              style={{
                fontSize: "clamp(2.75rem, 8.5vw, 8rem)",
                fontWeight: 900,
                lineHeight: 0.86,
                letterSpacing: "-0.04em",
                color: INK,
                textTransform: "uppercase",
                marginTop: 14,
              }}
            >
              A neighborhood<br />
              coffee shop that <br />
              <span style={{ color: PINK }}>actually</span> opens at 8.
            </h2>

            <p
              className="mt-8 max-w-2xl"
              style={{ fontSize: "1.15rem", lineHeight: 1.7, color: INK2 }}
            >
              {content.hero.subheading}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href={phoneTel}
                className={mono.className}
                style={{
                  backgroundColor: INK,
                  color: PAPER,
                  padding: "16px 26px",
                  fontSize: 12,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  display: "inline-block",
                }}
              >
                {content.hero.ctaText} →
              </a>
              <span
                className={mono.className}
                style={{
                  borderBottom: `1px solid ${INK}`,
                  paddingBottom: 4,
                  fontSize: 12,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Or walk in · 901 W Glenoaks Blvd
              </span>
            </div>
          </div>

          {/* Right rail — photo + spec column */}
          <div className="md:col-span-4 fade-up-d1">
            <div
              style={{
                aspectRatio: "3/4",
                border: `2px solid ${INK}`,
                backgroundImage: `url("${content.hero.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "contrast(1.08) saturate(0.92)",
              }}
            />
            <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.22em", color: ZINC, textTransform: "uppercase", marginTop: 10, borderTop: `1px solid ${INK}`, paddingTop: 8 }}>
              Fig. 01 — Interior, before the morning rush.
            </p>

            <div className="mt-8 border" style={{ borderColor: INK }}>
              <p
                className={mono.className}
                style={{
                  backgroundColor: INK,
                  color: PINK,
                  fontSize: 10,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  padding: "8px 12px",
                }}
              >
                By the numbers
              </p>
              <div className="divide-y" style={{ borderColor: INK }}>
                {[
                  ["Rating", "4.3 ★"],
                  ["Reviews", "106"],
                  ["Open every", "Day · 8-8"],
                  ["Established", "Glenoaks Blvd"],
                ].map(([k, v], i) => (
                  <div key={k} className="flex items-center justify-between px-3 py-2.5" style={{ borderTop: i === 0 ? "none" : `1px solid ${BORDER}` }}>
                    <span className={mono.className} style={{ fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: ZINC }}>
                      {k}
                    </span>
                    <span className={display.className} style={{ fontSize: 18, fontWeight: 800, color: INK, letterSpacing: "-0.01em" }}>
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISPATCH — newspaper column copy */}
      <section
        id="dispatch"
        style={{
          backgroundColor: PAPER,
          borderTop: `2px solid ${INK}`,
          borderBottom: `2px solid ${INK}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.3em", color: PINK, textTransform: "uppercase" }}>
                § The Dispatch
              </p>
              <h3
                className={display.className}
                style={{
                  fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                  fontWeight: 900,
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  color: INK,
                  textTransform: "uppercase",
                  marginTop: 14,
                }}
              >
                The Shop, in Plain English.
              </h3>
              <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.22em", color: ZINC, textTransform: "uppercase", marginTop: 18, borderTop: `1px solid ${INK}`, paddingTop: 10 }}>
                Filed by the proprietor · Glendale Bureau
              </p>
            </div>
            <div className="md:col-span-8" style={{ columns: "2", columnGap: "32px", columnRule: `1px solid ${INK}` }}>
              {content.about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "1.0625rem",
                    lineHeight: 1.7,
                    color: INK2,
                    marginBottom: 18,
                    breakInside: "avoid",
                  }}
                  className={i === 0 ? "first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:leading-[0.85] first-letter:mt-1" : ""}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENU — printed price list */}
      <section id="menu" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12 pb-4" style={{ borderBottom: `4px double ${INK}` }}>
          <div>
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.3em", color: PINK, textTransform: "uppercase" }}>
              § The Menu
            </p>
            <h3
              className={display.className}
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                color: INK,
                textTransform: "uppercase",
                marginTop: 8,
              }}
            >
              Drinks, food, and the like.
            </h3>
          </div>
          <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.22em", color: ZINC, textTransform: "uppercase", whiteSpace: "nowrap" }} >
            Tab №01
          </p>
        </div>

        <ul>
          {content.services.map((s, i) => (
            <li
              key={i}
              className="grid grid-cols-12 gap-3 py-7"
              style={{ borderBottom: `1px solid ${BORDER}` }}
            >
              <div className="col-span-12 md:col-span-1">
                <span
                  className={mono.className}
                  style={{
                    fontSize: 12,
                    color: PINK,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                  }}
                >
                  №{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="col-span-12 md:col-span-8">
                <h4
                  className={display.className}
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: INK,
                    letterSpacing: "-0.015em",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  {s.title}
                </h4>
                <p className="mt-2" style={{ color: ZINC, fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "52ch" }}>
                  {s.description}
                </p>
              </div>
              <div className="col-span-12 md:col-span-3 flex md:justify-end md:items-baseline">
                <span
                  className={display.className}
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: INK,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.price}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.22em", color: ZINC, textTransform: "uppercase", marginTop: 24, textAlign: "center" }}>
          · Prices subject to flour, sugar, and ambition ·
        </p>
      </section>

      {/* COLUMN — pull quotes */}
      <section
        id="column"
        style={{
          backgroundColor: INK,
          color: PAPER,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="mb-14">
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.3em", color: PINK, textTransform: "uppercase" }}>
              § Letters to the Shop
            </p>
            <h3
              className={display.className}
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                color: PAPER,
                textTransform: "uppercase",
                marginTop: 10,
              }}
            >
              The reader writes in.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-10">
            {content.reviews.map((r, i) => (
              <div key={i} style={{ borderTop: `2px solid ${PAPER}` }}>
                <p
                  className={display.className}
                  style={{
                    fontSize: 48,
                    fontWeight: 900,
                    color: PINK,
                    lineHeight: 0.7,
                    marginTop: 8,
                  }}
                >
                  "
                </p>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    color: PAPER,
                    marginTop: 4,
                  }}
                >
                  {r.text}
                </p>
                <div className="mt-6">
                  <p
                    className={display.className}
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: PAPER,
                      textTransform: "uppercase",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    — {r.name}
                  </p>
                  <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.22em", color: PINK, textTransform: "uppercase", marginTop: 4 }}>
                    {r.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT — masthead spec sheet */}
      <section id="visit" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="mb-12 pb-4 flex items-end justify-between" style={{ borderBottom: `4px double ${INK}` }}>
          <div>
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.3em", color: PINK, textTransform: "uppercase" }}>
              § Address & Running Time
            </p>
            <h3
              className={display.className}
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                color: INK,
                textTransform: "uppercase",
                marginTop: 10,
              }}
            >
              How to find us.
            </h3>
          </div>
          <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.22em", color: ZINC, textTransform: "uppercase" }}>
            Issue №01 · Glenoaks
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5">
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.28em", color: PINK, textTransform: "uppercase", marginBottom: 8 }}>
              Address
            </p>
            <p className={display.className} style={{ fontSize: "1.85rem", fontWeight: 900, color: INK, letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1.05 }}>
              {content.contact.address.split(",")[0]}
            </p>
            <p className={mono.className} style={{ fontSize: 12, color: ZINC, marginTop: 4 }}>
              {content.contact.address.split(",").slice(1).join(",").trim()}
            </p>

            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.28em", color: PINK, textTransform: "uppercase", marginTop: 32, marginBottom: 16 }}>
              Running Time
            </p>
            <table className={mono.className} style={{ width: "100%", fontSize: 13 }}>
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => (
                  <tr key={day} style={{ borderBottom: `1px solid ${BORDER}` }}>
                    <td
                      className="py-2.5"
                      style={{ color: INK, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em" }}
                    >
                      {day.slice(0, 3)}
                    </td>
                    <td
                      className="py-2.5 text-right leader"
                      style={{ color: ZINC }}
                    >
                      <span style={{ background: PAPER, paddingLeft: 6 }}>{String(time)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <a
              href={phoneTel}
              className={`${display.className} block mt-10`}
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 900,
                color: PINK,
                letterSpacing: "-0.02em",
                lineHeight: 0.9,
                textTransform: "uppercase",
              }}
            >
              ☎ {content.contact.phone}
            </a>
            <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.22em", color: ZINC, textTransform: "uppercase", marginTop: 6 }}>
              Tap to call · We pick up
            </p>
          </div>
          <div className="md:col-span-7">
            <div style={{ border: `2px solid ${INK}`, minHeight: 460 }}>
              <iframe
                title="Location"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0, minHeight: 456, display: "block", filter: "grayscale(0.6)" }}
                referrerPolicy="no-referrer-when-downgrade"
                src={mapUrl}
              />
            </div>
            <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.22em", color: ZINC, textTransform: "uppercase", marginTop: 8, textAlign: "right" }}>
              Fig. 02 — Approximate location, ground truth pending.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING — full-bleed pink ribbon */}
      <section style={{ backgroundColor: PINK, borderTop: `2px solid ${INK}`, borderBottom: `2px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.3em", color: INK, textTransform: "uppercase" }}>
              § Closing Argument
            </p>
            <h3
              className={display.className}
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                fontWeight: 900,
                lineHeight: 0.88,
                letterSpacing: "-0.035em",
                color: INK,
                textTransform: "uppercase",
                marginTop: 8,
              }}
            >
              Coffee's hot. <br />Door's open. <br />See you soon.
            </h3>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href={phoneTel}
              className={mono.className}
              style={{
                display: "inline-block",
                backgroundColor: INK,
                color: PAPER,
                padding: "20px 30px",
                fontSize: 13,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              ☎ {content.contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER — paper bottom */}
      <footer>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6 items-start mb-10">
            <div>
              <p className={display.className} style={{ fontSize: 22, fontWeight: 900, color: INK, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                N · Café
              </p>
              <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.22em", color: ZINC, textTransform: "uppercase", marginTop: 6 }}>
                The Glendale Daily · By Nova
              </p>
            </div>
            <div className={mono.className} style={{ fontSize: 11, letterSpacing: "0.12em", color: INK }}>
              <p>{content.contact.address}</p>
              <p className="mt-1">{content.contact.phone}</p>
            </div>
            {content.social && (
              <div className={mono.className} style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                <p style={{ color: PINK, marginBottom: 8 }}>§ Find us</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {Object.entries(content.social).map(([platform, url]) => (
                    <a key={platform} href={String(url)} style={{ color: INK, borderBottom: `1px solid ${INK}` }}>
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div
            className={mono.className}
            style={{
              borderTop: `4px double ${INK}`,
              paddingTop: 14,
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: ZINC,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span>© {new Date().getFullYear()} N Café — Glendale Edition. All rights observed.</span>
            <span>Set in Big Shoulders & Plex Mono · Printed on the internet.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
