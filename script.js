// =====================================================
//  CyberLearn – Web-Based Cyber Security Awareness Model
// =====================================================

// ---------- Lesson data ----------
const lessons = [
  {
    icon: "🔑",
    title: "Strong Passwords",
    text: "Passwords are the keys to your digital life. Weak or reused passwords are the easiest way for attackers to get in.",
    points: ["Use 12+ characters with letters, numbers and symbols", "Never reuse a password on two sites", "Use a password manager", "Turn on Two-Factor Authentication (2FA)"]
  },
  {
    icon: "🎣",
    title: "Phishing Emails",
    text: "Phishing messages pretend to come from trusted companies so you'll click a link or share private data.",
    points: ["Watch for urgent threats like 'account blocked'", "Check the real sender address", "Hover over links before clicking", "Never share OTPs or passwords"]
  },
  {
    icon: "🦠",
    title: "Malware & Viruses",
    text: "Malware is harmful software such as viruses, ransomware and spyware that can steal data or lock your files.",
    points: ["Download apps only from official stores", "Keep your OS and apps updated", "Use antivirus software", "Don't open unknown attachments (.exe, .zip)"]
  },
  {
    icon: "🌐",
    title: "Safe Browsing",
    text: "Fake websites and pop-ups are made to look real. A few quick checks keep you safe while browsing.",
    points: ["Look for HTTPS and the correct website name", "Don't click pop-up ads or 'You won' banners", "Avoid banking on public Wi-Fi", "Use a VPN on open networks"]
  },
  {
    icon: "📱",
    title: "Social Media Safety",
    text: "Everything you post can be seen, saved and used by strangers, including scammers.",
    points: ["Keep your accounts private", "Don't post your address, phone or live location", "Accept requests only from people you know", "Think before you share photos"]
  },
  {
    icon: "🎭",
    title: "Social Engineering",
    text: "Attackers often trick people instead of hacking computers, by pretending to be a bank, IT support or a friend in trouble.",
    points: ["Real banks never ask for your OTP or PIN", "Verify by calling the official number", "Be careful with urgent requests for money", "Don't plug in unknown USB drives"]
  }
];

// ---------- Quiz data ----------
const questions = [
  { q: "Which is the strongest password?", options: ["123456", "password", "Rahul2005", "T!ger#Blue9Sky"], answer: 3,
    why: "It is long and mixes uppercase, lowercase, numbers and symbols." },
  { q: "You get an email: 'Your account will be blocked, click here now!' What should you do?", options: ["Click the link quickly", "Ignore it and check on the official website", "Reply with your password", "Forward it to friends"], answer: 1,
    why: "Urgency is a classic phishing trick. Always go to the official site yourself." },
  { q: "What does HTTPS on a website mean?", options: ["The site is free", "The connection is encrypted", "The site is fast", "The site has no ads"], answer: 1,
    why: "HTTPS encrypts data between you and the site, but a fake site can still use HTTPS." },
  { q: "What is ransomware?", options: ["A free antivirus", "Malware that locks files and demands money", "A type of browser", "A backup tool"], answer: 1,
    why: "Ransomware encrypts your files and asks for payment. Backups are the best defence." },
  { q: "What is 2FA?", options: ["Two passwords", "A second verification step like an OTP", "Two email accounts", "A firewall"], answer: 1,
    why: "2FA adds a second check, so a stolen password alone isn't enough." },
  { q: "Someone calls from 'your bank' and asks for your OTP. What do you do?", options: ["Give the OTP", "Hang up and call the bank's official number", "Give only half the OTP", "Send it by SMS instead"], answer: 1,
    why: "Banks never ask for OTPs. This is social engineering." },
  { q: "You find a USB drive in the college parking lot. What should you do?", options: ["Plug it in to find the owner", "Give it to security / IT without plugging it in", "Keep it", "Format it on your laptop"], answer: 1,
    why: "Attackers drop infected USB drives on purpose. Plugging one in can install malware." },
  { q: "Which is the safest thing to do on public Wi-Fi?", options: ["Online banking", "Use a VPN and avoid entering passwords", "Share files with everyone", "Turn off your firewall"], answer: 1,
    why: "Public Wi-Fi can be monitored. A VPN encrypts your traffic." }
];
const PASS_MARK = 6;

