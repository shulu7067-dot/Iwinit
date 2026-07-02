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
const WHATSAPP_NUMBER = '27000000000';

function submitLeadUrl(offerTitle, trackingCode) {
  const msg = `Hi! I'd like to submit a referral lead for: ${offerTitle}\n\nTracking code: ${trackingCode}\nLead name: \nLead phone: \n`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function generateTrackingCode() {
  return 'RF' + Math.floor(10000 + Math.random() * 89999);
}

// ---- Home / Leads page ----
const OFFERS = [{
  id: 'insurance-tracker-referral',
  company: 'Insurance & Tracker Services',
  category: 'Referral Program',
  title: 'Insurance & Tracker Referrals',
  reward: 'R350',
  desc: 'Know someone looking for insurance or a vehicle tracker? Refer them and earn R500 for every successful referral. No registration is required.',

  payment: 'Insurance: Paid within 7 days after the first successful admin fee debit. Tracker: Paid within 24 hours after the installation certificate is received.',

  steps: [
    'Speak to the client and obtain their permission before sharing their details.',
    'Submit the client\'s full name, surname, contact number and the service they are interested in.',
    'A consultant will be assigned to the referral and will contact the client.',
    'You will receive updates on the progress of your referral.',
    'If the client successfully takes the insurance policy and the first admin fee is debited, you earn R350.',
    'If the client has a tracker installed, payment is made after the installation certificate is received (usually within 24 hours of installation).'
  ],

  requirements: [
    'The client must have given permission for their details to be shared.',
    'The client must be expecting a call from a consultant.',
    'Insurance referrals only qualify once the first admin fee has been successfully debited.',
    'Tracker referrals only qualify once the tracker has been installed and the installation certificate has been received.',
    'Referral payments are made only for successful referrals.'
  ]
}];
  {
    id: 'solar',
    company: 'SunGrid',
    category: 'Energy',
    title: 'Solar Installation',
    reward: 'R350',
    desc: 'Refer households or small businesses exploring solar or backup power.',
    payment: 'Within 10 business days'
  },
  {
    id: 'vehicle-finance',
    company: 'DriveCap',
    category: 'Finance',
    title: 'Vehicle Finance',
    reward: 'R400',
    desc: 'Need people looking for vehicle finance or refinancing options.',
    payment: 'Within 14 days after approval'
  },
  {
    id: 'fibre',
    company: 'LinkFibre',
    category: 'Telecoms',
    title: 'Fibre Internet Signups',
    reward: 'R150',
    desc: 'Refer homes in fibre-covered areas looking to switch or install fibre.',
    payment: 'Within 7 business days'
  },
  {
    id: 'medical-aid',
    company: 'CarePlan',
    category: 'Insurance',
    title: 'Medical Aid Switches',
    reward: 'R350',
    desc: 'Connect individuals or families comparing medical aid schemes.',
    payment: 'Within 14 business days'
  },
  {
    id: 'business-loan',
    company: 'CapitalWorks',
    category: 'Finance',
    title: 'Small Business Loans',
    reward: 'R600',
    desc: 'Refer registered businesses looking for working capital or expansion funding.',
    payment: 'Within 21 days after approval'
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
    const code = generateTrackingCode();
    const card = document.createElement('article');
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
     <a class="btn btn-primary" href="submit.html?offer=${offer.id}">
    Submit Lead
</a>

<a href="offer.html?id=${offer.id}" class="secondary-btn">
    Read More
</a> </div>
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
