# Contributing to solx-solc-benchs

Thank you for your interest in contributing to the solx vs solc benchmark suite! This document will guide you through the process of adding new projects and running benchmarks.

## 📦 Dependency Management

This repository uses Git submodules to manage dependencies. All dependencies are tracked in a single `.gitmodules` file at the root of the repository. This ensures:
- Dependencies are tracked at specific versions
- Dependencies are properly shared across projects
- The `lib/` folders are not committed to the repository

### Setting Up Dependencies

After cloning the repository, initialize all submodules:

```bash
# Initialize and update all submodules recursively
git submodule update --init --recursive
```

## 🛠 Adding a New Project

1. **Fork and clone this repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/solx-solc-benchs
   cd solx-solc-benchs
   ```

2. **Create your project from the template:**
   ```bash
   # Replace 'my-contracts' with your project name (e.g., erc20, nft-marketplace)
   cp -r template-foundry-project my-contracts
   cd my-contracts
   ```

3. **Add dependencies:**
   > ⚠️ Important: Always add dependencies from the root of the repository to maintain a single `.gitmodules` file.
   
   From the root directory:
   ```bash
   # Add forge-std (required for all projects)
   git submodule add https://github.com/foundry-rs/forge-std.git my-contracts/lib/forge-std
   
   # Add other common dependencies as needed:
   # For OpenZeppelin contracts:
   git submodule add https://github.com/OpenZeppelin/openzeppelin-contracts.git my-contracts/lib/openzeppelin-contracts
   # For Solady:
   git submodule add https://github.com/vectorized/solady.git my-contracts/lib/solady
   ```

4. **Add your contracts and tests:**
   - Place contracts in `my-contracts/src/`
   - Add tests in `my-contracts/test/`
   - Ensure all tests pass with both compilers

5. **Setup solx compiler:**
   - Download the latest version from [the releases page](https://github.com/matter-labs/solx/releases)
   - Add it to the `binaries-solx` folder:
     ```bash
     mkdir -p binaries-solx
     mv path/to/downloaded/solx-macosx-v0.1.0-alpha.3 binaries-solx/
     chmod +x binaries-solx/solx-macosx-v0.1.0-alpha.3
     ```
   - Update your project's `foundry.toml`:
     ```toml
     [profile.default]
     solc = "0.8.28"  # or your preferred version

     [profile.solx]
     solc_version = "../binaries-solx/solx-macosx-v0.1.0-alpha.3"
     ```

6. **Run benchmarks:**
   ```bash
   # From the root directory
   ./compare.sh my-contracts
   ```
   This will:
   - Generate gas reports in `reports/my-contracts/`
   - Build the dashboard automatically

7. **Submit your PR:**
   ```bash
   git checkout -b add/my-contracts
   git add .gitmodules my-contracts/ reports/my-contracts/
   git commit -m "Add my-contracts project"
   git push origin add/my-contracts
   ```
   - Create a PR and fill out the template
   - Include interesting findings or observations

## 💡 Guidelines

- Focus on Solidity 0.8.x contracts (current Solx compatibility)
- Keep projects focused and well-documented
- Ensure all tests pass with both compilers
- Add meaningful test cases that exercise different aspects of the contracts
- Include gas-intensive operations to make benchmarks meaningful

## 🔍 Common Issues

1. **Dependency already exists:**
   If you get an error that a submodule already exists, it means another project is already using it. You can reuse the existing submodule:
   ```bash
   # From the root directory
   git submodule update --init --recursive my-contracts/lib/dependency-name
   ```

2. **Wrong dependency path:**
   Always add submodules from the root directory and include the full path to your project's lib folder:
   ```bash
   # ✅ Correct (from root):
   git submodule add https://github.com/foundry-rs/forge-std.git my-contracts/lib/forge-std
   
   # ❌ Wrong (from project directory):
   git submodule add https://github.com/foundry-rs/forge-std.git lib/forge-std
   ```

3. **Missing dependencies:**
   If you see "dependency not found" errors, make sure to initialize submodules:
   ```bash
   git submodule update --init --recursive
   ```
