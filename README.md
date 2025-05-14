# 🧪 solx vs solc — Community Benchmark Suite

<p align="center">
  <img src="./solx-logo.png" width="200" alt="Solx vs Solc">
</p>

This repo allows developers to submit their own smart contracts to **benchmark and compare** how [`solx`](https://github.com/matter-labs/solx) performs against `solc` in terms of **output, performance, and compatibility**.

---

## 🚀 Purpose

We want real-world usage data. By submitting your own contracts (or forks of existing ones), you help us:

- Evaluate solx's compatibility with various existing contracts
- Benchmark solx vs solc compilation output
- Identify edge cases or gaps

---

## 📋 Requirements

- [Foundry](https://book.getfoundry.sh/getting-started/installation) for running the tests
- [Node.js](https://nodejs.org/) (v14 or later) for building the dashboard
- Git for cloning and contributing

---

## 🧰 Project Template

We provide a Foundry template in `/template-foundry-project` that includes:

- Basic Foundry configuration with both `solx` and `solc` compiler targets
- A test suite scaffold
- Integration with the comparison script

---

## 🛠 How to Contribute

1. **Fork this repository**

2. **Create your project from the template:**
   ```bash
   # Replace 'my-contracts' with your project name (e.g., erc20, nft-marketplace, etc.)
   cp -r ./template-foundry-project my-contracts/
   ```

3. **Add your contracts and tests:**
   - Place contracts in `my-contracts/src/`
   - Add tests in `my-contracts/test/`
   - Update `foundry.toml` if needed

4. **Setup solx compiler:**
   - Download the latest version from [the releases page](https://github.com/matter-labs/solx/releases)
   - Create and place it in the `./binaries-solx` folder:
     ```bash
     mv path/to/downloaded/solx-macosx-v0.1.0-alpha.3 binaries-solx/
     chmod +x binaries-solx/solx-macosx-v0.1.0-alpha.3
     ```
   - Update your project's `foundry.toml` to point to the binary:
     ```toml
     [profile.solx]
     solc_version = "../binaries-solx/solx-macosx-v0.1.0-alpha.3"
     ```

5. **Run benchmarks and submit PR:**
   ```bash
   # Generate gas reports and build dashboard
   ./compare.sh my-contracts
   ```
   - Create a new branch: `git checkout -b add/my-contracts`
   - Commit your changes
   - Push and create a PR
   - Fill out the PR template with:
     - Contract details and source
     - Test coverage information
     - Interesting benchmark findings
     - Any edge cases or observations

---

## 📊 Running Benchmarks

The `compare.sh` script automates the entire process of generating gas reports and building the visualization dashboard:

```bash
./compare.sh my-contracts
```

This will:
1. Read the solc version from your project's `foundry.toml`
2. Extract the solx version from the binary path
3. Generate gas reports for both compilers in `reports/my-contracts/`:
   - `gas-report-solc-{version}.json`
   - `gas-report-solx-{version}.json`
4. Build the interactive dashboard automatically

After the script completes:
1. Open `dashboard/index.html` in your browser
2. Select your project from the dropdown
3. View detailed gas comparisons for:
   - Contract deployment costs
   - Method-by-method gas usage
   - Multiple compiler versions (if available)

The dashboard features:
- Interactive charts showing gas usage comparisons
- Detailed deployment cost analysis
- Method-by-method gas usage breakdown
- Support for multiple compiler versions
- Color-coded visualization (purple for solc, blue for solx)

---

## 💡 Guidelines

- You can add contracts you've written or fork existing open-source ones
- Keep submissions focused on one contract or suite per folder for clarity
- Prefer Solidity 0.8.x for now (matching current Solx compatibility)
- Be descriptive in your PR using the provided template
- Include all relevant compiler settings in your `foundry.toml`
- Make sure all tests pass with both compilers before submitting

## 📢 Got Feedback?

[Join the conversation on Telegram](https://t.me/+75Mv1Nh6SKEzNTAy) if you find bugs, have questions, or want to help build out better tools.
