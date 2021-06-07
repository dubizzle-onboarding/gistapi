## Status update

Functionality included:

- [x] Create a list of public gist available
- [x] Search Gists by the username
- [x] Use basic state management for getting/setting username and API calls
- [x] Search input is debounced so as to not make unnecessary calls
- [x] Show all the relevant meta data available in the response
- [x] Services/Components are isolated
- [x] Git is used for SVC. This repository will be sent as a PR to keep track and verify changes
- [x] **Errors handled for No results (user not found and gists not found), rate limitation**
- [x] **UI similar to provided example [here](https://raw.githubusercontent.com/dubizzle-onboarding/gistapi/main/design_inspiration.png)**
- [x] **Code comments**
- [x] **Type checking. The project is converted to TypeScript to provide IDE type checking**
- [x] **Add tslint/prettier to ensure code quality and consistency**
- [x] **Add mobile responsiveness**
- [x] **Deployment. The deployed version can be found [here](https://gistapi-dubizzle-assessment.vercel.app/)**

In Progress:

- [ ] Unit Tests
- [ ] Better state management using redux

Nice to haves

- [ ] Oauth to reduce rate limiting errors

---

We are on a mission to make the process of buying and selling easier and more convenient - and with your help, it will be possible. But before we work together, we would like to assess your programming abilities.

Please find the small assignment below, that we would like for you to complete in the allotted time. (If you are reading this, the clock is already ticking).

## YOUR TASK: Create an app that fetches (public) user gists from Github

This project should be built using the base project you should clone from [here](https://github.com/dubizzle-onboarding/gistapi).

It uses Github's [Octokit REST API](https://octokit.github.io/rest.js/v18/)

We believe, for an ideal candidate, this should not take more than a couple of hours.

### Whats Expected

Create a list of public gist available.

- Search Gists for the username.
- Use state management to save data and not make duplicate calls.
- Show all the relevant meta data available in the response.
- We do expect you to create and use proper component hierarchy keeping service and components exclusive.
- Please use git version control.

### Good to have

- Proper handling of error message and no results screens.
- Clean UI similar to [this](https://raw.githubusercontent.com/dubizzle-onboarding/gistapi/main/design_inspiration.png).
- Unit Tests.
- Optimised rendering.
- Code comments.
- Type checking of the params.

### Thank you

We thank you for your effort and time and good luck.
