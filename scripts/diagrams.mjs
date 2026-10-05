import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function diagram(title, subtitle, accent, soft) {
  const parts = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="1160" height="660" viewBox="0 0 1160 660" role="img" aria-labelledby="title description">`,
    `<title id="title">${escape(title)}</title><desc id="description">${escape(subtitle)}</desc>`,
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="#6d7e99"/></marker><marker id="accent-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="${accent}"/></marker></defs>`,
    `<rect x="1" y="1" width="1158" height="658" rx="22" fill="#f8fafc" stroke="#dce4ee"/>`,
    `<rect x="40" y="38" width="5" height="50" rx="2" fill="${accent}"/>`,
    `<text x="60" y="62" font-size="30" font-weight="700" fill="#15273f">${escape(title)}</text>`,
    `<text x="60" y="95" font-size="19" fill="#66768d">${escape(subtitle)}</text>`
  ];
  const edges = [];
  const nodes = [];
  return {
    node(x, y, w, title, line1, line2 = '', active = false, h = 88) {
      nodes.push(`<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${active ? soft : '#ffffff'}" stroke="${active ? accent : '#d6dfeb'}" stroke-width="${active ? 1.8 : 1.3}"/><text x="${x + 18}" y="${y + 31}" font-size="23" font-weight="700" fill="${active ? accent : '#223650'}">${escape(title)}</text><text x="${x + 18}" y="${y + 56}" font-size="17" fill="#5e6f86">${escape(line1)}</text>${line2 ? `<text x="${x + 18}" y="${y + 77}" font-size="17" fill="#5e6f86">${escape(line2)}</text>` : ''}</g>`);
    },
    edge(points, label = '', lx = 0, ly = 0, active = false, dashed = false) {
      edges.push(`<polyline points="${points.map(p => p.join(',')).join(' ')}" fill="none" stroke="${active ? accent : '#6d7e99'}" stroke-width="2.4" stroke-linejoin="round" marker-end="url(#${active ? 'accent-arrow' : 'arrow'})"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`);
      if (label) edges.push(`<text x="${lx}" y="${ly}" font-size="17" fill="${active ? accent : '#5e6f86'}" text-anchor="middle" paint-order="stroke" stroke="#f8fafc" stroke-width="9" stroke-linejoin="round">${escape(label)}</text>`);
    },
    note(text) {
      parts.push(`<text x="40" y="633" font-size="18" fill="#66768d">${escape(text)}</text>`);
    },
    finish() {
      return parts[0] + `<g font-family="Arial,DejaVu Sans,sans-serif">` + parts.slice(1).join('') + edges.join('') + nodes.join('') + '</g></svg>\n';
    }
  };
}

