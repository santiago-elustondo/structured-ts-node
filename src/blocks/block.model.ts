import { withDefaults } from '@/basic/basic.logic'

export type BlockId = string

export type BlockTypeText = 'PlainText'
export type BlockTypeImage = 'Image'
export type BlockTypeLayout = 'Layout'
export type BlockTypeColumn = 'Column'
export type BlockType = BlockTypeText | BlockTypeImage | BlockTypeLayout | BlockTypeColumn

export type BlockOptionValue = string | number | boolean | string[] | null
export type BlockOptions = { [key: string]: BlockOptionValue }

export type BlockDataValue = string | number | null
export type BlockData = { [key: string]: BlockDataValue }

export type BlockRequiredProps = {
  id: BlockId
  type: BlockType
}

export type BlockOptionalProps = {
  options: BlockOptions
  data: BlockData
  children: Block[]
}

export type MinimalBlock = 
  BlockRequiredProps & Partial<BlockOptionalProps>

export interface BlockMethods {
  with: (children: Block[]) => Block
}

export type Block = 
  BlockRequiredProps & 
  BlockOptionalProps & 
  BlockMethods

export const BLOCK_DEFAULTS = {
  options: {},
  data: {},
  children: []
}

export const BLOCK_METHODS: BlockMethods = {
  with(children: Block[]) { return { ...(this as Block), children } }
}

export const block = (minimal: MinimalBlock): Block =>
  withDefaults({ ...minimal, ...BLOCK_METHODS }, BLOCK_DEFAULTS)