// ---------- Phishing game data ----------
const emails = [
  {
    from: "PayPal Security &lt;security@paypa1-support.com&gt;",
    subject: "⚠️ URGENT: Your account has been suspended!",
    body: "Dear Customer,<br>We noticed unusual activity. Your account will be <b>permanently closed in 24 hours</b> unless you verify your details.<br><a href='#' onclick='return false'>http://paypa1-verify.xyz/login</a>",
    phish: true,
    why: "Fake domain 'paypa1' (number 1 instead of letter l), urgent threat, generic 'Dear Customer' and a suspicious .xyz link."
  },
  {
    from: "Amazon &lt;shipment-tracking@amazon.in&gt;",
    subject: "Your order #402-7719 has been shipped",
    body: "Hi Priya,<br>Your order of <b>Wireless Mouse</b> has shipped and will arrive on Friday.<br>You can track it anytime in the Amazon app under <i>Your Orders</i>.",
    phish: false,
    why: "Real Amazon domain, uses your name, mentions a real order, and doesn't ask for any password or payment."
  },
  {
    from: "HR Department &lt;hr.dept.office2026@gmail.com&gt;",
    subject: "Salary Revision – Open attachment immediately",
    body: "Hello,<br>Your salary has been revised. Please open the attached file to see the new amount.<br><br>📎 <b>Salary_Details.exe</b>",
    phish: true,
    why: "Company HR won't use a free Gmail address, and an '.exe' attachment is a program that can install malware."
  },
  {
    from: "Google &lt;no-reply@accounts.google.com&gt;",
    subject: "New sign-in on Windows",
    body: "We noticed a new sign-in to your Google Account on a Windows device.<br>If this was you, you don't need to do anything. If not, check your activity at <b>myaccount.google.com</b>.",
    phish: false,
    why: "Official Google domain, no urgent threat, no link asking for your password, and it tells you to visit the site yourself."
  },
  {
    from: "Lucky Draw &lt;winner@free-prize-india.top&gt;",
    subject: "🎉 Congratulations! You won ₹10,00,000!",
    body: "You have been selected as our lucky winner!<br>To claim your prize, reply with your <b>bank account number, IFSC code and ATM PIN</b> and pay a ₹999 processing fee.",
    phish: true,
    why: "Too good to be true, an unknown sender, and it asks for your bank details, PIN and money. Real prizes never do that."
  }
];

// ---------- Tips ----------
const tips = [
  "Lock your phone and laptop with a PIN or password.",
  "Keep your apps and operating system updated. Updates fix security holes.",
  "Never share your OTP with anyone, not even bank staff.",
  "Hover over a link before clicking to see where it really goes.",
  "Back up important files so ransomware can't hold them hostage.",
  "Log out of accounts when using shared or college computers.",
  "Turn on 2FA for email and social media accounts.",
  "Don't scan random QR codes. They can lead to fake payment pages."
];

// ---------- Badge data ----------
const badges = [
  { id: "first",    icon: "🌱", name: "First Step",     desc: "Complete your first lesson",      check: () => completed.length >= 1 },
  { id: "half",     icon: "📚", name: "Bookworm",       desc: "Complete 3 lessons",              check: () => completed.length >= 3 },
  { id: "scholar",  icon: "🎓", name: "Scholar",        desc: "Complete all lessons",            check: () => completed.length === lessons.length },
  { id: "pwpro",    icon: "🔐", name: "Password Pro",   desc: "Create a password that passes every check", check: () => passwordPro },
  { id: "spotter",  icon: "🕵️", name: "Phish Spotter",  desc: "Catch every email correctly",     check: () => phishBest === emails.length },
  { id: "quiz",     icon: "📝", name: "Quiz Taker",     desc: "Finish the quiz once",            check: () => quizPlayed },
  { id: "perfect",  icon: "💯", name: "Perfect Score",  desc: "Get every quiz answer right",     check: () => bestScore === questions.length },
  { id: "champion", icon: "🏆", name: "Cyber Champion", desc: "Unlock all other badges",         check: () => unlocked.length >= badges.length - 1 }
];

