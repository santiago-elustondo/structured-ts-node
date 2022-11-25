## how to run

- `yarn install`
- `yarn test`

## challenge

Write a function which takes a single parameter, a block, and recursively loops over it looking for blocks with the type `Image`. It should return a flat array of all images.

Each block has:

1. A unique string ID
2. A type - PlainText, Column, Layout, and Image
3. options - an object literal which configures how the block should look and behave
4. data - an object literal where a block can store arbitrary data it needs, this could be the original dimensions of an image or the text in a block.
5. **children** - an array of child blocks. Blocks can be nested inside of each other a bit like the DOM.

In theory the tree could be any depth. 
