export const avatarImage = (id: number) => 'https://' + (process.env.TESTNET ? 'meta-avatar-test' : 'meta-avatar') + '.marscolony.io/' + id + '.jpg';

export const avatarContract = process.env.TESTNET ? '0x1F7D019bC02B6A4F9CCA70D7bF1f00c9167Aae25' : '';

export const rpcs = process.env.TESTNET
  ? [
    'https://api.s0.b.hmny.io',
  ]
  : [
    'https://harmony-0-rpc.gateway.pokt.network',
    'https://api.harmony.one',
    'https://api.fuzz.fi',
  ];
