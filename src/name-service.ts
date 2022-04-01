import { avatarContract, rpcs } from "./helper";
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';
import ABI from './avatars.abi.json';
import { lastId } from "./last-id-service";

export const names: string[] = [];

const web3instances: Array<[Web3, Contract]> = rpcs.map((node: string) => {
  const web3 = new Web3(node);
  const contract = new web3.eth.Contract(ABI as AbiItem[], avatarContract);
  return [web3, contract];
});

(async () => {
  const BATCH_SIZE = 10;
  while (true) {
    const [, contract] = web3instances[Math.floor(web3instances.length * Math.random())];
    try {
      for (let i = 0; i < Math.ceil(lastId.data / BATCH_SIZE); i++) {
        const ids: number[] = [];
        for (let k = i * BATCH_SIZE; k < i * BATCH_SIZE + BATCH_SIZE; k++) {
          if (k < lastId.data) {
            ids.push(k + 1);
          }
        }
        const _names = await contract.methods.getNames(ids).call();
        for (let j = 0; j < ids.length; j++) {
          names[ids[j]] = _names[j];
        }
        await new Promise(rs => setTimeout(rs, 2000));

      }
      await new Promise(rs => setTimeout(rs, 2000));
    } catch (error) {
      console.log('name-service 1', error.message);
      await new Promise(rs => setTimeout(rs, 1000));
    }
  }
})();
