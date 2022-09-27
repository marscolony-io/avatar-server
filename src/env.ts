export type Network = 'harmony' | 'polygon' | 'fuji';

export const network = process.env.NETWORK as Network;
