import { Button } from "./style"

type SourceProps = {
    image: string
}

export const Source = ({ image }: SourceProps) => {
    return (
        <Button>
            <img src={image}/>
        </Button>
    )
}