<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolio.js'

// --- LÓGICA DEL MODAL PARA IMÁGENES ---
const isModalOpen = ref(false)
const modalImage = ref('')

const openModal = (imageUrl) => {
  modalImage.value = imageUrl
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => { modalImage.value = '' }, 300)
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <section class="animate-fade-in py-8 md:py-12 relative">
    
    <div class="mb-10 flex items-center gap-4">
      <h2 class="text-3xl md:text-4xl font-bold text-white">Mi <span class="text-verde-neon">Portfolio</span></h2>
      <div class="h-[2px] flex-grow bg-gradient-to-r from-verde-base to-transparent text-white"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <article 
        v-for="(project, index) in portfolioData.projects" 
        :key="index"
        class="bg-black/40 border border-verde-oscuro rounded-xl overflow-hidden hover:border-verde-base transition-all duration-300 hover:shadow-[0_0_20px_rgba(33,140,3,0.25)] flex flex-col group relative"
      >
        <div class="absolute top-4 right-4 z-10">
          <span 
            :class="project.state === 'Finalizado' 
              ? 'border-verde-neon text-verde-neon bg-black/60 shadow-[0_0_10px_rgba(56,242,5,0.3)]' 
              : 'border-verde-base text-verde-base bg-black/60 opacity-80'"
            class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border rounded-full backdrop-blur-md transition-all duration-300"
          >
            {{ project.state }}
          </span>
        </div>

        <div 
          class="relative h-56 w-full overflow-hidden cursor-pointer"
          @click="openModal(project.image)"
        >
          <img 
            :src="project.image" 
            :alt="'Captura de ' + project.title" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          >
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span class="text-white border border-verde-neon px-4 py-2 rounded-md bg-black/60 backdrop-blur-sm shadow-[0_0_10px_#38F205]">
              Ampliar Imagen 🔍
            </span>
          </div>
        </div>

        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-2xl font-bold text-verde-claro mb-3 group-hover:text-verde-neon transition-colors">
            {{ project.title }}
          </h3>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="tech in project.stack" 
              :key="tech"
              class="text-xs font-mono font-semibold px-2.5 py-1 bg-verde-oscuro/40 text-verde-base border border-verde-oscuro rounded-md"
            >
              {{ tech }}
            </span>
          </div>

          <p class="text-gray-300 text-sm leading-relaxed flex-grow mb-6">
            {{ project.description }}
          </p>

          <div class="flex gap-4 mt-auto pt-4 border-t border-verde-oscuro/50">
            <a 
              v-if="project.demoUrl && project.demoUrl !== '#'" 
              :href="project.demoUrl" 
              target="_blank" 
              class="flex-1 text-center bg-verde-claro text-black font-bold py-2 rounded-md hover:bg-verde-neon hover:shadow-[0_0_10px_rgba(56,242,5,0.6)] transition-all"
            >
              Ver Web
            </a>
            <a 
              v-if="project.repoUrl" 
              :href="project.repoUrl" 
              target="_blank" 
              class="flex-1 text-center border border-verde-base text-white font-bold py-2 rounded-md hover:bg-verde-oscuro/60 transition-all"
            >
              Código (GitHub)
            </a>
          </div>
        </div>
      </article>

    </div>

    <transition name="fade">
      <div 
        v-if="isModalOpen" 
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        @click.self="closeModal" 
      >
        <button @click="closeModal" class="absolute top-6 right-6 text-white hover:text-verde-neon text-4xl font-bold z-[101]">&times;</button>
        <img :src="modalImage" class="max-w-full max-h-full rounded-lg border border-verde-oscuro shadow-[0_0_30px_rgba(33,140,3,0.4)]">
      </div>
    </transition>

  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>