export const avatarImage = (id: number) => 'https://' + (process.env.TESTNET ? 'meta-avatar-test' : 'meta-avatar') + '.marscolony.io/' + id + '.jpg';

export const avatarContract = process.env.TESTNET ? '0xdE165766CC7C48C556c8C20247b322Dd23EB313a' : '';
export const collectionContract = process.env.TESTNET ? '0xDEfafb07765D9D0F897260BE1389743A09802F20' : '';

export const rpcs = process.env.TESTNET
  ? [
    'https://api.s0.b.hmny.io',
  ]
  : [
    'https://harmony-0-rpc.gateway.pokt.network',
    'https://api.harmony.one',
    'https://api.fuzz.fi',
  ];
