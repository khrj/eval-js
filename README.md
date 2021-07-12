<div align="center">
    <img src="assets/logo.svg" width="400" height="400" alt="JS logo with run button on top-left">
    <h1>eval-js</h1>
    <p>
        <b>Tiny bot allowing JS execution via Slack</b>
    </p>
    <p>
        <img alt="build status" src="https://img.shields.io/github/workflow/status/khrj/eval-js/Deno?label=checks" >
        <img alt="language" src="https://img.shields.io/github/languages/top/khrj/eval-js" >
        <img alt="code size" src="https://img.shields.io/github/languages/code-size/khrj/eval-js">
        <img alt="issues" src="https://img.shields.io/github/issues/khrj/eval-js" >
        <img alt="license" src="https://img.shields.io/github/license/khrj/eval-js">
        <img alt="version" src="https://img.shields.io/github/v/release/khrj/eval-js">
    </p>
    <br>
    <br>
    <br>
</div>

> WARNING: This is not for any production use whatsoever. This bot uses eval(), which is highly unsafe. Although Deno has a sandbox and the code tries to prevent accessing the `Deno` object, you should still run this on an isolated VM. The author disclaims any liability, see LICENSE

## Running

```bash
deno run --allow-net index.ts
```

## Supporters

[![Stargazers repo roster for @khrj/eval-js](https://reporoster.com/stars/khrj/eval-js)](https://github.com/khrj/eval-js/stargazers)

[![Forkers repo roster for @khrj/eval-js](https://reporoster.com/forks/khrj/eval-js)](https://github.com/khrj/eval-js/network/members)

## Related

- [Slack Info Bot](https://github.com/khrj/slack-info-bot)
- [Deno Slack SDK](https://github.com/slack-deno/deno-slack-sdk)
- [Deno modules](https://github.com/khrj/deno-modules)
