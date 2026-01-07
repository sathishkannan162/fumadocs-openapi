import { convertToModelMessages, streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const reqJson = await req.json();

  const result = streamText({
    model: 'xai/grok-4.1-fast-non-reasoning', 
    // tools: {
    //   provideLinks: {
    //     inputSchema: ProvideLinksToolSchema,
    //   },
    // },
    messages: await convertToModelMessages(reqJson.messages, {
      ignoreIncompleteToolCalls: true,
    }),
    toolChoice: 'auto',
  });

  return result.toUIMessageStreamResponse();
}
