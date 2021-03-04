import { App } from "./deps.ts"

const app = new App({
    signingSecret: "---INSERT-YOUR-SIGNING-SECRET-HERE---", // This isn't in .env to prevent eval() from leaking the token
    token: "---INSERT-YOUR-TOKEN-HERE---", // This isn't in .env to prevent eval() from leaking the token
})

const blocklist = [
    "Deno",
]

const logChannel = "C01Q262AYRY"
const ping = "<@U01Q1UWATEE>"

app.event("message", async ({ client, say, message }) => {
    if ("text" in message && message.text?.startsWith(ping)) {
        const toEval = message.text.slice(ping.length)

        await client.chat.postMessage({
            channel: logChannel,
            text: `<@${message.user}>: ${toEval}`,
        })

        for (const block of blocklist) {
            if (toEval.includes(block)) {
                await say("_Forbidden command_")
                return
            }
        }

        try {
            const result = eval(toEval)
            if (result) {
                await say(`\`${result.toString()}\``)
            } else {
                await say("_No output_")
            }
        } catch (e) {
            await say(`\`${e.name ? e.name : ""}: ${e.message} \``)
        }
    }
})

await app.start({ port: 3000 })
console.log("🦕 ⚡️")
