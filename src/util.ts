export const hypenToSpace = (slug: string) => slug.replaceAll('-', ' ');

export const generateSlug = (str: string) =>
	str.split(' ').join('-').toLowerCase();

String.prototype.toTitleCase = function (this: string) {
	const characters: string[] = this.split('');
	return characters
		.map((ch, i) =>
			i === 0 || characters[i - 1] === ' ' ? ch.toUpperCase() : ch,
		)
		.join('');
};
