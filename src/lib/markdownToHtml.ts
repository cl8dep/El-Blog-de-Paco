import remark from "remark";
import html from "remark-html";
//For code syntax highlight
import highlight from "remark-highlight.js";
//For footnotes
import footnotes from "remark-footnotes";
// For tables and tasklists
import gfm from "remark-gfm";
// For emojies
import emoji from "remark-emoji";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(highlight)
    .use(gfm)
    .use(emoji)
    .use(footnotes, { inlineNotes: true })
    .use(html)
    .process(markdown);
  return result.toString();
}
