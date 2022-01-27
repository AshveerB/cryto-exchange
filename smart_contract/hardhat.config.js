require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.0',
	networks: {
		ropsten: {
			url: 'https://eth-ropsten.alchemyapi.io/v2/c--4xvvJes2DLpBVJysXqbs5CyI1svSn',
			accounts: [
				'95bf64be1a198af935b7847a7b9566eab0a0106c1caf302c5e4942b3f106d952',
			],
		},
	},
};
