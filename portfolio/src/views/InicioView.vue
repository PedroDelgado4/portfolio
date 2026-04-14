<script setup>
// Importamos tu "base de datos" local
import { portfolioData } from '../data/portfolio.js'
</script>

<template>
  <section class="flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-24 animate-fade-in">
    
    <div class="relative w-56 h-56 md:w-72 md:h-72 flex-shrink-0 group">
      <div class="absolute inset-0 rounded-full bg-verde-neon blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
      <img
        :src="portfolioData.personal.photo"
        alt="Foto de perfil de Pedro"
        class="relative w-full h-full object-cover rounded-full border-4 border-verde-oscuro shadow-[0_0_20px_rgba(44,191,4,0.3)] transition-transform duration-500 group-hover:scale-105 group-hover:border-verde-base"
      />
    </div>

    <div class="flex-col space-y-6 text-center md:text-left flex-grow">
      
      <div>
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
          Hola, soy <span class="text-verde-neon">{{ portfolioData.personal.name }}</span>
        </h1>
        <h2 class="text-xl md:text-2xl text-verde-claro font-medium">
          {{ portfolioData.personal.role }}
        </h2>
      </div>

      <p class="text-gray-300 text-lg leading-relaxed max-w-3xl">
        {{ portfolioData.personal.about }}
      </p>

      <div class="pt-4">
        <h3 class="text-sm font-semibold text-verde-base uppercase tracking-widest mb-3">Stack Tecnológico</h3>
        <div class="flex flex-wrap justify-center md:justify-start gap-2">
          <span
            v-for="skill in portfolioData.skills"
            :key="skill"
            class="px-4 py-1.5 bg-black/40 border border-verde-oscuro text-verde-claro rounded-md text-sm font-medium transition-all hover:bg-verde-base hover:text-white hover:border-verde-neon hover:shadow-[0_0_10px_rgba(56,242,5,0.4)] cursor-default"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div class="flex justify-center md:justify-start pt-8">
        <router-link
          to="/contacto"
          class="group relative px-12 py-4 bg-verde-claro text-black font-bold text-xl rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,242,5,0.6)]"
        >
          <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          ¡Contáctame!
        </router-link>
      </div>

    </div>
  </section>
</template>