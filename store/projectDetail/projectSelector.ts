import { RootState } from "../RootReducers"

export const getProjectDetails = ({project} : RootState) => {
    return project.projects
}