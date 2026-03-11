"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "T-Shirt O'Styl Classic",
    price: "15 000 FCFA",
    releaseDate: "12 Mars 2026",
    img: "/img/WhatsApp%20Image%202026-03-08%20at%2020.41.30.jpeg",
    images: [
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.41.30.jpeg",
        price: "15 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.41.30%20(1).jpeg",
        price: "16 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.41.31.jpeg",
        price: "17 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.41.33.jpeg",
        price: "18 000 FCFA",
      },
    ],
  },
  {
    id: 2,
    name: "Chemise Urban Style",
    price: "22 000 FCFA",
    releaseDate: "20 Mars 2026",
    img: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.14.jpeg",
    images: [
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.14.jpeg",
        price: "22 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.23.jpeg",
        price: "23 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.23%20(1).jpeg",
        price: "24 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.24.jpeg",
        price: "25 000 FCFA",
      },
    ],
  },
  {
    id: 3,
    name: "Hoodie Street O'Styl",
    price: "28 000 FCFA",
    releaseDate: "02 Avril 2026",
    img: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.24%20(1).jpeg",
    images: [
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.24%20(1).jpeg",
        price: "28 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.26.jpeg",
        price: "29 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.29.jpeg",
        price: "30 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.29%20(1).jpeg",
        price: "31 000 FCFA",
      },
    ],
  },
  {
    id: 4,
    name: "Ensemble Casual",
    price: "35 000 FCFA",
    releaseDate: "10 Avril 2026",
    img: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.30.jpeg",
    images: [
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.30.jpeg",
        price: "35 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.33.jpeg",
        price: "36 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.34.jpeg",
        price: "37 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.35.jpeg",
        price: "38 000 FCFA",
      },
    ],
  },
  {
    id: 5,
    name: "Veste Denim Premium",
    price: "30 000 FCFA",
    releaseDate: "18 Avril 2026",
    img: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.35%20(1).jpeg",
    images: [
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.35%20(1).jpeg",
        price: "30 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.36.jpeg",
        price: "31 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.43.jpeg",
        price: "32 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.46.jpeg",
        price: "33 000 FCFA",
      },
    ],
  },
  {
    id: 6,
    name: "Robe Chic O'Styl",
    price: "32 000 FCFA",
    releaseDate: "25 Avril 2026",
    img: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.46%20(1).jpeg",
    images: [
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.46%20(1).jpeg",
        price: "32 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.47.jpeg",
        price: "33 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.47%20(1).jpeg",
        price: "34 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.48.jpeg",
        price: "35 000 FCFA",
      },
    ],
  },
  {
    id: 7,
    name: "Pantalon Cargo",
    price: "18 000 FCFA",
    releaseDate: "02 Mai 2026",
    img: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.50.jpeg",
    images: [
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.50.jpeg",
        price: "18 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.51.jpeg",
        price: "19 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.43.03.jpeg",
        price: "20 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.43.05.jpeg",
        price: "21 000 FCFA",
      },
    ],
  },
  {
    id: 8,
    name: "Sneakers Edition",
    price: "40 000 FCFA",
    releaseDate: "10 Mai 2026",
    img: "/img/WhatsApp%20Image%202026-03-08%20at%2020.43.05%20(1).jpeg",
    images: [
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.43.05%20(1).jpeg",
        price: "40 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.29.jpeg",
        price: "42 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.33.jpeg",
        price: "41 000 FCFA",
      },
      {
        src: "/img/WhatsApp%20Image%202026-03-08%20at%2020.42.36.jpeg",
        price: "43 000 FCFA",
      },
    ],
  },
];

