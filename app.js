const translations = {
  en: {
    language: "Choose language", homeEyebrow: "Everyday utilities", homeTitle: "Tools for the work at hand", homeSub: "Fast, simple, and private. Everything runs in your browser.",
    wc: "Word Counter", wcSummary: "Count words and characters as you write.", wcPlaceholder: "Start typing or paste your text...", words: "Words", chars: "Characters",
    pg: "Password Generator", pgSummary: "Create a random password with a length you choose.", length: "Password length", generate: "Generate password", copy: "Copy", copied: "Copied!", copyError: "Could not copy. Select the password and copy it manually.",
    emi: "EMI Calculator", emiSummary: "Estimate monthly payments and total loan cost.", amount: "Loan amount (₹)", rate: "Interest rate (% per year)", years: "Loan term (years)", calculate: "Calculate EMI", monthly: "Monthly EMI", total: "Total payment", invalidLoan: "Enter a valid loan amount, interest rate, and term.",
    age: "Age Calculator", ageSummary: "Calculate your age in years, months, and days.", dob: "Date of birth", calculateAge: "Calculate age", invalidDate: "Enter a valid date of birth.", futureDate: "Date of birth cannot be in the future.",
    open: "Open tool", back: "← All tools", footer: "Free tools that work in your browser.",
    wordEyebrow: "Writing utility", passwordEyebrow: "Account security", emiEyebrow: "Personal finance", ageEyebrow: "Date and time", pageHint: "Your text stays in this browser.", yearsWord: "years", monthsWord: "months", daysWord: "days"
  },
  hi: {
    language: "भाषा चुनें", homeEyebrow: "रोज़मर्रा के उपयोगी टूल", homeTitle: "आपके काम के आसान टूल", homeSub: "तेज़, सरल और निजी। सब कुछ आपके ब्राउज़र में चलता है।",
    wc: "शब्द गिनती", wcSummary: "लिखते समय शब्द और अक्षर गिनें।", wcPlaceholder: "यहाँ लिखना या टेक्स्ट पेस्ट करना शुरू करें...", words: "शब्द", chars: "अक्षर",
    pg: "पासवर्ड जनरेटर", pgSummary: "अपनी पसंद की लंबाई का रैंडम पासवर्ड बनाएँ।", length: "पासवर्ड की लंबाई", generate: "पासवर्ड बनाएँ", copy: "कॉपी करें", copied: "कॉपी हो गया!", copyError: "कॉपी नहीं हो पाया। पासवर्ड चुनकर मैन्युअल रूप से कॉपी करें।",
    emi: "ईएमआई कैलकुलेटर", emiSummary: "मासिक किस्त और कुल लोन लागत का अनुमान लगाएँ।", amount: "लोन राशि (₹)", rate: "ब्याज दर (% प्रति वर्ष)", years: "लोन अवधि (वर्ष)", calculate: "ईएमआई निकालें", monthly: "मासिक ईएमआई", total: "कुल भुगतान", invalidLoan: "मान्य लोन राशि, ब्याज दर और अवधि दर्ज करें।",
    age: "उम्र कैलकुलेटर", ageSummary: "साल, महीने और दिनों में अपनी उम्र जानें।", dob: "जन्म तिथि", calculateAge: "उम्र निकालें", invalidDate: "जन्म की मान्य तारीख दर्ज करें।", futureDate: "जन्म तिथि भविष्य में नहीं हो सकती।",
    open: "टूल खोलें", back: "← सभी टूल", footer: "मुफ़्त टूल, सीधे आपके ब्राउज़र में।",
    wordEyebrow: "लेखन टूल", passwordEyebrow: "खाता सुरक्षा", emiEyebrow: "निजी वित्त", ageEyebrow: "तारीख और समय", pageHint: "आपका टेक्स्ट इसी ब्राउज़र में रहता है।", yearsWord: "साल", monthsWord: "महीने", daysWord: "दिन"
  },
  te: {
    language: "భాషను ఎంచుకోండి", homeEyebrow: "రోజువారీ ఉపయోగకర సాధనాలు", homeTitle: "మీ పనికి ఉపయోగపడే సాధనాలు", homeSub: "వేగంగా, సులభంగా, ప్రైవేట్‌గా. అన్నీ మీ బ్రౌజర్‌లోనే పనిచేస్తాయి.",
    wc: "పదాల లెక్కింపు", wcSummary: "టైప్ చేస్తూనే పదాలు, అక్షరాలు లెక్కించండి.", wcPlaceholder: "ఇక్కడ టైప్ చేయండి లేదా పాఠ్యాన్ని అతికించండి...", words: "పదాలు", chars: "అక్షరాలు",
    pg: "పాస్‌వర్డ్ జనరేటర్", pgSummary: "మీరు ఎంచుకున్న పొడవుతో యాదృచ్ఛిక పాస్‌వర్డ్ సృష్టించండి.", length: "పాస్‌వర్డ్ పొడవు", generate: "పాస్‌వర్డ్ సృష్టించు", copy: "కాపీ", copied: "కాపీ అయింది!", copyError: "కాపీ చేయలేకపోయాం. పాస్‌వర్డ్‌ను ఎంచుకుని కాపీ చేయండి.",
    emi: "EMI కాలిక్యులేటర్", emiSummary: "నెలవారీ చెల్లింపులు, మొత్తం రుణ ఖర్చును అంచనా వేయండి.", amount: "రుణ మొత్తం (₹)", rate: "వడ్డీ రేటు (% సంవత్సరానికి)", years: "రుణ కాలం (సంవత్సరాలు)", calculate: "EMI లెక్కించు", monthly: "నెలవారీ EMI", total: "మొత్తం చెల్లింపు", invalidLoan: "చెల్లుబాటు అయ్యే రుణ మొత్తం, వడ్డీ రేటు, కాలాన్ని నమోదు చేయండి.",
    age: "వయస్సు కాలిక్యులేటర్", ageSummary: "సంవత్సరాలు, నెలలు, రోజుల్లో మీ వయస్సు తెలుసుకోండి.", dob: "పుట్టిన తేదీ", calculateAge: "వయస్సు లెక్కించు", invalidDate: "చెల్లుబాటు అయ్యే పుట్టిన తేదీని నమోదు చేయండి.", futureDate: "పుట్టిన తేదీ భవిష్యత్తులో ఉండకూడదు.",
    open: "సాధనాన్ని తెరవండి", back: "← అన్ని సాధనాలు", footer: "మీ బ్రౌజర్‌లో పనిచేసే ఉచిత సాధనాలు.",
    wordEyebrow: "రచనా సాధనం", passwordEyebrow: "ఖాతా భద్రత", emiEyebrow: "వ్యక్తిగత ఆర్థికం", ageEyebrow: "తేదీ మరియు సమయం", pageHint: "మీ పాఠ్యం ఈ బ్రౌజర్‌లోనే ఉంటుంది.", yearsWord: "సంవత్సరాలు", monthsWord: "నెలలు", daysWord: "రోజులు"
  },
  ur: {
    language: "زبان منتخب کریں", homeEyebrow: "روزمرہ کے مفید ٹولز", homeTitle: "آپ کے کام کے آسان ٹولز", homeSub: "تیز، آسان اور نجی۔ سب کچھ آپ کے براؤزر میں چلتا ہے۔",
    wc: "الفاظ گنتی", wcSummary: "لکھتے وقت الفاظ اور حروف گنیں۔", wcPlaceholder: "یہاں لکھنا یا متن پیسٹ کرنا شروع کریں...", words: "الفاظ", chars: "حروف",
    pg: "پاس ورڈ جنریٹر", pgSummary: "اپنی پسند کی لمبائی کا بے ترتیب پاس ورڈ بنائیں۔", length: "پاس ورڈ کی لمبائی", generate: "پاس ورڈ بنائیں", copy: "کاپی کریں", copied: "کاپی ہو گیا!", copyError: "کاپی نہیں ہو سکا۔ پاس ورڈ منتخب کر کے دستی طور پر کاپی کریں۔",
    emi: "ای ایم آئی کیلکولیٹر", emiSummary: "ماہانہ قسط اور قرض کی کل لاگت کا اندازہ لگائیں۔", amount: "قرض کی رقم (₹)", rate: "شرح سود (% سالانہ)", years: "قرض کی مدت (سال)", calculate: "ای ایم آئی نکالیں", monthly: "ماہانہ ای ایم آئی", total: "کل ادائیگی", invalidLoan: "درست قرض کی رقم، شرح سود اور مدت درج کریں۔",
    age: "عمر کیلکولیٹر", ageSummary: "سال، مہینوں اور دنوں میں اپنی عمر معلوم کریں۔", dob: "تاریخ پیدائش", calculateAge: "عمر معلوم کریں", invalidDate: "پیدائش کی درست تاریخ درج کریں۔", futureDate: "تاریخ پیدائش مستقبل میں نہیں ہو سکتی۔",
    open: "ٹول کھولیں", back: "← تمام ٹولز", footer: "مفت ٹولز، آپ کے براؤزر میں۔",
    wordEyebrow: "تحریری ٹول", passwordEyebrow: "اکاؤنٹ کی حفاظت", emiEyebrow: "ذاتی مالیات", ageEyebrow: "تاریخ اور وقت", pageHint: "آپ کا متن اسی براؤزر میں رہتا ہے۔", yearsWord: "سال", monthsWord: "مہینے", daysWord: "دن"
  }
};

