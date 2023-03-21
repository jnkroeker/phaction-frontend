export type UriString = string
export type UniqueString = string 
export type EntityId = number | UniqueString

export type Category = "Cycling" | "Skiing" | "CrossFit"
export type DateIsoString = string

export type Post = {
    id: EntityId
    date: DateIsoString
    category: Category
    title: string
    lead: string
    content: string
    image: UriString
    source: UriString
}