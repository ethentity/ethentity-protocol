import React from "react";
import Web3 from "web3";
class SetL1Button extends React.Component{

    setL1(){
      const contract_address = '0xa564ECd7d56cf675854697Ba61446F34Dd13f105';
      const abi =[
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_greeting",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "_l1Target",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "withdrawalId",
              "type": "uint256"
            }
          ],
          "name": "L2ToL1TxCreated",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "greet",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_greeting",
              "type": "string"
            }
          ],
          "name": "setGreeting",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_greeting",
              "type": "string"
            }
          ],
          "name": "setGreetingInL1",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];
      let web3 = new Web3(Web3.givenProvider);
      console.log(web3);
        web3.eth.getAccounts().then(function (accounts) {
          let contract = new web3.eth.Contract(abi, contract_address);
          contract.methods.setGreetingInL1("Hi Hamza!").send({from: accounts[0]})
          .then(function(result){
            console.log(result);
          })
          .catch(console.log);
        });
    }


    render(){

        return(
            <div>
                <button id="setL1_btn" onClick={this.setL1}>Set greeting in L1</button>
            </div>
        )
    }
}

export default SetL1Button;