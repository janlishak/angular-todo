export interface Task {
    title: string;
    completed: boolean;
    id?: number;
};

export const TASKS: Task[] = [
    {
        title: "go to sleep early",
        id: 0,
        completed: false,
    },
    {
        title: "do the dishes",
        id: 1,
        completed: true,
    },
    {
        title: "read",
        id: 2,
        completed: false,
    }
]