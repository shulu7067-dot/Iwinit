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
  }
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
