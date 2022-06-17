import { atom, selector } from "recoil";

export const isDarkAtom = atom({
    key: "isDark",
    default: true,
});

export const minuteState = atom({
    key: "minutes",
    default: 0
});

export const hourSelector = selector<number>({
    key : "hours",
    get: ({get}) => {
        const minutes = get(minuteState);
        return minutes / 60;
    },
    set: ({set}, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minuteState, minutes);
    }
});


// react-beautiful-dnd recoil
interface ITodoState {
    [key: string]: string[];
}
export const toDoState = atom<ITodoState>({
    key: "toDo",
    default: {
        "To Do": ["a", "b"],
        Doing: ["c", "d", "e"],
        Done: ["f"],
    },
});