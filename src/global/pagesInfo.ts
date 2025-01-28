import type { PagesInfo } from "@interfaces/pagesInfo.interface";
import { SITE_DEFAULT_CONFIG } from "./siteInfo";

export const CONTEXT_PAGE_INFO: PagesInfo = {
  title: `Mi contexto - ${SITE_DEFAULT_CONFIG.title} ✌🏽`,
  description: SITE_DEFAULT_CONFIG.description,
};

export const LIBRARY_PAGE_INFO: PagesInfo = {
  title: `Notas de libros - ${SITE_DEFAULT_CONFIG.title}`,
  description:
    "Recopilación de las ideas y conceptos más importantes de libros que voy leyendo sobre growth, startups, crecimiento personal, psicología del comportamiento que considero importantes tener a mano.",
};

export const BEHAVIOR_PAGE_INFO: PagesInfo = {
  title: `Psycología del comportamiento y heurísticas aplicada a Growth`,
  description:
    "Algunos principios e ideas de economía conductual y psicología humana para entender mejor a los usuarios en el mundo startup y growth.",
};

export const BIAS_PAGE_INFO: PagesInfo = {
  title: `Sesgos y Heurísticas - ${SITE_DEFAULT_CONFIG.title}`,
  description:
    "Recopilación de sesgos cognitivos y heurísticas de los humanos junto con ejemplos y aplicaciones de los mismos.",
};

export const ESSAY_PAGE_INFO: PagesInfo = {
  title: `Ensayos - ${SITE_DEFAULT_CONFIG.title}`,
  description:
    "Un cunjunto de ensayos que voy recopilando en mi carrera como Growth en Startups y mi afan por conocer la psicologia del comportamiento",
};
