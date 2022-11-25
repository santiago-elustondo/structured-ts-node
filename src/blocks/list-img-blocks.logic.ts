import { Block } from '@/blocks/block.model'

export const listImageBlocks = (block: Block) => {
  if (!block) throw new Error('no block')

  const childBlocks = block.children || []
  const descendantImgBlocks: Block[] = childBlocks.reduce<Block[]>(
    (imgs, child) => imgs.concat(listImageBlocks(child)), [])

  if (block.type !== 'Image') return descendantImgBlocks
  return descendantImgBlocks.concat(block)
}


