/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, e as createAstro, a as renderComponent } from '../chunks/astro/server_B8CfcxbO.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BHbJegfd.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
  const home = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/components/static/home/markdown/home.md": () => import('../chunks/home_B92fW6vs.mjs')}), () => "@home/markdown/home.md");
  return renderTemplate`${maybeRenderHead()}<section class="prose prose-invert"> <!-- <Photo/> --> ${home.map(
    (h) => renderTemplate`<h2 class="text-xl">${h.frontmatter.title}</h2>
    <p>${unescapeHTML(h.compiledContent())}</p>`
  )} <!-- Forma antigua de hacerlo --> <!-- <article class="">
    <h2>Aquí mrjark, aunque offline me dicen Chema ✌🏽</h2>
    <p>
      Me dedico al Growth en Startups, apasionado de la psicología del
      comportamiento, obsesionado por el aprendizaje y un amante del arte del
      tattoo.
    </p>
    <p>
      Este es mi build(me) in public, aquí compartiré aquello que voy haciendo y
      pensando, y que considero que es importante, en mi carrera en Growth entre
      otras cosas que me parecen interesantes.
    </p>
    <p>Welcome to my creative sorted chaos hub 💭</p>
  </article> --> </section>`;
}, "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/components/static/home/Home.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "mrjark | Growth, psychology behavioral, y otra mierdas." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ` })}`;
}, "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/index.astro", void 0);

const $$file = "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