// Levels by points (max = 60 lessons + 40 quiz + 25 phishing + 10 password = 135)
const levels = [
  { name: "Beginner 🐣", min: 0 },
  { name: "Learner 📖", min: 40 },
  { name: "Defender 🛡️", min: 80 },
  { name: "Cyber Expert 🦸", min: 120 }
];

// ---------- Saved progress ----------
function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch (e) {
    return fallback;
  }
}

let completed   = load("completed", []);
let bestScore   = load("bestScore", 0);
let quizPlayed  = load("quizPlayed", false);
let phishBest   = load("phishBest", 0);
let passwordPro = load("passwordPro", false);
let unlocked    = load("unlocked", []);
let userName    = load("userName", "");

function save() {
  const data = { completed, bestScore, quizPlayed, phishBest, passwordPro, unlocked, userName };
  try {
    for (const key in data) localStorage.setItem(key, JSON.stringify(data[key]));
  } catch (e) { /* storage blocked – progress just won't persist */ }
}

function getPoints() {
  return completed.length * 10 + bestScore * 5 + phishBest * 5 + (passwordPro ? 10 : 0);
}

function maxPoints() {
  return lessons.length * 10 + questions.length * 5 + emails.length * 5 + 10;
}

// ---------- Page navigation (uses #hash so Back button works) ----------
const pages = ["home", "lessons", "password", "phishing", "quiz", "badges"];

function showPage(id) {
  if (!pages.includes(id)) id = "home";
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === id));
  document.querySelectorAll("nav a").forEach(a => a.classList.toggle("active", a.dataset.page === id));
  document.getElementById("nav").classList.remove("open");
  if (id === "quiz") startQuiz();
  if (id === "phishing") startPhish();
  window.scrollTo(0, 0);
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

window.addEventListener("hashchange", () => showPage(location.hash.slice(1)));
document.getElementById("nav").addEventListener("click", () => document.getElementById("nav").classList.remove("open"));

// ---------- Tip of the day ----------
let tipIndex = new Date().getDate() % tips.length;

function showTip() {
  document.getElementById("tip-text").textContent = tips[tipIndex];
  tipIndex = (tipIndex + 1) % tips.length;
}

// ---------- Lessons ----------
function showLessons() {
  document.getElementById("lesson-list").innerHTML = lessons.map((lesson, i) => {
    const done = completed.includes(i);
    return `
      <div class="card lesson ${done ? "done" : ""}">
        <div class="lesson-head">
          <div class="lesson-icon">${lesson.icon}</div>
          <div><small>Lesson ${i + 1}</small><h3>${lesson.title}</h3></div>
        </div>
        <p>${lesson.text}</p>
        <ul>${lesson.points.map(p => `<li>${p}</li>`).join("")}</ul>
        <button class="btn btn-small ${done ? "btn-green" : ""}" onclick="markDone(${i})" ${done ? "disabled" : ""}>
          ${done ? "✔ Completed" : "Mark as Complete (+10)"}
        </button>
      </div>`;
  }).join("");
}

function markDone(i) {
  if (completed.includes(i)) return;
  completed.push(i);
  showToast("+10 points! ⭐");
  refresh();
}

// ---------- Password checker ----------
const commonPasswords = ["password", "123456", "12345678", "qwerty", "abc123", "111111", "iloveyou", "admin", "welcome"];

