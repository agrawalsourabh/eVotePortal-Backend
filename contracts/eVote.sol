// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import 'hardhat/console.sol';

contract eVote{

    address owner;
    constructor(){
        owner = msg.sender;
        console.log("I am the owner of this smart contract: " , owner);
    }

    mapping (address => bool) isVotedMapping; // mapping to check if the address is already voted
    uint participantCount; // count total number of participant

    modifier onlyAllowed() {
        require(!isVotedMapping[msg.sender], "You already voted!");
        _;
    }

    modifier onlyOwner(){
        require(owner == msg.sender, "You are not the owner!");
        _;
    }

    mapping (string => uint) participantMapping; 

    // function to add participant
    function addParticipant(string memory _name) public onlyOwner {
        participantMapping[_name] = 0;
        participantCount += 1;
    }

    // function to caste vote - one address - one vote
    function castVote(string memory _name) public onlyAllowed{
        participantMapping[_name] += 1;
        isVotedMapping[msg.sender] = true;
    }

    // function to get the vote of the given participant
    function getVoteCount(string memory _name) public view returns(uint){
        return participantMapping[_name];
    }
}