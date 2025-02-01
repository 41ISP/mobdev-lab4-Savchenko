export interface ITranslate {
    head: Head
    def: Def[]
    nmt_code: number
    code: number
  }
  
  export interface Head {}
  
  export interface Def {
    text: string
    pos: string
    gen: string
    anm: string
    tr: Tr[]
  }
  
  export interface Tr {
    text: string
    pos: string
    fr: number
    ts: string
    syn?: Syn[]
    mean?: Mean[]
  }
  
  export interface Syn {
    text: string
    pos: string
    fr: number
    ts: string
  }
  
  export interface Mean {
    text: string
  }