import { Page } from "playwright";

export class TaskBoardPage {
  private page: Page;

  public readonly WebApplicationsColumns = {
    toDo: "To Do",
    inProgress: "In Progress",
    review: "Review",
    done: "Done",
  };

  constructor(page: Page) {
    this.page = page;
  }

  async verifyTaskInColumn(task: string, column: string) {
    const columnLocator = this.page.locator(`div:has-text("${column}")`);
    const taskLocator = columnLocator.locator(`div h3:has-text("${task}")`);
    await taskLocator.waitFor({ state: "visible" });
  }

  async verifyTagForTask(column: string, task: string, tags: string[]) {
    const columnLocator = this.page.locator(`div.w-80:has-text("${column}")`);
    const taskLocator = columnLocator.locator(`div.bg-white:has-text("${task}")`);

    for (const tag of tags) {
      console.log(`Verifying tag: ${tag} in task: ${task} in column: ${column}`);
      const tagLocator = taskLocator.locator(`span:has-text("${tag}")`);
      await tagLocator.waitFor({ state: "visible" });
    }
  }
}