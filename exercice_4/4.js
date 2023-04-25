/*
	Écrivez une fonction qui prend en entrée une chaîne de caractères et retourne un objet avec la fréquence de chaque caractère. Ignorez les espaces, les caractères spéciaux et la casse (majuscules / minuscules).
*/

const countCharacters = string => {
	let frequency = {};
	string.toLowerCase().replace(/[^a-zA-Z]/g, '').split('').forEach(function (character) {
		frequency[character] = (frequency[character] || 0) + 1;
	});
	return frequency;
}