const pwRules = [
  { text: "At least 12 characters",  test: p => p.length >= 12 },
  { text: "Uppercase letter (A-Z)",  test: p => /[A-Z]/.test(p) },
  { text: "Lowercase letter (a-z)",  test: p => /[a-z]/.test(p) },
  { text: "Number (0-9)",            test: p => /[0-9]/.test(p) },
  { text: "Symbol (! @ # $ ...)",    test: p => /[^A-Za-z0-9]/.test(p) },
  { text: "Not a common password",   test: p => p.length > 0 && !commonPasswords.some(c => p.toLowerCase().includes(c)) }
];

const pwLevels = [
  { label: "–",              color: "transparent" },
  { label: "Very Weak 😟",   color: "#ef4444" },
  { label: "Weak 😕",        color: "#f97316" },
  { label: "Medium 😐",      color: "#f59e0b" },
  { label: "Good 🙂",        color: "#84cc16" },
  { label: "Strong 💪",      color: "#22c55e" },
  { label: "Very Strong 🔥", color: "#22d3ee" }
];

// Rough estimate: an attacker trying 10 billion guesses per second
function crackTime(pw) {
  if (!pw) return "–";
  if (commonPasswords.some(c => pw.toLowerCase().includes(c))) return "Instantly ⚡";
  let pool = 0;
  if (/[a-z]/.test(pw)) pool += 26;
  if (/[A-Z]/.test(pw)) pool += 26;
  if (/[0-9]/.test(pw)) pool += 10;
  if (/[^A-Za-z0-9]/.test(pw)) pool += 33;
  const seconds = Math.pow(pool, pw.length) / 1e10;

  const units = [["years", 31536000], ["days", 86400], ["hours", 3600], ["minutes", 60], ["seconds", 1]];
  if (seconds < 1) return "Instantly ⚡";
  if (seconds > 31536000 * 1e6) return "Millions of years 🏰";
  for (const [name, size] of units) {
    if (seconds >= size) return Math.round(seconds / size).toLocaleString() + " " + name;
  }
}

function checkPassword() {
  const pw = document.getElementById("pw-input").value;
  let passed = 0;

  document.getElementById("pw-rules").innerHTML = pwRules.map(rule => {
    const ok = rule.test(pw);
    if (ok) passed++;
    return `<li class="${ok ? "ok" : ""}">${ok ? "✅" : "⬜"} ${rule.text}</li>`;
  }).join("");

  const lvl = pw.length === 0 ? pwLevels[0] : pwLevels[passed];
  const bar = document.getElementById("pw-bar");
  bar.style.width = (passed / pwRules.length) * 100 + "%";
  bar.style.background = lvl.color;
  document.getElementById("pw-label").textContent = lvl.label;
  document.getElementById("pw-time").textContent = crackTime(pw);

  if (passed === pwRules.length && !passwordPro) {
    passwordPro = true;
    showToast("+10 points! Great password 🔐");
    refresh();
  }
}

function togglePassword() {
  const input = document.getElementById("pw-input");
  input.type = input.type === "password" ? "text" : "password";
  document.getElementById("eye-btn").textContent = input.type === "password" ? "👁️" : "🙈";
}

// ---------- Spot the Phish ----------
let phishIndex = 0;
let phishScore = 0;

function startPhish() {
  phishIndex = 0;
  phishScore = 0;
  showEmail();
}

function showEmail() {
  const e = emails[phishIndex];
  document.getElementById("phish-box").innerHTML = `
    <div class="card">
      <div class="q-top"><span>📧 Email ${phishIndex + 1} / ${emails.length}</span><span>Score: ${phishScore}</span></div>
      <div class="bar"><div class="quiz-fill" style="width:${(phishIndex / emails.length) * 100}%"></div></div>
      <div class="email">
        <div class="email-head">
          <div><b>From:</b> ${e.from}</div>
          <div><b>Subject:</b> ${e.subject}</div>
        </div>
        <div class="email-body">${e.body}</div>
      </div>
      <div class="choices" id="choices">
        <button class="btn btn-danger" onclick="answerPhish(true)">🎣 Phishing</button>
        <button class="btn btn-green" onclick="answerPhish(false)">✅ Safe</button>
      </div>
      <div id="explain"></div>
    </div>`;
}

