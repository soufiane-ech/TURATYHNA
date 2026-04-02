import { motion } from 'motion/react';

export default function HomeScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#FAF6EF' }}
    >
      <div className="w-[375px] h-[812px] px-6 py-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold" style={{ color: '#2D1810' }}>
          Bienvenue sur Turathna
        </h1>
        <p className="mt-4 text-lg" style={{ color: '#5C4A3A' }}>
          Vous êtes connecté(e). L’exploration du patrimoine commence ici!
        </p>
      </div>
    </motion.div>
  );
}