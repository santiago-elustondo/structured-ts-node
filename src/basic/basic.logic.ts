export type WithRequired
  <Obj extends Object, ReqKeys extends keyof Obj> 
    = Obj & { [ReqKey in ReqKeys]-?: Obj[ReqKey] }
// type ExampleWithOptionals = { a:number, b?:number, c?:number }
// type ExampleRequiredKeys = 'b' | 'c'
// const exampleValue = { a: 1, b: 2, c: 3 }
// const example: WithRequired<ExampleWithOptionals, ExampleRequiredKeys> = exampleValue

export const merge = 
  <Combination extends Object>(
    ...objs: Partial<Combination>[]
  ): Combination => 
    Object.assign({}, ...(objs as any)) 
// const examplePartial1 = { a: 1, x: 'e' }
// const examplePartial2 = { b: 2 }
// type ExampleCombination = { a:number, b:number }
// const example = merge<ExampleCombination>(examplePartial1, examplePartial2)
  
export const keys = 
  <Obj extends Object>(obj: Obj): (keyof Obj)[] => 
    Object.keys(obj) as (keyof typeof obj)[]
// const example = keys({ e: 'r', t: 'f' })

export const objectAsKeyValuePairs = 
  <Obj extends Object>(obj: Obj): 
    (({ [Key in keyof Obj]: { key: Key, value: Obj[Key] } })[keyof Obj])[] => 
      keys(obj).map(key => ({ key, value: obj[key] }))
// const example = objectAsKeyValuePairs({ a:1, b:2 })

export const withDefaults = 
  <Model> (
    definedProps: Partial<Model>, 
    defaultProps: Partial<Model>
  ): Model =>
    merge(definedProps, objectAsKeyValuePairs(defaultProps)
      .reduce<Partial<Model>>((acc, { key, value: defaultValue }) => {
        const definedValue = definedProps[key]
        return { ...acc, [key]: definedValue || defaultValue }
      }, {}))
// type ExampleModel = { a:number, b:number, c:number }
// const exampleDefaults = { b: 2 }
// const example = withDefaults<ExampleModel>({ a:1 }, exampleDefaults)