function answerPhish(saidPhish) {
  const e = emails[phishIndex];
  const right = saidPhish === e.phish;
  if (right) phishScore++;

  document.getElementById("choices").innerHTML = `
    <button class="btn" onclick="nextEmail()">${phishIndex + 1 < emails.length ? "Next Email →" : "See Result"}</button>`;
  document.getElementById("explain").innerHTML = `
    <div class="explain ${right ? "right" : "no"}">
      <b>${right ? "✅ Correct!" : "❌ Not quite."}</b> This email is <b>${e.phish ? "PHISHING" : "SAFE"}</b>.<br>${e.why}
    </div>`;
}

function nextEmail() {
  phishIndex++;
  if (phishIndex < emails.length) {
    showEmail();
    return;
  }
  const perfect = phishScore === emails.length;
  const newBest = phishScore > phishBest;
  if (newBest) phishBest = phishScore;
  if (perfect) confetti();

  document.getElementById("phish-box").innerHTML = `
    <div class="card result">
      <p class="big">${perfect ? "🕵️" : "🎣"}</p>
      <h2>${phishScore} / ${emails.length} Correct</h2>
      <p class="muted">${perfect ? "Amazing! Nobody can fool you." : "Tip: check the sender address, links and urgency."}</p>
      ${newBest ? `<p><b>⭐ New best score!</b></p>` : ""}
      <button class="btn" onclick="startPhish()">Play Again</button>
    </div>`;
  refresh();
}

// ---------- Quiz ----------
let current = 0;
let score = 0;

function startQuiz() {
  current = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const item = questions[current];
  document.getElementById("quiz-box").innerHTML = `
    <div class="card">
      <div class="q-top"><span>Question ${current + 1} / ${questions.length}</span><span>Score: ${score}</span></div>
      <div class="bar"><div class="quiz-fill" style="width:${(current / questions.length) * 100}%"></div></div>
      <h3 class="q-title">${item.q}</h3>
      ${item.options.map((opt, i) => `<button class="option" onclick="checkAnswer(this, ${i})">${opt}</button>`).join("")}
      <div id="q-explain"></div>
    </div>`;
}

function checkAnswer(btn, i) {
  const item = questions[current];
  const buttons = document.querySelectorAll(".option");
  buttons.forEach(b => (b.disabled = true));

  const right = i === item.answer;
  if (right) score++;
  btn.classList.add(right ? "correct" : "wrong");
  buttons[item.answer].classList.add("correct");

  document.getElementById("q-explain").innerHTML = `
    <div class="explain ${right ? "right" : "no"}"><b>${right ? "✅ Correct!" : "❌ Wrong."}</b> ${item.why}</div>
    <button class="btn" style="margin-top:14px" onclick="nextQuestion()">
      ${current + 1 < questions.length ? "Next Question →" : "See Result"}
    </button>`;
}

function nextQuestion() {
  current++;
  if (current < questions.length) showQuestion();
  else showResult();
}

function showResult() {
  quizPlayed = true;
  const total = questions.length;
  const newBest = score > bestScore;
  if (newBest) bestScore = score;
  if (score === total) confetti();

  const emoji = score === total ? "🏆" : score >= PASS_MARK ? "🎉" : "💪";
  const msg = score === total ? "Perfect! You are a cyber hero!"
            : score >= PASS_MARK ? "You passed! You are cyber aware."
            : `You need ${PASS_MARK} to pass. Review the lessons and try again!`;

  document.getElementById("quiz-box").innerHTML = `
    <div class="card result">
      <p class="big">${emoji}</p>
      <h2>${score} / ${total}</h2>
      <p class="muted">${msg}</p>
      ${newBest ? `<p><b>⭐ New best score!</b></p>` : ""}
      <button class="btn" onclick="startQuiz()">Try Again</button>
    </div>`;
  refresh();
}