export function createDiagrams(target) {
  mkdirSync(target, { recursive: true });
  const save = (name, d) => writeFileSync(resolve(target, `${name}.svg`), d.finish());

  const s = diagram('Story2Game', 'Constrained generation, deterministic verification and recoverable execution', '#3154d6', '#ecf1ff');
  s.node(40, 180, 200, 'Story', 'Story input');
  s.node(310, 180, 225, 'GamePlan/DSL', 'Structured game rules', 'Constrained output');
  s.node(605, 180, 225, 'Compiler', 'DSL → execution');
  s.node(900, 180, 220, 'Verifier', 'Rules + state checks', '', true);
  s.node(900, 405, 220, 'Runtime', 'Phaser 2D interaction', '', true);
  s.node(605, 405, 225, 'Repair', 'Validation feedback');
  s.node(310, 405, 225, 'Regenerate', 'Retry from the plan');
  s.edge([[240, 224], [310, 224]]);
  s.edge([[535, 224], [605, 224]]);
  s.edge([[830, 224], [900, 224]]);
  s.edge([[1010, 268], [1010, 405]], 'Pass', 1040, 345, true);
  s.edge([[945, 268], [945, 330], [718, 330], [718, 405]], 'Fail', 820, 320);
  s.edge([[605, 449], [568, 449], [568, 295], [678, 295], [678, 268]], 'Recompile + re-verify', 718, 307, true, true);
  s.edge([[605, 449], [535, 449]], 'Repair budget exceeded', 569, 526);
  s.edge([[423, 405], [423, 268]], 'New plan', 470, 345, true, true);
  s.note('Verification is the acceptance gate. Recovery feeds back into compilation and verification.');
  save('story2game', s);

  const m = diagram('AI Market Intelligence', 'Evidence → Event → Forecast → Verification → Reputation', '#087f7d', '#e6f5f1');
  m.node(40, 175, 300, 'Evidence sources', 'SEC filings + market data', 'Traceable source records');
  m.node(430, 175, 300, 'Point-in-time checks', 'Only data available at cutoff', 'Check timestamps + freshness', true);
  m.node(820, 175, 300, 'Event', 'Structured event + evidence');
  m.node(820, 365, 300, 'Forecast', 'Explicit, verifiable claim');
  m.node(430, 365, 300, 'Settlement gate', 'Wait until outcome is knowable', 'Require valid settlement data', true);
  m.node(40, 365, 300, 'Verification', 'Claim vs observed outcome');
  m.node(40, 525, 300, 'Reputation', 'Verified outcome history');
  m.edge([[340, 219], [430, 219]]);
  m.edge([[730, 219], [820, 219]], 'Accepted', 775, 197, true);
  m.edge([[970, 263], [970, 365]]);
  m.edge([[820, 409], [730, 409]]);
  m.edge([[430, 409], [340, 409]], 'Eligible', 385, 387, true);
  m.edge([[190, 453], [190, 525]]);
  m.note('Time boundaries protect the evidence set; settlement gates protect outcome verification.');
  save('ai-market', m);

  const t = diagram('AI Social Twin', 'Identity, memory and relationship as separate inputs to personalized dialogue', '#7752c4', '#f2ecfb');
  t.node(40, 170, 240, 'Audio batches', 'Recoverable processing');
  t.node(355, 170, 285, 'ASR + speaker ID', 'Transcripts + speaker turns');
  t.node(340, 335, 250, 'Behavior profile', 'Style + behavior cues');
  t.node(635, 335, 250, 'Memory', 'Shared history');
  t.node(40, 505, 240, 'Relationship', 'Conversation context');
  t.node(635, 505, 250, 'Agent', 'Conditioned generation', '', true);
  t.node(930, 505, 190, 'Dialogue', 'Generated reply');
  t.node(850, 170, 270, 'Evaluation', 'Ablation + blind review', '', true);
  t.edge([[280, 214], [355, 214]]);
  t.edge([[465, 258], [465, 335]]);
  t.edge([[580, 258], [580, 294], [760, 294], [760, 335]]);
  t.edge([[465, 423], [465, 549], [635, 549]]);
  t.edge([[760, 423], [760, 505]]);
  t.edge([[280, 549], [635, 549]], 'Relationship context', 420, 578, true);
  t.edge([[885, 549], [930, 549]], '', 0, 0, true);
  t.edge([[1025, 505], [1025, 258]], 'Review', 1060, 390);
  t.note('Checkpoints support batch recovery. Evaluation separates profile, memory and relationship effects.');
  save('social-twin', t);

  const c = diagram('Visual CEP Rule Builder', 'Make expert-authored rules understandable and executable', '#47627e', '#edf2f6');
  c.node(40, 180, 285, 'RuleGraph', 'Predicates + logic + time', 'Visual authoring');
  c.node(435, 180, 285, 'Typed AST', 'Topological reconstruction', 'Typed rule representation');
  c.node(830, 180, 290, 'Constraint checks', 'Arity + parameters + time', '', true);
  c.node(830, 410, 290, 'NL explanation', 'Confirm the rule intent');
  c.node(435, 410, 285, 'Executable output', 'StreamSQL / Flink CEP', '', true);
  c.edge([[325, 224], [435, 224]]);
  c.edge([[720, 224], [830, 224]]);
  c.edge([[975, 268], [975, 410]], 'Valid', 1012, 345, true);
  c.edge([[830, 454], [720, 454]], 'Generate', 775, 434, true);
  c.edge([[880, 268], [880, 310], [183, 310], [183, 268]], 'Invalid: explain and revise', 535, 303, false, true);
  c.note('Validation prevents invalid rule combinations; explanation helps domain experts check their intent.');
  save('rule-builder', c);
}
