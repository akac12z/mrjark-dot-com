import { c as createComponent, r as renderTemplate, f as addAttribute, e as createAstro, m as maybeRenderHead, a as renderComponent, g as renderHead, h as renderSlot } from './astro/server_B8CfcxbO.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                         */
import { $ as $$Image } from './_astro_assets_D4xbFbMe.mjs';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/node_modules/.pnpm/astro@4.16.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="container text-[#4fe5b8] my-2 w-full"> <section class="flex justify-between items-center mx-auto"> <a href="/"> ${renderComponent($$result, "Image", $$Image, { "src": "/favicon.svg", "width": 20, "height": 20, "alt": `mrjark logo` })} </a> <ul class="flex gap-4 justify-center items-center text-sm"> <li> <a class="hover:border-b hover:border-[#ff12c4] hover:text-[#ff12c4]" href="/blog">Blog</a> </li> <!-- <li>
        <a class="hover:border-b hover:border-[#fbbf24]" href="/why">Why</a>
      </li> --> <li> <a class="hover:border-b hover:border-[#c755ea] hover:text-[#c755ea]" href="/book-notes">Book Notes</a> </li> <li> <a class="hover:border-b hover:border-[#7f95ed] hover:text-[#7f95ed]" href="/about">About</a> </li> </ul> </section> </nav>`;
}, "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/components/shared/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="container my-2"> <div class="w-[70%] mx-auto h-[0.1px] bg-gray-500 my-6"></div> <p class="custom-footer">mrjark | All right reserver © - 2024</p> </footer>`;
}, "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/components/shared/Footer.astro", void 0);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, subTitle = "Blog de mrjark" } = Astro2.props;
  return renderTemplate`<html class="bg-[#0b0b0e]" lang="en"> <head><meta charset="UTF-8"><meta${addAttribute(title, "name")}${addAttribute(subTitle, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- <meta name="generator" content={Astro.generator} /> -->${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body class="mx-auto px-2 py-2 sm:py-6 max-w-md sm:max-w-xl md:max-w-2xl max-h-full"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="my-12"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
