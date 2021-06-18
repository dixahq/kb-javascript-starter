# Elevio KB JavaScript starter

This repo provides a basis for your custom Elevio KB.

## Quick Start Guide

The best place to start is the [Quick Start Guide](https://kb-kit.elevio.help/en/articles/8).

## Installation

```bash
git clone git@github.com:dixahq/kb-javascript-starter.git
```

## `settings.json` file

This file gives you control over certain features in your Knowledge Base.

For detailed information on `settings.json` please visit our documentation: [ClientSettings](https://kb-kit.elevio.help/en/articles/81#clientsettings) and the [Quick Start Guide](https://kb-kit.elevio.help/en/articles/8)

## .env

When you want to work on a KB you will need to create a .env file in that repo. This file is git ignored so you will have to create it for each KB you work on.

There is an example .env file named .env.example in the root dir.

To get the TOKEN you you will need to log into HQ as the account of the company you want to publish a KB for. Then visit the URL https://app.elev.io/token and grab the Permanent key.

## Deploying / Previewing

### Saving a version

See [Deployment](https://kb-kit.elevio.help/en/articles/11-deployment) for more details

When you want to save a version of the KB you are working on to see it working on production you can run the following command.

```
npm run save
```

Make sure you run this from inside the directory containing the KB.

It will print out link that you can use to preview this version.

### Deploying a version

Once you are happy with the version you have previewed you can then set that version to be the live version by running the command

```
npm run deploy
```

It will ask you to select a saved version.
