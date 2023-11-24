const STATUS_ON_DECK = { id: 1, name: "On Deck", color: "blue.300" };
const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  color: "yellow.400",
};
const STATUS_TESTING = { id: 3, name: "Testing", color: "pink.300" };
const STATUS_DEPLOYED = { id: 4, name: "Deployed", color: "green.300" };
export const STATUSES = [
  STATUS_ON_DECK,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_DEPLOYED,
];

const DATA = [
  {
    risk_id: 1,
    risk_title:"Delay in Sprint delivery",
    probability: "Very Low",
    impact: "Medium",
    priority : 3,
    severity:"Very Low",
    status: STATUS_ON_DECK,
    due: new Date("2021/07/30"),
    notes: "This is a note",
  },
  {
    risk_id: 2,
    risk_title:"Feature Limitations",
    probability: "High",
    impact: "High",
    priority : 20,
    severity:"High",
    status: STATUS_IN_PROGRESS,
    due: new Date("2021/07/30"),
    notes: "Use Jest",
  },
  {
    risk_id: 3,
    risk_title:"Executed Task Movements",
    probability: "High",
    impact: "Medium",
    priority : "Medium",
    severity:"Medium",
    status: STATUS_DEPLOYED,
    due: new Date("2019/12/06"),
    notes: "",
  },
  {
    risk_id: 4,
    risk_title:"More Risks",
    probability: 4,
    impact: 5,
    priority : 20,
    severity:"High",
    status: null,
    due: new Date("2023/02/15"),
    notes: "Remove old data",
  }
  // {
  //   risk_id: 5,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: STATUS_TESTING,
  //   due: null,
  //   notes: "",
  // },
  // {
  //   risk_id: 6,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: null,
  //   due: new Date("2023/09/12"),
  //   notes: "Add JS Docs to all endpoints",
  // },
  // {
  //   risk_id: 7,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: STATUS_IN_PROGRESS,
  //   due: null,
  //   notes: "Upgrade React & Chakra UI",
  // },
  // {
  //   risk_id: 8,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: STATUS_IN_PROGRESS,
  //   due: null,
  //   notes: "Optimize slow queries.",
  // },
  // {
  //   risk_id: 9,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: STATUS_ON_DECK,
  //   due: new Date("2023/11/08"),
  //   notes: "OAuth2 and JWT auth.",
  // },
  // {
  //   risk_id: 10,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: null,
  //   due: new Date("2023/09/30"),
  //   notes: "Create UI mockups.",
  // },
  // {
  //   risk_id: 11,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: STATUS_IN_PROGRESS,
  //   due: null,
  //   notes: "Resolve browser issues.",
  // },
  // {
  //   risk_id: 12,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: null,
  //   due: new Date("2023/10/22"),
  //   notes: "Security audit.",
  // },
  // {
  //   risk_id: 13,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: STATUS_ON_DECK,
  //   due: new Date("2023/11/15"),
  //   notes: "User onboarding guide.",
  // },
  // {
  //   risk_id: 14,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: STATUS_IN_PROGRESS,
  //   due: null,
  //   notes: "Improve performance.",
  // },
  // {
  //   risk_id: 15,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: null,
  //   due: new Date("2023/10/05"),
  //   notes: "Code review meeting.",
  // },
  // {
  //   risk_id: 16,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: STATUS_ON_DECK,
  //   due: new Date("2023/11/01"),
  //   notes: "Set up CI/CD pipelines.",
  // },
  // {
  //   risk_id: 17,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: STATUS_DEPLOYED,
  //   due: null,
  //   notes: "Cloud migration.",
  // },
  // {
  //   risk_id: 18,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: null,
  //   due: new Date("2023/09/25"),
  //   notes: "User feedback survey.",
  // },
  // {
  //   risk_id: 19,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: STATUS_TESTING,
  //   due: null,
  //   notes: "Revise documentation.",
  // },
  // {
  //   risk_id: 20,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: null,
  //   due: new Date("2023/10/10"),
  //   notes: "Fix bugs and QA.",
  // },
  // {
  //   risk_id: 21,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: STATUS_IN_PROGRESS,
  //   due: null,
  //   notes: "Add mobile support.",
  // },
  // {
  //   risk_id: 22,
  //   risk_title:"Something",
  //   probability: 4,
  //   impact: 5,
  //   priority : 20,
  //   severity:"High",
  //   status: null,
  //   due: new Date("2023/09/18"),
  //   notes: "Enhance permissions.",
  // },
];

export default DATA;