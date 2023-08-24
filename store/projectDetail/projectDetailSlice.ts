import { ReducerPayload } from "./../type/ReducerPayload";
import { createSlice } from "@reduxjs/toolkit";
import { projects } from "./../../utils/_data/_project";
import { Project } from "@/utils/type/type";

interface projectDetailInitialState {
  projects: Project | undefined;
}

const projectsInitialState: projectDetailInitialState = {
  projects: undefined,
};

const projectSlice = createSlice({
  name: "project",
  initialState: projectsInitialState,
  reducers: {
    setProject(state, { payload }: ReducerPayload<Project>) {
      state.projects = { ...payload };
    },
    resetProject(state) {
      state.projects = undefined;
    },
  },
});

const projectReducer = projectSlice.reducer;

export const { setProject, resetProject } = projectSlice.actions;

export default projectReducer;
