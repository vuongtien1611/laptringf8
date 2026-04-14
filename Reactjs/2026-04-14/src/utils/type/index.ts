interface Style{
    [key: string]: string;
}


interface column {
    value: string,
    text: string,
    style: Style,
}

interface row {
    id: number,
    [key: string]: string
}

interface student extends row{
    id: number,
    name: string,
    age?: number,
    class?: string,
    address?: string,
}

export type{
    column,
    row,
    student,
}