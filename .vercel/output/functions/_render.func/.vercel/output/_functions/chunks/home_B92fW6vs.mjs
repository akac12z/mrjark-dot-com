import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8CfcxbO.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Me dedico al Growth en Startups, apasionado de la psicología del\ncomportamiento, obsesionado por el aprendizaje y un amante del arte del\ntattoo.</p>\n<p>Este es mi build(me) in public, donde compartiré aquello que voy haciendo\ny pensando, y que considero que es importante, en mi carrera en Growth\nentre otras cosas que me parecen interesantes.</p>\n<p>Welcome to my creative sorted chaos hub 💭</p>";

				const frontmatter = {"title":"Aquí mrjark, aunque offline me dicen Chema ✌🏽"};
				const file = "/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/components/static/home/markdown/home.md";
				const url = undefined;
				function rawContent() {
					return "\nMe dedico al Growth en Startups, apasionado de la psicología del\ncomportamiento, obsesionado por el aprendizaje y un amante del arte del\ntattoo.\n\nEste es mi build(me) in public, donde compartiré aquello que voy haciendo\ny pensando, y que considero que es importante, en mi carrera en Growth\nentre otras cosas que me parecen interesantes.\n\nWelcome to my creative sorted chaos hub 💭";
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
