# Emergent Technologies: MCP server and agent interfaces

[![mcptry](https://mcptry.com/badge/ai.emergenttechnologies/emergent)](https://mcptry.com/servers/ai.emergenttechnologies/emergent) [![mcptry](https://mcptry.com/badge/is.emergent/emergent)](https://mcptry.com/servers/is.emergent/emergent)

Emergent Technologies, Inc. runs two programs: **Emergent Consulting** (AI and automation consulting) and
**Emergent Data Licensing** (licensing a company's institutional knowledge to AI labs). Its own AI agent answers
assistants and other agents directly, from Emergent's published fact book, with sources. Nothing here needs a key or
an account.

This repository is the public reference for those interfaces: endpoints, tools, a working example and the server
entries published to the official MCP Registry. The server itself runs on Emergent's sites; its code is not public.

## Endpoints

| What | emergenttechnologies.ai | emergent.is |
|---|---|---|
| MCP server (Streamable HTTP, read-only tools) | https://emergenttechnologies.ai/mcp | https://emergent.is/mcp |
| MCP server card | https://emergenttechnologies.ai/mcp/server-card | https://emergent.is/mcp/server-card |
| A2A agent card | https://emergenttechnologies.ai/.well-known/agent-card.json | https://emergent.is/.well-known/agent-card.json |
| A2A endpoint (JSON-RPC) | https://emergenttechnologies.ai/a2a | https://emergent.is/a2a |
| AI catalog | https://emergenttechnologies.ai/.well-known/ai-catalog.json | https://emergent.is/.well-known/ai-catalog.json |
| llms.txt | https://emergenttechnologies.ai/llms.txt | https://emergent.is/llms.txt |

Both MCP addresses serve the same agent. MCP Registry names: `ai.emergenttechnologies/emergent` and
`is.emergent/emergent` (see `registry/`).

## Tools

- `ask_emergent`: Emergent's own agent answers a question in plain words and says it is an AI.
- `about_emergent`: who Emergent is, what it does and for whom.
- `search_facts`: keyword search over the fact book, with sources and dates.
- `consulting_offer`: the published description of Emergent's AI and automation consulting.
- `estimate_payout`: the same indicative data licensing range as the website's estimator.
- `check_program_fit`: which program fits, without collecting personal details.
- `partner_program`: the published terms of the referral partner program.
- `start_conversation`: prepares a contact request; it sends nothing until the person confirms on the site.

All tools are read-only.

## Try it

```bash
curl -s https://emergenttechnologies.ai/mcp \
  -H 'content-type: application/json' -H 'accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"ask_emergent","arguments":{"question":"What does Emergent do?"}}}'
```

`example.mjs` makes the same kind of call through the official MCP client SDK.

## Contact

team@emergent.is · https://emergent.is · https://emergenttechnologies.ai
