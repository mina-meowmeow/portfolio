// Each `body` is an array of paragraph strings, like `about.paragraphs`.
export const posts = [
  {
    slug: 'why-i-turn-numbers-into-narratives',
    title: 'Why I turn numbers into narratives',
    date: '2026-06-12',
    tags: ['Data Storytelling', 'Career'],
    excerpt:
      "A dashboard nobody reads is just a very expensive spreadsheet. Here's what changed how I build them.",
    body: [
      "Early on, I built dashboards the way most people are taught: every metric I could pull, on one screen, sorted by how good the chart looked. Nobody opened them twice.",
      "A better chart library didn't fix it. One question did, and I ask it before touching any data: what does this person need to decide by Friday? Anything that doesn't help with that gets cut or moved to a drill-down.",
      "Now I design the headline number first, like a newspaper editor, and make the supporting detail earn its place underneath. It's slower to build, and it's the only version people actually use.",
    ],
  },
  {
    slug: 'the-cat-tax-on-focus',
    title: 'The cat tax on deep work',
    date: '2026-07-03',
    tags: ['Fun', 'Productivity'],
    excerpt:
      'My cat has strong opinions about which spreadsheets deserve a nap on top of the keyboard.',
    body: [
      "I used to think deep work meant noise-cancelling headphones and a closed door. In practice it means negotiating desk space with a cat who has decided my left wrist is a pillow.",
      "There is an upside. Every time she wants attention I take a five-minute break, which is close to the Pomodoro interval people keep telling me to set a timer for. She's a very judgmental accountability system.",
    ],
  },
  {
    slug: 'learning-cfa-as-a-designer',
    title: 'Learning the CFA curriculum as a design person',
    date: '2026-08-20',
    tags: ['CFA', 'Learning in public'],
    excerpt:
      "Trading Figma shader tutorials for fixed-income formulas this year. Notes from the switch.",
    body: [
      "Most of my professional work sits between data and design, so the CFA curriculum is a different kind of hard. There's no layer panel to hide a mistake in. Either the bond math works out or it doesn't.",
      "What surprised me is how much it resembles dashboard work. A financial statement is also an information hierarchy problem: what's the headline, what's supporting detail, what's noise. Same instinct, different subject.",
    ],
  },
]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug)
}