const languageSelect = document.getElementById("lang");
let language = "en";
try { language = localStorage.getItem("lang") || "en"; } catch (error) { /* Storage is optional. */ }
if (!translations[language]) language = "en";

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  try { localStorage.setItem("lang", language); } catch (error) { /* The selected language still applies to this page. */ }
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ur" ? "rtl" : "ltr";
  if (languageSelect) languageSelect.value = language;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll("[data-placeholder]").forEach(element => {
    element.placeholder = translations[language][element.dataset.placeholder];
  });
  document.querySelectorAll("[data-title]").forEach(element => {
    element.title = translations[language][element.dataset.title];
  });
  document.querySelectorAll("[data-clear-result]").forEach(element => {
    element.textContent = "";
    element.classList.remove("is-error");
  });
  const copyButton = document.getElementById("copy-password");
  if (copyButton && !copyButton.disabled) copyButton.textContent = translations[language].copy;
}

function updateStat(element, value) {
  const formatted = value.toLocaleString(language);
  if (element.textContent === formatted) return;
  element.textContent = formatted;
  element.classList.remove("updated");
  void element.offsetWidth;
  element.classList.add("updated");
}

function animateUpdate(element) {
  element.classList.remove("updated");
  void element.offsetWidth;
  element.classList.add("updated");
}

