export type MatchupSide = Readonly<{
  name: string;
  owner: string;
  score: string;
  win: boolean;
}>;

export type DraftAsset = Readonly<{
  sym: string;
  kind: string;
  price: string;
  chg: string;
  up: boolean;
}>;

export type StandingRow = Readonly<{
  rank: number;
  team: string;
  owner: string;
  pts: string;
  you: boolean;
}>;

export type LegendRow = Readonly<{
  rank: number;
  name: string;
  owner: string;
  season: string;
  winnings: string;
  you: boolean;
}>;

export type TickerPair = readonly [string, string];

export type NavItem = Readonly<{ label: string; href: string }>;

export type HowItWorksStep = Readonly<{
  id: "draft" | "score" | "compete" | "stakes";
  n: string;
  title: string;
  body: string;
}>;

export type RosterLimitBullet = readonly [string, string];

export const landingContent = {
  nav: [
    { label: "How it works", href: "#how" },
    { label: "Scoring", href: "#scoring" },
    { label: "Legends", href: "#legends" },
    { label: "Stakes", href: "#stakes" },
  ] as const satisfies readonly NavItem[],

  matchup: {
    you: { name: "Melt-Up Capital", owner: "You", score: "+10.1%", win: true },
    opp: { name: "Diamond Hands FC", owner: "Jordan", score: "+6.8%", win: false },
  } as const satisfies Readonly<{ you: MatchupSide; opp: MatchupSide }>,

  draftPool: [
    { sym: "BTC", kind: "Bitcoin", price: "$71,204", chg: "+1.38%", up: true },
    { sym: "ETH", kind: "Ethereum", price: "$3,842", chg: "-1.05%", up: false },
    { sym: "SOL", kind: "Solana", price: "$198.62", chg: "+4.71%", up: true },
    { sym: "XRP", kind: "Ripple", price: "$0.62", chg: "+0.63%", up: true },
    { sym: "AVAX", kind: "Avalanche", price: "$34.80", chg: "+3.15%", up: true },
    { sym: "LINK", kind: "Chainlink", price: "$14.92", chg: "-0.88%", up: false },
  ] as const satisfies readonly DraftAsset[],

  standings: [
    { rank: 1, team: "Steady Gains", owner: "Priya · 3–0", pts: "+54.2%", you: false },
    { rank: 2, team: "Melt-Up Capital", owner: "You · 2–1", pts: "+41.7%", you: true },
    { rank: 3, team: "Diamond Hands FC", owner: "Jordan · 2–1", pts: "+38.9%", you: false },
    { rank: 4, team: "Sell The News", owner: "Marcus · 1–2", pts: "+22.0%", you: false },
  ] as const satisfies readonly StandingRow[],

  legends: [
    { rank: 1, name: "Steady Gains", owner: "Priya", season: "+184.6%", winnings: "$12,400", you: false },
    { rank: 2, name: "Melt-Up Capital", owner: "You", season: "+142.3%", winnings: "$7,850", you: true },
    { rank: 3, name: "Volatility Vault", owner: "Andre", season: "+121.9%", winnings: "$6,100", you: false },
    { rank: 4, name: "Diamond Hands FC", owner: "Jordan", season: "+98.4%", winnings: "$4,250", you: false },
    { rank: 5, name: "Sell The News", owner: "Marcus", season: "+76.1%", winnings: "$2,900", you: false },
  ] as const satisfies readonly LegendRow[],

  ticker: [
    ["BTC", "+1.38%"],
    ["SOL", "+4.71%"],
    ["ETH", "-1.05%"],
    ["XRP", "+0.63%"],
    ["AVAX", "+3.15%"],
    ["LINK", "-0.88%"],
    ["DOGE", "+2.03%"],
    ["ADA", "+0.94%"],
  ] as const satisfies readonly TickerPair[],

  howItWorksSteps: [
    {
      id: "draft",
      n: "01",
      title: "Draft",
      body: "Each player builds a roster from a shared pool of eligible cryptocurrencies. Snake draft against friends, or auto-fill against strangers matched into a public league.",
    },
    {
      id: "score",
      n: "02",
      title: "Score",
      body: "Rosters are scored on relative price performance over a set window — a weekend, a week, a full season. Every asset in the pool trades 24/7, so the scoreboard updates on Saturday night the same as Tuesday afternoon.",
    },
    {
      id: "compete",
      n: "03",
      title: "Compete",
      body: "Leagues run as paired weekly matchups (classic fantasy format) or as a standings table across a full season, with playoffs at the end.",
    },
    {
      id: "stakes",
      n: "04",
      title: "Stakes",
      body: "Free leagues for bragging rights; paid leagues with a buy-in and a prize pool for players who want something on the line.",
    },
  ] as const satisfies readonly HowItWorksStep[],

  rosterLimits: [
    ["6 crypto slots", "Build a complete lineup from majors and altcoins."],
    ["Majors or alts", "Mix Bitcoin, Ethereum, and Solana with higher-volatility altcoins."],
    ["Update weekly", "Set your roster before the clock runs out each scoring window."],
  ] as const satisfies readonly RosterLimitBullet[],

  freeLeagueFeatures: [
    "Unlimited private leagues with friends",
    "Public leagues with auto-matched owners",
    "Full seasons, playoffs, and trophy history",
    "Bragging rights, duly enforced",
  ] as const,

  stakedLeagueFeatures: [
    "Buy-ins denominated in dollars",
    "Prize pool paid out automatically at season end",
    "Transparent on-chain ledger of entries and payouts",
    "Same draft, same scoring — real stakes",
  ] as const,
} as const;
