function CV() {
  return (
    <section id="cv" className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Facundo Campo
          </h1>
          <p className="text-xl text-gray-400 mb-2">
            Desarrollador de Software | Estudiante de Ingeniería en Informática
          </p>
          <p className="text-gray-500 mb-4">
            📍 Buenos Aires, Argentina
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="mailto:facundocampo@yahoo.com.ar" className="text-blue-400 hover:text-blue-300">
              📧 facundocampo@yahoo.com.ar
            </a>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400">📱 +54 9 11 6193-3176</span>
          </div>
        </div>

        {/* Perfil Profesional */}
        <div className="mb-12 bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">Perfil Profesional</h2>
          <p className="text-gray-300 leading-relaxed">
            Desarrollador de software con experiencia en aplicaciones móviles y web usando React, 
            Java, Python y Kotlin. Experiencia en gestión administrativa y atención al cliente. 
            Busco oportunidades como Desarrollador de Aplicaciones, Full Stack Developer o Analista de Datos.
          </p>
        </div>

        {/* Educación */}
        <div className="mb-12 bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">Educación</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-white">Ingeniería en Informática</h3>
              <p className="text-gray-400">Universidad Argentina de la Empresa (UADE)</p>
              <p className="text-gray-500 text-sm">Cursando 3er año</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-white">Bachiller en Ciencias Exactas</h3>
              <p className="text-gray-400">Colegio Alemán Eduardo L. Holmberg</p>
              <p className="text-gray-500 text-sm">2013 - 2018</p>
            </div>
          </div>
        </div>

        {/* Experiencia Laboral */}
        <div className="mb-12 bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">Experiencia Laboral</h2>
          
          <div className="space-y-8">

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-white">Desarrollador Frelance</h3>
              <p className="text-gray-400">Bruncas</p>
              <p className="text-gray-500 text-sm mb-3">Sep 2025 - Actualidad</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Mantenimiento del Cloud Server junto al Ecommerce</li>
                <li>Migración del sistema a un nuevo servidor dedicado para la empresa</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-white">Tutor Académico</h3>
              <p className="text-gray-400">Clases de Apoyo</p>
              <p className="text-gray-500 text-sm mb-3">2024 - Actualidad</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Enseñanza de programación y matemáticas a estudiantes universitarios</li>
                <li>Desarrollo de material educativo personalizado</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-white">Encargado Administrativo</h3>
              <p className="text-gray-400">Hotel de Gatos Mishmosos</p>
              <p className="text-gray-500 text-sm mb-3">Oct 2023 - May 2024</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Gestión administrativa completa de sucursal y atención al cliente</li>
                <li>Manejo de inventarios y reportes financieros</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-white">Community Manager</h3>
              <p className="text-gray-400">HomeoPetOnline</p>
              <p className="text-gray-500 text-sm mb-3">May 2021 - Oct 2023</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Gestión de redes sociales y atención al cliente multicanal</li>
                <li>Análisis de métricas y reportes de engagement</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Habilidades Técnicas */}
        {/* Habilidades Técnicas */}
        <div className="mb-12 bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">Habilidades Técnicas</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Lenguajes de Programación</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">TypeScript</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">JavaScript</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Kotlin</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Python</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Java</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">C / C++</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">PHP</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">SQL</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Desarrollo Web</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">React</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Node.js</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Express.js</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Redux Toolkit</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">HTML5</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">CSS3</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Tailwind CSS</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Vite</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Desarrollo Móvil</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">React Native</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Expo</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Kotlin</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Jetpack Compose</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Android SDK</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Swift</p>
                  <p className="text-gray-400 text-xs">En aprendizaje</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Bases de Datos</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">PostgreSQL</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Supabase</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Redis</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Room</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Prisma ORM</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">MongoDB</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">MySQL</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">SQL Server</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">MS Access</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">APIs y Servicios en Tiempo Real</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">REST API</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">WebSocket</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Socket.IO</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">WebRTC</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">OpenAI API</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">MercadoPago</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">JWT</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Herramientas y DevOps</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Git / GitHub</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Vercel</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Docker</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Gradle</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">npm / npx</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Jest</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">ESLint</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Prettier</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Arquitectura y Patrones</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Clean Architecture</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">MVVM</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">MVC</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Repository Pattern</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Service Layer</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Dependency Injection</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Librerías Especializadas</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Hilt / Dagger</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Material 3</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">React Query</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Axios</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">React Hook Form</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Joi / Zod</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">bcryptjs</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Winston</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Herramientas de Negocio</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Excel Avanzado</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">Power BI</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-medium">MS Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="mb-12 bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">Certificaciones</h2>
          
          <div className="space-y-3">

            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">🏆</span>
              <div>
                <p className="text-white font-medium">Curso de Robótica Avanzada</p>
                <p className="text-gray-400 text-sm">Colegio Alemán | 2019</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">🏆</span>
              <div>
                <p className="text-white font-medium">Certificación de Robótica Nivel Avanzado</p>
                <p className="text-gray-400 text-sm">UTN | 2018</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">🏆</span>
              <div>
                <p className="text-white font-medium">Certificación de MS Access Nivel Avanzado</p>
                <p className="text-gray-400 text-sm">UTN | 2017</p>
              </div>
            </div>
          </div>
        </div>

        {/* Idiomas */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">Idiomas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700/50 rounded-lg p-4 text-center">
              <p className="text-white font-medium text-lg">Español</p>
              <p className="text-gray-400 text-sm">Nativo</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 text-center">
              <p className="text-white font-medium text-lg">Inglés</p>
              <p className="text-gray-400 text-sm">Intermedio/Avanzado (B2/C1)</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 text-center">
              <p className="text-white font-medium text-lg">Alemán</p>
              <p className="text-gray-400 text-sm">Básico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;