# 🎁 Merkle Tree Gift List

This project was built as part of the **Ethereum Developer Bootcamp at Alchemy University**.  
It’s a fun and hands-on example that demonstrates **Merkle Trees** and their application to verifying data efficiently — here simulating a "Nice List" for holiday gift eligibility.

---

## 🎯 What is this project about?
We have a **list of names** (`niceList.json`). To check if someone is on the list, we:
- Build a Merkle tree and generate a proof on the client.
- Send the proof and the name to the server.
- The server verifies the proof against a precomputed `MERKLE_ROOT`.
- If verified, the server responds with a "gift".

This mimics a real-world trustless verification process often seen in blockchain apps.

---

## 🧠 What I learned
✅ Implementing a Merkle tree structure manually in JavaScript.  
✅ Generating Merkle proofs and verifying them using `keccak256`.  
✅ How client–server communication can leverage cryptographic proofs to avoid sharing entire datasets.  
✅ Practicing HTTP requests with `axios` and setting up an `Express` server as a verifier.

---

## 📂 Project structure

- **/client**  
  - `index.js`: Generates a Merkle proof for a given `name` and POSTs it to the server.
  
- **/server**  
  - `index.js`: Sets up an Express API. It receives the proof, checks it against the Merkle `MERKLE_ROOT`, and responds.

- **/utils**  
  - `MerkleTree.js`: Constructs a Merkle tree and provides methods to generate roots and proofs.
  - `verifyProof.js`: Given a proof, a leaf (`name`), and a Merkle `root`, it returns `true` or `false`.
  - `niceList.json`: The list of names that qualify for a gift.
  - `example.js`: Example usage of generating and verifying a proof offline.

---

## 🚀 Getting started

### 1️⃣ Clone the repo:
```bash
git clone https://github.com/Hayk-1315/Merkle-Tree-Gift-list.git
cd merkle-tree-gift-list
2️⃣ Install dependencies:
npm install

3️⃣ Run the server:
node server/index.js
The server will listen on http://localhost:1225

4️⃣ Run the client:
node client/index.js
The client will generate a proof for the hardcoded name, send it to the server, and log the server’s response.

🧪 Test the MerkleTree utilities directly:
You can also run the example proof verification locally:
node utils/example.js

🔧 Tech Stack
🛠 Backend: Node.js, Express

🔐 Cryptography: keccak256 (from ethereum-cryptography)

🧠 Merkle trees & proofs

🔄 HTTP client: axios

📜 Notes
Feel free to add your own name to niceList.json to test the proof generation and verification process. This project is intended as a learning exercise, but it also illustrates a pattern often used in blockchain apps where verifying a small proof is much more efficient than sharing entire datasets.

🎉 Thanks for checking it out!
If you liked this repo, don’t hesitate to give it a ⭐ on GitHub.
