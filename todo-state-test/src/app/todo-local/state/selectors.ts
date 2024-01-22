import { createSelector } from "@ngrx/store";
import { ITodoState } from "../types/todo.state.interface";
import { todoFeatureKey } from "./reducers";
import { IAppState } from "../../shared/types/appState,interface";

export const selectFeatureTodos = (state: IAppState) => state.todoFeatureKey;
//selector have projector path to return that piece of state
// export const selectorTodos = (state: { todoFeatureKey: ITodoState }) => state.todoFeatureKey.todos;
export const selectorTodos = createSelector(selectFeatureTodos, (state) => state.todos);
export const selectorError = (state: { todoFeatureKey: ITodoState }) => state.todoFeatureKey.error;