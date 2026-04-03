import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IBoard } from "../../types";

type TBoardsState = {
    modalActive: boolean;
    boardArray: IBoard[]
}

type TAddBoardAction = {
    board: IBoard;
}

const initialState : TBoardsState = {
    modalActive: false,
    boardArray: [
        {
            boardId: 'board-0',
            boardName: "천 번쨰 게시물",
            lists: [
                {
                    listId: "list-0",  
                    listName: "List 1",
                    tasks: [
                        {
                            taskId: "task-0",
                            taskName: "Task 1",
                            taskDescription: "Description",
                            taskOwner: "John",
                        },
                        {
                            taskId: "task-1",
                            taskName: "Task 2",
                            taskDescription: "Description",
                            taskOwner: "John",
                        }
                    ]
                },
                {
                    listId: "list-1",
                    listName: "List 2",
                    tasks: [
                        {
                            taskId: "task-3",
                            taskName: "Task 3",
                            taskDescription: "Description",
                            taskOwner: "John",
                        }
                    ]
                }
            ]
        }
    ]
}

const boardsSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        addBoard: (state, {payload} : PayloadAction<TAddBoardAction>) => {
            state.boardArray.push(payload.board);
        }

    }
})

export const {addBoard} = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;