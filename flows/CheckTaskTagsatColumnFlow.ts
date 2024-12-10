import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/homePage";
import { TaskBoardPage} from "../pages/TaskBoardPage";

export class CheckTaskTagsatColumnFlow {
    private homePage: HomePage;
    private taskBoardPage: TaskBoardPage;

    constructor(page: Page) {
        this.homePage = new HomePage(page);
        this.taskBoardPage = new TaskBoardPage(page);

    }

    testMethod() {
        console.log("This is a test method");
    }

    /**
     * Checks the tags of a task in a specified column on a screen.
     *
     * @param screen - The screen where the task is located.
     * @param column - The column where the task is located.
     * @param task - The task to check.
     * @param column - The column to verify the task in.
     */
    async CheckTaskTagsatColumn(screen: string, column: string, task: string, tags: string[]) {
        console.log('Checking task tags at column');
        console.log(`Screen: ${screen}`);
        console.log(`Column: ${column}`);
        console.log(`Task: ${task}`);
        console.log(`Tags: ${tags}`);
        //STEP 1 Login to Demo App.
        //await this.loginPage.loginToApp();
        //STEP 2 Navigate to "Web Application."
        await this.homePage.clickSideMenuButton(screen);
        //STEP 3 Verify "Implement user authentication" is in the "To Do" column.
        await this.taskBoardPage.verifyTaskInColumn(task, column);
        //STEP 4 Confirm tags: "Feature" "High Priority”
        await this.taskBoardPage.verifyTagForTask(column, task, tags);

    }

}
