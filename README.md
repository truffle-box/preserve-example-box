# `truffle preserve` Example box

This box provides a starting point for trying out the new `truffle preserve`
command.

## How to try this out

1. Uninstall any old version of Truffle you might have and install v5.1:
   ```
   $ npm uninstall -g truffle
   $ npm install -g truffle@preserves
   ```

2. Make sure you're in an empty directory and unbox this project:
   ```
   $ truffle unbox preserve-example
   ```

3. Preserve your data!
   ```
   $ truffle preserve ./app --ipfs
   ```
