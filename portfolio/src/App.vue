<script setup>
import { ref } from 'vue'

// Variable reactiva para controlar si el menú móvil está abierto o no
const isMenuOpen = ref(false)

// Función para alternar el menú (abrir/cerrar)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Función para cerrar el menú (útil cuando hacemos clic en un enlace)
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-fondo-oscuro text-white font-sans selection:bg-verde-neon selection:text-black">
    
    <header class="border-b border-verde-oscuro bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative">
        
        <div class="flex items-center gap-3 flex-shrink-0">
          <router-link to="/" @click="closeMenu">
            <img 
              src="/logo.png" 
              alt="Logo Pedro Delgado" 
              class="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(56,242,5,0.4)] transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(56,242,5,0.8)]" 
            />
          </router-link>
          <div class="text-xl font-bold tracking-tighter">
            <span class="text-white">Pedro</span><span class="text-verde-neon">Delgado</span>
          </div>
        </div>

        <ul class="hidden md:flex space-x-8 text-sm font-medium">
          <li><router-link to="/" class="hover:text-verde-neon transition-colors duration-300">Inicio</router-link></li>
          <li><router-link to="/educacion" class="hover:text-verde-neon transition-colors duration-300">Educación</router-link></li>
          <li><router-link to="/experiencia" class="hover:text-verde-neon transition-colors duration-300">Experiencia</router-link></li>
          <li><router-link to="/portfolio" class="hover:text-verde-neon transition-colors duration-300">Portfolio</router-link></li>
          <li><router-link to="/contacto" class="hover:text-verde-neon transition-colors duration-300">Contacto</router-link></li>
        </ul>

        <button @click="toggleMenu" class="md:hidden text-verde-claro hover:text-verde-neon focus:outline-none z-50">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </nav>

      <transition name="slide-fade">
        <div v-if="isMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-verde-oscuro backdrop-blur-lg shadow-[0_10px_30px_rgba(15,64,1,0.5)]">
          <ul class="flex flex-col px-6 py-4 space-y-4 text-center text-lg font-medium">
            <li><router-link to="/" @click="closeMenu" class="block py-2 hover:text-verde-neon transition-colors">Inicio</router-link></li>
            <li><router-link to="/educacion" @click="closeMenu" class="block py-2 hover:text-verde-neon transition-colors">Educación</router-link></li>
            <li><router-link to="/experiencia" @click="closeMenu" class="block py-2 hover:text-verde-neon transition-colors">Experiencia</router-link></li>
            <li><router-link to="/portfolio" @click="closeMenu" class="block py-2 hover:text-verde-neon transition-colors">Portfolio</router-link></li>
            <li><router-link to="/contacto" @click="closeMenu" class="block py-2 hover:text-verde-neon transition-colors">Contacto</router-link></li>
          </ul>
        </div>
      </transition>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

  </div>
</template>

<style scoped>
/* Transición entre páginas (La que ya teníamos) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* NUEVA: Animación de deslizamiento suave para el menú móvil */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>