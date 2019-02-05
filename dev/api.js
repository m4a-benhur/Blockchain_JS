
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const nodeAddress = uuid().split('-').join('');
const mejic = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function(req, res){
	res.send(mejic);

});

app.post('/transaction', function(req, res) {
	const blockIndex = mejic.createNewTransaction(req.body.amount,   req.body.sender, req.body.recipient) 	
	res.json({ note:`Transaction will be added in block ${blockIndex}.`});
});

app.get('/mine', function(req, res) {
	const lastBlock = mejic.getLastBlock();  
	const previousBlockHash = lastBlock['hash'];
	const currentBlockData = {    
		transactions: mejic.pendingTransactions,
		index: lastBlock['index'] + 1  
		};
	const nonce = mejic.proofOfWork(previousBlockHash, currentBlockData);
	const blockHash = mejic.hashBlock(previousBlockHash, currentBlockData, nonce);
	const newBlock = mejic.createNewBlock(nonce, previousBlockHash, blockHash);
	res.json({  
		note: "New block mined successfully",  
		block: newBlock
	});
	mejic.createNewTransaction(12.5,"00", nodeAddress);
});

app.listen(3000, function(){
	console.log('listening on port 3000...');
	
});
