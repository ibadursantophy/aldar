export const FocusAreaOption = [
  { label: "Live" },
  { label: "Belong" },
  { label: "Sustain" },
];

export const liveOptions = [
  "Access to quality education, this includes courses, programs, and scholarship.",

  "Happy and healthy communities, focusing on mental and physical wellbeing",

  "Upgrading homes and providing shelter for underprivileged families.",
];
export const belongOptions = [
  "Creating accessible opportunities for people of determination.",
  "Improving the wellbeing of blue-collar workers.",
  "Response-based relief campaigns for vulnerable groups.",
];
export const sustainOptions = [
  "Enabling local entrepreneurs and upskilling youth.",
  "Supporting local research and development programs.",
  "Social innovation and entrepreneurship.",
];
export const liveData = [
  {
    text: "Beneficiaries impacted by gaining accessing quality education through Aldar, this includes courses, programs, and scholarships.",
    monthImpact: "John",
    totalImpact: 30,
  },
  {
    text: "Supporting wellbeing of communities.",
    monthImpact: "Jane",
    totalImpact: 28,
  },
  {
    text: "Upgraded homes for underprivileged families.",
    monthImpact: "Bob",
    totalImpact: 35,
  },
];
export const belongData = [
  {
    text: "Accessible opportunities provided for, PoD",
    monthImpact: "John",
    totalImpact: 30,
  },
  {
    text: "Blue-collar workers impacted by community development initiatives that enhance their overall quality of life.",
    monthImpact: "Jane",
    totalImpact: 28,
  },
  {
    text: "Response-based relief campaigns for vulnerable groups.",
    monthImpact: "Bob",
    totalImpact: 35,
  },
];
export const sustainData = [
  {
    text: "Local entrepreneurs funded / contracted through the CSR department.",
    monthImpact: "John",
    totalImpact: 30,
  },
  {
    text: "Social enterprise partners or beneficiaries, through partnerships and collaborations.",
    monthImpact: "Jane",
    totalImpact: 28,
  },
  {
    text: "Research published with Aldar, by universities or companies we’re working with.",
    monthImpact: "Bob",
    totalImpact: 35,
  },
];

export const frequencyOptions = [
  { label: "One Off" },
  { label: "Weekly" },
  { label: "Monthly" },
  { label: "Quarterly" },
  { label: "Semi-Annual" },
  { label: "Annual" },
];

export const TimeframeOption = [
  { label: "6-12 weeks" },
  { label: "6-12 months" },
  { label: "1-3 years" },
  { label: "+4 years" },
];

export const targetOption = [
  {
    title: "Of workshops, activation events or engagement spaces delivered",
    value: "",
  },
  {
    title: "Of programs (6 weeks minimum) delivered",
    value: "",
  },
  {
    title: "Of Aldar community members engaged",
    value: "",
  },
  {
    title: "Of success stories published and reported",
    value: "",
  },
  {
    title: "Of volunteers from Aldar",
    value: "",
  },
  {
    title: "Of total community volunteers",
    value: "",
  },
  {
    title: "Of total volunteering Hours",
    value: "",
  },
  {
    title: "Of PoD engaged in the program",
    value: "",
  },
  {
    title: "Of individuals working on the project",
    value: "",
  },
  {
    title: "Of individuals impacted by the project",
    value: "",
  },
];


export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const grantDetailsDefaultValue = {
  projectName: "",
  projectBrief: "",
  projectTimeFrame: '6-12 weeks', // Provide an initial value, e.g., an empty array
  frequency: 'One Off', // Provide an initial value, e.g., an empty array
  classification: "",
  requestedBudget: null,
  totalProjectCost: null,
}

export const generalInfoDefaultValue ={
  fullName:"",
  address:"",
  primaryTitle:"",
  secondaryTitle:"",
  primaryEmail:"",
  secondaryEmail:"",
  primaryMobile:null,
  secondaryMobile:null,
    
}