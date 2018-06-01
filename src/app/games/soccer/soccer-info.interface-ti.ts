import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const SoccerTeamStats = t.iface([], {
  "goals": "number",
  "penalties": "number",
});

export const SoccerInfo = t.iface([], {
  "home": "SoccerTeamStats",
  "away": "SoccerTeamStats",
});

const exportedTypeSuite: t.ITypeSuite = {
  SoccerTeamStats,
  SoccerInfo,
};
export default exportedTypeSuite;
