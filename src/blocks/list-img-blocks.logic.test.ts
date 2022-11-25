import { shallowExamples } from '@/blocks/block.model.examples'
import { listImageBlocks } from './list-img-blocks.logic'

describe('listImageBlocks()', () => {
  const ex = shallowExamples()

  it('lists all image blocks (empty)', () => {
    const images = listImageBlocks(ex.column[0])

    expect(images.length).toBe(0)
  }) 

  it('lists all image blocks (simple)', () => {
    const images = listImageBlocks(
      ex.column[0].with([
        ex.image[0],
        ex.image[1],
        ex.image[2]
      ])
    )

    expect(images.length).toBe(3)
  }) 

  it('lists all image blocks (happy)', () => {
    const images = listImageBlocks(
      ex.column[0].with([
        ex.text[0],
        ex.layout[0].with([
          ex.column[1].with([
            ex.image[0]
          ]),
          ex.column[1].with([
            ex.text[1]
          ])
        ]),
        ex.text[2],
        ex.layout[1].with([
          ex.column[2].with([
            ex.image[1],
            ex.image[2]
          ]),
          ex.column[3].with([
            ex.image[3],
            ex.image[4]
          ])
        ]),
        ex.layout[2].with([
          ex.column[5].with([
            ex.text[2]
          ]),
          ex.column[6].with([
            ex.image[5]
          ])
        ]),
        ex.image[6]
      ])
    )

    expect(images.length).toBe(7)
  }) 

  it('lists all image blocks (edgy)', () => {
    const images = listImageBlocks(
      ex.layout[0].with([
        ex.text[1].with([ ex.image[0] ]),
        ex.image[1].with([ ex.image[2] ]),
        ex.image[3].with([
          ex.layout[1].with([
            ex.column[1].with([ ex.image[4] ])
          ])
        ])
      ])
    )

    expect(images.length).toBe(5)
  }) 

})