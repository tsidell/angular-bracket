import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const FootballTeamStats = t.iface([], {
  "score": "number",
  "touchDowns": "number",
  "fieldGoals": "number",
});

export const FootballInfo = t.iface([], {
  "home": "FootballTeamStats",
  "away": "FootballTeamStats",
});

const exportedTypeSuite: t.ITypeSuite = {
  FootballTeamStats,
  FootballInfo,
};
export default exportedTypeSuite;
