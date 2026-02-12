import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSubtitle: React.FC = () => {
    const phrases: string[] = [
        'Infraestrutura como Código',
        'Automação de CI/CD',
        'Ambientes Multi-Cloud',
        'Segurança e Monitoramento'
    ];
    
    const [index, setIndex] = useState<number>(0);

    // O useEffect agora usa um temporizador (setTimeout) para agendar a próxima mudança de frase.
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(prevIndex => (prevIndex + 1) % phrases.length);
        }, 4000); // Troca a frase a cada 4 segundos

        // Função de limpeza: Essencial para remover o temporizador se o componente
        // for desmontado, evitando vazamentos de memória e bugs.
        return () => clearTimeout(timer);
    }, [index, phrases.length]); // O efeito é re-executado sempre que o 'index' muda

    const currentPhrase = phrases[index];

    return (
        // Container com tamanho fixo para evitar "pulos" no layout
        <div className="relative inline-flex items-center mt-2 group w-full min-h-12 mx-auto sm:mx-0">
            <span className="z-10 px-2 flex items-center">
                <span className="text-gray-500 text-2xl md:text-3xl lg:text-4xl">+</span>
                
                <AnimatePresence mode="wait">
                    {/* LÓGICA: Animação letra por letra (Stagger) */}
                    <motion.div
                        key={index} // A 'key' é crucial para o AnimatePresence recriar o componente a cada mudança
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="text-white ml-2 text-2xl md:text-3xl lg:text-4xl flex"
                        aria-label={currentPhrase}
                    >
                        {currentPhrase.split('').map((char, charIndex) => (
                            <motion.span
                                key={charIndex}
                                variants={letterVariants}
                                style={{whiteSpace: 'pre'}} // Garante que espaços em branco sejam renderizados
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </span>
        </div>
    );
};

export default AnimatedSubtitle;