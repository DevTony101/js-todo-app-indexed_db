# Contributing to TO-DO IndexedDB Web App

I'm really glad you want to contribute to this little project! Before you continue, here are some things you have to take into consideration:

- This project uses **vanilla** JavaScript
- This project uses **Bulma** as its CSS framework
- This project uses **webpack**
- This project is deployed on **Netlify**
- This project was made as a complement for a tutorial on how to use the **IndexedDB API**, therefore, the code *must* be as clear as possible, more on that in the next section

## Where do I start?

**Before** forking the project, see the list of issues and ask to be assigned to one of them. If you think you could do something equally interesting that is not listed there,
open a new issue.

### Setup local project

1. Star this project
2. Create a fork of this project
3. Clone the project
```
git clone https://github.com/<YOUR_GITHUB_USERNAME>/js-todo-app-indexed_db.git
```
4. Install the dependencies using the following command
```
cd js-todo-app-indexed_db
npm i
```

From there you have two options:

- Manually compiling the code:
```
npm run dev
```

- Or start a local development server with hot reloading (**recommended**):
```
npm run start
```

### Committing changes

As mentioned above, this project must be beginner friendly for those who seek a sample project that uses the **IndexedDB** api, hence, it is **imperative** that you:

- Use a consistent code style
- Use semantic function names
- Make explicit comments inside your functions that explains what does it do

If you think your changes meets the previous requirements *and* it solves one of the listed issues, go ahead and **commit** your changes in a separate **branch** using the
following commands:

```
git checkout -b <NAME-OF-THE-ISSUE-SOLVED>
git add .
git commit -m "Fix: <ISSUE>"
```

Additionally, if your contribution introduces a new functionality to the application, make sure to write about it on the [**features** section on the README file](https://github.com/DevTony101/js-todo-app-indexed_db#features).

### Pushing changes

When you are ready, push your changes to GitHub using the following command:

```
git push origin <NAME-OF-THE-ISSUE-SOLVED>
```

And afterwards create a new **pull request** as explained in [these instructions](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).