export default function OStylPage() {
  const collectionRef = React.useRef<HTMLElement | null>(null);
  const topRef = React.useRef<HTMLElement | null>(null);
  const aboutRef = React.useRef<HTMLElement | null>(null);
  const commanderRef = React.useRef<HTMLElement | null>(null);

  const [showNav, setShowNav] = React.useState(false);
  const [navHovered, setNavHovered] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<
    "top" | "collection" | "about" | "commander"
  >("top");
  const [showSplash, setShowSplash] = React.useState(true);
  const [selectedProduct, setSelectedProduct] = React.useState<
    (typeof products)[number] | null
  >(null);

  React.useEffect(() => {
    const t = window.setTimeout(() => setShowSplash(false), 900);
    return () => window.clearTimeout(t);
  }, []);

  React.useEffect(() => {
    if (!selectedProduct) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProduct]);

  React.useEffect(() => {
    if (!selectedProduct) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedProduct]);

  const whatsappNumber = "2250141632226";
  const phoneNumber = "+2250141632226";
  const whatsappText = "Bonjour, je souhaite commander un article O'Styl.";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappText,
  )}`;

  const openWhatsappForItem = React.useCallback(
    (params: { name: string; releaseDate: string; price: string; imageSrc: string }) => {
      const origin = typeof window !== "undefined" ? window.location.origin : "";
      const imageUrl = params.imageSrc.startsWith("/")
        ? `${origin}${params.imageSrc}`
        : params.imageSrc;

      const text =
        `Bonjour, est-ce que cet article est disponible ? Si oui, j'aimerais le commander.\n\n` +
        `- Article : ${params.name}\n` +
        `- Date de sortie : ${params.releaseDate}\n` +
        `- Prix : ${params.price}\n` +
        `- Image : ${imageUrl}\n\n` +
        `Pouvez-vous me donner les détails de ma facture (total, livraison, délai) ?`;

      const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(href, "_blank", "noopener,noreferrer");
    },
    [whatsappNumber],
  );

  const shareItemImage = React.useCallback(
    async (params: { name: string; releaseDate: string; price: string; imageSrc: string }) => {
      const nav = navigator as unknown as {
        canShare?: (data: { files?: File[] }) => boolean;
        share?: (data: { files?: File[]; text?: string; title?: string }) => Promise<void>;
      };

      if (!nav?.share) return false;

      const origin = typeof window !== "undefined" ? window.location.origin : "";
      const imageUrl = params.imageSrc.startsWith("/")
        ? `${origin}${params.imageSrc}`
        : params.imageSrc;

      const text =
        `Bonjour, est-ce que cet article est disponible ? Si oui, j'aimerais le commander.\n\n` +
        `- Article : ${params.name}\n` +
        `- Date de sortie : ${params.releaseDate}\n` +
        `- Prix : ${params.price}\n\n` +
        `Pouvez-vous me donner les détails de ma facture (total, livraison, délai) ?`;

      try {
        const res = await fetch(imageUrl, { cache: "no-store" });
        if (!res.ok) return false;
        const blob = await res.blob();
        const ext = blob.type === "image/png" ? "png" : "jpg";
        const file = new File([blob], `ostyl-${params.name}.${ext}`.replace(/\s+/g, "-"), {
          type: blob.type,
        });

        if (nav.canShare && !nav.canShare({ files: [file] })) return false;

        await nav.share({
          title: "OStyl",
          text,
          files: [file],
        });
        return true;
      } catch {
        return false;
      }
    },
    [],
  );

  const scrollToId = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  React.useEffect(() => {
    const els = [
      topRef.current,
      collectionRef.current,
      aboutRef.current,
      commanderRef.current,
    ];
    if (!els.some(Boolean)) return;

    const ratio: Record<"top" | "collection" | "about" | "commander", number> = {
      top: 0,
      collection: 0,
      about: 0,
      commander: 0,
    };

    const compute = () => {
      const inHero = ratio.top >= 0.2;
      const anyNonTop =
        ratio.collection > 0 || ratio.about > 0 || ratio.commander > 0;

      setShowNav(!inHero && anyNonTop);

      if (inHero) {
        setActiveSection("top");
        return;
      }

      let best: "collection" | "about" | "commander" = "collection";
      let bestRatio = ratio.collection;
      for (const key of ["collection", "about", "commander"] as const) {
        if (ratio[key] > bestRatio) {
          best = key;
          bestRatio = ratio[key];
        }
      }
      setActiveSection(best);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (id === "top") ratio.top = entry.isIntersecting ? entry.intersectionRatio : 0;
          if (id === "collection")
            ratio.collection = entry.isIntersecting ? entry.intersectionRatio : 0;
          if (id === "about") ratio.about = entry.isIntersecting ? entry.intersectionRatio : 0;
          if (id === "commander")
            ratio.commander = entry.isIntersecting ? entry.intersectionRatio : 0;
        }
        compute();
      },
      { threshold: [0, 0.15, 0.3, 0.5, 0.75, 1] },
    );

    for (const el of els) {
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <AnimatePresence>
        {showSplash ? (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[80] grid place-items-center bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative h-24 w-[240px]"
            >
              <Image
                src="/img/LOGO%20OSTYL%20NOIR.png"
                alt="OStyl"
                fill
                priority
                sizes="240px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showNav ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-50"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-4 flex justify-center">
              <motion.div
                onHoverStart={() => setNavHovered(true)}
                onHoverEnd={() => setNavHovered(false)}
                animate={{ width: navHovered ? 520 : 150 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/70 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <div
                  className={`flex h-14 items-center px-4 sm:px-5 ${
                    navHovered ? "justify-between" : "justify-center"
                  }`}
                >
                  {navHovered ? (
                    <motion.button
                      type="button"
                      onClick={() => {
                        setActiveSection("top");
                        scrollToId("top");
                      }}
                      className="text-base sm:text-lg font-semibold tracking-tight"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      O'Styl
                    </motion.button>
                  ) : (
                    <motion.button
                      type="button"
                      onClick={() => scrollToId(activeSection)}
                      className="text-sm font-semibold tracking-tight text-neutral-100"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      initial={false}
                      animate={{ opacity: 1 }}
                    >
                      {activeSection === "top"
                        ? "O'Styl"
                        : activeSection === "collection"
                          ? "Collection"
                          : activeSection === "about"
                            ? "À propos"
                            : "Commander"}
                    </motion.button>
                  )}

                  <AnimatePresence initial={false}>
                    {navHovered ? (
                      <motion.div
                        key="nav-items"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.12, ease: "easeOut" }}
                        className="flex items-center gap-1"
                      >
                        <Button
                          className="bg-transparent hover:bg-neutral-900/70 text-white px-3 sm:px-4 py-2"
                          onClick={() => {
                            setActiveSection("collection");
                            scrollToId("collection");
                          }}
                        >
                          Collection
                        </Button>
                        <Button
                          className="bg-transparent hover:bg-neutral-900/70 text-white px-3 sm:px-4 py-2"
                          onClick={() => {
                            setActiveSection("about");
                            scrollToId("about");
                          }}
                        >
                          À propos
                        </Button>
                        <Button
                          className="bg-transparent hover:bg-neutral-900/70 text-white px-3 sm:px-4 py-2"
                          onClick={() => {
                            setActiveSection("commander");
                            scrollToId("commander");
                          }}
                        >
                          Commander
                        </Button>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section
        id="top"
        ref={(node) => {
          topRef.current = node;
        }}
        className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-80">
            <div className="h-full w-full p-4 sm:p-6">
              <div className="grid h-full grid-cols-3 gap-3 sm:gap-5">
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-neutral-800/80 bg-neutral-900/40 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                  <video
                    src="/img/VID1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-neutral-800/80 bg-neutral-900/40 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                  <video
                    src="/img/VID2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-neutral-800/80 bg-neutral-900/40 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                  <video
                    src="/img/VID3.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/55 to-neutral-950" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-7xl font-bold mb-6"
        >
          O'Styl
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 max-w-xl text-neutral-300 mb-8"
        >
          Découvrez les créations O'Styl. Une collection moderne entre streetwear
          et élégance pour affirmer votre style.
        </motion.p>

        <motion.div className="relative z-10" whileHover={{ scale: 1.05 }}>
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl px-8 py-6 text-lg shadow-[0_10px_30px_rgba(59,130,246,0.20)] hover:shadow-[0_14px_40px_rgba(59,130,246,0.28)]"
            onClick={() => scrollToId("collection")}
          >
            Voir la collection
          </Button>
        </motion.div>
      </section>

      <section
        id="collection"
        ref={(node) => {
          collectionRef.current = node;
        }}
        className="scroll-mt-24 pt-24 px-8 pb-20"
      >
        <h2 className="text-3xl font-semibold text-center mb-12">Collection</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="bg-neutral-900 border-neutral-800 rounded-2xl overflow-hidden h-full">
                <div className="relative h-60 w-full">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <CardContent className="p-4 flex flex-col gap-2">
                  <div className="space-y-1">
                    <h3 className="text-white font-bold text-lg leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-orange-400 text-sm font-semibold">
                      Sortie : {p.releaseDate}
                    </p>
                  </div>
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white w-full rounded-xl mt-auto py-3 hover:shadow-[0_10px_30px_rgba(59,130,246,0.18)]"
                    onClick={() => setSelectedProduct(p)}
                  >
                    Voir
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct ? (
          <motion.div
            key="modal"
            className="fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              aria-label="Fermer"
              className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative mx-auto mt-20 w-[min(980px,92vw)]"
              initial={{ y: 18, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 14, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 shadow-[0_30px_90px_rgba(0,0,0,0.65)] overflow-hidden">
                <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-neutral-800">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                      Collection
                    </p>
                    <h3 className="text-white font-bold text-2xl leading-tight truncate">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-orange-400 font-semibold mt-1">
                      Sortie : {selectedProduct.releaseDate}
                    </p>
                  </div>

                  <Button
                    className="bg-transparent hover:bg-neutral-900/70 text-white px-3 py-2"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Fermer
                  </Button>
                </div>

                <div className="max-h-[70vh] overflow-y-auto p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedProduct.images.map((src, idx) => (
                      <motion.div
                        key={`${selectedProduct.id}-${idx}`}
                        className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/30"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        whileHover={{ y: -4 }}
                      >
                        <div className="relative aspect-[4/5] w-full">
                          <Image
                            src={src.src}
                            alt={`${selectedProduct.name} ${idx + 1}`}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                            quality={55}
                          />
                        </div>
                        <div className="px-4 py-3 border-t border-neutral-800">
                          <p className="text-orange-400 font-semibold text-sm">
                            {src.price}
                          </p>
                          <Button
                            className="mt-3 w-full rounded-xl text-white font-semibold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 shadow-[0_14px_40px_rgba(16,185,129,0.20)] hover:shadow-[0_18px_55px_rgba(16,185,129,0.28)] focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                            onClick={async () => {
                              const payload = {
                                name: selectedProduct.name,
                                releaseDate: selectedProduct.releaseDate,
                                price: src.price,
                                imageSrc: src.src,
                              };

                              const shared = await shareItemImage(payload);
                              if (!shared) openWhatsappForItem(payload);
                            }}
                          >
                            Commander
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section
        id="about"
        ref={(node) => {
          aboutRef.current = node;
        }}
        className="scroll-mt-24 pt-24 min-h-screen flex flex-col items-center justify-center px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-6"
        >
          À propos de O'Styl
        </motion.h2>

        <div className="w-full max-w-6xl grid gap-10 md:grid-cols-2 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/30 shadow-[0_25px_70px_rgba(0,0,0,0.55)] max-w-md"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/img/ceo.jpeg"
                alt="DG O'Styl"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
                quality={55}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent" />
            </div>

            <div className="px-5 py-4 border-t border-neutral-800">
              <p className="text-neutral-200 font-semibold">CEO</p>
              <p className="text-neutral-400 text-sm">OUATTARA ALASSANE</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="flex"
          >
            <div className="text-left text-neutral-300 leading-relaxed flex flex-col justify-center">
              <p className="text-neutral-200 font-semibold text-lg mb-4">
                O'Styl, c'est plus qu'un vêtement : c'est une attitude.
              </p>
              <p className="text-neutral-400 mb-4">
                Nous créons des pièces qui mélangent l'élégance et l'énergie du
                streetwear, avec une obsession pour la coupe, la matière et les
                détails. Notre ambition est simple : te donner des tenues
                durables, modernes et faciles à porter au quotidien.
              </p>
              <p className="text-neutral-400 mb-4">
                Derrière chaque collection, il y a une vision : proposer un style
                affirmé, accessible, et pensé pour la Côte d'Ivoire et au-delà.
                Du choix des couleurs à la finition, on veut que chaque pièce
                fasse la différence dès que tu la portes.
              </p>
              <p className="text-neutral-400">
                Notre DG porte cette vision avec exigence et passion : construire
                une marque ivoirienne forte, fière et internationale — sans
                jamais perdre l'authenticité qui fait l'âme de O'Styl.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="commander"
        ref={(node) => {
          commanderRef.current = node;
        }}
        className="scroll-mt-24 pt-24 min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-2xl font-semibold mb-6">Commander</h2>
        <p className="text-neutral-400 mb-6">
          Contactez-nous pour commander votre modèle.
        </p>

        <div className="flex justify-center gap-4">
          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-8 py-4 text-lg font-medium text-white shadow-[0_12px_40px_rgba(34,197,94,0.22)] transition-colors hover:bg-green-600"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Commander sur WhatsApp
          </motion.a>
          <motion.a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center rounded-2xl bg-blue-500 px-8 py-4 text-lg font-medium text-white shadow-[0_12px_40px_rgba(59,130,246,0.20)] transition-colors hover:bg-blue-600"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Appeler
          </motion.a>
        </div>
      </section>

      <footer id="contact" className="text-center text-neutral-500 pb-6 text-sm">
        &copy; {new Date().getFullYear()} O'Styl — Tous droits réservés
      </footer>
    </div>
  );
}
