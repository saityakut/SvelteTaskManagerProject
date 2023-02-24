import { derived } from "svelte/store";
import { persistStore } from "./persist_store";


const initial = [
    {
        id: 1,
        title: "github düzenleme",
        description: 'dsfljkdsfjkdsffkjlds',
        personel: ['All team'],
        deadline: '05/04/2022',
        isCompleted: false,
    },
    {
        id: 2,
        title: "github düzenleme2",
        description: 'dsfljkdsfjkdsffkjlds',
        personel: ['All team', 'sait'],
        deadline: '05/04/2022',
        isCompleted: true,
    },
    {
        id: 3,
        title: "github düzenleme3",
        description: 'dsfljkdsfjkdsffkjlds',
        personel: ['All team'],
        deadline: '05/04/2022',
        isCompleted: false,
    },
    {
        id: 4,
        title: "github düzenleme4",
        description: 'dsfljkdsfjkdsffkjlds',
        personel: ['All team'],
        deadline: '05/04/2022',
        isCompleted: true,
    },

];
const memberInitial = ['All Team'];

export const allTasks = persistStore('data',initial);

export const members = persistStore('members', memberInitial);

export const completeed = derived(
    allTasks,
    $allTasks => $allTasks.filter(task => task.isCompleted == true)
);

export const inCompleteed = derived(
    allTasks,
    $allTasks => $allTasks.filter(task => task.isCompleted == false)
);