function initializeWordCounter() {
  const textBox = document.getElementById("word-text");
  const wordsOutput = document.getElementById("word-count");
  const charsOutput = document.getElementById("char-count");
  textBox.addEventListener("input", () => {
    const text = textBox.value;
    const trimmed = text.trim();
    updateStat(wordsOutput, trimmed ? trimmed.split(/\s+/u).length : 0);
    updateStat(charsOutput, Array.from(text).length);
  });
}

function initializePasswordGenerator() {
  const lengthInput = document.getElementById("password-length");
  const lengthOutput = document.getElementById("password-length-value");
  const passwordOutput = document.getElementById("password-output");
  const generateButton = document.getElementById("generate-password");
  const copyButton = document.getElementById("copy-password");
  const status = document.getElementById("password-status");
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*?";

  function generate() {
    const targetLength = Number.parseInt(lengthInput.value, 10);
    const limit = Math.floor(256 / alphabet.length) * alphabet.length;
    const randomBytes = new Uint8Array(targetLength * 2);
    let password = "";
    while (password.length < targetLength) {
      crypto.getRandomValues(randomBytes);
      for (const byte of randomBytes) {
        if (byte < limit) password += alphabet[byte % alphabet.length];
        if (password.length === targetLength) break;
      }
    }
    passwordOutput.textContent = password;
    animateUpdate(passwordOutput);
    copyButton.disabled = false;
    status.textContent = "";
  }

  lengthInput.addEventListener("input", () => { lengthOutput.value = lengthInput.value; });
  generateButton.addEventListener("click", generate);
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(passwordOutput.textContent);
      copyButton.textContent = translations[language].copied;
      status.textContent = translations[language].copied;
      animateUpdate(status);
      window.setTimeout(() => { copyButton.textContent = translations[language].copy; }, 1400);
    } catch (error) {
      status.textContent = translations[language].copyError;
    }
  });
  generate();
}

