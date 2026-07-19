// WhatsApp Campaigns teaser — v2 "1 main + 3 subsets" (approved standard).
// Built entirely from surviving walkthrough slices + guest title cards
// (backend parked — no live app, no login).
//   MAIN    — WhatsApp marketing run properly; your team keeps the closing chats
//   SUBSET 1 — send properly (official API, approved templates, minutes)
//   SUBSET 2 — know the truth (delivered/read/replied + failure reasons)
//   SUBSET 3 — replies answer themselves (catalog-trained AI 24×7, humans close)
// Hook names pain + product first; three numbered chapters; close restates
// main + subsets + pricing model + demo CTA. Nothing else.
import { ACCT } from './lib/scene.mjs';

const HOOK_HTML = `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{width:1366px;height:768px;font-family:'Segoe UI',Arial,sans-serif;background:radial-gradient(120% 120% at 20% 0%,#0b3323 0%,#07271b 55%,#03140d 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#fff}
  .kicker{font-size:19px;font-weight:700;color:#25D366;letter-spacing:3px;text-transform:uppercase}
  h1{font-size:56px;font-weight:800;letter-spacing:-1.5px;line-height:1.16;max-width:86%;margin-top:22px}
  .sub{font-size:26px;font-weight:400;color:rgba(255,255,255,.78);margin-top:26px;max-width:72%;line-height:1.45}
</style></head><body>
  <div class="kicker">WhatsApp Campaigns &middot; Official Business API</div>
  <h1>Messages sent.<br>Do you know who replied?</h1>
  <div class="sub">Send properly &middot; know the truth &middot; let replies answer themselves.</div>
</body></html>`;

const CLOSE_HTML = `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{width:1366px;height:768px;font-family:'Segoe UI',Arial,sans-serif;background:radial-gradient(120% 120% at 20% 0%,#0b3323 0%,#07271b 55%,#03140d 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#fff}
  .kicker{font-size:19px;font-weight:700;color:#25D366;letter-spacing:3px;text-transform:uppercase}
  h1{font-size:52px;font-weight:800;letter-spacing:-1.5px;line-height:1.16;margin-top:16px}
  .grid{display:grid;grid-template-columns:1fr 1fr;margin-top:32px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:16px;overflow:hidden}
  .grid .l{font-size:21px;font-weight:400;color:rgba(255,255,255,.5);padding:13px 26px;text-align:right;display:flex;align-items:center;justify-content:flex-end}
  .grid .r{font-size:21px;font-weight:600;color:#6ee7a0;padding:13px 26px;text-align:left;border-left:1px solid rgba(255,255,255,.15);display:flex;align-items:center}
  .price{font-size:23px;font-weight:600;color:rgba(255,255,255,.92);margin-top:30px}
  .cta{font-size:25px;font-weight:500;color:rgba(255,255,255,.85);margin-top:12px}
</style></head><body>
  <div class="kicker">WhatsApp Campaigns</div>
  <h1>It sends. It answers.<br>You close.</h1>
  <div class="grid">
    <div class="l">Thumb-typed sends off a personal number</div><div class="r">Thousands in minutes &mdash; official API, approved templates</div>
    <div class="l">"Did it even reach them?"</div><div class="r">Delivered &middot; read &middot; replied &mdash; with failure reasons</div>
    <div class="l">Routine questions eat the day</div><div class="r">AI answers 24&times;7 &mdash; your team closes</div>
  </div>
  <div class="price">Platform fee + pay-per-message &middot; quoted the same day</div>
  <div class="cta">wa.in-sync.co.in &middot; Book a demo &mdash; bring your customer list</div>
</body></html>`;

export const SCENES = [

// 0 — hook: pain + product named up front
{
  name: 'a0-hook', account: ACCT.guest,
  narration: "Messages sent. Do you know who replied? WhatsApp Campaigns runs the broadcast properly — and your team keeps the conversations that close.",
  beats: async ({ page, D, ready }) => {
    await page.setContent(HOOK_HTML, { waitUntil: 'load' });
    const waitUntil = await ready(300);
    await waitUntil(D);
  },
},

// 1 — SUBSET 1: send properly (slice: campaign lands on a real phone)
{
  name: 'a1-launch', slice: { src: 's5-lands-v.mp4', from: 2 },
  narration: "One — send properly. Thousands in minutes, on the official API, with approved templates — trusted, not spam.",
},

// 2a — SUBSET 2: know the truth (slice: failures with reasons)
{
  name: 'a2a-failures', slice: { src: 's5b-failures-v.mp4', from: 2 },
  narration: "Two — know the truth. The sends that fail come flagged with reasons, so your team acts on facts.",
},

// 2b — …and every send rolls up (slice: analytics)
{
  name: 'a2b-analytics', slice: { src: 's10-analytics-v.mp4', from: 2 },
  narration: "Delivered, read, replied — campaign by campaign, contact by contact.",
},

// 3 — SUBSET 3: replies answer themselves (slice: AI on catalog)
{
  name: 'a3-ai', slice: { src: 's7-ai-v.mp4', from: 2 },
  narration: "Three — replies answer themselves. The AI, trained on your own catalog, handles the routine ones — your people close the sales.",
},

// 4 — close: restate main + subsets, pricing model, demo CTA
{
  name: 'a4-close', account: ACCT.guest,
  narration: "That's WhatsApp Campaigns: it sends, it measures, it answers — you close. A platform fee plus pay-per-message, quoted the same day. Book a demo — bring your customer list.",
  beats: async ({ page, D, ready }) => {
    await page.setContent(CLOSE_HTML, { waitUntil: 'load' });
    const waitUntil = await ready(300);
    await waitUntil(D);
  },
},

];
