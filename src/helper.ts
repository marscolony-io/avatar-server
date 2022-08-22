import { network, Network } from "./env";

const domain: Record<Network, string> = {
  fuji: 'meta-avatar-test',
  harmony: 'meta-avatar',
  polygon: 'meta-avatar-polygon',
};

export const avatarImage = (id: number) => 'https://' + domain[network] + '.marscolony.io/' + id + '.jpg';

const avatarContracts: Record<Network, string> = {
  harmony: '0xCc55065afd013CF06f989448cf724fEC4fF29626',
  fuji: '0x0D625029E21540aBdfAFa3BFC6FD44fB4e0A66d0', // TODO fix
  polygon: '0xE29163dE0dD747f55d5D2287d5FE874F65C9Fa8E',
};

const cryochamberContracts: Record<Network, string> = {
  harmony: '0x2D2f5349896BF4012EA27Db345fbF8a71775d16f',
  fuji: '0x9166461379cF2fd6633e13A115B367DE46c29101', // TODO fix
  polygon: '0x0000000000000000000000000000000000000000', // TODO add
};

const collectionContracts: Record<Network, string> = {
  harmony: '0xFDCC01E0Fe5D3Fb11B922447093EE6862685616c',
  fuji: '0x30D378d6dF8d574d25874056483189df1341214B', // TODO fix
  polygon: '0x76F8089064f58586471f38824da290913E6a5454',
};

export const avatarContract = avatarContracts[network];
export const cryochamberContract = cryochamberContracts[network];
export const collectionContract = collectionContracts[network];

const rpcsByNetwork: Record<Network, string[]> = {
  fuji: ['https://api.avax-test.network/ext/bc/C/rpc'],
  harmony: [
    'https://harmony-0-rpc.gateway.pokt.network',
    'https://api.harmony.one',
    'https://api.fuzz.fi',
  ],
  polygon: ['https://polygon-rpc.com']
};

export const rpcs = rpcsByNetwork[network];