// ---------- Badges ----------
function checkBadges() {
  badges.forEach(b => {
    if (!unlocked.includes(b.id) && b.check()) {
      unlocked.push(b.id);
      showToast(`🎖️ Badge unlocked: ${b.icon} ${b.name}`);
      confetti();
    }
  });
}

function showBadges() {
  document.getElementById("badge-list").innerHTML = badges.map(b => `
    <div class="badge ${unlocked.includes(b.id) ? "" : "locked"}">
      <div class="icon">${b.icon}</div>
      <h4>${b.name}</h4>
      <p>${b.desc}</p>
    </div>`).join("");

  const certReady = completed.length === lessons.length && bestScore >= PASS_MARK;
  document.getElementById("cert-locked").classList.toggle("hidden", certReady);
  document.getElementById("cert-unlocked").classList.toggle("hidden", !certReady);
}

// ---------- Certificate ----------
function printCertificate() {
  const name = document.getElementById("cert-name").value.trim();
  if (!name) {
    showToast("Please enter your name first ✍️");
    return;
  }
  userName = name;
  save();
  showWelcome();
  document.getElementById("cert-print-name").textContent = name;
  document.getElementById("cert-print-score").textContent = getPoints() + " / " + maxPoints();
  document.getElementById("cert-print-date").textContent = "Issued on " + new Date().toLocaleDateString();
  window.print();
}

function showWelcome() {
  if (userName) document.getElementById("welcome").textContent = `Welcome back, ${userName} 👋`;
  document.getElementById("cert-name").value = userName;
}

// ---------- Home stats ----------
function showStats() {
  const points = getPoints();
  document.getElementById("points").textContent = points;
  document.getElementById("points-top").textContent = points;
  document.getElementById("lessons-done").textContent = completed.length + "/" + lessons.length;
  document.getElementById("best-score").textContent = bestScore + "/" + questions.length;
  document.getElementById("badge-count").textContent = unlocked.length + "/" + badges.length;

  const level = [...levels].reverse().find(l => points >= l.min);
  const next = levels[levels.indexOf(level) + 1];
  document.getElementById("level").textContent = level.name;
  document.getElementById("next-level").textContent = next ? `${next.min - points} pts to ${next.name}` : "Max level reached! 🎉";
  document.getElementById("level-bar").style.width = (points / maxPoints()) * 100 + "%";
}

// ---------- Popup message ----------
let toastQueue = [];
let toastBusy = false;

function showToast(text) {
  toastQueue.push(text);
  if (!toastBusy) nextToast();
}

function nextToast() {
  const toast = document.getElementById("toast");
  if (toastQueue.length === 0) { toastBusy = false; return; }
  toastBusy = true;
  toast.textContent = toastQueue.shift();
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(nextToast, 400);
  }, 2200);
}

// ---------- Confetti ----------
function confetti() {
  const colors = ["#22d3ee", "#a855f7", "#facc15", "#22c55e", "#f472b6"];
  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[i % colors.length];
    piece.style.animationDuration = 2 + Math.random() * 2 + "s";
    piece.style.animationDelay = Math.random() * 0.5 + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

// ---------- Reset ----------
function resetProgress() {
  if (!confirm("Reset all points, lessons, badges and your name?")) return;
  completed = [];
  bestScore = 0;
  quizPlayed = false;
  phishBest = 0;
  passwordPro = false;
  unlocked = [];
  userName = "";
  document.getElementById("welcome").textContent = "Cyber Security Awareness Platform";
  showWelcome();
  refresh();
}

// ---------- Update everything ----------
function refresh() {
  checkBadges();
  save();
  showLessons();
  showBadges();
  showStats();
}

refresh();
showTip();
showWelcome();
checkPassword();
showPage(location.hash.slice(1));
