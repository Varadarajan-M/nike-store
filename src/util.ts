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

export const EMAIL_REGEX: RegExp =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const tillRange = (max: number) =>
	Array.from({ length: max ?? 10 }, (_, i) => i + 1);
