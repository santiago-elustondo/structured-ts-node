import { block } from './block.model'

export const shallowExamples = () => ({
  image: shallowImageBlocks(),
  text: shallowTextBlocks(),
  column: shallowColumnBlocks(),
  layout: shallowLayoutBlocks()
})

export const shallowImageBlocks = () => [

  block({
    type: 'Image',
    id: '5MtmR41yg62NsUj15iKNT3',
    options: {
      url: 'https://cdn.example.org/k.png',
      align: 'left',
      width: 202.02041832669323,
      showLink: true,
      link: 'https://example.org'
    },
    data: {
      width: 4000,
      height: 3000,
    }
  }), 

  block({
    type: 'Image',
    id: 'ukSQ94CrnjhtaW41hEuCTb',
    options: {
      url: 'https://cdn.example.org/a.jpg',
      align: 'center',
      width: '100%',
    },
    data: {
      width: 1200,
      height: 600,
    },
  }), 

  block({
    id: 'yn5TzBIHJOEDWuw08ndOsEDI',
    type: 'Image',
    options: {
      url: 'https://cdn.example.org/c.jpg',
      align: 'center',
      width: '100%'
    },
    data: {
      width: 600,
      height: 450
    }
  }), 

  block({
    id: 'fJ8bWVhwP8zsAV31UpL1Xo',
    type: 'Image',
    options: {
      url: 'https://cdn.example.org/t.png',
      align: 'center',
      width: '100%'
    },
    data: {
      width: 720,
      height: 480
    }
  }), 
  
  block({
    id: 'VMAoIMHISgkGRB7BIHBsz8rK',
    type: 'Image',
    options: {
      url: 'https://cdn.example.org/x.gif',
      align: 'center',
      width: '100%'
    },
    data: {
      width: 3000,
      height: 2000
    }
  }), 
  
  block({
    id: 'KEsvVdFWXkdkSe8dQLa62',
    type: 'Image',
    options: {
      url: 'https://cdn.example.org/p.jpg',
      align: 'right',
      width: '100%',
    },
    data: {
      width: 500,
      height: 700,
    },
  }), 

  block({
    id: '6zzea3Qn4VhKVE3xRjZty8',
    type: 'Image',
    options: {
      url: 'https://cdn.example.org/z.jpg',
      align: 'center',
      width: '100%',
    },
    data: {
      width: 1000,
      height: 600,
    },
  })

]

export const shallowTextBlocks = () => [

  block({
    type: 'PlainText',
    id: 'ea3rb4fdUAjbeestD9bmKc',
    options: {},
    children: [],
    data: {
      text: `Pellentesque habitant morbi tristique 
        senectus et netus et malesuada fames ac turpis egestas. 
        Nam dictum felis id metus tristique sollicitudin 
        eu commodo sapien. Sed ornare egestas justo, 
        sollicitudin tristique ipsum lobortis at.
      `
    }
  }), 
  
  block({
    type: 'PlainText',
    id: 'cab2RFNV74Yhu492ePcpZT',
    options: {},
    children: [],
    data: {
      text: `Vestibulum eu ornare eros. Phasellus ut 
        consequat orci. Maecenas condimentum consectetur dui, 
        id pulvinar augue gravida id. Proin non turpis 
        ac nunc viverra pretium. Vivamus id diam ullamcorper, 
        tincidunt libero id, suscipit tellus. 
        Aliquam in lacus sit amet magna interdum mattis.
      `
    }
  }), 
  
  block({
    id: 'qYqX7WhX2w1ruWL5qWbdXL',
    type: 'PlainText',
    options: {},
    children: [],
    data: {
      text: `Aliquam in lacus sit amet magna interdum mattis. 
        Praesent nec lobortis ex. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Sed sit amet odio ac 
        sem varius placerat.
      `
    }
  })

]

export const shallowColumnBlocks = () => [

  block({
    id: '5fprgzZ56EuHSb7m4Kk5tr',
    type: 'Column'
  }),
  
  block({
    id: '2m4WRKVtwL5R9mmQDoQCNK-column0',
    type: 'Column'
  }),

  block({
    id: '2m4WRKVtwL5R9mmQDoQCNK-column1',
    type: 'Column'
  }),

  block({
    id: 'vKC8kvnPDsDSFYVEXRut2W-column0',
    type: 'Column'
  }),

  block({
    id: 'vKC8kvnPDsDSFYVEXRut2W-column1',
    type: 'Column'
  }),

  block({
    id: 'pjxpWRgfc1upD4SCWp7Gn2',
    type: 'Column'
  }),

  block({
    id: 'nLukTtPtREJUvmMar9xh9F',
    type: 'Column'
  })

]

export const shallowLayoutBlocks = () => [

  block({
    type: 'Layout',
    id: '2m4WRKVtwL5R9mmQDoQCNK',
    options: {
      columns: ['35.1974%', '64.8026%'],
    }
  }),

  block({
    type: 'Layout',
    id: 'vKC8kvnPDsDSFYVEXRut2W',
    options: {
      columns: ['50%', '50%'],
    }
  }),

  block({
    type: 'Layout',
    id: '4qxjDcYSuXBDpkGfr5oguH',
    options: {
      columns: ['71.2171%', '28.7829%'],
    }
  })

]