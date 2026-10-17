import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type Language = 'pt-BR' | 'en';

const translations = {
  'pt-BR': {
    home: 'Home',
    about: 'Sobre',
    skills: 'Habilidades',
    certificates: 'Certificados',
    appliedSkills: 'Applied Skills',
    credentials: 'Credenciais',
    credentialsDescription: 'Escolha como você quer conhecer minha formação e minha prática técnica.',
    certificatesShort: 'Formação técnica e certificações documentadas.',
    appliedSkillsShort: 'Laboratórios e competências aplicadas na prática.',
    projects: 'Projetos',
    projectsDescription: 'Projetos que combinam produto, automação e infraestrutura para resolver problemas reais.',
    projectLabel: 'projeto',
    featuredProject: 'destaque',
    projectType: 'build',
    githubProject: 'projeto no GitHub',
    githubRepository: 'repositório GitHub',
    viewOnGithub: 'Ver no GitHub',
    seeProjects: 'Ver projetos',
    contactMe: 'Entrar em contato',
    contactLabel: 'disponibilidade',
    contactTitle: 'Vamos conversar',
    contactDescription: 'Estou aberto a oportunidades em Cloud, DevOps e Infraestrutura.',
    projectContext: 'objetivo do projeto',
    proofOfWork: 'formação comprovada',
    appliedSkillLabel: 'competência aplicada',
    officialCredentialLabel: 'credencial oficial',
    available: 'Disponível para novos desafios',
    yearsBuilding: 'anos construindo',
    projectsDelivered: 'projetos entregues',
    curiosity: 'curiosidade ativa',
    scroll: 'scroll to explore',
    aboutTitle: 'Sobre',
    technicalSkills: 'Habilidades Técnicas',
    selectedWork: 'selected work / 03',
    viewCredential: 'Ver credencial',
    back: 'Voltar',
    officialCredential: 'Verificar credencial oficial',
    previous: 'anterior',
    current: 'atual',
    next: 'próximo',
    certified: 'certificado',
    exploreCredentials: 'explorar credenciais',
    certification: 'formação e certificação',
    imageUnavailable: 'imagem indisponível',
    certificateProof: 'comprovação visual',
    providerLogo: 'logo do provedor',
    certificateSection: 'Certificados',
    certificateDescription: 'Formação técnica documentada para construir uma base sólida em infraestrutura e operações.',
    appliedDescription: 'Evidências práticas de laboratório que mostram como transformo conhecimento em execução técnica.',
    handsOn: 'prática aplicada / 02',
    skill: 'competência',
    projectImage: 'Imagem do projeto',
    viewProject: 'Ver projeto',
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    certificates: 'Certificates',
    appliedSkills: 'Applied Skills',
    credentials: 'Credentials',
    credentialsDescription: 'Choose how you want to explore my training and hands-on technical work.',
    certificatesShort: 'Documented technical training and certifications.',
    appliedSkillsShort: 'Hands-on labs and applied technical competencies.',
    projects: 'Projects',
    projectsDescription: 'Projects combining product, automation and infrastructure to solve real problems.',
    projectLabel: 'project',
    featuredProject: 'featured',
    projectType: 'build',
    githubProject: 'GitHub project',
    githubRepository: 'GitHub repository',
    viewOnGithub: 'View on GitHub',
    seeProjects: 'View projects',
    contactMe: 'Get in touch',
    contactLabel: 'availability',
    contactTitle: "Let's talk",
    contactDescription: 'Open to opportunities in Cloud, DevOps and Infrastructure.',
    projectContext: 'project objective',
    proofOfWork: 'proof of work',
    appliedSkillLabel: 'applied skill',
    officialCredentialLabel: 'official credential',
    available: 'Available for new challenges',
    yearsBuilding: 'years building',
    projectsDelivered: 'projects delivered',
    curiosity: 'active curiosity',
    scroll: 'scroll to explore',
    aboutTitle: 'About',
    technicalSkills: 'Technical Skills',
    selectedWork: 'selected work / 03',
    viewCredential: 'View credential',
    back: 'Back',
    officialCredential: 'Verify official credential',
    previous: 'previous',
    current: 'current',
    next: 'next',
    certified: 'certified',
    exploreCredentials: 'explore credentials',
    certification: 'training and certification',
    imageUnavailable: 'image unavailable',
    certificateProof: 'visual proof',
    providerLogo: 'provider logo',
    certificateSection: 'Certificates',
    certificateDescription: 'Documented technical training that builds a strong foundation in infrastructure and operations.',
    appliedDescription: 'Practical lab evidence showing how I turn knowledge into technical execution.',
    handsOn: 'hands-on practice / 02',
    skill: 'skill',
    projectImage: 'Project image',
    viewProject: 'View project',
  },
} as const;

type TranslationKey = keyof typeof translations['pt-BR'];

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');
  const value = useMemo(
    () => ({
      language,
      toggleLanguage: () => setLanguage((current) => (current === 'pt-BR' ? 'en' : 'pt-BR')),
      t: (key: TranslationKey) => translations[language][key],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
