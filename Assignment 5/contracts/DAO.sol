// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title SimpleDAO
/// @notice Minimal DAO for proposals, voting, and execution
contract SimpleDAO {
    struct Proposal {
        string description;
        uint256 yesVotes;
        uint256 noVotes;
        uint256 deadline;
        bool executed;
    }

    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    event ProposalCreated(uint256 indexed proposalId, string description, uint256 deadline);
    event Voted(uint256 indexed proposalId, address voter, bool support);
    event Executed(uint256 indexed proposalId);

    function createProposal(string calldata description, uint256 durationSeconds) external {
        require(durationSeconds > 0, "Duration required");
        proposalCount += 1;
        proposals[proposalCount] = Proposal({
            description: description,
            yesVotes: 0,
            noVotes: 0,
            deadline: block.timestamp + durationSeconds,
            executed: false
        });
        emit ProposalCreated(proposalCount, description, block.timestamp + durationSeconds);
    }

    function vote(uint256 proposalId, bool support) external {
        Proposal storage proposal = proposals[proposalId];
        require(block.timestamp <= proposal.deadline, "Voting ended");
        require(!hasVoted[proposalId][msg.sender], "Already voted");

        hasVoted[proposalId][msg.sender] = true;
        if (support) {
            proposal.yesVotes += 1;
        } else {
            proposal.noVotes += 1;
        }
        emit Voted(proposalId, msg.sender, support);
    }

    function execute(uint256 proposalId) external {
        Proposal storage proposal = proposals[proposalId];
        require(block.timestamp > proposal.deadline, "Voting ongoing");
        require(!proposal.executed, "Already executed");

        proposal.executed = true;
        emit Executed(proposalId);
    }
}
