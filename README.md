# Wordpress | Docker | React

## Device Setup

In order to setup and run this project you will need `node`, `yarn`, and a few extensions installed. If not completed previously, the best way to do this is as follows.

<details>

<summary>Installing node, yarn, and extensions</summary>

**Use `nvm` to install `node`**
1. `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
    - Clones the nvm repository to `~/.nvm` and adds the source line to your profile (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or` ~/.bashrc`).
2. `nvm install --lts`
    - Installs the latest `node` version.

[More information on the above process.](https://stackoverflow.com/questions/28017374/what-is-the-suggested-way-to-install-brew-node-js-io-js-nvm-npm-on-os-x#answer-50266406)

**Install `yarn` globally**

Follow the steps outlined here: [Yarn install](https://yarnpkg.com/getting-started/install)

**Install `PHP` globally** 

Follow the steps outlined here: [PHP install](https://www.php.net/manual/en/install.php)

**Install `Docker`**

Follow the steps outlined here: [Docker Install](https://docs.docker.com/desktop/)
</details>

## Get Started
<summary> Install Dependencies (do this before running the project)</summary>
  ```
    yarn deps
  ```
</details>
<details>
<summary> Running the project</summary>
  ```
    yarn start
  ```
  This project will be run on localhost:8000
</details>
<details>



<summary>Git (Branches, PR's, Commits etc.)</summary>

### Branch Names & Pull Requests

Pull Requests and Branch Names should both follow the pattern below:

```
issue code/issue name
```

Real world examples can look like this:

```
WAP-58/remove-70-30
```

```
WAP-55/update-blog-header
```

**Outliers**

If a branch or pull request is not directly related to a card, use the format:

```
type/name-of-changes
```

Real world examples can look like this:

```
feat/adding-task-runner
```

```
chore/updating-packages
```

### Commit Standards

When committing within this project we use `commitlint` to parse commit messages. 
`commitlint` checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org).

In general the pattern mostly looks like this:

```sh
type(scope?): subject  #scope is optional
```

Real world examples can look like this:

```
chore: fix linting issues
```

```
docs(git): explained new standards
```

```
feat(blog): add comment section
```

### Common Types

Common types according to [commitlint-config-conventional (based on the the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum) can be:

- **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, yarn)
- **ci:** Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **chore:** Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **docs:** Documentation only changes
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **test:** Adding missing tests or correcting existing tests

More information on this standard can be found [here.](https://github.com/conventional-changelog/commitlint)

</details>
