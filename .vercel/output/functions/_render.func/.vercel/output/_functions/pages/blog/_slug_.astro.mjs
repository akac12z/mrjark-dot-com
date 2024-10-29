/* empty css                                    */
import { c as createComponent, r as renderTemplate } from '../../chunks/astro/server_B8CfcxbO.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$slug = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
