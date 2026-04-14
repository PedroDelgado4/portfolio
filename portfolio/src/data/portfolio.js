export const portfolioData = {
    personal: {
        name: "Pedro Delgado",
        role: "Full Stack Developer",
        location: "Sevilla, España",
        phone: "+34 675348162",
        photo: "/perfil.png",
        about: "Soy un desarrollador apasionado por crear soluciones atractivas y eficientes, poniendo atención en cada detalle para darle siempre al usuario la mejor experiencia posible. Esta web está creada y lanzada por mí a modo de CV, usando Vue.js y Tailwind CSS.",
        email: "fpedrodelgadoduran@gmail.com",
        linkedin: "https://www.linkedin.com/in/pedro-delgado-duran/",
        github: "https://github.com/PedroDelgado4"
    },
    skills:[
        "Python", "Tkinter", "Flask", "SQLite", "Machine Learning", "Vue.js", "React.js", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Git"
    ],
    education: [
        {
            title: "Curso programación FRONTEND",
            institution: "Tokio School",
            date: "2022 - 2025",
            description: "Programación Front-End para el desarrollo de aplicaciones web.",
            items: [
                "HTML5",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "React.js"                
            ]
        },
        {
            title: "Curso programación con Python",
            institution: "Tokio School",
            date: "2024 - 2026",
            description: "Desarrollo de aplicaciones de escritorio, integración con web y bases de datos con Python.",
            items: [
                "Programación orientada a objetos",
                "Desarrollo de aplicaciones web y escritorio",
                "SQLite",
                "Tkinter",
                "Flask"
            ]
        },
        {
            title: "Especialización en Inteligencia Artificial",
            institution: "Tokio School",
            date: "2025 - 2026",
            description: "Ciencia de datos aplicada a Inteligencia Artificial",
            items: [
                "Integración de soluciones de IA en aplicaciones",
                "Análisis de datos con Pandas y Matplotlib",
                "Machine Learning",
                "Kaggle"
            ]
        },
        {
            title: "Programación de videojuegos con C# en UNITY3D",
            institution: "Escuela de Organización Industrial (EOI)",
            date: "2017 - 2019",
            description: "Desarrollo de videojuegos multiplataforma con UNITY3D",
            items: [
                "Programación orientada a objetos",
                "Control de escenas",
                "Interfaz de usuario",
                "Scripting",
                "Animaciones"
            ]
        },
        {
            title: "Técnico en Instalaciones de Telecomunicaciones",
            institution: "ADA ITS Sevilla", 
            date: "2015 - 2017",
            description: "Montaje y mantenimiento de infraestructuras de telecomunicación en edificios, redes de banda ancha y sistemas domóticos.",
            items: [
                "Infraestructuras Comunes de Telecomunicaciones (ICT)",
                "Despliegue de fibra óptica y redes de área local",
                "Configuración de sistemas domóticos y automatización",
                "Instalación de circuitos cerrados de televisión (CCTV) y seguridad contra incendios",
                "Sistemas de telefonía y radiocomunicaciones",
                "Equipos de sonorización y megafonía"
            ]
        },
        {
            title: "Técnico en Sistemas Microinformáticos y Redes",
            institution: "ADA ITS Sevilla",
            date: "2012 - 2015",
            description: "Instalación, configuración y mantenimiento de sistemas microinformáticos, redes locales y servicios en red.",
            items: [
                "Montaje y mantenimiento de equipos (Hardware)",
                "Sistemas operativos monopuesto y en red (Windows Server / Linux)",
                "Despliegue y configuración de redes locales (LAN)",
                "Seguridad informática y gestión de copias de respaldo",
                "Implementación de servicios de red (DNS, DHCP, FTP, Web)",
                "Instalación de aplicaciones web y ofimáticas"
            ]
        }
    ],
    experience: [
        {
            title: "Desarrollador de Software Python",
            company: "TSS Ciberseguridad",
            date: "2026 - Actualidad",
            description: "Desarrollo de software para la gestión de clientes (CRM).",
            items: [
                "Gestión de clientes, oportunidades, productos, interacciones, etc.",
                "Análisis de gastos/ingresos con IA para predicciones",
                "CustomTkinter",
                "SQL",
                "Machine Learning"
            ]
        },
        {
            title: "Servicio de asistencia técnica",
            company: "Esoj Sistemas",
            date: "2022 - 2025",
            description: "Resolución de incidencias técnicas y mantenimiento de la infraestructura informática de la oficina y clientes.",
            items: [
                "Mantenimiento de hardware y sistemas microinformáticos",
                "Soporte técnico de equipos de impresión",
                "Atención y soporte directo a clientes in situ y remoto"
            ]
        },
        {
            title: "Desarrollador de videojuegos con C# en UNITY3D",
            company: "Nullware Soft",
            date: "2019 - 2021",
            description: "Desarrollo de videojuegos para PC y Android",
            items: [
                "Scripting",
                "Interfaz de Usuario",
                "Inteligencia artificial (NPCs)",
                "Animaciones",
                "Control de escenas"
            ]
        },
        {
            title: "Instalador de sistemas contra incendios",
            company: "Mogasur SL",
            date: "2017 - 2018",
            description: "Instalación y mantenimiento de sistemas contra incendios",
            items: [
                "Sistemas electricos contra incendios",
                "Extintores",
                "Fontanería contra incendios"
            ]
        },
        {
            title: "Tester de equipos de seguridad electrónica",
            company: "UTC Fire & Security",
            date: "2017",
            description: "Pruebas de nuevos equipos de seguridad electrónica en desarrollo",
            items: [
                "Validación de funciones",
                "Detección de errores y verificación de calidad",
                "Documentación técnica y procedimientos de test"
            ]
        }
        
    ],

    projects: [
        {
            title: "Finance Tracker",
            state: "Finalizado",
            stack: ["Vue.js", "Pinia", "Tailwind CSS", "Chart.js"],
            description: "Apliación FrontEnd SPA de un gestor de finanzas personales con Vue3. Permite al usuario controlar sus ingresos y gastos y ver sus movimientos de los últimos 30 días en forma de gráfica, de forma persistente mediante LocalStorage. Incluye cambio de idioma (Inglés y Español) y opción de modo oscuro.",
            image: "/finanzas.PNG", 
            demoUrl: "https://finanzas-app-dusky.vercel.app",
            repoUrl: "https://github.com/PedroDelgado4/finanzas-app"
        },
        {
            title: "EduStore",
            state: "Finalizado",
            stack: ["Vue.js", "Pinia", "Tailwind CSS"],
            description: "Apliación FrontEnd SPA de un comercio electrónico (ecommerce) hecha con Vue3, usando Pinia para gestión de estados y Tailwind CSS. Incluye filtrado en tiempo real, carrito persistente via LocalStorage y animaciones fluidas aprovechando Tailwind.",
            image: "/ecommerce.PNG", 
            demoUrl: "https://ecommerce-ochre-pi-83.vercel.app",
            repoUrl: "https://github.com/PedroDelgado4/ecommerce"
        },
        {
            title: "ShieldText",
            state: "Finalizado",
            stack: ["Python", "Flask", "Pandas", "Stickit-Learn", "React.js", "Vite", "Axios"],
            description: "Aplicación FullStack de detección de estafas por SMS usando Machine Learning. El modelo ha sido entrenado con un dataset de cientos de mensajes reales para distinguir entre seguro o inseguro (spam). (NOTA): Aun que se puede acceder al frontend de la aplicación, actualmente no funcionará ya que la base de datos de render ha expirado. Puedes descargar el código y probarlo localmente en el enlace a GitHub.",
            image: "/shieldtext.PNG", 
            demoUrl: "https://shieldtext.vercel.app",
            repoUrl: "https://github.com/PedroDelgado4/shieldtext"
        },
        {
            title: "FocusBoard",
            state: "Finalizado",
            stack: ["Python", "Flask", "SQLite", "PostgreSQL", "React.js", "Vite"],
            description: "Aplicación FullStack de gestión de tareas. Registro y Login de usuarios. Tareas individuales de cada usuario. Persistencia en base de datos. (NOTA): Aun que se puede acceder al frontend de la aplicación, actualmente no funcionará ya que la base de datos de render ha expirado. Puedes descargar el código y probarlo localmente en el enlace a GitHub.",
            image: "/focusboard.PNG", 
            demoUrl: "https://focusboard-fullstack.vercel.app",
            repoUrl: "https://github.com/PedroDelgado4/focusboard-fullstack"
        },
        {
            title: "PythonFlix",
            state: "Finalizado",
            stack: ["Python", "Flask", "SQLite", "HTML5", "CSS"],
            description: "Proyecto de web estilo Netflix con sistema CRUD para usuarios y catálogo, gráficas de horas de visionado y sistema de Favoritos y Visto para cada usuario. (NOTA): La aplicación no está subida a producción. Puedes descargar el código y probarlo localmente en el enlace a GitHub.",
            image: "/pythonflix.PNG", 
            demoUrl: "",
            repoUrl: "https://github.com/PedroDelgado4/pythonflix-flask"
        }
        
        
    ]
}