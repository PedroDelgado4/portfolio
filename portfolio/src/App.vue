<template>
  <div class="min-h-screen bg-fondo-oscuro text-white font-sans selection:bg-verde-neon selection:text-black">
    
    <header class="border-b border-verde-oscuro bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <div class="flex items-center gap-3 flex-shrink-0">
          
          <router-link to="/">
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
      </nav>
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
/* Clases personalizadas solo para este componente (animación de transición entre páginas) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>