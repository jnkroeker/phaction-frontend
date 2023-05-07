import { Figure } from "./style"

type SourceProps = {
    image: string
}

export const Source = ({ image }: SourceProps) => {
    return (
        <Figure>
            <img src={image}/>
        </Figure>
    )
}