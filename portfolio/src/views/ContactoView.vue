<script setup>
// Importamos los datos personales de tu archivo central
import { portfolioData } from '../data/portfolio.js'
</script>

<template>
  <section class="animate-fade-in py-8 md:py-12">
    
    <div class="mb-12 flex flex-col items-center text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">¿Hablamos?</h2>
      <p class="text-gray-400 max-w-2xl">
        Estoy disponible para nuevos proyectos y colaboraciones. Aquí tienes todas las formas de contactar conmigo.
      </p>
      <div class="h-[2px] w-32 bg-verde-neon mt-6 shadow-[0_0_10px_#38F205]"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div class="bg-black/40 border border-verde-oscuro p-8 rounded-2xl flex flex-col items-center text-center hover:border-verde-neon transition-all duration-300 hover:-translate-y-2 group">
        <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">📍</div>
        <h3 class="text-verde-claro font-bold uppercase tracking-widest text-sm mb-2">Ubicación</h3>
        <p class="text-white text-lg">{{ portfolioData.personal.location }}</p>
      </div>

      <a :href="'tel:' + portfolioData.personal.phone" class="bg-black/40 border border-verde-oscuro p-8 rounded-2xl flex flex-col items-center text-center hover:border-verde-neon transition-all duration-300 hover:-translate-y-2 group">
        <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">📞</div>
        <h3 class="text-verde-claro font-bold uppercase tracking-widest text-sm mb-2">Teléfono</h3>
        <p class="text-white text-lg">{{ portfolioData.personal.phone }}</p>
      </a>

      <a :href="'mailto:' + portfolioData.personal.email" class="bg-black/40 border border-verde-oscuro p-8 rounded-2xl flex flex-col items-center text-center hover:border-verde-neon transition-all duration-300 hover:-translate-y-2 group">
        <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">✉️</div>
        <h3 class="text-verde-claro font-bold uppercase tracking-widest text-sm mb-2">Email</h3>
        <p class="text-white text-lg break-all">{{ portfolioData.personal.email }}</p>
      </a>

      <a :href="portfolioData.personal.linkedin" target="_blank" class="bg-black/40 border border-verde-oscuro p-8 rounded-2xl flex flex-col items-center text-center hover:border-verde-neon transition-all duration-300 hover:-translate-y-2 group">
        <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">🔗</div>
        <h3 class="text-verde-claro font-bold uppercase tracking-widest text-sm mb-2">LinkedIn</h3>
        <p class="text-white text-lg italic">Ver perfil profesional</p>
      </a>

      <a :href="portfolioData.personal.github" target="_blank" class="bg-black/40 border border-verde-oscuro p-8 rounded-2xl flex flex-col items-center text-center hover:border-verde-neon transition-all duration-300 hover:-translate-y-2 group">
        <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
        <h3 class="text-verde-claro font-bold uppercase tracking-widest text-sm mb-2">GitHub</h3>
        <p class="text-white text-lg italic">Explorar mi código</p>
      </a>

    </div>
  </section>
</template>