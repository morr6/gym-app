import { createAsyncThunk } from '@reduxjs/toolkit';

const avatarUrl = 'https://previews.123rf.com/images/fokaspokas/fokaspokas1803/fokaspokas180300164/96751599-business-man-icon-white-icon-with-shadow-on-transparent-background.jpg';

const categories = [
    {
        id: 1,
        name: 'Biceps',
        avatar: avatarUrl,
        exercises: [
            { id: 1, name: 'Uginanie hantli stojąc' },
            { id: 2, name: 'Modlitewnik' },
            { id: 3, name: 'Podciąganie podchwytem' },
            { id: 4, name: 'Uginanie sztangi stojąc' },
            { id: 5, name: 'Uginanie hantli' },
        ],
    },
    {
        id: 2,
        name: 'Klata',
        avatar: avatarUrl,
        exercises: [
            { id: 7, name: 'Wyciskanie sztangi leząc' },
            { id: 8, name: 'Pompki' },
        ],
    },
    {
        id: 3, name: 'Nogi', avatar: avatarUrl, exercises: [],
    },
    {
        id: 4,
        name: 'Plecy',
        avatar: avatarUrl,
        exercises: [
            { id: 9, name: 'Podciągnie nachwytem' },
        ],
    },
];

export const fetchCategories = createAsyncThunk(
    'exercises/fetchCategories',
    async () => {
        try {
            // eslint-disable-next-line no-undef
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();

            return categories;
        } catch (error) {
            throw Error(error);
        }
    },
);

export const addCategory = createAsyncThunk(
    'exercises/addCategory',
    async ({ name, avatar }: {name: string, avatar: string}) => {
        try {
            // eslint-disable-next-line no-undef
            await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    avatar,
                }),
            });
        } catch (error) {
            throw Error(error);
        }
    },
);
