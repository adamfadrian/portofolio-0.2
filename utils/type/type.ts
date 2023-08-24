import { StaticImageData } from "next/image"

export interface Project {
    id: number
    title: string
    description?: string
    image?: StaticImageData
    logo: string
    link?: string
}
