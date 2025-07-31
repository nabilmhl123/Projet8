import React from 'react'
import Image1 from "./../assets/img/about4K.webp";

const Apropos = () => {
  return (
    <section id='à propos' className='section bg-secondary p-8 min-h-[100vh] flex items-center'>
        <div className='flex flex-col xl:flex-row gap-8 w-full h-full items-center'>
            <img
            className='w-[350px] h-auto object-cover rounded-2xl mx-auto'
            src={Image1}
            alt='Présentation'
            />
            <div className='flex flex-col justify-center items-center text-center lg:items-start lg:text-left w-full xl:w-1/2 h-full'>
                <div className='flex flex-col p-4'>
                    <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
                        Bonjour et bienvenue sur mon portfolio !
                    </h2>
                    <p className='mb-4 text-accent'>
                        Je suis Nabil Mahel, un développeur web en pleine spécialisation dans le monde de la Data et de l'Intelligence Artificielle, dans le cadre de mon Bachelor chez HETIC.
                    </p> 
                    <hr className='mb-8 opacity-50'/>
                    <p className='mb-8'>

                    Mon parcours a débuté avec une passion pour la création d'interfaces web dynamiques et intuitives avec des outils comme React.js. Rapidement, j'ai été fasciné non pas seulement par l'interface, mais par les données qui l'animent. J'ai découvert un intérêt profond pour la manière dont les données sont structurées, traitées et utilisées pour bâtir des services plus intelligents.

                    Aujourd'hui, mon objectif est de me situer à la croisée de ces deux mondes. J'aime explorer les API, automatiser des flux de données avec des outils comme n8n et je me forme activement sur Python pour l'analyse de données. Ma vision est de transformer des données brutes en solutions concrètes et en expériences utilisateur pertinentes.

                    Actuellement à la recherche d'une alternance (rythme : 3 semaines en entreprise / 1 semaine à l'école), je suis déterminé à transformer cette curiosité en une véritable expertise technique au sein d'une équipe innovante.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Apropos