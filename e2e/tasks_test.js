Feature("tasks");

const tasks = new DataTable(['name'])

tasks.add(['Fazer compras'])
tasks.add(['Estudar JavaScript'])
tasks.add(['Ler um livro de node JS'])

Data(tasks).Scenario("deve poder cadastrar uma nova tarefa", ({ I, tasksPage, current }) => {

  const taskName = current.name

  I.deleteByHelper(taskName);
  tasksPage.create(taskName);
  tasksPage.haveTask(taskName);
});

Scenario("não deve cadastrar uma nova tarefa com nome duplicado", ({ I, tasksPage }) => {
    const task = {
      name: "Pagar fatura do cartão",
      is_done: false,
    };

    I.deleteByHelper(task.name);
    I.postTask(task);
    tasksPage.create(task.name);
    tasksPage.popUpHaveText("Task already exists!");
  }
).tag('task duplicada')
