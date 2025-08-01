import { User, GraduationCap, Monitor, TrendingUp, Flame, Gamepad2, Film, Laptop } from 'lucide-react'

const Apropos = () => {
  return (
    <section id="à-propos" className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 sm:p-6 lg:p-8 max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-2 tracking-tight">NABIL MAHEL</h1>
          <p className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text">WEB DEV → DATA & IA</p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="flex flex-col xl:flex-row items-start gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Left Column - Profile Card */}
          <div className="flex-shrink-0 mx-auto xl:mx-0 w-full xl:w-auto">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border-3 border-orange-400 shadow-2xl max-w-md mx-auto">
              {/* Avatar */}
              <div className="w-40 sm:w-48 h-48 sm:h-60 mx-auto mb-6 lg:mb-8 rounded-xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={require("./../assets/img/tete.png") || "/placeholder.svg"}
                  alt="Nabil Mahel"
                />
              </div>

              {/* Profile Section */}
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                  <User className="w-5 lg:w-6 h-5 lg:h-6 text-orange-600" />
                  <h2 className="text-xl lg:text-2xl font-black text-gray-900">PROFIL</h2>
                </div>

                <div className="space-y-3 lg:space-y-4 text-gray-800">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-4 lg:w-5 h-4 lg:h-5 mt-1 flex-shrink-0 text-orange-500" />
                    <p className="font-semibold text-base lg:text-lg">Étudiant en Bachelor Data & IA</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Monitor className="w-4 lg:w-5 h-4 lg:h-5 mt-1 flex-shrink-0 text-amber-500" />
                    <p className="font-semibold text-base lg:text-lg">Base solide en développement web (HTML, CSS, JS, React)</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-4 lg:w-5 h-4 lg:h-5 mt-1 flex-shrink-0 text-yellow-600" />
                    <p className="font-semibold text-base lg:text-lg">
                      En transition vers la data science & intelligence artificielle
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Flame className="w-4 lg:w-5 h-4 lg:h-5 mt-1 flex-shrink-0 text-orange-500" />
                    <p className="font-semibold text-base lg:text-lg">
                      Curieux, passionné, toujours en train de build ou d'apprendre
                    </p>
                  </div>
                </div>
              </div>

              {/* Passions Section */}
              <div className="mt-6 lg:mt-8 space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3">
                  <Gamepad2 className="w-5 lg:w-6 h-5 lg:h-6 text-orange-600" />
                  <h2 className="text-xl lg:text-2xl font-black text-gray-900">PASSIONS</h2>
                  <div className="flex-1 h-1 bg-gradient-to-r from-orange-400 to-amber-400"></div>
                </div>

                <div className="grid grid-cols-3 gap-3 lg:gap-4">
                  {/* Cinéma */}
                  <div className="text-center space-y-2">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-white rounded-xl border-2 border-orange-400 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Film className="w-6 sm:w-8 h-6 sm:h-8 text-orange-600" />
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-2 py-1 rounded-full font-bold text-xs sm:text-sm">Cinéma</div>
                  </div>

                  {/* Jeux Vidéos */}
                  <div className="text-center space-y-2">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-white rounded-xl border-2 border-amber-400 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Gamepad2 className="w-6 sm:w-8 h-6 sm:h-8 text-amber-600" />
                    </div>
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-2 py-1 rounded-full font-bold text-xs sm:text-sm">Jeux Vidéos</div>
                  </div>

                  {/* Sport */}
                  <div className="text-center space-y-2">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-white rounded-xl border-2 border-yellow-400 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Laptop className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-600" />
                    </div>
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full font-bold text-xs sm:text-sm">Tech</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="flex-1 space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">Bonjour et bienvenue sur mon portfolio !</h2>

              <p className="text-lg sm:text-xl text-orange-600 leading-relaxed font-semibold">
                Je suis Nabil Mahel, un développeur web en pleine spécialisation dans le monde de la Data et de
                l'Intelligence Artificielle, dans le cadre de mon Bachelor chez HETIC.
              </p>

              <div className="w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400"></div>

              <div className="space-y-4 lg:space-y-6 text-gray-800 text-base lg:text-lg leading-relaxed">
                <p>
                  Mon parcours a débuté avec une passion pour la création d'interfaces web dynamiques et intuitives avec
                  des outils comme <span className="font-semibold text-orange-600">React.js</span>. Rapidement, j'ai été
                  fasciné non pas seulement par l'interface, mais par les données qui l'animent. J'ai découvert un
                  intérêt profond pour la manière dont les données sont structurées, traitées et utilisées pour bâtir
                  des services plus intelligents.
                </p>

                <p>
                  Aujourd'hui, mon objectif est de me situer à la croisée de ces deux mondes. J'aime explorer les{" "}
                  <span className="font-semibold text-amber-600">API</span>, automatiser des flux de données avec des
                  outils comme <span className="font-semibold text-orange-600">n8n</span> et je me forme activement sur{" "}
                  <span className="font-semibold text-yellow-600">Python</span> pour l'analyse de données. Ma vision est
                  de transformer des données brutes en solutions concrètes et en expériences utilisateur pertinentes.
                </p>

                <div className="bg-gradient-to-r from-orange-100 to-amber-100 border-l-4 border-orange-500 p-4 lg:p-6 rounded-r-lg shadow-lg">
                  <p className="font-bold text-orange-800 text-lg lg:text-xl">🎯 Actuellement à la recherche d'une alternance</p>
                  <p className="text-orange-700 mt-2">
                    <span className="font-semibold">Rythme :</span> 3 semaines en entreprise / 1 semaine à l'école
                  </p>
                  <p className="text-orange-700 mt-2">
                    Je suis déterminé à transformer cette curiosité en une véritable expertise technique au sein d'une
                    équipe innovante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Apropos