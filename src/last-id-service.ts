import { avatarContract, rpcs } from "./helper";
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';
import ABI from './avatars.abi.json';

export const lastId = {
  data: 0,
};

export const idAllowed = (id: number): boolean => {
  return id > 0 && id <= lastId.data;
};

const web3instances: Array<[Web3, Contract]> = rpcs.map((node: string) => {
  const web3 = new Web3(node);
  const contract = new web3.eth.Contract(ABI as AbiItem[], avatarContract);
  return [web3, contract];
});

(async () => {
  let _lastId = 0;
  while (true) {
    const [, contract] = web3instances[Math.floor(web3instances.length * Math.random())];
    try {
      const totalSupply = await Promise.race([
        contract.methods.totalSupply().call(),
        new Promise((rs) => setTimeout(() => rs(-1), 2000)),
      ]);

      if (parseInt(totalSupply) === -1) {
        throw new Error(`timeout fail ${totalSupply}`);
      }
      lastId.data = Math.max(lastId.data, parseInt(totalSupply) + 1);
      if (lastId.data === 21000) {
        break; // last avatar minted
      }
      if (_lastId !== lastId.data) {
        console.log(lastId.data);
        _lastId = lastId.data;
      }
      
      await new Promise(rs => setTimeout(rs, 2000));
    } catch (error) {
      console.log('last-id-service 1', error.message);
      await new Promise(rs => setTimeout(rs, 1000));
    }
  }
})();
