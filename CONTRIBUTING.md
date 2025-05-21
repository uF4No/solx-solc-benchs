# Contributing to solx-solc-benchs

Thank you for your interest in contributing to the solx vs solc benchmark suite! This document will guide you through the process of adding new projects and running benchmarks.

## 📦 Dependency Management

This repository uses Git submodules to manage dependencies. This approach ensures that:
- Dependencies are tracked at specific versions
- The `lib/` folder is not committed to the repository
- Dependencies can be easily updated and managed

When adding a new project, follow these steps to manage dependencies:

1. **Add `.gitignore` entry:**
   ```
   lib/
   ```

2. **Install dependencies as submodules:**
   ```bash
   # Install forge-std (required for all projects)
   forge install foundry-rs/forge-std
   
   # Install other common dependencies
   # For OpenZeppelin contracts:
   forge install openzeppelin/openzeppelin-contracts
   # For Solmate:
   forge install transmissions11/solmate
   # For Solady:
   forge install vectorized/solady
   ```

3. **Verify submodules are properly configured:**
   ```bash
   # Check submodule status
   git submodule status
   
   # If needed, initialize and update submodules
   git submodule update --init --recursive
   ```

4. **When committing changes:**
   - The `.gitmodules` file should be committed
   - The `lib/` folder should be ignored
   - Submodule references will be tracked automatically

Note: If you get a "command not found" error with forge, make sure you have Foundry installed and your PATH is configured correctly.

### Installing All Project Dependencies

If you've cloned this repository and want to set up all existing projects, you can initialize and update all submodules at once:

```bash
# Initialize and update all submodules recursively
git submodule update --init --recursive

# Verify all submodules are properly initialized
git submodule status
```

This will install dependencies for all projects including:
- `forge-std` for all projects
- `openzeppelin-contracts` for ERC token projects
- `solady` for optimized implementations
- `solmate` for minimal implementations

If you're only interested in a specific project, you can initialize just that project's submodules:

```bash
# For example, to set up just the erc20 project:
git submodule update --init --recursive erc20/lib/forge-std erc20/lib/solady

# Or for the erc721 project:
git submodule update --init --recursive erc721/lib/forge-std erc721/lib/openzeppelin-contracts
```

## 🛠 Adding a New Project

1. **Fork this repository**

2. **Create your project from the template:**
   ```bash
   # Replace 'my-contracts' with your project name (e.g., erc20, nft-marketplace, etc.)
   cp -r ./template-foundry-project my-contracts/
   ```

3. **Set up dependencies:**
   ```bash
   cd my-contracts/
   
   # Remove any existing lib directory
   git rm -r --cached lib/ || true
   rm -rf lib/
   
   # Install forge-std (required)
   forge install foundry-rs/forge-std
   
   # Install other dependencies as needed, for example:
   forge install openzeppelin/openzeppelin-contracts  # For ERC standards
   forge install vectorized/solady                    # For gas optimizations
   forge install transmissions11/solmate              # For minimal implementations
   ```

4. **Add your contracts and tests:**
   - Place contracts in `my-contracts/src/`
   - Add tests in `my-contracts/test/`
   - Update `foundry.toml` if needed (note that the compare.sh script will run with and without the optimizer and via-ir settings so you don't need to worry about it)
   - Ensure `lib/` is in your `.gitignore`

5. **Setup solx compiler:**
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

6. **Run benchmarks and submit PR:**
   ```bash
   # Generate gas reports and build dashboard
   ./compare.sh my-contracts
   ```
   - Create a new branch: `git checkout -b add/my-contracts`
   - Commit your changes (including `.gitmodules` but excluding `lib/`)
   - Push and create a PR
   - Fill out the PR template with:
     - Contract details and source
     - Test coverage information
     - Interesting benchmark findings
     - Any edge cases or observations

## 💡 Guidelines

- You can add contracts you've written or fork existing open-source ones
- Keep submissions focused on one contract or suite per folder for clarity
- Prefer Solidity 0.8.x for now (matching current Solx compatibility)
- Be descriptive in your PR using the provided template
- Include all relevant compiler settings in your `foundry.toml`
- Make sure all tests pass with both compilers before submitting 
