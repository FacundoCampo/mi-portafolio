import { useState } from 'react';

function ProyectosPersonales() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'sudoku-master',
      title: 'Sudoku Master',
      subtitle: 'Aplicación móvil Android',
      year: '2024 - 2025',
      status: 'En desarrollo - Próximo lanzamiento',
      shortDescription: 'Juego de Sudoku nativo para Android con generación inteligente de puzzles, múltiples niveles de dificultad, sistema de pistas y estadísticas detalladas.',
      technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Hilt', 'Material 3'],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 'vetconnect-pro',
      title: 'VetConnect Pro',
      subtitle: 'Plataforma de Telemedicina Veterinaria',
      year: '2024 - 2025',
      status: 'Backend 100% - Frontend 75%',
      shortDescription: 'Plataforma integral que conecta dueños de mascotas con veterinarios mediante videoconsultas WebRTC, sistema de pagos con escrow, historia clínica digital y gestión administrativa avanzada.',
      technologies: ['TypeScript', 'React', 'PostgreSQL', 'WebRTC', 'Redis'],
      gradient: 'from-green-600 to-teal-600'
    }
  ];

  if (selectedProject === 'sudoku-master') {
    return <SudokuMasterDetail onBack={() => setSelectedProject(null)} />;
  }

  if (selectedProject === 'vetconnect-pro') {
    return <VetConnectProDetail onBack={() => setSelectedProject(null)} />;
  }

  return (
    <section id="proyectos-personales" className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Proyectos Personales
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Proyectos desarrollados por iniciativa propia
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-2">{project.subtitle}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-green-400 text-sm">{project.status}</span>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-700/50 text-gray-400 px-2 py-1 rounded">
                      +{project.technologies.length - 3} más
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => setSelectedProject(project.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Ver detalles completos →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente de detalle VetConnect Pro
function VetConnectProDetail({ onBack }) {
  return (
    <section className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-5xl mx-auto py-16">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a Proyectos Personales
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">VetConnect Pro</h1>
          <p className="text-green-100 text-lg mb-4">Plataforma de Telemedicina Veterinaria Full-Stack</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 text-white px-3 py-1 rounded">2024 - 2025</span>
            <span className="bg-green-500/20 text-green-100 px-3 py-1 rounded flex items-center gap-2">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
              Backend 100% - Frontend 75% - Listo para fase beta
            </span>
          </div>
        </div>

        {/* Funcionalidad */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué hace la aplicación?</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            VetConnect Pro es una plataforma integral de telemedicina veterinaria que conecta dueños de mascotas 
            con veterinarios profesionales a través de videoconsultas en tiempo real, incluyendo sistema de pagos 
            con escrow, historia clínica digital completa y gestión administrativa avanzada.
          </p>
          
          <h3 className="text-xl font-semibold text-white mb-3">Problemas que resuelve</h3>
          <ul className="space-y-2 text-gray-300 mb-6">
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <strong>Acceso limitado:</strong> Elimina barreras geográficas para consultas veterinarias especializadas
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <strong>Urgencias fuera de horario:</strong> Permite atención veterinaria 24/7 sin desplazamiento
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <strong>Trazabilidad médica:</strong> Centraliza la historia clínica de mascotas en un solo lugar
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <strong>Confianza en pagos:</strong> Sistema de escrow que protege tanto a veterinarios como a clientes
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <strong>Gestión ineficiente:</strong> Automatiza disponibilidad, reservas y seguimiento de consultas
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3">Características principales</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-white mb-1">Sistema Híbrido de Disponibilidad Inteligente</h4>
              <p className="text-gray-300 text-sm">
                Configuración de horarios base semanales + excepciones específicas. Bloqueo temporal de slots 
                (5 minutos) durante reservas usando Redis. Evita doble reserva y manejo 24/7 para emergencias.
              </p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="font-semibold text-white mb-1">Sistema de Pagos con Escrow Automático</h4>
              <p className="text-gray-300 text-sm">
                Integración con MercadoPago. Retención automática hasta confirmación. Liberación 24-48h 
                post-consulta. Protección bilateral con sistema de disputas.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-white mb-1">Historia Clínica Digital Completa</h4>
              <p className="text-gray-300 text-sm">
                Registros médicos obligatorios post-consulta. Validación bilateral (veterinario + dueño). 
                Plantillas personalizables. Trazabilidad completa de tratamientos.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-white mb-1">Videoconsultas WebRTC en Tiempo Real</h4>
              <p className="text-gray-300 text-sm">
                Señalización con Socket.IO. Rooms dinámicas seguras por cita. Chat integrado. 
                Compartir pantalla para radiografías. Indicadores de calidad de conexión.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-white mb-1">Panel Administrativo Robusto</h4>
              <p className="text-gray-300 text-sm">
                Dashboard con métricas en tiempo real. Moderación de reseñas. Gestión de verificación. 
                Reportes financieros y de uso.
              </p>
            </div>
          </div>
        </div>

        {/* Stack técnico */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Stack Técnico Completo</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Backend</h3>
              <div className="space-y-2">
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">TypeScript + Express.js 4.18.2</p>
                  <p className="text-gray-400 text-sm">Framework web principal</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Prisma 5.2.0</p>
                  <p className="text-gray-400 text-sm">ORM con type-safety completo</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Socket.IO 4.7.5</p>
                  <p className="text-gray-400 text-sm">WebRTC signaling y tiempo real</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Frontend</h3>
              <div className="space-y-2">
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">React 18 + TypeScript</p>
                  <p className="text-gray-400 text-sm">UI library con tipado fuerte</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Redux Toolkit</p>
                  <p className="text-gray-400 text-sm">Estado global</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Tailwind CSS</p>
                  <p className="text-gray-400 text-sm">Estilos utility-first</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Base de Datos</h3>
              <div className="space-y-2">
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">PostgreSQL (Supabase)</p>
                  <p className="text-gray-400 text-sm">20+ tablas con triggers y RLS</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Redis (Upstash)</p>
                  <p className="text-gray-400 text-sm">Caché y bloqueos temporales</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Servicios Externos</h3>
              <div className="space-y-2">
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">MercadoPago</p>
                  <p className="text-gray-400 text-sm">Pasarela de pagos</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">WebRTC</p>
                  <p className="text-gray-400 text-sm">Videollamadas P2P</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-3">Librerías adicionales</h3>
            <div className="flex flex-wrap gap-2">
              {['ioredis', 'jsonwebtoken', 'bcryptjs', 'winston', 'Joi', 'React Router', 
                'React Hook Form', 'Axios', 'Helmet', 'CORS'].map((lib, index) => (
                <span key={index} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded text-sm">
                  {lib}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Arquitectura */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Arquitectura del Sistema</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Estructura Monorepo</h3>
            <div className="bg-gray-900/50 rounded p-4 font-mono text-sm text-gray-300">
              vetconnect-pro/<br/>
              ├── backend/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# API REST + WebSocket<br/>
              ├── frontend/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# SPA React<br/>
              ├── shared/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Tipos compartidos<br/>
              └── docs/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Documentación
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-700/30 rounded p-4">
              <h4 className="text-white font-semibold mb-2">Backend - Layered Architecture</h4>
              <p className="text-sm text-gray-300 mb-2">Routes → Controllers → Services → Database</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Middleware Chain (Auth, Validation, Logging)</li>
                <li>• Repository Pattern con Prisma</li>
                <li>• Service Layer para lógica de negocio</li>
              </ul>
            </div>

            <div className="bg-gray-700/30 rounded p-4">
              <h4 className="text-white font-semibold mb-2">Frontend - Component-Based</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Componentes reutilizables</li>
                <li>• Redux slices modulares</li>
                <li>• Custom hooks compartidos</li>
                <li>• Protected routes por rol</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Patrones de Diseño Implementados</h4>
            <div className="flex flex-wrap gap-2">
              {['Repository Pattern', 'Service Layer', 'Middleware Chain', 'Factory Pattern', 
                'Singleton', 'Observer Pattern', 'Strategy Pattern'].map((pattern, index) => (
                <span key={index} className="bg-green-900/30 text-green-300 px-3 py-1 rounded text-sm">
                  {pattern}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Desafíos técnicos */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Desafíos Técnicos Resueltos</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Sistema Híbrido de Disponibilidad Eficiente
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-white">Problema:</strong> Almacenar millones de slots individuales 
                generaría tablas masivas e ineficientes.
              </p>
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Solución:</strong> Horarios base semanales + excepciones específicas. 
                Generación on-the-fly al consultar. <strong className="text-green-400">Impacto: Reducción del 
                99.9% en registros de BD, queries 10x más rápidas.</strong>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Bloqueo Temporal de Slots con Redis
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-white">Problema:</strong> Múltiples usuarios reservando el mismo horario 
                simultáneamente.
              </p>
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Solución:</strong> Lock de 5 minutos en Redis con auto-expiración. 
                Validación doble Redis + PostgreSQL. <strong className="text-green-400">Impacto: 0% de doble 
                reserva, experiencia fluida.</strong>
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Sistema de Escrow Automático
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-white">Problema:</strong> Proteger pagos entre veterinarios y clientes sin 
                intervención manual.
              </p>
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Solución:</strong> Retención automática + cron job de validaciones 
                bilaterales + liberación 24-48h + sistema de disputas. <strong className="text-green-400">Impacto: 
                100% de transacciones seguras, confianza bilateral.</strong>
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Validación Post-Consulta Bilateral
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-white">Problema:</strong> Asegurar que ambas partes confirmen que la 
                consulta se realizó.
              </p>
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Solución:</strong> Tabla con validaciones separadas + trigger 
                automático + historia clínica obligatoria + liberación condicionada de escrow. 
                <strong className="text-green-400">Impacto: Trazabilidad completa, prevención de fraudes.</strong>
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                WebRTC Signaling con Socket.IO
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-white">Problema:</strong> Establecer conexiones peer-to-peer seguras para 
                videollamadas.
              </p>
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Solución:</strong> Servidor de señalización personalizado + 
                autenticación JWT en sockets + rooms dinámicas + manejo de eventos + chat integrado. 
                <strong className="text-green-400">Impacto: Videollamadas estables con latencia &lt;100ms.</strong>
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Historia Clínica Digital Integrada
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-white">Problema:</strong> Mantener registros médicos completos y accesibles.
              </p>
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Solución:</strong> Templates personalizables + campos estructurados + 
                relaciones completas + acceso controlado por roles + dashboard de estadísticas. 
                <strong className="text-green-400">Impacto: Continuidad de cuidado, trazabilidad médica completa.</strong>
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Migración Sin Pérdida de Datos
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-white">Problema:</strong> Transicionar del sistema legacy al híbrido sin 
                romper funcionalidad.
              </p>
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Solución:</strong> Script SQL de migración + retrocompatibilidad 
                temporal + nuevas APIs compatibles con ambos sistemas + validación de integridad + rollback plan. 
                <strong className="text-green-400">Impacto: 0% de downtime, migración exitosa del 100% de datos.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Métricas del proyecto */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Métricas del Proyecto</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Código</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong className="text-white">10,000+</strong> líneas de TypeScript</li>
                <li>• <strong className="text-white">28</strong> archivos de backend optimizados</li>
                <li>• <strong className="text-white">15+</strong> componentes React reutilizables</li>
                <li>• <strong className="text-white">50+</strong> endpoints API REST documentados</li>
                <li>• <strong className="text-white">20+</strong> tablas de BD con relaciones complejas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Funcionalidades</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Sistema completo de autenticación (3 roles)</li>
                <li>• 5 dashboards especializados</li>
                <li>• Búsqueda avanzada con filtros</li>
                <li>• Proceso de reserva en 4 pasos</li>
                <li>• Videoconsultas WebRTC en tiempo real</li>
                <li>• Historia clínica digital</li>
                <li>• Sistema de reseñas con moderación</li>
                <li>• Panel admin con métricas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Tecnologías</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong className="text-white">20+</strong> librerías npm backend</li>
                <li>• <strong className="text-white">15+</strong> librerías npm frontend</li>
                <li>• <strong className="text-white">3</strong> servicios externos integrados</li>
                <li>• <strong className="text-white">2</strong> protocolos tiempo real (WebSocket, WebRTC)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Usuarios</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Dueños de mascotas</li>
                <li>• Veterinarios profesionales</li>
                <li>• Administradores de plataforma</li>
                <li>• Clínicas veterinarias (múltiples profesionales)</li>
                <li>• Veterinarias de emergencia 24/7</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Estado del proyecto */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Estado del Proyecto</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-green-400">Backend</h3>
                <span className="text-green-400 font-bold">100%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">8 semanas completadas - Todas las APIs funcionando</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-teal-400">Frontend Web</h3>
                <span className="text-teal-400 font-bold">75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">Semanas 9-11 completadas - Integración exitosa con backend</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-400">App Móvil</h3>
                <span className="text-gray-400 font-bold">Planificado</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gray-500 h-2 rounded-full" style={{width: '0%'}}></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">Estructura definida para React Native - Semanas 14-18</p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 border border-green-700/50 rounded p-4">
              <h4 className="text-green-400 font-semibold mb-2">✅ Completado</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Sistema de autenticación completo</li>
                <li>• Gestión de disponibilidad híbrida</li>
                <li>• Sistema de escrow automático</li>
                <li>• Videoconsultas WebRTC</li>
                <li>• Historia clínica digital</li>
                <li>• Panel administrativo</li>
                <li>• Integración MercadoPago</li>
                <li>• Sistema de reseñas</li>
              </ul>
            </div>

            <div className="bg-orange-900/20 border border-orange-700/50 rounded p-4">
              <h4 className="text-orange-400 font-semibold mb-2">⏳ Pendiente</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Optimizaciones finales de UI</li>
                <li>• Testing end-to-end completo</li>
                <li>• Aplicación móvil (React Native)</li>
                <li>• Deployment a producción</li>
                <li>• Testing de carga</li>
                <li>• Documentación de API</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Aprendizajes */}
        <div className="mt-6 bg-green-900/20 border border-green-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-400 mb-3">Habilidades Demostradas</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <p className="font-medium text-white mb-2">Arquitectura</p>
              <ul className="space-y-1">
                <li>• Sistemas escalables</li>
                <li>• Patrones de diseño</li>
                <li>• Monorepo organizado</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white mb-2">Backend</p>
              <ul className="space-y-1">
                <li>• APIs RESTful robustas</li>
                <li>• ORM avanzado (Prisma)</li>
                <li>• WebSocket/WebRTC</li>
                <li>• Integración de pagos</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white mb-2">Frontend</p>
              <ul className="space-y-1">
                <li>• React + TypeScript</li>
                <li>• Redux Toolkit</li>
                <li>• Routing protegido</li>
                <li>• UI/UX responsive</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white mb-2">Base de Datos</p>
              <ul className="space-y-1">
                <li>• Diseño relacional (20+ tablas)</li>
                <li>• Triggers y stored logic</li>
                <li>• Migraciones seguras</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white mb-2">DevOps</p>
              <ul className="space-y-1">
                <li>• Control de versiones</li>
                <li>• Logging estructurado</li>
                <li>• Testing (Jest)</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white mb-2">Seguridad</p>
              <ul className="space-y-1">
                <li>• JWT stateless</li>
                <li>• Bcrypt hashing</li>
                <li>• Rate limiting</li>
                <li>• Validación exhaustiva</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente de detalle Sudoku Master (mantener el código anterior)
function SudokuMasterDetail({ onBack }) {
  return (
    <section className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-5xl mx-auto py-16">
        {/* Botón volver */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a Proyectos Personales
        </button>

        {/* Header del proyecto */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Sudoku Master</h1>
          <p className="text-blue-100 text-lg mb-4">Aplicación móvil Android nativa</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 text-white px-3 py-1 rounded">2024 - 2025</span>
            <span className="bg-green-500/20 text-green-100 px-3 py-1 rounded flex items-center gap-2">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
              Próximo lanzamiento en Google Play Store
            </span>
          </div>
        </div>

        {/* Resumen de funcionalidad */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué hace la aplicación?</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Sudoku Master es un juego de Sudoku completamente funcional para dispositivos móviles Android 
            que genera puzzles aleatorios con múltiples niveles de dificultad. Ofrece una experiencia de 
            juego completa con sistema de pistas, modo de notas, cronómetro y seguimiento detallado de estadísticas.
          </p>
          
          <h3 className="text-xl font-semibold text-white mb-3">Problema que resuelve</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Proporciona una experiencia de Sudoku nativa y optimizada para Android, con persistencia de datos 
            que permite a los usuarios retomar sus partidas en cualquier momento, mientras mantiene un registro 
            completo de su progreso y estadísticas de juego.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Características principales</h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-gray-300">
              <span className="text-blue-400 text-xl">✓</span>
              <div>
                <span className="font-semibold text-white">Generación inteligente de puzzles:</span> Algoritmo 
                de backtracking que garantiza puzzles únicos con solución válida en 7 niveles de dificultad
              </div>
            </li>
            <li className="flex gap-3 text-gray-300">
              <span className="text-blue-400 text-xl">✓</span>
              <div>
                <span className="font-semibold text-white">Sistema de ayudas:</span> 3 vidas y 2 pistas por 
                partida, con sistema de puntuación que recompensa victorias perfectas
              </div>
            </li>
            <li className="flex gap-3 text-gray-300">
              <span className="text-blue-400 text-xl">✓</span>
              <div>
                <span className="font-semibold text-white">Modo notas avanzado:</span> Los jugadores pueden 
                marcar números candidatos en las celdas antes de confirmar su elección
              </div>
            </li>
            <li className="flex gap-3 text-gray-300">
              <span className="text-blue-400 text-xl">✓</span>
              <div>
                <span className="font-semibold text-white">Persistencia completa:</span> Auto-guardado de 
                partidas en progreso, estadísticas detalladas por dificultad
              </div>
            </li>
            <li className="flex gap-3 text-gray-300">
              <span className="text-blue-400 text-xl">✓</span>
              <div>
                <span className="font-semibold text-white">Experiencia personalizable:</span> 3 temas visuales 
                (Oscuro, Claro, Beige) y diseño responsive
              </div>
            </li>
          </ul>
        </div>

        {/* Stack técnico */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Stack Técnico</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Lenguajes</h3>
              <div className="space-y-2">
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Kotlin 2.0.21</p>
                  <p className="text-gray-400 text-sm">Lenguaje principal</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">JavaScript/React</p>
                  <p className="text-gray-400 text-sm">Versión original (migrada)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Frameworks</h3>
              <div className="space-y-2">
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Jetpack Compose</p>
                  <p className="text-gray-400 text-sm">UI declarativa moderna</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Material 3</p>
                  <p className="text-gray-400 text-sm">Sistema de diseño</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Base de Datos</h3>
              <div className="space-y-2">
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Room 2.6.1</p>
                  <p className="text-gray-400 text-sm">Persistencia local</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">DataStore</p>
                  <p className="text-gray-400 text-sm">Configuraciones</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Arquitectura</h3>
              <div className="space-y-2">
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Clean Architecture</p>
                  <p className="text-gray-400 text-sm">Separación en capas</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">MVVM</p>
                  <p className="text-gray-400 text-sm">Gestión de estados</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Librerías adicionales</h3>
            <div className="flex flex-wrap gap-2">
              {['Hilt/Dagger 2.48', 'Navigation Compose', 'Coroutines', 'StateFlow', 
                'Kotlinx Serialization'].map((lib, index) => (
                <span key={index} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded text-sm">
                  {lib}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Desafíos técnicos */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Desafíos Técnicos Resueltos</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Algoritmo de generación de Sudoku con solución única
              </h3>
              <p className="text-gray-300 text-sm">
                Implementación de backtracking optimizado que genera puzzles válidos con solución 
                garantizada, verificando que cada puzzle tenga exactamente una solución única usando 
                conteo exhaustivo. Optimización con límite de 15,000 intentos manteniendo la generación 
                bajo 2 segundos.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Migración arquitectónica completa React Native → Kotlin nativo
              </h3>
              <p className="text-gray-300 text-sm">
                Proyecto de refactorización masiva del 95% completada: traducción completa de lógica 
                JavaScript a Kotlin, migración de AsyncStorage a Room + DataStore, reescritura de UI 
                de React Components a Jetpack Compose, implementación de Clean Architecture desde cero 
                manteniendo paridad funcional exacta.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Sistema de persistencia multi-capa
              </h3>
              <p className="text-gray-300 text-sm">
                Backup redundante con Room como fuente principal + Preferences como backup. Auto-guardado 
                inteligente que detecta cambios de estado y persiste automáticamente. Serialización compleja 
                con Type Converters personalizados para listas, mapas y estructuras 9x9.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Sistema de temas dinámicos con Jetpack Compose
              </h3>
              <p className="text-gray-300 text-sm">
                Implementación de CompositionLocal para propagación de tema global. Sistema de colores 
                reactivo que cambia toda la UI instantáneamente. 3 temas completos con paletas cuidadosamente 
                diseñadas y persistencia de preferencias entre sesiones.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                UI responsive adaptativa
              </h3>
              <p className="text-gray-300 text-sm">
                Layout que se adapta dinámicamente entre orientación portrait/landscape. Detección de tablets 
                vs teléfonos con ajustes automáticos de tamaño. Sistema de dimensiones responsivas calculadas 
                en tiempo real y layout horizontal especial para modo paisaje.
              </p>
            </div>
          </div>
        </div>

        {/* Info técnica */}
        <div className="mt-6 bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Información técnica</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <span className="text-gray-400">Package:</span> com.facundocampo.sudokumaster
            </div>
            <div>
              <span className="text-gray-400">Version:</span> 1.1.0 (Code 10)
            </div>
            <div>
              <span className="text-gray-400">Android SDK:</span> API 21+ (Android 5.0+)
            </div>
            <div>
              <span className="text-gray-400">Build System:</span> Gradle 8.10.0 (Kotlin DSL)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProyectosPersonales;