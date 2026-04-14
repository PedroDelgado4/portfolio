<script setup>
// Importamos tu objeto de datos centralizado
import { portfolioData } from '../data/portfolio.js'
</script>

<template>
  <section class="animate-fade-in py-8 md:py-12">
    
    <div class="mb-10 flex items-center gap-4">
      <h2 class="text-3xl md:text-4xl font-bold text-white">Mi <span class="text-verde-neon">Educación</span></h2>
      <div class="h-[2px] flex-grow bg-gradient-to-r from-verde-base to-transparent text-white"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <article 
        v-for="(item, index) in portfolioData.education" 
        :key="index"
        class="bg-black/40 border border-verde-oscuro rounded-lg p-6 hover:border-verde-base hover:bg-black/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(33,140,3,0.2)] hover:-translate-y-1 group"
      >
        <h3 class="text-xl font-bold text-verde-claro mb-1 group-hover:text-verde-neon transition-colors">
          {{ item.title }}
        </h3>
        
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-400 mb-4 pb-4 border-b border-verde-oscuro/50">
          <span class="font-medium text-white">{{ item.institution }}</span>
          <span class="text-verde-base font-mono mt-1 sm:mt-0">{{ item.date }}</span>
        </div>
        
        <p v-if="item.description" class="text-gray-300 text-sm leading-relaxed mb-4">
          {{ item.description }}
        </p>

        <ul v-if="item.items && item.items.length > 0" class="space-y-2 mt-4">
          <li v-for="(listItem, itemIndex) in item.items" :key="itemIndex" class="flex items-center text-gray-300 text-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-verde-neon mr-3 shadow-[0_0_8px_#38F205] flex-shrink-0"></span>
            <span>{{ listItem }}</span>
          </li>
        </ul>

      </article>

    </div>
  </section>
</template>