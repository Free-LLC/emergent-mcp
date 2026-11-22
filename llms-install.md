# Installing the Emergent Technologies MCP server

This is a hosted, remote MCP server. There is nothing to clone, build or install, and it needs no API key or sign-in.

- Endpoint: `https://emergenttechnologies.ai/mcp` (Streamable HTTP). `https://emergent.is/mcp` serves the same agent.
- All eight tools are read-only.

## Cline

Add this entry to `cline_mcp_settings.json` (Cline: MCP Servers > Configure):

```json
{
  "mcpServers": {
    "emergent": {
      "type": "streamableHttp",
      "url": "https://emergenttechnologies.ai/mcp",
      "disabled": false
    }
  }
}
```

## Check that it works

Call `about_emergent` (no arguments) or `ask_emergent` with `{"question": "What does Emergent do?"}`. Both return text with source links.

## Any other MCP client

Point the client at `https://emergenttechnologies.ai/mcp` as a remote (Streamable HTTP) server with no authentication.
