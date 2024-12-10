import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/homePage";
import { TaskBoardPage } from "../pages/TaskBoardPage";
import { CheckTaskTagsatColumnFlow } from "../flows/checkTaskTagsatColumnFlow";
//import testData from '../../testData.json';


test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginToApp();
});

test.describe("Iterative Task Management Tests", () => {
  const testData = require("../testdata/testdata.json");
  for (const [index, data] of testData.entries()) {

    test(`TC${index + 1} - Validate task: ${data.task}`, async ({ page }) => {
      const homePage = new HomePage(page);
      const taskBoardPage = new TaskBoardPage(page);
      const checkTaskTagsatColumnFlow = new CheckTaskTagsatColumnFlow(page);

      const screen = homePage.sideMenuButtons[data.screen];
      const column = taskBoardPage.WebApplicationsColumns[data.column];
      const tags = data.tags.map((tag) => homePage.tags[tag]);

      await checkTaskTagsatColumnFlow.CheckTaskTagsatColumn(
        screen,
        column,
        data.task,
        tags
      );
    });
  }
});
