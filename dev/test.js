const Blockchain = require('./blockchain');

const mejic = new Blockchain();
const previousBlockHash = '87765DA6CCF0668238C1D27C35692E11';
const currentBlockData = [
	{
		amount: 10,
		sender: 'JAMESE9C0E5CD571',
		recipient: 'LILE6E462D48E9',
	},  

	{
		amount: 125,
		sender: 'GIBSE9C0E5CD571',
		recipient: 'TYF6E462D48E9',
	},  

	{
		amount: 45,
		sender: 'NOLANYJC5ACDL5741',
		recipient: 'ELIUYUI87IO09J',
	}  ];
mejic.createNewBlock(789457,'OIUOEDJETH8754DHKD','78SHNEG45DER56');
mejic.createNewBlock(548764,'AKMC875E6S1RS9','WPLS214R7T6SJD');
mejic.createNewTransaction(300,'ALEXHT845SJ5TKCJ2','JENN5BG5DF6HTFLDR');
console.log(mejic.createNewTransaction(111,"iuytrgyhujikol","trhkbhvgcvhbjnk"));
console.log(mejic);
//const nonce = 100;
//console.log(mejic.hashBlock(previousBlockHash, currentBlockData, nonce));
/*const mejic = new Blockchain();

mejic.createNewBlock(789457,'OIUOEDJETH8754DHKD','78SHNEG45DER56');
mejic.createNewTransaction(100,'ALEXHT845SJ5TKCJ2','JENN5BG5DF6HTFLDR');
mejic.createNewBlock(548764,'AKMC875E6S1RS9','WPLS214R7T6SJD');
mejic.createNewTransaction(300,'ALEXHT845SJ5TKCJ2','JENN5BG5DF6HTFLDR');
mejic.createNewTransaction(158,'ALEXHT845SJ5TKCJ2','JENN5BG5DF6HTFLDR');
mejic.createNewTransaction(125,'ALEXHT845SJ5TKCJ2','JENN5BG5DF6HTFLDR');
mejic.createNewBlock(584585,'AKMFHHE6S1RS9','WPLS25SHUT6SJD');*/

//console.log(mejic.hashBlock(previousBlockHash, currentBlockData, nonce));
