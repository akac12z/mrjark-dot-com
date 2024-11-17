import type { PagesInfo } from "@interfaces/pagesInfo.interface";
import { SITE_DEFAULT_CONFIG } from "./siteInfo";

export const BOOKNOTES_PAGE_INFO: PagesInfo = {
  title: `Notas de librso - ${SITE_DEFAULT_CONFIG.title}`,
  description:
    "Una lista de los libros junto con algunas notas que he tomado y que considero importantes recordar",
};

export const ABOUT_PAGE_INFO: PagesInfo = {
  title: `Un poco sobre ${SITE_DEFAULT_CONFIG.title} ✌🏽`,
  description: SITE_DEFAULT_CONFIG.description,
};

export const PSYCHOLOGY_PAGE_INFO: PagesInfo = {
  title: `Psycología del comportamiento y heurísticas aplicada a growth`,
  description:
    "Una recopilación de principios, ideas y ejemplos de economía conductual, psicología del comportamiento, sesgos y psicología humana, aplicados al mundo de las startups y las metodologías de growth, con el objetivo de resolver los problemas de los usuarios de la manera más eficaz y sencilla, mejorando el crecimiento, la experiencia del usuario y nuestro juicio y razonamiento.",
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
