/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_B8CfcxbO.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_D4xbFbMe.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="mx-auto pt-6 max-w-md sm:max-w-xl md:max-w-2xl max-h-full flex items-center justify-center"> <section class="grid grid-cols-1 text-center place-content-center"> <h1 class="mb-12 text-3xl">Vaya... tengamos un 404 entre manos</h1> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-lg", "src": "/images/courage-404-error.gif", "height": 100, "width": 600, "alt": "courage dog terror gif to 404 page for mrjark" })} <a class="mt-5 underline text-red-200 hover:text-red-500" href="/">Go Home</a> </section> </main>`;
}, "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/404.astro", void 0);

const $$file = "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
