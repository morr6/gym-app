export type TExercise = {id: number, name: string}

export type TCategory = {
    id: number;
    name: string;
    exercises: TExercise[]
}

export type TCategories = TCategory[]
