'use client';

import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModelVideoCard } from "@/components/ModelVideoCard";

export default function Home() {
  const scrollToModels = () => {
    const section = document.getElementById("modelos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Relojes de lujo Superclone | Manuel Vera</title>
        <meta
          name="description"
          content="Relojes de alta gama tipo superclone disponibles en Caracas. Calidad premium, apariencia original. Contacta a Manuel Vera para adquirir tu modelo exclusivo."
        />
        <meta property="og:title" content="Relojes Superclone de Lujo - Manuel Vera" />
        <meta property="og:description" content="Compra tu reloj de lujo tipo superclone con apariencia original, calidad premium y entrega en Caracas." />
        <meta property="og:image" content="/og-watch.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-black text-white font-sans">
        {/* Hero */}
        <section
          className="h-screen flex flex-col items-center justify-center text-center px-4 bg-black relative overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-75 z-0"
          >
            <source src="/luxury-bg.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10">
            <h1 className="text-[56px] leading-[56px] font-sans">
              El lujo que mereces, sin pagar el precio.
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 mb-6">
              Relojes superclone de la más alta calidad. Diseñados para impresionar. Fabricados para durar.
            </p>
            <Button
              variant="white"
              onClick={scrollToModels}
              className="hover:bg-gray-200 transition duration-300"
            >
              Ver colección
            </Button>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-20 px-6 bg-zinc-900 text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Por qué elegir a Manuel Vera?</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            El lujo no debería costar una fortuna. Nuestros relojes superclones combinan presencia, calidad y confianza.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image src="/icon-lock.svg" alt="Seguridad" width={48} height={48} className="mx-auto mb-4" />
              <p className="text-white">Seguridad: Usa tu reloj sin miedo a robos.</p>
            </div>
            <div>
              <Image src="/icon-quality.svg" alt="Calidad" width={48} height={48} className="mx-auto mb-4" />
              <p className="text-white">Calidad premium: Detalles idénticos a los originales.</p>
            </div>
            <div>
              <Image src="/icon-style.svg" alt="Estilo" width={48} height={48} className="mx-auto mb-4" />
              <p className="text-white">Estilo sin límites: Impecable apariencia por menos.</p>
            </div>
          </div>
        </section>

        {/* Modelos destacados */}
        <section id="modelos" className="py-20 px-6 bg-black text-center">
          <h2 className="text-3xl font-semibold mb-10">Modelos más deseados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ModelVideoCard
              title="Rolex Submariner"
              thumbnail="/thumbnails/rolex-submariner.jpg"
              videoSrc="/videos/rolex-submariner.webm"
            />
            <ModelVideoCard
              title="Patek Philippe Nautilus"
              thumbnail="/thumbnails/patek-nautilus.jpg"
              videoSrc="/videos/patek-nautilus.webm"
            />
            {/* Puedes seguir agregando más aquí */}
          </div>
        </section>

        {/* Formulario de modelos solicitados */}
        <section className="py-20 px-6 bg-zinc-900 text-center">
          <h2 className="text-3xl font-semibold mb-4">¿No ves tu modelo?</h2>
          <p className="text-lg text-gray-400 mb-6 max-w-xl mx-auto">
            Cuéntanos cuál reloj deseas. Nos ayuda a ampliar la colección y priorizar los más solicitados.
          </p>

          <form
            action="https://formsubmit.co/tuemail@correo.com"
            method="POST"
            className="max-w-md mx-auto grid gap-4"
          >
            <input
              type="text"
              name="modelo"
              required
              placeholder="Modelo de reloj (ej: AP Code 11.59)"
              className="px-4 py-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              name="contacto"
              placeholder="Tu WhatsApp o email (opcional)"
              className="px-4 py-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {/* Seguridad extra de formsubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://mv-superclones.vercel.app/thank-you" />

            <button
              type="submit"
              className="bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition"
            >
              Enviar modelo
            </button>
          </form>
        </section>


        {/* Comparativa */}
        <section className="py-20 px-6 bg-zinc-900 text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Original o Superclone?</h2>
          <p className="text-lg text-gray-400 mb-6 max-w-xl mx-auto">
            Nadie lo notará. Solo tú sabrás cuánto ahorraste.
          </p>
          <Image src="/comparison.jpg" alt="Comparación" width={900} height={500} className="mx-auto rounded-xl" />
        </section>

        {/* Contacto */}
        <section className="py-20 px-6 bg-black text-center">
          <h2 className="text-3xl font-semibold mb-4">Haz tu pedido hoy</h2>
          <p className="text-lg text-gray-400 mb-6 max-w-xl mx-auto">
            Entregas personales en Caracas. Envíos a toda Venezuela. Aceptamos USDT, Zelle, Pago Móvil, Efectivo.
          </p>
          <a
            href="https://wa.me/584141333305?text=Hola%20Manuel%2C%20quiero%20consultar%20por%20tu%20colecci%C3%B3n%20de%20relojes%20superclones."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-white bg-green-600 hover:bg-green-700 transition duration-300">
              Contactar por WhatsApp
            </Button>
          </a>
        </section>

        {/* Footer */}
        <footer className="bg-zinc-950 text-gray-500 text-center py-6 text-sm">
          © 2025 Manuel Vera. Todos los derechos reservados.
        </footer>
      </main>
    </>
  );
}