function initializeEmiCalculator() {
  const form = document.getElementById("emi-form");
  const output = document.getElementById("emi-result");
  form.addEventListener("input", () => {
    output.textContent = "";
    output.classList.remove("is-error");
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    const amount = Number(document.getElementById("loan-amount").value);
    const annualRate = Number(document.getElementById("interest-rate").value);
    const years = Number(document.getElementById("loan-years").value);
    if (!(amount > 0) || !(years > 0) || years > 100 || !Number.isFinite(annualRate) || annualRate < 0 || annualRate > 100) {
      output.textContent = translations[language].invalidLoan;
      output.classList.add("is-error");
      animateUpdate(output);
      return;
    }
    output.classList.remove("is-error");
    const months = years * 12;
    const monthlyRate = annualRate / 1200;
    const emi = monthlyRate === 0 ? amount / months : amount * monthlyRate * (1 + monthlyRate) ** months / ((1 + monthlyRate) ** months - 1);
    const total = emi * months;
    const format = value => `₹${Math.round(value).toLocaleString("en-IN")}`;
    output.textContent = `${translations[language].monthly}: ${format(emi)} · ${translations[language].total}: ${format(total)}`;
    animateUpdate(output);
  });
}

function initializeAgeCalculator() {
  const form = document.getElementById("age-form");
  const dateInput = document.getElementById("birth-date");
  const output = document.getElementById("age-result");
  dateInput.addEventListener("input", () => {
    output.textContent = "";
    output.classList.remove("is-error");
  });
  const now = new Date();
  dateInput.max = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const [birthYear, birthMonth, birthDay] = dateInput.value.split("-").map(Number);
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    const today = new Date();
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (!dateInput.value || birthDate.getFullYear() !== birthYear || birthDate.getMonth() !== birthMonth - 1 || birthDate.getDate() !== birthDay) {
      output.textContent = translations[language].invalidDate;
      output.classList.add("is-error");
      animateUpdate(output);
      return;
    }
    if (birthDate > todayDate) {
      output.textContent = translations[language].futureDate;
      output.classList.add("is-error");
      animateUpdate(output);
      return;
    }
    output.classList.remove("is-error");
    let years = todayDate.getFullYear() - birthYear;
    let months = todayDate.getMonth() - (birthMonth - 1);
    let days = todayDate.getDate() - birthDay;
    if (days < 0) { months--; days += new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    output.textContent = `${years} ${translations[language].yearsWord}, ${months} ${translations[language].monthsWord}, ${days} ${translations[language].daysWord}`;
    animateUpdate(output);
  });
}

if (languageSelect) languageSelect.addEventListener("change", event => applyLanguage(event.target.value));
applyLanguage(language);
if (document.body.dataset.tool === "word-counter") initializeWordCounter();
if (document.body.dataset.tool === "password-generator") initializePasswordGenerator();
if (document.body.dataset.tool === "emi-calculator") initializeEmiCalculator();
if (document.body.dataset.tool === "age-calculator") initializeAgeCalculator();