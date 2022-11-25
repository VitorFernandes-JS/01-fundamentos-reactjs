interface Props {
    author: string;
    teste: number
}

export function Teste({author, teste}: Props) {
    return (
        <div>
            {author}
            {teste}
        </div>
    )
}