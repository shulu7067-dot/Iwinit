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
    id: 'insurance-tracker-referral',
    company: 'Insurance & Tracker Services',
    category: 'Referral Program',
    title: 'Insurance & Tracker Referrals',
    reward: 'R350',
    desc: 'Know someone looking for insurance or a vehicle tracker? Refer them and earn R350 for every successful referral. No registration is required.',

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
  },
  {
    id: 'tutoring',
    company: 'Tutoring Referral Program',
    category: 'Education',
    title: 'Tutoring Referral Program',
    reward: 'R50',
    desc: 'Refer students who need tutoring for any grade and any school subject, including matric rewrite support.',

    payment: 'Less than 24 hours after the referred student has paid for the tutoring services.',

    steps: [
      'Find a student who needs tutoring.',
      'Obtain consent from the parent or the student (if they are old enough to provide it) before submitting their details.',
      'Submit the referral through Referral Hub.',
      'The tutoring provider contacts the parent or student to discuss their tutoring needs.',
      'The student enrolls and pays for the tutoring service.',
      'Your R50 referral reward is paid in less than 24 hours after the student\u2019s payment is confirmed.'
    ],

    requirements: [
      'Consent must be obtained from the parent or the student before making the referral.',
      'Available for learners in all grades.',
      'Covers all school subjects.',
      'Includes support for matric rewrite students.',
      'Referrals must be genuine and based in South Africa.'
    ]
  },
  {
    id: 'bridging-finance',
    company: 'Pension Bridging Finance',
    category: 'Finance',
    title: 'Pension Bridging Finance',
    reward: 'R350',
    desc: 'Refer clients who need bridging finance while waiting for a lump sum payout from a Pension Fund, Provident Fund, or Retirement Annuity. Suitable for people who have resigned, retired, been retrenched, dismissed, divorced, or are waiting for an annual retirement annuity payout.',

    payment: 'After the referral has been successfully approved.',

    steps: [
      'Find someone waiting for a retirement-related lump sum payment.',
      'Obtain their consent before referring them.',
      'Submit the referral.',
      'The finance provider contacts the client.',
      'If the referral is successful, you earn R350.'
    ],

    requirements: [
      'Client must consent to being referred.',
      'Client must be awaiting an eligible retirement-related payout.',
      'Referral must be genuine.'
    ]
  },
  {
    id: 'loan-r50',
    company: 'Loan Referral Program',
    category: 'Finance',
    title: 'Loan Referral Program',
    reward: 'R50',
    desc: 'Earn R50 by referring a client who successfully takes out a loan.',

    payment: 'After the client\'s loan has been approved and paid out.',

    steps: [
      'Obtain the client\u2019s consent.',
      'Submit the referral.',
      'The lender contacts the client.',
      'The client takes out a qualifying loan.',
      'Receive R50.'
    ],

    requirements: [
      'Client must consent.',
      'Loan must be successfully taken.',
      'Genuine referrals only.'
    ]
  },
  {
    id: 'loan-5percent',
    company: 'Loan Referral Program',
    category: 'Finance',
    title: 'Loan Referral \u2013 5% Commission',
    reward: '5% of the approved loan value',
    desc: 'Refer clients looking for finance and earn 5% of the approved loan amount when the loan is successfully completed.',

    payment: 'After the loan has been paid out.',

    steps: [
      'Obtain client consent.',
      'Submit the referral.',
      'Client is contacted.',
      'Loan is approved and paid out.',
      'Receive 5% commission.'
    ],

    requirements: [
      'Client must consent.',
      'Loan must be successfully approved.',
      'Genuine referrals only.'
    ]
  },
  {
    id: 'car-plan-a',
    company: 'Vehicle Referral Program',
    category: 'Automotive',
    title: 'Vehicle Referral \u2013 Supporting Documents',
    reward: 'R2,000',
    desc: 'Refer clients looking to purchase a car or bakkie through a rent-to-buy solution. This option requires supporting documents.',

    payment: 'After the referral has been successfully completed.',

    steps: [
      'Obtain the client\u2019s consent.',
      'Ensure the client can provide the required supporting documents.',
      'Submit the referral.',
      'The provider contacts the client.',
      'If successful, receive R2,000.'
    ],

    requirements: [
      'Client must consent.',
      'Supporting documents are required.',
      'Suitable regardless of credit history.',
      'Genuine referrals only.'
    ]
  },
  {
    id: 'car-plan-b',
    company: 'Vehicle Referral Program',
    category: 'Automotive',
    title: 'Vehicle Referral \u2013 No Supporting Documents',
    reward: 'R700',
    desc: 'Refer clients looking to buy a car or bakkie through a rent-to-buy solution without submitting supporting documents at referral stage.',

    payment: 'After the referral has been successfully completed.',

    steps: [
      'Obtain the client\u2019s consent.',
      'Submit the referral.',
      'The provider contacts the client.',
      'If the referral qualifies, receive R700.'
    ],

    requirements: [
      'Client must consent.',
      'No supporting documents required when referring.',
      'Suitable regardless of credit history.',
      'Genuine referrals only.'
    ]
  },
  {
    id: 'car-r1300',
    company: 'Vehicle Finance Referral',
    category: 'Automotive',
    title: 'Vehicle Finance Referral',
    reward: 'R1,300',
    desc: 'Refer clients looking to purchase or finance a vehicle and earn R1,300 for every successful referral.',

    payment: 'After the referral has been successfully completed.',

    steps: [
      'Obtain the client\u2019s consent.',
      'Submit the referral.',
      'The finance provider contacts the client.',
      'The client successfully completes the process.',
      'Receive R1,300.'
    ],

    requirements: [
      'Client must consent.',
      'Genuine referrals only.',
      'Available within South Africa.'
    ]
  },
  {
    id: 'debt-review',
    company: 'Debt Review Referral',
    category: 'Debt Solutions',
    title: 'Debt Review Referral',
    reward: 'Up to R1,000',
    desc: 'Refer someone who is struggling financially and may benefit from debt review or other debt solutions. Help them regain control of their finances while earning up to R1,000 for a successful referral.',

    payment: 'After the referred client successfully signs up for a qualifying service.',

    steps: [
      'Identify someone who may be struggling with debt or monthly repayments.',
      'Obtain their permission before referring them.',
      'Submit their referral through Referral Hub.',
      'A debt consultant contacts the client to discuss suitable solutions.',
      'If the client signs up for a qualifying service, earn up to R1,000.'
    ],

    requirements: [
      'The client must consent to being referred.',
      'The client should be experiencing financial difficulty or looking for debt relief solutions.',
      'The client must qualify for and sign up for a participating service.',
      'Referrals must be genuine and based in South Africa.'
    ]
  },
  {
    id: 'property-buyer',
    company: 'Property Referral Program',
    category: 'Property',
    title: 'Apartment Buyer Referral',
    reward: 'R7,000',
    desc: 'Refer a first-time buyer to purchase a new apartment. Once the apartment sale is completed and the property is successfully registered in the Deeds Office, you earn a once-off referral reward of R7,000.',

    payment: 'After the apartment has been registered in the Deeds Office.',

    steps: [
      'Obtain the buyer\u2019s consent before referring them.',
      'Submit the referral through Referral Hub.',
      'The property consultant contacts the buyer.',
      'The buyer purchases a qualifying apartment.',
      'The apartment is registered in the Deeds Office.',
      'Receive your once-off R7,000 referral reward.'
    ],

    requirements: [
      'Buyer must be purchasing a qualifying apartment for the first time through the participating developer.',
      'Buyer must consent to being referred.',
      'Referral must be submitted before the sale is concluded.',
      'Reward is paid once per referred buyer, even if multiple apartments are purchased.',
      'Genuine South African referrals only.'
    ]
  },
  {
    id: 'property-seller',
    company: 'Property Referral Program',
    category: 'Property',
    title: 'Property Seller Referral',
    reward: 'R1,000',
    desc: 'Refer a property owner who wants to sell their property and earn R1,000 after the successful sale of the property.',

    payment: 'After the property has been successfully sold.',

    steps: [
      'Obtain the property owner\u2019s permission.',
      'Submit the referral.',
      'A property consultant contacts the owner.',
      'The property is listed and successfully sold.',
      'Receive R1,000.'
    ],

    requirements: [
      'Property owner must consent to being referred.',
      'Property must be successfully sold.',
      'Genuine referrals only.',
      'Available within South Africa.'
    ]
  },
  {
    id: 'property-management',
    company: 'Property Referral Program',
    category: 'Property',
    title: 'Property Management Referral',
    reward: 'R500',
    desc: 'Refer a landlord looking for professional property management services and earn R500 once the property is successfully placed under management or rented through the service.',

    payment: 'After the management agreement or successful rental is completed.',

    steps: [
      'Obtain the landlord\u2019s permission.',
      'Submit the referral.',
      'A property consultant contacts the landlord.',
      'The property is successfully taken under management or rented out.',
      'Receive R500.'
    ],

    requirements: [
      'Landlord must consent to being referred.',
      'Property must qualify for the management service.',
      'Referral must be genuine.',
      'Available within South Africa.'
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
        <a class="btn btn-primary" href="submit.html?offer=${offer.id}">Submit Lead</a>
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
