# MUD template with p12 editor

## Get Start

require:

- windows 10
- node = 16
- pnpm = 8
- p12 editor >= v0.27.0.0

clone the repo

```powershell
git clone https://github.com/ProjectTwelve/mud-template-p12-editor.git
```

init submodule

```powershell
git submodule update --init --recursive
```

start local chain and deploy contracts

```powershell
pnpm dev:contracts
```

open p12 editor and open project

click `Run` in p12 editor to preview game


# License

Licensed under [MIT](./LICENSE)