export const avatarImage = (id: number) => 'https://' + (process.env.TESTNET ? 'meta-avatar-test' : 'meta-avatar') + '.marscolony.io/' + id + '.jpg';

export const avatarContract = process.env.TESTNET ? '0x0D625029E21540aBdfAFa3BFC6FD44fB4e0A66d0' : '0xCc55065afd013CF06f989448cf724fEC4fF29626';
export const cryochamberContract = process.env.TESTNET ? '0x9166461379cF2fd6633e13A115B367DE46c29101' : '0x2D2f5349896BF4012EA27Db345fbF8a71775d16f';
export const collectionContract = process.env.TESTNET ? '0x30D378d6dF8d574d25874056483189df1341214B' : '0xFDCC01E0Fe5D3Fb11B922447093EE6862685616c';

export const rpcs = process.env.TESTNET
  ? [
    'https://api.avax-test.network/ext/bc/C/rpc',
  ]
  : [
    'https://harmony-0-rpc.gateway.pokt.network',
    'https://api.harmony.one',
    'https://api.fuzz.fi',
  ];
