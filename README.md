# Bharat PR EVM Simulator

An EVM (Electronic Voting Machine) simulator trialling the PR-STV/List-PR (Parallel) voting system, or Bharat-PR, designed specifically for the Indian electorate.

## Overview
This project is an interactive mockup of a dual-ballot EVM designed to demonstrate a comprehensive electoral system. It aims to address the flaws of the current "First-Past-The-Post" (FPTP) system, such as "false majorities" and tactical voting, by proposing a fairer and more stable alternative.

The simulator provides an intuitive interface for users to cast their votes in a two-part process:
1. **Local (STV) Vote:** Ranking local candidates using the Single Transferable Vote (STV) system.
2. **National (List-PR) Vote:** Selecting a preferred national party using a List Proportional Representation (List-PR) system.

## Features
- **Interactive Dual-Ballot UI:** Simulates a modern EVM interface with color-coded sections for local and national voting.
- **Polling Officer Terminal:** A live log simulation showing voter actions (without compromising ballot secrecy) to help polling officers provide technical guidance.
- **VVPAT Verification Modal:** Simulates the printing of a Voter Verifiable Paper Audit Trail (VVPAT) slip displaying the voter's choices.
- **Automated Vote Generation:** An admin panel tool to randomly generate a specified number of votes, simulating various voter behaviors (loyal, strategic, chaotic).
- **Live Result Calculation:** Calculates and displays the final election results:
  - STV winners using fractional surplus transfer.
  - List-PR seat allocation with a 5% legal threshold and surplus seat allocation.

## The Electoral System Explained

### Part 1: Local STV Vote (5 Seats)
Voters rank their local candidates in order of preference. A "quota" is calculated to determine the minimum votes needed to win.
- If a #1 choice is elected, their surplus votes are transferred to the voter's next choice.
- If a candidate is eliminated, their full vote value transfers to the next choice.
This ensures fewer "wasted" votes and proportional representation at the local level.

### Part 2: National List-PR Vote (80 Seats)
Voters pick one national party. Seats are allocated proportionally based on the national vote share.
- **5% Threshold:** Parties with less than 5% of the national vote are disqualified.
- **Seat Allocation:** Seats are divided based on vote share, rounding down fractional seats.
- **Surplus Seats:** Any remaining seats are awarded to the largest party (or randomly drawn in case of a tie).

### Why This System?
- **Fairer than "Bare" PR-STV:** The National List acts as a safety net for parties with broad national support.
- **More Stable than MMP:** Counts local and national seats separately, preventing "overhang seats" and ensuring a predictable parliament size.
- **Prevents Fragmentation:** The 5% threshold encourages smaller parties to consolidate.

## "No Black Box" Verification
To build trust, the system is designed to be fully verifiable:
- **The EVM:** A simple and secure ballot marker, not a black box.
- **The VVPAT:** The primary source of truth, optionally printed with a machine-readable QR code.
- **The Audit:** A mandatory Risk-Limiting Audit (RLA) to statistically confirm the electronic count against the VVPAT slips.

## How to Run
1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Use the interface to simulate casting votes or use the Admin Panel to auto-generate votes and calculate results.

## Technical Stack
- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript (for UI logic and vote calculation)
