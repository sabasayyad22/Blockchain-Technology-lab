# Assignment 5: DAO Smart Contract

## DAO Description
The `SimpleDAO` contract allows any address to create proposals, vote on them, and execute them after a deadline.

### Voting Mechanism
- Each address can vote once per proposal.
- Votes are counted as yes/no.
- Voting is only allowed before the deadline.

### Proposal Creation
- A proposer provides a description and voting duration (in seconds).
- A new proposal is stored with its deadline.

## DAO Workflow
1. Create a proposal with `createProposal(description, durationSeconds)`.
2. Vote with `vote(proposalId, support)`.
3. After deadline, execute with `execute(proposalId)`.

## Screenshots
Created a `screenshots/` folder g`
