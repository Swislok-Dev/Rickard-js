# Discord Bot using JavaScript

The Discord library used in this application is `discordjs`

## Deploying Commands

Need to install `@discordjs/builders`, `@discordjs/rest`, and `discord-api-types`

```shell
npm install @discordjs/builders @discordjs/rest discord-api-types
```

Create a `config.json` file in the root directory.

- `clientId`: your applications's client id
- `guildId`: Your development servers's id
- `commands`: An array of commands to register. The Slash command builder from `@discordjs/builders` is used to build the data for your commands
