// ===== Shared behavior across pages =====

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
});

// ---- Configuration you should edit ----
// Put your own WhatsApp number here (international format, no + or spaces).
const WHATSAPP_NUMBER = '27656748964';

function submitLeadUrl(offerTitle, trackingCode) {
  const msg = `Hi! I'd like to submit a referral lead for: ${offerTitle}\n\nTracking code: ${trackingCode}\nLead name: \nLead phone: \n`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function generateTrackingCode() {
  return 'RF' + Math.floor(10000 + Math.random() * 89999);
}

// ---- Home / Leads page ----
const OFFERS = [
  {
    id: 'streetscout-property-scout',
    company: 'StreetScout',
    category: 'Referral Program',
    subcategory: 'Property',
    title: 'StreetScout Property Scout',
    reward: 'R250 \u2013 R4,000',
    desc: 'Join StreetScout and earn by finding properties for sale, referring buyers, and inviting friends. Earn between R250 and R4,000 depending on the completed referral.',

    payment: 'Commission payments are made every Wednesday and Friday via EFT or eWallet.',

    buttonText: 'Sign Up',
    applyUrl: 'https://streetscout.co.za/register?ref=39CU7NUH',

    steps: [
      'Earn R250 for submitting a qualified property lead (property address and owner\u2019s contact details).',
      'Earn up to R1,750 bonus when that property is successfully sold.',
      'Earn R250 for referring a buyer.',
      'Earn up to R1,250 bonus when the property is registered.',
      'Earn an additional R500 if the buyer uses StreetScout\u2019s home loan partners.',
      'Earn R50 for every friend you refer who gets their first lead approved.'
    ],

    requirements: [
      'Genuine South African referrals only.',
      'Property owner details are required for seller leads.',
      'Buyer referrals must be genuine.',
      'Referral rewards depend on successful completion.',
      'Payments are made according to StreetScout\u2019s payout schedule.'
    ]
  },
  {
  id: 'temu-affiliate',
  company: 'Temu',
  category: 'Referral Program',
  subcategory: 'Affiliate Marketing',
  title: 'Temu Affiliate Program',
  reward: 'Up to 30% Commission',

  desc: 'Join the Temu Affiliate Program and earn commissions by referring new affiliates. Share your invitation link or invitation code and receive rewards when eligible users successfully register and qualify.',

  payment: 'Commission and promotional rewards are paid according to Temu Affiliate Program terms and campaign conditions.',

  buttonText: 'Sign Up',
  applyUrl: 'https://www.temu.com/affiliate_article_center.html?_bg_fs=1&_x_ads_channel=kol_affiliate&_x_vst_scene=adg&_x_campaign=affiliate&_x_cid=4063237254kol_affiliate&_x_share_id=&_x_adg_shr_id=46d632fad47149eca46ec13a44e824ec&_x_ads_csite=share&_x_ns_adg_stid=5af027286fda4fcd_nm8xevc&_x_sessn_id=pxunhk4wm3&refer_page_name=affiliate_coin&refer_page_id=24745_1783410546422_kc62cc4fbc&refer_page_sn=24745',

  steps: [
    'Create or sign in to your Temu account.',
    'Join the Temu Affiliate Program.',
    'Share your affiliate invitation link with others.',
    'If needed, users can enter your invitation code: inb154757.',
    'Earn commission and promotional rewards when eligible referrals successfully register and meet Temu requirements.'
  ],

  requirements: [
    'A valid Temu account is required.',
    'Only genuine referrals qualify.',
    'Rewards are subject to Temu Affiliate Program terms.',
    'Commission is earned after qualifying referral actions are completed.',
    'Invitation Code: inb154757'
  ]
},
  {
    id: 'engen-business-planning-analysis-manager',
    type: 'job',
    company: 'Engen Limited',
    category: 'Jobs',
    subcategory: 'Finance',
    title: 'Business Planning & Analysis Manager',
    location: 'Cape Town, South Africa',
    employmentType: 'Full-time',
    posted: '7 July 2026',
    closingNote: 'Closes 5 days after posting date',
    reward: 'Competitive salary \u2013 Engen salary scale',

    desc: 'To provide planning, budgeting & forecasting and decision support for the division with specific focus on performance measurement & management to enable achievement of business objectives.',

    payment: 'Closes 5 days after posting \u2013 apply via the official Engen careers portal.',

    buttonText: 'Apply Now',
    applyUrl: 'https://careers.engenoil.com/job/Cape-Town-Business-Planning-&-Analysis-Manager/1392183333/',

    responsibilities: [
      'Plan, coordinate and consolidate the Division\u2019s business plans, budgets and OPEX/CAPEX forecasts in line with Group guidelines and timetables.',
      'Consolidate, analyze and report financial and management results to enable effective business decisions and measure performance.',
      'Perform analysis and interpretation of Opex and Capex performance, identify problem areas and recommend corrective action to management.',
      'Manage the monthly capital expenditure process with Engineering and project administration teams, ensuring assets under construction are capitalized correctly.',
      'Maintain Asset Register integrity and balance sheet account integrity, including iPPM tracking and reconciliations.',
      'Ensure audit requirements are met and drive process and control improvements.',
      'Oversee OPEX and CAPEX for joint ventures, ensuring alignment with JV partners\u2019 budgets, timelines and governance frameworks.',
      'Interact with customers, service providers and contractors to ensure deliverables are met.',
      'Engage in talent, staff performance and resource management to promote capability development.'
    ],

    steps: [
      'Click "Apply Now" to open the official Engen careers page for this role.',
      'Complete and submit the online application with your CV and supporting documents before the closing date.',
      'Applications are only considered if submitted via the official channel and manner requested.',
      'Shortlisted candidates will be contacted by Engen for the next stage of the recruitment process.'
    ],

    requirements: [
      'NQF Level 7 (Degree in Finance / Commerce).',
      '7 years\u2019 Finance experience in Business Planning / Performance Measurement.',
      'Sound knowledge of financial principles.',
      'Advantageous: CA (SA) / CIMA.',
      'Advantageous: Advanced Excel skills.',
      'Advantageous: Experience in an operations environment.'
    ]
  },{
  id: 'ackermans-hr-administrator-maternity-cover',
  type: 'job',
  company: 'Ackermans',
  category: 'Jobs',
  subcategory: 'Human Resources',
  title: 'HR Administrator (4-Month Maternity Cover)',
  location: 'Ackermans Support Centre, South Africa',
  employmentType: 'Contract (4 Months)',
  posted: '7 July 2026',
  closingNote: 'Apply as soon as possible',
  reward: 'Market-related salary and employee benefits',

  desc: 'Join the Ackermans HR team to provide administrative support across multiple business units. You will assist with HR operations, maintain employee records, support people initiatives, and ensure excellent service delivery while helping execute HR strategies.',

  payment: 'Applications are submitted through the official Ackermans careers portal.',

  buttonText: 'Apply Now',
  applyUrl: 'https://careers.ackermans.co.za/jobs/8006020-hr-administrator-4-month-maternity-cover',

  responsibilities: [
    'Provide administrative support to the HR department across multiple business units.',
    'Maintain personnel records and ensure compliance with the POPI Act.',
    'Support HR processes using HR Information Systems (HRIS).',
    'Assist with HR initiatives and provide excellent service to internal and external stakeholders.',
    'Handle confidential employee information with professionalism and integrity.',
    'Assist with payroll and recruitment administration where required.',
    'Prepare HR documentation, reports, and correspondence accurately and on time.',
    'Build positive working relationships with employees and managers.',
    'Ensure HR administrative processes are completed efficiently and accurately.',
    'Support the HR team with general administrative duties and special projects.'
  ],

  steps: [
    'Click "Apply Now" to open the official Ackermans careers page.',
    'Complete the online application form and upload your CV together with the required supporting documents.',
    'Review your application to ensure all information is correct before submitting.',
    'Only shortlisted candidates will be contacted regarding the next stage of the recruitment process.'
  ],

  requirements: [
    'Grade 12 (Matric).',
    'Minimum of 1–2 years of experience in an HR administrative or support role.',
    'Knowledge of HR best practices, personnel files, and the POPI Act.',
    'Experience using HR Information Systems (HRIS).',
    'Payroll and recruitment systems experience is advantageous.',
    'Proficiency in Microsoft Word, Excel, PowerPoint, and Outlook.',
    'Excellent written and verbal communication skills in English.',
    'Ability to maintain confidentiality, meet deadlines, and work accurately.',
    'Retail experience is advantageous.',
    'Preferred: Degree or National Diploma in Human Resource Management or currently studying towards one.'
  ]
},
  {
    id: 'engen-business-development-specialist-mining',
    type: 'job',
    company: 'Engen Limited',
    category: 'Jobs',
    subcategory: 'Sales & Business Development',
    title: 'Business Development Specialist – Mining',
    location: 'Gauteng, South Africa',
    employmentType: 'Full-time',
    posted: '7 July 2026',
    closingNote: 'Closes 5 days after posting date',
    reward: 'Competitive salary \u2013 Engen salary scale',

    desc: 'To drive relationships and business opportunities at new mining accounts where Engen has no presence. To build and manage a sustainable new business pipeline, and coordinate new tenders together with key business stakeholders.',

    payment: 'Closes 5 days after posting \u2013 apply via the official Engen careers portal.',

    buttonText: 'Apply Now',
    applyUrl: 'https://careers.engenoil.com/job/Johannesburg-Business-Development-Specialist-Mining/1390307533/',

    responsibilities: [
      'Develop and implement a new business (hunter) strategy for the mining sector.',
      'Liaise with key decision-makers at new mining operations, including mine managers, engineers and procurement.',
      'Work with Engen Technical to run trials and product endorsements at new mining accounts.',
      'Identify and drive new business opportunities in mining and associated segments (construction/industrial accounts, mining contractors).',
      'Deliver on KPIs such as securing 2 new mining accounts per year and growing the mining pipeline.',
      'Increase Engen\u2019s market share in the mining sector and drive strategic advantage over competitors (e.g. Fluidlink, IoT, CEM, VIP).',
      'Drive call planning and account strategy for new mining accounts, working with Engen support teams to deliver KPIs.',
      'Ability to travel nationally for extended periods as required by the role.'
    ],

    steps: [
      'Click "Apply Now" to open the official Engen careers page for this role.',
      'Complete and submit the online application with your CV and supporting documents before the closing date.',
      'Applications are only considered if submitted via the official channel and manner requested.',
      'Shortlisted candidates will be contacted by Engen for the next stage of the recruitment process.'
    ],

    requirements: [
      'NQF Level 7 (Degree in Sales & Marketing / Engineering).',
      '8 years\u2019 experience in Business Development within the mining business.',
      'Advantageous: Degree in Marketing or Engineering.',
      'Advantageous: Lubricants knowledge.',
      'Advantageous: Experience dealing with mine managers.'
    ]
  },{
  id: 'ackermans-clerk-reconciliations-fixed-term-contract',
  type: 'job',
  company: 'Ackermans',
  category: 'Jobs',
  subcategory: 'Finance',
  title: 'Clerk: Reconciliations (Fixed-Term Contract)',
  location: 'Ackermans Support Centre, Kuils River, Cape Town, South Africa',
  employmentType: 'Fixed-Term Contract (12 Months)',
  posted: '7 July 2026',
  closingNote: 'Apply as soon as possible',
  reward: 'Market-related salary and employee benefits',

  desc: 'Ackermans is looking for a Clerk: Reconciliations to join its Finance team on a 12-month fixed-term contract. The successful candidate will prepare and maintain general ledger reconciliations, assist with tax and VAT compliance, resolve reconciliation queries, and ensure accurate financial reporting.',

  payment: 'Applications are submitted through the official Ackermans careers portal.',

  buttonText: 'Apply Now',
  applyUrl: 'https://careers.ackermans.co.za/jobs/7537203-clerk-reconciliations-fixed-term-contract',

  responsibilities: [
    'Prepare reconciliations for various balance sheet accounts, including payroll, petty cash, staff purchases, overseas travel, and intercompany loans.',
    'Investigate, follow up, and resolve outstanding reconciliation items within required timelines.',
    'Prepare journals and process corrections for reconciling items.',
    'Ensure all balance sheet accounts are reconciled and agree with the trial balance.',
    'Maintain and update reconciliation records and account ownership details.',
    'Assist with monthly VAT, Import VAT, withholding tax, and other tax compliance processes.',
    'Prepare tax journals, account reconciliations, and compliance documentation.',
    'Arrange payments to revenue authorities for VAT, Import VAT, and withholding tax.',
    'Support responses to tax audits, VAT verifications, and revenue authority queries.',
    'Provide assistance with ad hoc finance, taxation, and reporting requirements.'
  ],

  steps: [
    'Click "Apply Now" to open the official Ackermans careers page.',
    'Complete the online application form and upload your CV together with the required supporting documents.',
    'Review your application to ensure all information is accurate before submitting.',
    'Only shortlisted candidates will be contacted regarding the next stage of the recruitment process.'
  ],

  requirements: [
    'National Diploma or National Certificate in Accounting or Taxation.',
    '2–3 years of relevant finance administration experience with strong reconciliation experience.',
    'Strong financial reconciliation and general ledger knowledge.',
    'Good understanding of financial administration, accounting principles, tax, and VAT legislation.',
    'Intermediate to advanced Microsoft Excel skills.',
    'Excellent numerical ability and strong attention to detail.',
    'Ability to work independently and as part of a team under pressure and meet deadlines.',
    'Retail experience is advantageous.',
    'Experience in a tax-related role is advantageous.',
    'Preferred: B.Com Accounting or BTech qualification.'
  ]
},
  {
  id: 'ackermans-personal-assistant-chief-executive-marketing',
  type: 'job',
  company: 'Ackermans',
  category: 'Jobs',
  subcategory: 'Administration',
  title: 'Personal Assistant to Chief Executive (Marketing)',
  location: 'Ackermans Support Centre, Kuils River, Cape Town, South Africa',
  employmentType: 'Full-time',
  posted: '7 July 2026',
  closingNote: 'Apply as soon as possible',
  reward: 'Market-related salary and employee benefits',

  desc: 'Ackermans is looking for an experienced Personal Assistant to provide executive support to the Chief Executive of Marketing and the Marketing Leadership Team. The successful candidate will manage executive administration, calendars, travel, meetings, communications, and departmental coordination to ensure the efficient delivery of strategic and operational priorities.',

  payment: 'Applications are submitted through the official Ackermans careers portal.',

  buttonText: 'Apply Now',
  applyUrl: 'https://careers.ackermans.co.za/jobs/7971236-personal-assistant-to-chief-executive-marketing',

  responsibilities: [
    'Provide comprehensive administrative support to the Chief Executive of Marketing and the Marketing Leadership Team.',
    'Manage executive diaries, calendars, appointments, and schedule critical business meetings.',
    'Attend meetings, take minutes, distribute action items, and follow up on outstanding tasks.',
    'Prepare presentations, reports, and business documentation.',
    'Manage office administration, filing systems, records, and correspondence.',
    'Coordinate local and international travel, including bookings, itineraries, and expense reconciliations.',
    'Arrange departmental meetings, strategy sessions, team-building events, and agency reviews.',
    'Assist the PR team by managing the PR email inbox, supplier and customer communication, and maintaining records.',
    'Support expense reconciliations and assist with Fraxion processes where required.',
    'Maintain professional relationships with internal and external stakeholders while handling confidential information with discretion.'
  ],

  steps: [
    'Click "Apply Now" to open the official Ackermans careers page.',
    'Complete the online application form and upload your CV together with the required supporting documents.',
    'Review your application before submitting it through the official careers portal.',
    'Only shortlisted candidates will be contacted regarding the next stage of the recruitment process.'
  ],

  requirements: [
    'Grade 12 (Matric).',
    'Minimum of 5 years of experience as a Personal Assistant or Executive Secretary supporting a Director or Executive.',
    'Excellent knowledge of Microsoft Word, Excel, PowerPoint, and Outlook.',
    'Experience coordinating local and international travel arrangements.',
    'Excellent verbal and written communication skills.',
    'Strong organisational, administrative, and time management skills.',
    'Ability to manage confidential information with professionalism and discretion.',
    'Ability to work independently, manage multiple priorities, and perform under pressure.',
    'Customer service experience is advantageous.',
    'Preferred: Secretarial Diploma.'
  ]
},
  {
  id: 'ackermans-store-planner',
  type: 'job',
  company: 'Ackermans',
  category: 'Jobs',
  subcategory: 'Planning',
  title: 'Store Planner',
  location: 'Ackermans Support Centre, Kuils River, Cape Town, South Africa',
  employmentType: 'Full-time',
  posted: '7 July 2026',
  closingNote: 'Apply as soon as possible',
  reward: 'Market-related salary and employee benefits',

  desc: 'Ackermans is building its talent network for future Store Planner opportunities. The successful candidate will plan and distribute seasonal and replenishment stock, optimise store performance, support visual merchandising, ensure successful new store launches, and resolve stock-related queries to maximise sales.',

  payment: 'Applications are submitted through the official Ackermans careers portal.',

  buttonText: 'Apply Now',
  applyUrl: 'https://careers.ackermans.co.za/jobs/7875620-store-planner',

  responsibilities: [
    'Plan and distribute seasonal stock to maximise sales across stores.',
    'Manage seasonal and non-seasonal replenishment stock to ensure optimal product availability.',
    'Develop location plans that support effective product allocation and store clustering.',
    'Create seasonal and replenishment profiles for the required product categories.',
    'Provide planning input to support visual merchandising initiatives.',
    'Analyse store performance and provide timely insights to improve business decisions.',
    'Ensure new stores are stocked according to approved plans before opening.',
    'Assist stores with stock-related queries and provide effective solutions.',
    'Monitor stock movement and identify opportunities to improve inventory performance.',
    'Work closely with planning, logistics, and retail teams to optimise stock management.'
  ],

  steps: [
    'Click "Apply Now" to open the official Ackermans careers page.',
    'Complete the online application form and upload your CV together with the required supporting documents.',
    'Submit your application through the official careers portal for consideration in future Store Planner opportunities.',
    'Only shortlisted candidates will be contacted should a suitable vacancy become available.'
  ],

  requirements: [
    'Grade 12 (Matric).',
    'Minimum of 2–3 years of store planning experience within a clothing retail environment.',
    'Strong knowledge of seasonal and replenishment planning.',
    'Experience using planning systems such as Location Planning, JDA Allocation Planning, and/or Just Enough is advantageous.',
    'Knowledge of logistics, supply chain processes, and cross-dock operations is advantageous.',
    'Proficiency in Microsoft Word and Excel.',
    'Advanced Microsoft Excel skills are advantageous.',
    'Previous store management experience is advantageous.',
    'National Diploma or Degree in Business, Retail Management, Accounting, or Finance is beneficial.',
    'Strong analytical, planning, problem-solving, and communication skills.'
  ]
},{
  id: 'ackermans-product-planner-2-portfolios',
  type: 'job',
  company: 'Ackermans',
  category: 'Jobs',
  subcategory: 'Planning',
  title: 'Product Planner (2 Portfolios Available)',
  location: 'Ackermans Support Centre, Kuils River, Cape Town, South Africa',
  employmentType: 'Full-time',
  posted: '7 July 2026',
  closingNote: 'Apply as soon as possible',
  reward: 'Market-related salary and employee benefits',

  desc: 'Ackermans is looking for experienced Product Planners to develop and execute merchandise planning strategies that drive growth and profitability. You will manage forecasts, replenishment, assortment planning, and business performance while supporting the overall merchandise strategy in a fast-paced retail environment.',

  payment: 'Applications are submitted through the official Ackermans careers portal.',

  buttonText: 'Apply Now',
  applyUrl: 'https://careers.ackermans.co.za/jobs/7763060-product-planner-2-portfolios-available',

  responsibilities: [
    'Develop, implement, and manage departmental business plans aligned with the merchandise strategy.',
    'Manage departmental forecasts to achieve sales growth and profitability targets.',
    'Prepare and execute merchandise assortment plans that support approved business strategies.',
    'Ensure sufficient replenishment stock levels to achieve agreed service levels and business objectives.',
    'Provide accurate and timely merchandise information to minimise risk and maximise business opportunities.',
    'Monitor product performance and recommend actions to improve sales and profitability.',
    'Collaborate with buying, logistics, and store teams to optimise merchandise planning.',
    'Manage planning projects and ensure objectives are delivered successfully where applicable.',
    'Analyse sales trends, inventory levels, and customer demand to support decision-making.',
    'Maintain effective communication and collaboration with internal stakeholders across the business.'
  ],

  steps: [
    'Click "Apply Now" to open the official Ackermans careers page.',
    'Complete the online application form and upload your CV together with the required supporting documents.',
    'Review your application to ensure all information is accurate before submitting.',
    'Only shortlisted candidates will be contacted regarding the next stage of the recruitment process.'
  ],

  requirements: [
    'Grade 12 (Matric).',
    'Minimum of 3–5 years of product planning experience within a retail or FMCG environment.',
    'Experience in replenishment and assortment planning.',
    'Previous store planning experience.',
    'Previous store management experience (1–2 years) is advantageous.',
    'Knowledge of the retail merchandise cycle, including buying, planning, logistics, and store operations.',
    'Experience using merchandise planning systems.',
    'Strong commercial awareness, analytical ability, and numerical skills.',
    'Proficiency in Microsoft Word and Excel, with advanced Excel skills being advantageous.',
    'Preferred: BCom, BSc, National Diploma in Finance, Accounting, Business Science, Internal Auditing, Cost & Management Accounting, or Financial Information Systems.'
  ]
},
  {
  id: 'engen-fluidlink-engineer-mining',
  type: 'job',
  company: 'Engen Limited',
  category: 'Jobs',
  subcategory: 'Engineering',
  title: 'Fluidlink Engineer – Mining',
  location: 'Northern Cape, South Africa (Kathu, Kuruman & Hotazel Area)',
  employmentType: 'Full-time',
  posted: '7 July 2026',
  closingNote: 'Closes 5 days after posting date',
  reward: 'Competitive salary – Engen salary scale',

  desc: 'Drive Engen Fluidlink Asset Performance Management (APM) services within mining and heavy industrial operations by improving equipment reliability, managing customer relationships, overseeing third-party service providers, and identifying opportunities to grow Fluidlink business across mining customers.',

  payment: 'Closes 5 days after posting – apply via the official Engen careers portal.',

  buttonText: 'Apply Now',
  applyUrl: 'https://careers.engenoil.com/job/Johannesburg-Fluidlink-Engineer-Mining/1394973433/',

  responsibilities: [
    'Manage lubrication and fluid management programmes across mining operations to improve equipment reliability and production performance.',
    'Control customer cost centre budgets, monitor KPIs, and maximise return on investment.',
    'Conduct account reviews with customers and service providers, implementing corrective actions where necessary.',
    'Identify reliability improvement opportunities through condition monitoring, contamination control, automation, and predictive maintenance.',
    'Ensure compliance with Engen Fluidlink standards, mining regulations, engineering practices, and contractual agreements.',
    'Build strong relationships with engineering, production, procurement, HSEQ, and supply chain teams at customer sites.',
    'Manage third-party contractors to ensure SLA compliance, operational support, and safety performance.',
    'Support business development by preparing technical proposals, value improvement analyses, RCFA insights, and customer presentations.',
    'Conduct HSEQ engagements, safety audits, and ensure compliance with mine-specific health and safety requirements.',
    'Continuously develop technical and commercial knowledge of mining reliability technologies and Engen Fluidlink solutions.'
  ],

  steps: [
    'Click "Apply Now" to open the official Engen careers page.',
    'Complete the online application and upload your CV together with the required supporting documents.',
    'Submit your application before the closing date, as late applications will not be considered.',
    'Shortlisted candidates will be contacted by Engen regarding the next stage of the recruitment process.'
  ],

  requirements: [
    'NQF Level 7 qualification.',
    'Minimum 5 years of experience within mining operations, processing plants, smelters, or heavy industrial facilities.',
    'Strong exposure to asset reliability, production-critical equipment, and plant lubrication systems.',
    'Advantageous: Certified Tribologist (SAIT).',
    'Advantageous: Predictive Maintenance certifications (vibration, thermography, lubrication condition monitoring).',
    'Advantageous: VE-CEM, VE-OCM, or VE-VIP certification.',
    'Advantageous: SAMTRAC or Mining Supervisory HSEQ qualification.',
    'Advantageous: Total Fluid Management experience within mining or industrial sectors.',
    'Knowledge of the lubricants value chain, RCFA, and third-party contractor management.',
    'Sales and marketing experience within technical or engineering environments is advantageous.'
  ]
},{
  id: 'engen-accountant-supply-wholesale',
  type: 'job',
  company: 'Engen Limited',
  category: 'Jobs',
  subcategory: 'Finance',
  title: 'Accountant',
  location: 'Cape Town, South Africa',
  employmentType: 'Full-time',
  posted: '4 July 2026',
  closingNote: 'Closes 5 days after posting date',
  reward: 'Competitive salary – Engen salary scale',

  desc: 'Manage international and local Supply & Wholesale commercial data, customer invoicing, and trading positions to ensure accurate financial accounting, reporting, and cost control. The role supports Engen’s profitability through effective management of trading transactions, treasury support, compliance, and financial reporting.',

  payment: 'Closes 5 days after posting – apply via the official Engen careers portal.',

  buttonText: 'Apply Now',
  applyUrl: 'https://careers.engenoil.com/job/Cape-Town-Accountant/1411506333/',

  responsibilities: [
    'Record and settle international and local trading transactions, including imports, exports, affiliates, marine, third-party, and local buy/sell deals.',
    'Capture vendor invoices, schedule payments, and ensure accurate customer invoicing in accordance with pricing terms.',
    'Account accurately for import duties, customs and excise levies, and other applicable charges.',
    'Prepare debit and credit notes and ensure timely customer billing.',
    'Maintain accurate weighted average costing and transfer costs to the Marketing division.',
    'Prepare monthly debtor and creditor reconciliations and clear customer, vendor, and GR/IR accounts.',
    'Support international trading activities by accurately capturing deals within the ETRM system.',
    'Provide treasury support by ensuring trading deals are appropriately hedged and included in daily exposure reports.',
    'Monitor departmental expenditure, manage cost controls, and report on budget variances.',
    'Prepare monthly and ad hoc financial reports while ensuring compliance with company policies, procedures, and audit requirements.'
  ],

  steps: [
    'Click "Apply Now" to open the official Engen careers page.',
    'Complete the online application and upload your CV together with the required supporting documents.',
    'Submit your application before the closing date as only applications received through the official careers portal will be considered.',
    'Shortlisted candidates will be contacted by Engen regarding the next stage of the recruitment process.'
  ],

  requirements: [
    'NQF Level 7 qualification (Degree in Commercial, Finance, or Accounting).',
    'Minimum 5 years of experience in an Accounting or Finance environment.',
    'Experience and knowledge of an Energy Trading and Risk Management (ETRM) system.',
    'Strong financial accounting, reconciliation, and reporting skills.',
    'Knowledge of international and local trading transactions.',
    'Experience with treasury support, budgeting, and cost control.',
    'Advantageous: Experience and knowledge of SAP.',
    'Ability to ensure compliance with governance, audit, and financial control requirements.'
  ]
},
];
const REFERRALS = [
  {
    code: "RF10234",
    offer: "Home Insurance",
    status: "🟡 Pending Review",
    updated: "2 July 2026"
  },
  {
    code: "RF10235",
    offer: "Solar Installation",
    status: "🟢 Approved",
    updated: "3 July 2026"
  }
];
function initials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function renderOffers(list) {
  const grid = document.getElementById('offerGrid');
  const empty = document.getElementById('noResults');
  const count = document.getElementById('resultsCount');
  if (!grid) return;

  grid.innerHTML = '';
  count.textContent = `${list.length} offer${list.length === 1 ? '' : 's'} available`;

  if (list.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  list.forEach(offer => {
    const card = document.createElement('article');

    if (offer.type === 'job') {
      card.className = 'offer-card job-card';
      const reqPreview = (offer.requirements || []).slice(0, 3);
      card.innerHTML = `
        <div class="job-ribbon">Job</div>
        <div class="offer-top">
          <div class="offer-logo job-logo">${initials(offer.company)}</div>
          <div>
            <div class="offer-category">${offer.category} · ${offer.company}</div>
          </div>
        </div>
        <div class="offer-body">
          <h3>${offer.title}</h3>
          <div class="job-meta">
            <span class="job-pill">📍 ${offer.location}</span>
            <span class="job-pill">${offer.employmentType}</span>
          </div>
          <p>${offer.desc}</p>
        </div>
        <div class="job-requirements">
          <span class="label">Requirements</span>
          <ul>
            ${reqPreview.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
        <div class="job-footer">
          <div>
            <span class="label">Salary</span>
            <span class="value">${offer.reward}</span>
          </div>
          <div>
            <span class="label">Closing</span>
            <span class="value">${offer.closingNote || ''}</span>
          </div>
        </div>
        <div class="offer-actions">
          <a class="btn btn-primary" href="${offer.applyUrl}" target="_blank" rel="noopener">${offer.buttonText || 'Apply Now'}</a>
          <a class="btn btn-secondary" href="offer.html?id=${offer.id}">Read More</a>
        </div>
      `;
      grid.appendChild(card);
      return;
    }

    card.className = 'offer-card';
    card.innerHTML = `
      <div class="offer-top">
        <div class="offer-logo">${initials(offer.company)}</div>
        <div>
          <div class="offer-category">${offer.category} · ${offer.company}</div>
        </div>
      </div>
      <div class="offer-body">
        <h3>${offer.title}</h3>
        <p>${offer.desc}</p>
      </div>
      <div class="stub">
        <div class="stub-earn">
          <span class="label">Earn</span>
          <span class="amount">${offer.reward}</span>
        </div>
        <div class="stub-terms">
          <span class="label">Payment</span>
          <span class="value">${offer.payment}</span>
        </div>
      </div>
      <div class="offer-actions">
        <a class="btn btn-primary" href="${offer.applyUrl || `submit.html?offer=${offer.id}`}" target="_blank" rel="noopener">${offer.buttonText || 'Submit Lead'}</a>
        <a class="btn btn-secondary" href="offer.html?id=${offer.id}">Read More</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function applyFilters() {
  const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const category = document.getElementById('categoryFilter')?.value || '';
  const sort = document.getElementById('rewardFilter')?.value || '';

  let list = OFFERS.filter(o =>
    (o.title.toLowerCase().includes(search) ||
     o.company.toLowerCase().includes(search) ||
     o.category.toLowerCase().includes(search)) &&
    (category === '' || o.category === category)
  );

  if (sort === 'high') {
    list = list.slice().sort((a, b) => parseInt(b.reward.slice(1)) - parseInt(a.reward.slice(1)));
  } else if (sort === 'low') {
    list = list.slice().sort((a, b) => parseInt(a.reward.slice(1)) - parseInt(b.reward.slice(1)));
  }

  renderOffers(list);
}

if (document.getElementById('offerGrid')) {
  const categorySelect = document.getElementById('categoryFilter');
  const categories = [...new Set(OFFERS.map(o => o.category))];
  categories.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    categorySelect.appendChild(opt);
  });

  document.getElementById('searchInput').addEventListener('input', applyFilters);
  categorySelect.addEventListener('change', applyFilters);
  document.getElementById('rewardFilter').addEventListener('change', applyFilters);

  renderOffers(OFFERS);
}

// ---- Track Lead page ----

const trackForm = document.getElementById("trackForm");

if (trackForm) {

  trackForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const code = document
      .getElementById("trackingCode")
      .value
      .trim()
      .toUpperCase();

    const referral = REFERRALS.find(r => r.code === code);

    const resultBox = document.getElementById("trackResult");
    const notFound = document.getElementById("notFound");

    if (referral) {

      document.getElementById("resultCode").textContent = referral.code;
      document.getElementById("resultOffer").textContent = referral.offer;
      document.getElementById("resultStatus").textContent = referral.status;
      document.getElementById("resultUpdated").textContent = referral.updated;

      resultBox.style.display = "block";

      if (notFound) {
        notFound.style.display = "none";
      }

    } else {

      resultBox.style.display = "none";

      if (notFound) {
        notFound.style.display = "block";
      }

    }

  });

}
// ---- Contact page ----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cName').value.trim();
    const message = document.getElementById('cMessage').value.trim();
    const msg = `Hi, I'm ${name}. ${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  });
}
