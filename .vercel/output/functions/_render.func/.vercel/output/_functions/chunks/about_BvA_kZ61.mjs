import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8CfcxbO.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Hola mundo</p>";

				const frontmatter = {"title":"¿Quién carajos es mrjark?"};
				const file = "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/components/static/about/markdown/about.md";
				const url = undefined;
				function rawContent() {
					return "\nHola mundo";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
