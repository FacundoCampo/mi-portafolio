import { useState } from 'react';

function ProyectosLaborales() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'homeopet-online',
      title: 'Homeopet Online',
      subtitle: 'Aplicación móvil con IA para terapias veterinarias',
      year: '2025',
      status: 'Fase de prueba cerrada',
      shortDescription: 'Plataforma que utiliza GPT-4 para proporcionar recomendaciones personalizadas de terapias homeopáticas/florales para animales, con sistema de suscripciones y caché inteligente.',
      technologies: ['React Native', 'Node.js', 'OpenAI GPT-4', 'Supabase', 'Redis'],
      gradient: 'from-red-600 to-orange-600'
    }
  ];

  if (selectedProject) {
    return <HomeopetOnlineDetail onBack={() => setSelectedProject(null)} />;
  }

  return (
    <section id="proyectos-laborales" className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Proyectos Laborales
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Proyectos desarrollados profesionalmente
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-2">{project.subtitle}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                  <span className="text-orange-400 text-sm">{project.status}</span>
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
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors"
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

// Componente de detalle del proyecto Homeopet Online
function HomeopetOnlineDetail({ onBack }) {
  return (
    <section className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto py-16">
        {/* Botón volver */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-red-400 hover:text-red-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a Proyectos Laborales
        </button>

        {/* Header del proyecto */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Homeopet Online</h1>
          <p className="text-red-100 text-lg mb-4">Plataforma de IA para terapias homeopáticas veterinarias</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 text-white px-3 py-1 rounded">2025</span>
            <span className="bg-orange-500/20 text-orange-100 px-3 py-1 rounded flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"></span>
              Fase de prueba cerrada (90% completado)
            </span>
          </div>
        </div>

        {/* Resumen de funcionalidad */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué hace la aplicación?</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Homeopet Online es una aplicación móvil que utiliza inteligencia artificial (GPT-4) para 
            proporcionar recomendaciones personalizadas de terapias homeopáticas/florales para animales. 
            La app analiza síntomas y comportamientos de mascotas mediante IA especializada y sugiere 
            remedios de las escuelas florales de Bach, California y Bush Australianas.
          </p>
          
          <h3 className="text-xl font-semibold text-white mb-3">Problema que resuelve</h3>
          <ul className="space-y-2 text-gray-300 mb-6">
            <li className="flex gap-2">
              <span className="text-red-400">•</span>
              Ayuda a veterinarios y dueños de mascotas a identificar qué remedios homeopáticos/florales 
              podrían ser apropiados para problemas emocionales y comportamentales de animales
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">•</span>
              Proporciona acceso rápido a recomendaciones basadas en IA cuando no hay un especialista 
              en homeopatía veterinaria disponible de inmediato
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">•</span>
              Democratiza el conocimiento sobre terapias florales veterinarias con orientación profesional
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3">Características principales</h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-gray-300">
              <span className="text-red-400 text-xl">✓</span>
              <div>
                <span className="font-semibold text-white">Análisis con IA:</span> Utiliza GPT-4 con un 
                prompt especializado y validado para analizar síntomas y recomendar terapias florales específicas
              </div>
            </li>
            <li className="flex gap-3 text-gray-300">
              <span className="text-red-400 text-xl">✓</span>
              <div>
                <span className="font-semibold text-white">Sistema de conversaciones:</span> Mantiene las 
                últimas 3 conversaciones del usuario de forma rotativa para dar contexto a nuevas consultas
              </div>
            </li>
            <li className="flex gap-3 text-gray-300">
              <span className="text-red-400 text-xl">✓</span>
              <div>
                <span className="font-semibold text-white">Caché inteligente:</span> Implementa Redis para 
                cachear respuestas comunes y reducir costos de API (ahorro del 40%)
              </div>
            </li>
            <li className="flex gap-3 text-gray-300">
              <span className="text-red-400 text-xl">✓</span>
              <div>
                <span className="font-semibold text-white">Historial de consultas:</span> Los usuarios pueden 
                revisar sus consultas anteriores y resultados
              </div>
            </li>
            <li className="flex gap-3 text-gray-300">
              <span className="text-red-400 text-xl">✓</span>
              <div>
                <span className="font-semibold text-white">Sistema de suscripciones:</span> Modelo freemium 
                con planes mensuales ($10-$30/mes) que limitan consultas según el plan
              </div>
            </li>
          </ul>
        </div>

        {/* Stack técnico */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Stack Técnico Completo</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-3">Backend</h3>
              <div className="space-y-2">
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Node.js + Express 5.1.0</p>
                  <p className="text-gray-400 text-sm">Framework del servidor</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">OpenAI SDK 5.12.2</p>
                  <p className="text-gray-400 text-sm">Integración GPT-4</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">JWT + bcryptjs</p>
                  <p className="text-gray-400 text-sm">Autenticación segura</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-3">Frontend Móvil</h3>
              <div className="space-y-2">
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">React Native 0.79.5</p>
                  <p className="text-gray-400 text-sm">Framework multiplataforma</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Expo 53.0.20</p>
                  <p className="text-gray-400 text-sm">Plataforma de desarrollo</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Redux Toolkit + React Query</p>
                  <p className="text-gray-400 text-sm">Gestión de estado</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-3">Base de Datos</h3>
              <div className="space-y-2">
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Supabase (PostgreSQL)</p>
                  <p className="text-gray-400 text-sm">BD relacional en la nube</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Upstash Redis</p>
                  <p className="text-gray-400 text-sm">Cache distribuido</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-3">Despliegue</h3>
              <div className="space-y-2">
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Vercel</p>
                  <p className="text-gray-400 text-sm">Hosting del backend</p>
                </div>
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-white font-medium">Expo Build</p>
                  <p className="text-gray-400 text-sm">Compilación iOS/Android</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-red-400 mb-3">Librerías adicionales</h3>
            <div className="flex flex-wrap gap-2">
              {['React Navigation', 'React Native Paper', 'axios', 'react-hook-form', 
                'joi', 'helmet.js', 'express-rate-limit'].map((lib, index) => (
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
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Arquitectura General</h3>
              <p className="text-gray-300 text-sm mb-3">
                Cliente-Servidor con separación completa frontend/backend. RESTful API para comunicación.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-700/30 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Backend (MVC modificado)</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Controllers - Lógica de negocio</li>
                  <li>• Routes - Definición de endpoints</li>
                  <li>• Services - Integraciones externas</li>
                  <li>• Middleware - Auth y rate limiting</li>
                </ul>
              </div>

              <div className="bg-gray-700/30 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Frontend (Componentes + Redux)</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Screens - Pantallas de la app</li>
                  <li>• Navigation - Configuración de rutas</li>
                  <li>• Store - Estado global (Redux)</li>
                  <li>• Services - Cliente API</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Patrones implementados</h4>
              <div className="flex flex-wrap gap-2">
                {['Repository Pattern', 'Middleware Chain', 'Cache-Aside Pattern', 
                  'Rotating Buffer'].map((pattern, index) => (
                  <span key={index} className="bg-red-900/30 text-red-300 px-3 py-1 rounded text-sm">
                    {pattern}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desafíos técnicos */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Desafíos Técnicos Resueltos</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Sistema de conversaciones rotativas
              </h3>
              <p className="text-gray-300 text-sm">
                Implementación de un sistema que mantiene solo las últimas 3 conversaciones por usuario 
                de forma rotativa (slots 1, 2, 3), sobrescribiendo la más antigua cuando se agrega una nueva. 
                Esto permite a la IA tener contexto sin costos de almacenamiento excesivos.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Cache inteligente de respuestas de IA
              </h3>
              <p className="text-gray-300 text-sm">
                Sistema de cache con Redis usando hashes MD5 de los síntomas normalizados. Las respuestas 
                se cachean por 24 horas, ahorrando hasta un 40% en costos de IA (~$0.023/consulta) en 
                consultas recurrentes.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Prompt engineering para IA especializada
              </h3>
              <p className="text-gray-300 text-sm">
                Desarrollo y validación de un prompt especializado de 500+ palabras que instruye a GPT-4 
                sobre los 3 sistemas florales (Bach, California, Bush), sintomatología animal específica, 
                formato estructurado de respuesta (JSON), disclaimers de seguridad veterinaria y prevención 
                de alucinaciones.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Arquitectura multiplataforma eficiente
              </h3>
              <p className="text-gray-300 text-sm">
                Uso de React Native con Expo, permitiendo una sola base de código con el 95% de componentes 
                compartidos. Uso de react-native-paper para UI consistente y Platform.select() para 
                diferencias específicas de cada OS.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Rate limiting por usuario con Redis
              </h3>
              <p className="text-gray-300 text-sm">
                Middleware de rate limiting con Redis que controla máximo de consultas por hora (20 para 
                usuarios gratuitos), contadores que expiran automáticamente y respuestas HTTP 429 con 
                tiempo de reset. Previene abuso del sistema y controla costos de IA.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Autenticación segura sin almacenar contraseñas
              </h3>
              <p className="text-gray-300 text-sm">
                Uso de Supabase Auth que maneja el flujo completo (bcrypt + JWT), con tokens validados 
                server-side en cada request mediante middleware personalizado.
              </p>
            </div>
          </div>
        </div>

        {/* Modelo de negocio */}
        <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-700/50 rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Modelo de Negocio</h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded p-4">
              <h3 className="text-white font-semibold mb-2">Plan Básico</h3>
              <p className="text-3xl font-bold text-red-400 mb-1">$10<span className="text-sm text-gray-400">/mes</span></p>
              <p className="text-gray-400 text-sm">50 consultas mensuales</p>
            </div>
            <div className="bg-gray-800/50 rounded p-4 border-2 border-orange-500">
              <h3 className="text-white font-semibold mb-2">Plan Profesional</h3>
              <p className="text-3xl font-bold text-orange-400 mb-1">$20<span className="text-sm text-gray-400">/mes</span></p>
              <p className="text-gray-400 text-sm">150 consultas mensuales</p>
            </div>
            <div className="bg-gray-800/50 rounded p-4">
              <h3 className="text-white font-semibold mb-2">Plan Premium</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-1">$300<span className="text-sm text-gray-400">/mes</span></p>
              <p className="text-gray-400 text-sm">500 consultas mensuales</p>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded p-4">
            <h3 className="text-white font-semibold mb-3">Costos y Márgenes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Costo por consulta (OpenAI):</p>
                <p className="text-white font-medium">~$0.023 USD</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Break-even estimado:</p>
                <p className="text-white font-medium">40-50 suscriptores activos</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Ahorro con cache:</p>
                <p className="text-white font-medium">40% en consultas recurrentes</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Margen esperado:</p>
                <p className="text-white font-medium">85-90% después de costos de IA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Estado del proyecto */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Estado del Proyecto</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Completado</h3>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Backend API completo
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Base de datos (Supabase)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Sistema de caché (Redis)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Integración OpenAI
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Frontend móvil con Expo
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Sistema de autenticación
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Conversaciones rotativas
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Deploy en Vercel
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">⏳ En Desarrollo</h3>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">○</span> In-App Purchases completo
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">○</span> Publicación Google Play
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">○</span> Publicación App Store
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">○</span> Testing de pagos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usuarios objetivo */}
        <div className="mt-6 bg-red-900/20 border border-red-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-400 mb-3">Usuarios Objetivo</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <p className="font-medium text-white mb-1">Veterinarios especialistas</p>
              <p>Profesionales en medicina holística/homeopática que necesitan asistencia en terapias florales</p>
            </div>
            <div>
              <p className="font-medium text-white mb-1">Dueños de mascotas</p>
              <p>Interesados en terapias naturales complementarias para sus animales (bajo supervisión veterinaria)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProyectosLaborales;