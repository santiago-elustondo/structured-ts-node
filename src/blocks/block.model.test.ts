import { block } from './block.model'

describe('block model', () => {

  it('instantiates with all members', () => {

    const b = block({ id: 'my-id', type: 'Layout' })
    
    // optional props
    expect(b.children).toBeDefined()
    expect(b.data).toBeDefined()
    expect(b.options).toBeDefined()

    // methods
    expect(b.with).toBeDefined()

  })

  it('takes children without mutating', () => {

    const b1 = block({ id: 'my-id-1', type: 'Layout' })
    const b2 = block({ id: 'my-id-2', type: 'Column' })
    const b3 = b1.with([ b2 ])

    // applies children
    expect(b3.children[0]).toBe(b2)

    // no mutations
    expect(b1.children[0]).toBe(undefined)

  })

})