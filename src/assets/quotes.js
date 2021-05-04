export const quotes = [
	'“Appear weak when you are strong, and strong when you are weak.”',
	'“The supreme art of war is to subdue the enemy without fighting.”',
	'“If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.”',
	'“Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.”',
	"“Supreme excellence consists of breaking the enemy's resistance without fighting.”",
	'“Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win”',
	'“In the midst of chaos, there is also opportunity”',
	'“The greatest victory is that which requires no battle.”',
	'“To know your Enemy, you must become your Enemy.”',
	'“There is no instance of a nation benefitting from prolonged warfare.”',
]

export function getRandomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)]
}
