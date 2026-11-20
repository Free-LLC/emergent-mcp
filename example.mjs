// Call Emergent Technologies' public MCP server with the official MCP client SDK.
// npm install @modelcontextprotocol/client
import { Client, StreamableHTTPClientTransport } from "@modelcontextprotocol/client";

const client = new Client({ name: "example", version: "1.0.0" }, { versionNegotiation: { mode: "auto" } });
await client.connect(new StreamableHTTPClientTransport(new URL("https://emergenttechnologies.ai/mcp")));

const { tools } = await client.listTools();
console.log(tools.map((t) => t.name).join(", "));

const answer = await client.callTool({ name: "ask_emergent", arguments: { question: "How does data licensing work?" } });
console.log(answer.structuredContent ?? answer.content);

await client.close();
