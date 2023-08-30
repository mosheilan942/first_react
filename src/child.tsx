interface child {
    getDate: (date: string) => void
}

export default function fromchild(props: child): JSX.Element {
    return <div>
        <button onClick={() => props.getDate("simi")}>Press me</button>
        <button onClick={() => props.getDate("loziny")}>Press me</button>
        </div>
}



