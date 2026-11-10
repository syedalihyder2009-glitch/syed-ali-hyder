/* ToolHub translations: English, Hindi, Telugu, Urdu.
   To add a language: copy one block, translate the values, add it to LANGS below. */
window.LANGS = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'ur', label: 'اردو' }
];
window.RTL_LANGS = ['ur', 'ar', 'fa', 'he'];

window.I18N = {

/* ============================ ENGLISH ============================ */
en: {
  navTools: 'Tools', navAbout: 'About', navHelp: 'Help', navContact: 'Contact', theme: 'Switch theme', menu: 'Menu',
  badge: 'Free · No sign-up · Private',
  heroA: 'Free online tools to make', heroB: 'everyday work easier',
  heroSub: '20 fast, simple tools that run right in your browser. Nothing is uploaded and nothing is stored.',
  searchPh: 'Search tools… (e.g. EMI, QR, PDF)',
  cat_all: 'All', cat_text: 'Text', cat_finance: 'Finance', cat_health: 'Health', cat_dev: 'Developer', cat_image: 'Image & PDF', cat_utility: 'Utility',
  noResults: 'No tool found. Try another word.',
  statTools: 'Free tools', statLangs: 'Languages', statUploads: 'Files uploaded',
  openTool: 'Open tool', relatedTools: 'More tools you may like', bcHome: 'Home',
  featPrivT: 'Private by design', featPrivD: 'Everything runs inside your browser. Your text, images and PDFs never leave your device.',
  featFastT: 'Fast and simple', featFastD: 'No sign-up, no waiting. Open a tool, enter your input and get the result instantly.',
  featFreeT: 'Free and multilingual', featFreeD: 'All tools are free to use, in English, Hindi, Telugu and Urdu, on phone or computer.',
  ftTagline: 'Free, fast and private online tools for everyday tasks.', ftTools: 'Popular tools', ftCompany: 'Company',
  navPrivacy: 'Privacy Policy', navTerms: 'Terms of Use',
  ftRights: 'All rights reserved.', backTop: 'Back to top',
  copy: 'Copy', copied: 'Copied!', clear: 'Clear', download: 'Download', generate: 'Generate', calculate: 'Calculate', reset: 'Reset',
  input: 'Input', output: 'Output', libError: 'Could not load a required library. Please check your internet connection and refresh.',

  typeHere: 'Type or paste your text here…', words: 'Words', chars: 'Characters', charsNoSpace: 'No spaces', sentences: 'Sentences', paragraphs: 'Paragraphs', readTime: 'Reading time', minShort: 'min',
  length: 'Length', upper: 'Uppercase (A-Z)', lower: 'Lowercase (a-z)', numbers: 'Numbers (0-9)', symbols: 'Symbols (!@#$)', strength: 'Strength', sWeak: 'Weak', sMedium: 'Medium', sStrong: 'Strong', sVeryStrong: 'Very strong',
  qrText: 'Text or URL', qrPh: 'https://example.com', qrSize: 'Size (pixels)',
  dob: 'Date of birth', asOn: 'Age on date', yearsU: 'years', monthsU: 'months', daysU: 'days', totalDays: 'Total days lived', nextBday: 'Next birthday in', daysLeft: 'days',
  amount: 'Amount (₹)', rate: 'Interest rate (% per year)', years: 'Years', monthlyEmi: 'Monthly EMI', totalInterest: 'Total interest', totalPayment: 'Total payment', principal: 'Principal', interest: 'Interest',
  gstRate: 'GST rate (%)', gstAdd: 'Add GST', gstRemove: 'Remove GST', netAmount: 'Net amount', gstAmount: 'GST amount', grossAmount: 'Total amount', cgst: 'CGST', sgst: 'SGST', customRate: 'Custom',
  pctOf: '% of', pctIsWhat: 'is what % of', pctChange: 'Change from', pctTo: 'to',
  height: 'Height (cm)', weight: 'Weight (kg)', bmiLabel: 'Your BMI', bmiUnder: 'Underweight', bmiNormal: 'Normal', bmiOver: 'Overweight', bmiObese: 'Obese',
  bmiNote: 'BMI is a general indicator only and not medical advice. Talk to a doctor for health decisions.',
  caseUpper: 'UPPERCASE', caseLower: 'lowercase', caseTitle: 'Title Case', caseSentence: 'Sentence case', caseCamel: 'camelCase', caseSnake: 'snake_case', caseKebab: 'kebab-case',
  jsonFormat: 'Format', jsonMinify: 'Minify', jsonValidate: 'Validate', jsonValid: 'Valid JSON', jsonInvalid: 'Invalid JSON',
  b64Encode: 'Encode', b64Decode: 'Decode', b64Err: 'This is not valid Base64.',
  uCategory: 'Category', uFrom: 'From', uTo: 'To', uValue: 'Value', uc_length: 'Length', uc_mass: 'Weight', uc_temp: 'Temperature', uc_speed: 'Speed', uc_area: 'Area',
  colPick: 'Pick a colour', colShades: 'Shades',
  imgChoose: 'Choose image', imgDrop: 'Click to choose an image or drag it here', imgQuality: 'Quality', imgMaxW: 'Max width (px, optional)', imgFormat: 'Format',
  imgOrig: 'Original', imgNew: 'New size', imgSaved: 'Saved', imgWidth: 'Width (px)', imgHeight: 'Height (px)', imgKeep: 'Keep aspect ratio', imgResize: 'Resize', imgSize: 'Size',
  loremParas: 'Paragraphs', loremStart: 'Start with “Lorem ipsum”',
  rndMin: 'Minimum', rndMax: 'Maximum', rndCount: 'How many numbers', rndUnique: 'No repeats', rndErr: 'Range is too small for that many unique numbers.',
  tmH: 'Hours', tmM: 'Minutes', tmS: 'Seconds', tmStart: 'Start', tmPause: 'Pause', tmResume: 'Resume', tmDone: 'Time is up!',
  urlEncode: 'Encode', urlDecode: 'Decode', urlMode: 'Mode', urlComp: 'Component (encode everything)', urlFull: 'Full URL (keep : / ? &)', urlErr: 'Could not decode. The text has an invalid % sequence.',
  pdfChoose: 'Choose PDF files', pdfDrop: 'Click to choose PDF files (2 or more)', pdfMerge: 'Merge PDFs', pdfUp: 'Move up', pdfDown: 'Move down', pdfRemove: 'Remove', pdfNeed2: 'Choose at least 2 PDF files.', pdfBusy: 'Merging…', pdfErr: 'Could not merge. One file may be damaged or password protected.',
  cName: 'Your name', cEmail: 'Your email', cSubject: 'Subject', cMessage: 'Message', cSend: 'Send message', cOk: 'Your email app should open now. Press send there to finish.',

  t_wordcount_n: 'Word Counter', t_wordcount_d: 'Count words, characters, sentences and reading time.',
  t_password_n: 'Password Generator', t_password_d: 'Create strong, random passwords safely.',
  t_qr_n: 'QR Code Generator', t_qr_d: 'Turn any link or text into a QR code.',
  t_age_n: 'Age Calculator', t_age_d: 'Find exact age in years, months and days.',
  t_emi_n: 'EMI Calculator', t_emi_d: 'Calculate loan EMI, interest and total payment.',
  t_gst_n: 'GST Calculator', t_gst_d: 'Add or remove GST from any amount.',
  t_percent_n: 'Percentage Calculator', t_percent_d: 'Percent of a number, share and percent change.',
  t_bmi_n: 'BMI Calculator', t_bmi_d: 'Check your Body Mass Index quickly.',
  t_case_n: 'Text Case Converter', t_case_d: 'Change text to upper, lower, title and more.',
  t_json_n: 'JSON Formatter', t_json_d: 'Format, minify and validate JSON.',
  t_base64_n: 'Base64 Encoder / Decoder', t_base64_d: 'Encode text to Base64 or decode it back.',
  t_unit_n: 'Unit Converter', t_unit_d: 'Convert length, weight, temperature, speed and area.',
  t_color_n: 'Colour Picker', t_color_d: 'Get HEX, RGB and HSL codes and shades.',
  t_imgcompress_n: 'Image Compressor', t_imgcompress_d: 'Reduce image size without uploading it anywhere.',
  t_imgresize_n: 'Image Resizer', t_imgresize_d: 'Change image width and height in your browser.',
  t_lorem_n: 'Lorem Ipsum Generator', t_lorem_d: 'Generate placeholder text for designs.',
  t_random_n: 'Random Number Generator', t_random_d: 'Pick random numbers in any range.',
  t_countdown_n: 'Countdown Timer', t_countdown_d: 'Set a timer and get an alert when time is up.',
  t_urlenc_n: 'URL Encoder / Decoder', t_urlenc_d: 'Encode or decode text for web addresses.',
  t_pdfmerge_n: 'PDF Merge', t_pdfmerge_d: 'Combine several PDF files into one.',

  pages: {
    about: { title: 'About ToolHub', lead: 'Free, fast and private online tools for everyone.', s: [
      { h: 'Our mission', p: 'ToolHub exists to make small daily tasks easier: counting words, calculating a loan, resizing a photo or merging PDFs. These jobs should not need an account, a download or a payment.' },
      { h: 'Privacy first', p: 'Our tools run inside your browser. The text you type and the files you choose are processed on your own device and are never sent to our servers.' },
      { h: 'Made for many languages', p: 'The whole site is available in English, Hindi, Telugu and Urdu, with right-to-left layout for Urdu. More languages will be added over time.' },
      { h: 'Always free', p: 'Every tool on ToolHub is free to use. The site may show advertising in the future to cover running costs. We will always say so in our Privacy Policy.' },
      { h: 'Tell us what to build next', p: 'Have an idea for a new tool or found a bug? Visit the Contact page and let us know. We read every message.' }
    ] },
    help: { title: 'Help & FAQ', lead: 'Quick answers to common questions.', s: [
      { q: 'Do I need to create an account?', a: 'No. All tools work instantly without sign-up or login.' },
      { q: 'Are my files and text uploaded anywhere?', a: 'No. Everything is processed inside your browser. Your files never leave your device.' },
      { q: 'Why does the QR or PDF tool need internet?', a: 'These two tools load a small open-source library from a CDN the first time. All other tools work offline once the page has loaded.' },
      { q: 'How do I change the language?', a: 'Use the language menu at the top right of any page. Your choice is remembered on this device.' },
      { q: 'Are the calculators accurate?', a: 'They use standard formulas. Results are estimates for general guidance. For loans, tax or health decisions, confirm with a bank, tax professional or doctor.' },
      { q: 'My image or PDF tool is not working. What should I do?', a: 'Refresh the page and try again. Very large files can be slow on older phones. A password-protected or damaged PDF cannot be merged.' },
      { q: 'How can I report a problem or suggest a tool?', a: 'Use the Contact page. Tell us the tool name, your browser and what went wrong.' }
    ] },
    contact: { title: 'Contact us', lead: 'Questions, feedback or tool ideas? We would love to hear from you.', s: [
      { h: 'Before you write', p: 'Many answers are on the Help page. For bug reports please mention the tool name and your browser.' }
    ] },
    privacy: { title: 'Privacy Policy', lead: 'How ToolHub handles your information.', updated: 'Last updated: 9 November 2026', s: [
      { h: 'Summary', p: 'ToolHub does not ask you to sign up and does not collect personal information through its tools. The tools work inside your browser.' },
      { h: 'Your text and files', p: 'Text you type, images you choose and PDFs you merge are processed locally on your device. They are not uploaded to our servers and we cannot see them.' },
      { h: 'Data stored on your device', p: 'We save your language and theme choice in your browser’s local storage so the site remembers it. You can clear this any time from your browser settings.' },
      { h: 'Third-party services', p: 'Pages load fonts from Google Fonts. The QR code and PDF tools load an open-source library from a public CDN. These providers may receive your IP address and browser details as part of normal web requests, under their own privacy policies.' },
      { h: 'Advertising', p: 'We may show ads in the future, for example through Google AdSense. Ad partners can use cookies to show relevant ads. If we enable ads, this policy will be updated and a cookie notice will be shown where required by law.' },
      { h: 'Contact form', p: 'The contact form opens your own email app with a ready message. We do not store what you type in the form. We only receive the email if you send it.' },
      { h: 'Children', p: 'ToolHub is a general-purpose site and is not directed at children under 13. We do not knowingly collect information from children.' },
      { h: 'Changes to this policy', p: 'We may update this policy from time to time. The date at the top shows the latest version.' }
    ] },
    terms: { title: 'Terms of Use', lead: 'Please read these terms before using ToolHub.', updated: 'Last updated: 9 November 2026', s: [
      { h: 'Acceptance', p: 'By using ToolHub you agree to these terms. If you do not agree, please do not use the site.' },
      { h: 'Use of the tools', p: 'You may use the tools for personal and business purposes. You agree not to misuse the site, attempt to disrupt it, or use it for anything illegal.' },
      { h: 'No professional advice', p: 'Calculators such as EMI, GST, BMI and age give estimates for general information only. They are not financial, tax, legal or medical advice. Always verify important numbers independently.' },
      { h: 'No warranty', p: 'The tools are provided “as is” without warranties of any kind. We do not guarantee that they will always be available, error-free or suitable for your purpose.' },
      { h: 'Limitation of liability', p: 'To the extent allowed by law, ToolHub and its owners are not liable for any loss or damage arising from the use of the site or the results produced by its tools.' },
      { h: 'Intellectual property', p: 'The design, code and content of ToolHub belong to its owners. Text and files you process remain yours.' },
      { h: 'Changes', p: 'We may change these terms or the site at any time. Continued use after changes means you accept the updated terms.' }
    ] }
  }
},

/* ============================ HINDI ============================ */
hi: {
  navTools: 'टूल्स', navAbout: 'हमारे बारे में', navHelp: 'सहायता', navContact: 'संपर्क', theme: 'थीम बदलें', menu: 'मेन्यू',
  badge: 'मुफ़्त · साइन-अप नहीं · निजी',
  heroA: 'रोज़ के काम आसान बनाने वाले', heroB: 'मुफ़्त ऑनलाइन टूल्स',
  heroSub: '20 तेज़ और सरल टूल्स जो सीधे आपके ब्राउज़र में चलते हैं। कुछ भी अपलोड या सेव नहीं होता।',
  searchPh: 'टूल खोजें… (जैसे EMI, QR, PDF)',
  cat_all: 'सभी', cat_text: 'टेक्स्ट', cat_finance: 'फ़ाइनेंस', cat_health: 'स्वास्थ्य', cat_dev: 'डेवलपर', cat_image: 'इमेज और PDF', cat_utility: 'उपयोगी',
  noResults: 'कोई टूल नहीं मिला। दूसरा शब्द आज़माएँ।',
  statTools: 'मुफ़्त टूल्स', statLangs: 'भाषाएँ', statUploads: 'अपलोड की गई फ़ाइलें',
  openTool: 'टूल खोलें', relatedTools: 'ये टूल्स भी देखें', bcHome: 'होम',
  featPrivT: 'डिज़ाइन से ही निजी', featPrivD: 'सब कुछ आपके ब्राउज़र में चलता है। आपका टेक्स्ट, इमेज और PDF आपके डिवाइस से बाहर नहीं जाते।',
  featFastT: 'तेज़ और सरल', featFastD: 'न साइन-अप, न इंतज़ार। टूल खोलें, जानकारी डालें और तुरंत नतीजा पाएँ।',
  featFreeT: 'मुफ़्त और बहुभाषी', featFreeD: 'सभी टूल्स मुफ़्त हैं, अंग्रेज़ी, हिंदी, तेलुगु और उर्दू में, फ़ोन या कंप्यूटर पर।',
  ftTagline: 'रोज़मर्रा के कामों के लिए मुफ़्त, तेज़ और निजी ऑनलाइन टूल्स।', ftTools: 'लोकप्रिय टूल्स', ftCompany: 'कंपनी',
  navPrivacy: 'गोपनीयता नीति', navTerms: 'उपयोग की शर्तें',
  ftRights: 'सर्वाधिकार सुरक्षित।', backTop: 'ऊपर जाएँ',
  copy: 'कॉपी', copied: 'कॉपी हो गया!', clear: 'साफ़ करें', download: 'डाउनलोड', generate: 'बनाएँ', calculate: 'गणना करें', reset: 'रीसेट',
  input: 'इनपुट', output: 'आउटपुट', libError: 'ज़रूरी लाइब्रेरी लोड नहीं हो सकी। इंटरनेट जाँचें और पेज रीफ़्रेश करें।',

  typeHere: 'अपना टेक्स्ट यहाँ लिखें या पेस्ट करें…', words: 'शब्द', chars: 'अक्षर', charsNoSpace: 'बिना स्पेस', sentences: 'वाक्य', paragraphs: 'अनुच्छेद', readTime: 'पढ़ने का समय', minShort: 'मिनट',
  length: 'लंबाई', upper: 'बड़े अक्षर (A-Z)', lower: 'छोटे अक्षर (a-z)', numbers: 'अंक (0-9)', symbols: 'चिह्न (!@#$)', strength: 'मज़बूती', sWeak: 'कमज़ोर', sMedium: 'मध्यम', sStrong: 'मज़बूत', sVeryStrong: 'बहुत मज़बूत',
  qrText: 'टेक्स्ट या URL', qrPh: 'https://example.com', qrSize: 'आकार (पिक्सल)',
  dob: 'जन्म तिथि', asOn: 'इस तारीख़ पर उम्र', yearsU: 'साल', monthsU: 'महीने', daysU: 'दिन', totalDays: 'कुल जिए दिन', nextBday: 'अगला जन्मदिन', daysLeft: 'दिन बाद',
  amount: 'राशि (₹)', rate: 'ब्याज दर (% प्रति वर्ष)', years: 'वर्ष', monthlyEmi: 'मासिक EMI', totalInterest: 'कुल ब्याज', totalPayment: 'कुल भुगतान', principal: 'मूलधन', interest: 'ब्याज',
  gstRate: 'GST दर (%)', gstAdd: 'GST जोड़ें', gstRemove: 'GST हटाएँ', netAmount: 'शुद्ध राशि', gstAmount: 'GST राशि', grossAmount: 'कुल राशि', cgst: 'CGST', sgst: 'SGST', customRate: 'अपनी दर',
  pctOf: '% का', pctIsWhat: 'कितने % है', pctChange: 'बदलाव', pctTo: 'से',
  height: 'ऊँचाई (सेमी)', weight: 'वज़न (किग्रा)', bmiLabel: 'आपका BMI', bmiUnder: 'कम वज़न', bmiNormal: 'सामान्य', bmiOver: 'ज़्यादा वज़न', bmiObese: 'मोटापा',
  bmiNote: 'BMI केवल एक सामान्य संकेतक है, चिकित्सकीय सलाह नहीं। सेहत से जुड़े फ़ैसलों के लिए डॉक्टर से बात करें।',
  caseUpper: 'बड़े अक्षर', caseLower: 'छोटे अक्षर', caseTitle: 'Title Case', caseSentence: 'Sentence case', caseCamel: 'camelCase', caseSnake: 'snake_case', caseKebab: 'kebab-case',
  jsonFormat: 'फ़ॉर्मेट', jsonMinify: 'छोटा करें', jsonValidate: 'जाँचें', jsonValid: 'सही JSON', jsonInvalid: 'गलत JSON',
  b64Encode: 'एन्कोड', b64Decode: 'डिकोड', b64Err: 'यह सही Base64 नहीं है।',
  uCategory: 'श्रेणी', uFrom: 'से', uTo: 'में', uValue: 'मान', uc_length: 'लंबाई', uc_mass: 'वज़न', uc_temp: 'तापमान', uc_speed: 'गति', uc_area: 'क्षेत्रफल',
  colPick: 'रंग चुनें', colShades: 'शेड्स',
  imgChoose: 'इमेज चुनें', imgDrop: 'इमेज चुनने के लिए क्लिक करें या यहाँ खींचकर छोड़ें', imgQuality: 'क्वालिटी', imgMaxW: 'अधिकतम चौड़ाई (px, वैकल्पिक)', imgFormat: 'फ़ॉर्मेट',
  imgOrig: 'मूल', imgNew: 'नया आकार', imgSaved: 'बचत', imgWidth: 'चौड़ाई (px)', imgHeight: 'ऊँचाई (px)', imgKeep: 'अनुपात बनाए रखें', imgResize: 'आकार बदलें', imgSize: 'आकार',
  loremParas: 'अनुच्छेद', loremStart: '“Lorem ipsum” से शुरू करें',
  rndMin: 'न्यूनतम', rndMax: 'अधिकतम', rndCount: 'कितनी संख्याएँ', rndUnique: 'दोहराव नहीं', rndErr: 'इतनी अलग संख्याओं के लिए रेंज बहुत छोटी है।',
  tmH: 'घंटे', tmM: 'मिनट', tmS: 'सेकंड', tmStart: 'शुरू', tmPause: 'रोकें', tmResume: 'जारी रखें', tmDone: 'समय पूरा!',
  urlEncode: 'एन्कोड', urlDecode: 'डिकोड', urlMode: 'मोड', urlComp: 'कंपोनेंट (सब कुछ एन्कोड)', urlFull: 'पूरा URL (: / ? & रखें)', urlErr: 'डिकोड नहीं हो सका। टेक्स्ट में गलत % क्रम है।',
  pdfChoose: 'PDF फ़ाइलें चुनें', pdfDrop: 'PDF फ़ाइलें चुनने के लिए क्लिक करें (2 या ज़्यादा)', pdfMerge: 'PDF जोड़ें', pdfUp: 'ऊपर', pdfDown: 'नीचे', pdfRemove: 'हटाएँ', pdfNeed2: 'कम से कम 2 PDF फ़ाइलें चुनें।', pdfBusy: 'जोड़ रहे हैं…', pdfErr: 'जोड़ नहीं सके। कोई फ़ाइल खराब या पासवर्ड वाली हो सकती है।',
  cName: 'आपका नाम', cEmail: 'आपका ईमेल', cSubject: 'विषय', cMessage: 'संदेश', cSend: 'संदेश भेजें', cOk: 'आपका ईमेल ऐप अब खुलना चाहिए। पूरा करने के लिए वहाँ भेजें दबाएँ।',

  t_wordcount_n: 'शब्द गिनती', t_wordcount_d: 'शब्द, अक्षर, वाक्य और पढ़ने का समय गिनें।',
  t_password_n: 'पासवर्ड जनरेटर', t_password_d: 'मज़बूत और रैंडम पासवर्ड सुरक्षित तरीके से बनाएँ।',
  t_qr_n: 'QR कोड जनरेटर', t_qr_d: 'किसी भी लिंक या टेक्स्ट का QR कोड बनाएँ।',
  t_age_n: 'उम्र कैलकुलेटर', t_age_d: 'साल, महीने और दिनों में सही उम्र जानें।',
  t_emi_n: 'EMI कैलकुलेटर', t_emi_d: 'लोन की EMI, ब्याज और कुल भुगतान निकालें।',
  t_gst_n: 'GST कैलकुलेटर', t_gst_d: 'किसी भी राशि में GST जोड़ें या हटाएँ।',
  t_percent_n: 'प्रतिशत कैलकुलेटर', t_percent_d: 'प्रतिशत, हिस्सेदारी और प्रतिशत बदलाव निकालें।',
  t_bmi_n: 'BMI कैलकुलेटर', t_bmi_d: 'अपना बॉडी मास इंडेक्स जल्दी जाँचें।',
  t_case_n: 'टेक्स्ट केस कन्वर्टर', t_case_d: 'टेक्स्ट को बड़े, छोटे, टाइटल आदि में बदलें।',
  t_json_n: 'JSON फ़ॉर्मेटर', t_json_d: 'JSON को फ़ॉर्मेट, छोटा और वैलिडेट करें।',
  t_base64_n: 'Base64 एन्कोडर / डिकोडर', t_base64_d: 'टेक्स्ट को Base64 में बदलें या वापस पाएँ।',
  t_unit_n: 'यूनिट कन्वर्टर', t_unit_d: 'लंबाई, वज़न, तापमान, गति और क्षेत्रफल बदलें।',
  t_color_n: 'कलर पिकर', t_color_d: 'HEX, RGB, HSL कोड और शेड्स पाएँ।',
  t_imgcompress_n: 'इमेज कंप्रेसर', t_imgcompress_d: 'कहीं अपलोड किए बिना इमेज का साइज़ घटाएँ।',
  t_imgresize_n: 'इमेज रीसाइज़र', t_imgresize_d: 'ब्राउज़र में इमेज की चौड़ाई और ऊँचाई बदलें।',
  t_lorem_n: 'Lorem Ipsum जनरेटर', t_lorem_d: 'डिज़ाइन के लिए नमूना टेक्स्ट बनाएँ।',
  t_random_n: 'रैंडम नंबर जनरेटर', t_random_d: 'किसी भी रेंज में रैंडम संख्याएँ चुनें।',
  t_countdown_n: 'काउंटडाउन टाइमर', t_countdown_d: 'टाइमर लगाएँ और समय पूरा होने पर अलर्ट पाएँ।',
  t_urlenc_n: 'URL एन्कोडर / डिकोडर', t_urlenc_d: 'वेब पतों के लिए टेक्स्ट एन्कोड या डिकोड करें।',
  t_pdfmerge_n: 'PDF मर्ज', t_pdfmerge_d: 'कई PDF फ़ाइलों को एक में जोड़ें।',

  pages: {
    about: { title: 'ToolHub के बारे में', lead: 'सबके लिए मुफ़्त, तेज़ और निजी ऑनलाइन टूल्स।', s: [
      { h: 'हमारा मक़सद', p: 'ToolHub रोज़ के छोटे काम आसान बनाने के लिए है: शब्द गिनना, लोन निकालना, फ़ोटो का साइज़ बदलना या PDF जोड़ना। इन कामों के लिए अकाउंट, डाउनलोड या पैसे की ज़रूरत नहीं होनी चाहिए।' },
      { h: 'पहले गोपनीयता', p: 'हमारे टूल्स आपके ब्राउज़र के अंदर चलते हैं। आप जो टेक्स्ट लिखते हैं और जो फ़ाइलें चुनते हैं, वे आपके अपने डिवाइस पर प्रोसेस होती हैं और हमारे सर्वर पर कभी नहीं भेजी जातीं।' },
      { h: 'कई भाषाओं के लिए बनी', p: 'पूरी साइट अंग्रेज़ी, हिंदी, तेलुगु और उर्दू में उपलब्ध है, उर्दू के लिए दाएँ से बाएँ लेआउट के साथ। समय के साथ और भाषाएँ जुड़ेंगी।' },
      { h: 'हमेशा मुफ़्त', p: 'ToolHub का हर टूल मुफ़्त है। चलाने का खर्च निकालने के लिए भविष्य में साइट पर विज्ञापन दिख सकते हैं। हम गोपनीयता नीति में हमेशा यह बताएँगे।' },
      { h: 'बताइए आगे क्या बनाएँ', p: 'नए टूल का आइडिया है या कोई गड़बड़ी मिली? संपर्क पेज पर हमें बताएँ। हम हर संदेश पढ़ते हैं।' }
    ] },
    help: { title: 'सहायता और अक्सर पूछे जाने वाले सवाल', lead: 'आम सवालों के जल्दी जवाब।', s: [
      { q: 'क्या मुझे अकाउंट बनाना पड़ेगा?', a: 'नहीं। सभी टूल्स बिना साइन-अप या लॉगिन के तुरंत चलते हैं।' },
      { q: 'क्या मेरी फ़ाइलें और टेक्स्ट कहीं अपलोड होते हैं?', a: 'नहीं। सब कुछ आपके ब्राउज़र के अंदर प्रोसेस होता है। आपकी फ़ाइलें आपके डिवाइस से बाहर नहीं जातीं।' },
      { q: 'QR या PDF टूल को इंटरनेट क्यों चाहिए?', a: 'ये दोनों टूल पहली बार एक छोटी ओपन-सोर्स लाइब्रेरी CDN से लोड करते हैं। बाकी सभी टूल पेज लोड होने के बाद ऑफ़लाइन भी चलते हैं।' },
      { q: 'भाषा कैसे बदलूँ?', a: 'किसी भी पेज के ऊपर दाईं ओर भाषा मेन्यू इस्तेमाल करें। आपकी पसंद इस डिवाइस पर याद रहती है।' },
      { q: 'क्या कैलकुलेटर सही नतीजे देते हैं?', a: 'ये मानक फ़ॉर्मूले इस्तेमाल करते हैं। नतीजे सामान्य जानकारी के लिए अनुमान हैं। लोन, टैक्स या सेहत के फ़ैसलों के लिए बैंक, टैक्स विशेषज्ञ या डॉक्टर से पुष्टि करें।' },
      { q: 'मेरा इमेज या PDF टूल नहीं चल रहा। क्या करूँ?', a: 'पेज रीफ़्रेश करके दोबारा कोशिश करें। बहुत बड़ी फ़ाइलें पुराने फ़ोन पर धीमी हो सकती हैं। पासवर्ड वाली या खराब PDF जोड़ी नहीं जा सकती।' },
      { q: 'समस्या कैसे बताऊँ या नया टूल कैसे सुझाऊँ?', a: 'संपर्क पेज इस्तेमाल करें। हमें टूल का नाम, आपका ब्राउज़र और क्या गड़बड़ हुई बताएँ।' }
    ] },
    contact: { title: 'हमसे संपर्क करें', lead: 'सवाल, सुझाव या नए टूल का आइडिया? हमें आपसे सुनकर खुशी होगी।', s: [
      { h: 'लिखने से पहले', p: 'कई जवाब सहायता पेज पर मिल जाएँगे। गड़बड़ी बताते समय टूल का नाम और अपना ब्राउज़र ज़रूर लिखें।' }
    ] },
    privacy: { title: 'गोपनीयता नीति', lead: 'ToolHub आपकी जानकारी को कैसे संभालता है।', updated: 'आख़िरी अपडेट: 9 नवंबर 2026', s: [
      { h: 'सारांश', p: 'ToolHub आपसे साइन-अप नहीं माँगता और अपने टूल्स के ज़रिए कोई निजी जानकारी इकट्ठा नहीं करता। टूल्स आपके ब्राउज़र में चलते हैं।' },
      { h: 'आपका टेक्स्ट और फ़ाइलें', p: 'आपका लिखा टेक्स्ट, चुनी हुई इमेज और जोड़ी गई PDF आपके डिवाइस पर ही प्रोसेस होती हैं। वे हमारे सर्वर पर अपलोड नहीं होतीं और हम उन्हें देख नहीं सकते।' },
      { h: 'आपके डिवाइस पर सेव डेटा', p: 'हम आपकी भाषा और थीम की पसंद आपके ब्राउज़र के लोकल स्टोरेज में सेव करते हैं ताकि साइट उसे याद रखे। आप इसे कभी भी ब्राउज़र सेटिंग्स से मिटा सकते हैं।' },
      { h: 'तीसरे पक्ष की सेवाएँ', p: 'पेज Google Fonts से फ़ॉन्ट लोड करते हैं। QR कोड और PDF टूल सार्वजनिक CDN से ओपन-सोर्स लाइब्रेरी लोड करते हैं। सामान्य वेब अनुरोधों में ये प्रदाता अपनी गोपनीयता नीतियों के तहत आपका IP पता और ब्राउज़र जानकारी पा सकते हैं।' },
      { h: 'विज्ञापन', p: 'भविष्य में हम विज्ञापन दिखा सकते हैं, जैसे Google AdSense के ज़रिए। विज्ञापन साझेदार प्रासंगिक विज्ञापन दिखाने के लिए कुकीज़ इस्तेमाल कर सकते हैं। विज्ञापन चालू करने पर यह नीति अपडेट होगी और कानून के अनुसार कुकी सूचना दिखाई जाएगी।' },
      { h: 'संपर्क फ़ॉर्म', p: 'संपर्क फ़ॉर्म आपका अपना ईमेल ऐप तैयार संदेश के साथ खोलता है। फ़ॉर्म में लिखा हम सेव नहीं करते। ईमेल हमें तभी मिलता है जब आप उसे भेजते हैं।' },
      { h: 'बच्चे', p: 'ToolHub एक सामान्य साइट है और 13 साल से कम उम्र के बच्चों के लिए नहीं है। हम जानबूझकर बच्चों की जानकारी इकट्ठा नहीं करते।' },
      { h: 'नीति में बदलाव', p: 'हम समय-समय पर यह नीति अपडेट कर सकते हैं। ऊपर की तारीख़ सबसे नया संस्करण बताती है।' }
    ] },
    terms: { title: 'उपयोग की शर्तें', lead: 'ToolHub इस्तेमाल करने से पहले ये शर्तें पढ़ें।', updated: 'आख़िरी अपडेट: 9 नवंबर 2026', s: [
      { h: 'स्वीकृति', p: 'ToolHub इस्तेमाल करके आप इन शर्तों से सहमत होते हैं। सहमत न हों तो कृपया साइट का उपयोग न करें।' },
      { h: 'टूल्स का उपयोग', p: 'आप टूल्स को निजी और व्यावसायिक काम के लिए इस्तेमाल कर सकते हैं। आप साइट का दुरुपयोग, उसे बाधित करने की कोशिश या किसी गैरकानूनी काम में उपयोग नहीं करेंगे।' },
      { h: 'पेशेवर सलाह नहीं', p: 'EMI, GST, BMI और उम्र जैसे कैलकुलेटर केवल सामान्य जानकारी के लिए अनुमान देते हैं। ये वित्तीय, टैक्स, कानूनी या चिकित्सकीय सलाह नहीं हैं। ज़रूरी आँकड़ों की हमेशा अलग से पुष्टि करें।' },
      { h: 'कोई वारंटी नहीं', p: 'टूल्स “जैसे हैं” वैसे दिए जाते हैं, किसी प्रकार की वारंटी के बिना। हम गारंटी नहीं देते कि वे हमेशा उपलब्ध, त्रुटि-रहित या आपके उद्देश्य के अनुकूल होंगे।' },
      { h: 'दायित्व की सीमा', p: 'कानून जितनी अनुमति देता है, उतना ToolHub और उसके मालिक साइट के उपयोग या टूल्स के नतीजों से होने वाले किसी नुकसान के लिए ज़िम्मेदार नहीं हैं।' },
      { h: 'बौद्धिक संपदा', p: 'ToolHub का डिज़ाइन, कोड और सामग्री उसके मालिकों की है। आपका प्रोसेस किया हुआ टेक्स्ट और फ़ाइलें आपकी ही रहती हैं।' },
      { h: 'बदलाव', p: 'हम कभी भी इन शर्तों या साइट में बदलाव कर सकते हैं। बदलाव के बाद उपयोग जारी रखने का मतलब है कि आप नई शर्तें मानते हैं।' }
    ] }
  }
},

/* ============================ TELUGU ============================ */
te: {
  navTools: 'టూల్స్', navAbout: 'మా గురించి', navHelp: 'సహాయం', navContact: 'సంప్రదించండి', theme: 'థీమ్ మార్చండి', menu: 'మెనూ',
  badge: 'ఉచితం · సైన్-అప్ లేదు · ప్రైవేట్',
  heroA: 'రోజువారీ పనులను సులభం చేసే', heroB: 'ఉచిత ఆన్‌లైన్ టూల్స్',
  heroSub: 'మీ బ్రౌజర్‌లోనే పనిచేసే 20 వేగవంతమైన, సులభమైన టూల్స్. ఏదీ అప్‌లోడ్ లేదా సేవ్ కాదు.',
  searchPh: 'టూల్స్ వెతకండి… (ఉదా. EMI, QR, PDF)',
  cat_all: 'అన్నీ', cat_text: 'టెక్స్ట్', cat_finance: 'ఫైనాన్స్', cat_health: 'ఆరోగ్యం', cat_dev: 'డెవలపర్', cat_image: 'ఇమేజ్ & PDF', cat_utility: 'ఉపయోగకరమైనవి',
  noResults: 'టూల్ దొరకలేదు. వేరే పదం ప్రయత్నించండి.',
  statTools: 'ఉచిత టూల్స్', statLangs: 'భాషలు', statUploads: 'అప్‌లోడ్ అయిన ఫైళ్లు',
  openTool: 'టూల్ తెరవండి', relatedTools: 'మీకు నచ్చే మరిన్ని టూల్స్', bcHome: 'హోమ్',
  featPrivT: 'డిజైన్ నుండే ప్రైవేట్', featPrivD: 'అన్నీ మీ బ్రౌజర్ లోపలే నడుస్తాయి. మీ టెక్స్ట్, ఇమేజ్‌లు, PDFలు మీ పరికరం దాటి వెళ్లవు.',
  featFastT: 'వేగంగా, సులభంగా', featFastD: 'సైన్-అప్ లేదు, వేచి ఉండక్కర్లేదు. టూల్ తెరిచి, వివరాలు ఇచ్చి, వెంటనే ఫలితం పొందండి.',
  featFreeT: 'ఉచితం, బహుభాషా', featFreeD: 'అన్ని టూల్స్ ఉచితం. ఇంగ్లీష్, హిందీ, తెలుగు, ఉర్దూలో, ఫోన్ లేదా కంప్యూటర్‌లో.',
  ftTagline: 'రోజువారీ పనుల కోసం ఉచిత, వేగవంతమైన, ప్రైవేట్ ఆన్‌లైన్ టూల్స్.', ftTools: 'ప్రసిద్ధ టూల్స్', ftCompany: 'కంపెనీ',
  navPrivacy: 'గోప్యతా విధానం', navTerms: 'వినియోగ నిబంధనలు',
  ftRights: 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.', backTop: 'పైకి వెళ్ళండి',
  copy: 'కాపీ', copied: 'కాపీ అయింది!', clear: 'క్లియర్', download: 'డౌన్‌లోడ్', generate: 'సృష్టించు', calculate: 'లెక్కించు', reset: 'రీసెట్',
  input: 'ఇన్‌పుట్', output: 'అవుట్‌పుట్', libError: 'అవసరమైన లైబ్రరీ లోడ్ కాలేదు. ఇంటర్నెట్ చూసి పేజీని రిఫ్రెష్ చేయండి.',

  typeHere: 'మీ టెక్స్ట్ ఇక్కడ టైప్ చేయండి లేదా పేస్ట్ చేయండి…', words: 'పదాలు', chars: 'అక్షరాలు', charsNoSpace: 'స్పేస్ లేకుండా', sentences: 'వాక్యాలు', paragraphs: 'పేరాలు', readTime: 'చదివే సమయం', minShort: 'నిమి',
  length: 'పొడవు', upper: 'పెద్ద అక్షరాలు (A-Z)', lower: 'చిన్న అక్షరాలు (a-z)', numbers: 'అంకెలు (0-9)', symbols: 'చిహ్నాలు (!@#$)', strength: 'బలం', sWeak: 'బలహీనం', sMedium: 'మధ్యస్థం', sStrong: 'బలమైనది', sVeryStrong: 'చాలా బలమైనది',
  qrText: 'టెక్స్ట్ లేదా URL', qrPh: 'https://example.com', qrSize: 'సైజు (పిక్సెల్స్)',
  dob: 'పుట్టిన తేదీ', asOn: 'ఈ తేదీ నాటికి వయస్సు', yearsU: 'సంవత్సరాలు', monthsU: 'నెలలు', daysU: 'రోజులు', totalDays: 'జీవించిన మొత్తం రోజులు', nextBday: 'తదుపరి పుట్టినరోజుకు', daysLeft: 'రోజులు',
  amount: 'మొత్తం (₹)', rate: 'వడ్డీ రేటు (% సంవత్సరానికి)', years: 'సంవత్సరాలు', monthlyEmi: 'నెలవారీ EMI', totalInterest: 'మొత్తం వడ్డీ', totalPayment: 'మొత్తం చెల్లింపు', principal: 'అసలు', interest: 'వడ్డీ',
  gstRate: 'GST రేటు (%)', gstAdd: 'GST కలపండి', gstRemove: 'GST తీసివేయండి', netAmount: 'నికర మొత్తం', gstAmount: 'GST మొత్తం', grossAmount: 'మొత్తం', cgst: 'CGST', sgst: 'SGST', customRate: 'మీ రేటు',
  pctOf: '% లో', pctIsWhat: 'ఎంత % అవుతుంది', pctChange: 'మార్పు', pctTo: 'నుండి',
  height: 'ఎత్తు (సెం.మీ)', weight: 'బరువు (కిలోలు)', bmiLabel: 'మీ BMI', bmiUnder: 'తక్కువ బరువు', bmiNormal: 'సాధారణం', bmiOver: 'అధిక బరువు', bmiObese: 'ఊబకాయం',
  bmiNote: 'BMI ఒక సాధారణ సూచిక మాత్రమే, వైద్య సలహా కాదు. ఆరోగ్య నిర్ణయాల కోసం డాక్టర్‌ను సంప్రదించండి.',
  caseUpper: 'UPPERCASE', caseLower: 'lowercase', caseTitle: 'Title Case', caseSentence: 'Sentence case', caseCamel: 'camelCase', caseSnake: 'snake_case', caseKebab: 'kebab-case',
  jsonFormat: 'ఫార్మాట్', jsonMinify: 'చిన్నది చేయి', jsonValidate: 'తనిఖీ', jsonValid: 'సరైన JSON', jsonInvalid: 'తప్పు JSON',
  b64Encode: 'ఎన్‌కోడ్', b64Decode: 'డీకోడ్', b64Err: 'ఇది సరైన Base64 కాదు.',
  uCategory: 'వర్గం', uFrom: 'నుండి', uTo: 'కు', uValue: 'విలువ', uc_length: 'పొడవు', uc_mass: 'బరువు', uc_temp: 'ఉష్ణోగ్రత', uc_speed: 'వేగం', uc_area: 'వైశాల్యం',
  colPick: 'రంగు ఎంచుకోండి', colShades: 'షేడ్స్',
  imgChoose: 'ఇమేజ్ ఎంచుకోండి', imgDrop: 'ఇమేజ్ ఎంచుకోవడానికి క్లిక్ చేయండి లేదా ఇక్కడ లాగి వదలండి', imgQuality: 'క్వాలిటీ', imgMaxW: 'గరిష్ట వెడల్పు (px, ఐచ్ఛికం)', imgFormat: 'ఫార్మాట్',
  imgOrig: 'అసలు', imgNew: 'కొత్త సైజు', imgSaved: 'ఆదా', imgWidth: 'వెడల్పు (px)', imgHeight: 'ఎత్తు (px)', imgKeep: 'నిష్పత్తి ఉంచండి', imgResize: 'సైజు మార్చు', imgSize: 'సైజు',
  loremParas: 'పేరాలు', loremStart: '“Lorem ipsum”తో మొదలుపెట్టు',
  rndMin: 'కనిష్టం', rndMax: 'గరిష్టం', rndCount: 'ఎన్ని సంఖ్యలు', rndUnique: 'పునరావృతం వద్దు', rndErr: 'అన్ని భిన్న సంఖ్యలకు రేంజ్ చాలా చిన్నది.',
  tmH: 'గంటలు', tmM: 'నిమిషాలు', tmS: 'సెకన్లు', tmStart: 'ప్రారంభించు', tmPause: 'ఆపు', tmResume: 'కొనసాగించు', tmDone: 'సమయం అయిపోయింది!',
  urlEncode: 'ఎన్‌కోడ్', urlDecode: 'డీకోడ్', urlMode: 'మోడ్', urlComp: 'కాంపోనెంట్ (అన్నీ ఎన్‌కోడ్)', urlFull: 'పూర్తి URL (: / ? & ఉంచు)', urlErr: 'డీకోడ్ చేయలేకపోయాం. టెక్స్ట్‌లో తప్పు % క్రమం ఉంది.',
  pdfChoose: 'PDF ఫైళ్లు ఎంచుకోండి', pdfDrop: 'PDF ఫైళ్లు ఎంచుకోవడానికి క్లిక్ చేయండి (2 లేదా అంతకంటే ఎక్కువ)', pdfMerge: 'PDFలు కలపండి', pdfUp: 'పైకి', pdfDown: 'కిందకు', pdfRemove: 'తొలగించు', pdfNeed2: 'కనీసం 2 PDF ఫైళ్లు ఎంచుకోండి.', pdfBusy: 'కలుపుతున్నాం…', pdfErr: 'కలపలేకపోయాం. ఒక ఫైల్ పాడై ఉండవచ్చు లేదా పాస్‌వర్డ్ ఉండవచ్చు.',
  cName: 'మీ పేరు', cEmail: 'మీ ఇమెయిల్', cSubject: 'విషయం', cMessage: 'సందేశం', cSend: 'సందేశం పంపండి', cOk: 'మీ ఇమెయిల్ యాప్ ఇప్పుడు తెరుచుకోవాలి. పూర్తి చేయడానికి అక్కడ పంపండి నొక్కండి.',

  t_wordcount_n: 'పదాల లెక్కింపు', t_wordcount_d: 'పదాలు, అక్షరాలు, వాక్యాలు, చదివే సమయం లెక్కించండి.',
  t_password_n: 'పాస్‌వర్డ్ జనరేటర్', t_password_d: 'బలమైన, యాదృచ్ఛిక పాస్‌వర్డ్‌లను సురక్షితంగా సృష్టించండి.',
  t_qr_n: 'QR కోడ్ జనరేటర్', t_qr_d: 'ఏ లింక్ లేదా టెక్స్ట్‌నైనా QR కోడ్‌గా మార్చండి.',
  t_age_n: 'వయస్సు కాలిక్యులేటర్', t_age_d: 'సంవత్సరాలు, నెలలు, రోజులలో ఖచ్చితమైన వయస్సు తెలుసుకోండి.',
  t_emi_n: 'EMI కాలిక్యులేటర్', t_emi_d: 'లోన్ EMI, వడ్డీ, మొత్తం చెల్లింపు లెక్కించండి.',
  t_gst_n: 'GST కాలిక్యులేటర్', t_gst_d: 'ఏ మొత్తానికైనా GST కలపండి లేదా తీసివేయండి.',
  t_percent_n: 'శాతం కాలిక్యులేటర్', t_percent_d: 'శాతం, వాటా, శాతం మార్పు లెక్కించండి.',
  t_bmi_n: 'BMI కాలిక్యులేటర్', t_bmi_d: 'మీ బాడీ మాస్ ఇండెక్స్ త్వరగా చూడండి.',
  t_case_n: 'టెక్స్ట్ కేస్ కన్వర్టర్', t_case_d: 'టెక్స్ట్‌ను పెద్ద, చిన్న, టైటిల్ మొదలైనవిగా మార్చండి.',
  t_json_n: 'JSON ఫార్మాటర్', t_json_d: 'JSONను ఫార్మాట్, మినిఫై, వాలిడేట్ చేయండి.',
  t_base64_n: 'Base64 ఎన్‌కోడర్ / డీకోడర్', t_base64_d: 'టెక్స్ట్‌ను Base64గా మార్చండి లేదా తిరిగి పొందండి.',
  t_unit_n: 'యూనిట్ కన్వర్టర్', t_unit_d: 'పొడవు, బరువు, ఉష్ణోగ్రత, వేగం, వైశాల్యం మార్చండి.',
  t_color_n: 'కలర్ పికర్', t_color_d: 'HEX, RGB, HSL కోడ్‌లు, షేడ్స్ పొందండి.',
  t_imgcompress_n: 'ఇమేజ్ కంప్రెసర్', t_imgcompress_d: 'ఎక్కడా అప్‌లోడ్ చేయకుండా ఇమేజ్ సైజు తగ్గించండి.',
  t_imgresize_n: 'ఇమేజ్ రీసైజర్', t_imgresize_d: 'బ్రౌజర్‌లో ఇమేజ్ వెడల్పు, ఎత్తు మార్చండి.',
  t_lorem_n: 'Lorem Ipsum జనరేటర్', t_lorem_d: 'డిజైన్ల కోసం నమూనా టెక్స్ట్ సృష్టించండి.',
  t_random_n: 'రాండమ్ నంబర్ జనరేటర్', t_random_d: 'ఏ రేంజ్‌లోనైనా యాదృచ్ఛిక సంఖ్యలు ఎంచుకోండి.',
  t_countdown_n: 'కౌంట్‌డౌన్ టైమర్', t_countdown_d: 'టైమర్ పెట్టండి, సమయం అయ్యాక అలర్ట్ పొందండి.',
  t_urlenc_n: 'URL ఎన్‌కోడర్ / డీకోడర్', t_urlenc_d: 'వెబ్ అడ్రస్‌ల కోసం టెక్స్ట్ ఎన్‌కోడ్ లేదా డీకోడ్ చేయండి.',
  t_pdfmerge_n: 'PDF మెర్జ్', t_pdfmerge_d: 'అనేక PDF ఫైళ్లను ఒకటిగా కలపండి.',

  pages: {
    about: { title: 'ToolHub గురించి', lead: 'అందరికీ ఉచిత, వేగవంతమైన, ప్రైవేట్ ఆన్‌లైన్ టూల్స్.', s: [
      { h: 'మా లక్ష్యం', p: 'ToolHub రోజువారీ చిన్న పనులను సులభం చేయడానికి ఉంది: పదాలు లెక్కించడం, లోన్ లెక్కించడం, ఫోటో సైజు మార్చడం, PDFలు కలపడం. ఈ పనులకు అకౌంట్, డౌన్‌లోడ్ లేదా చెల్లింపు అవసరం ఉండకూడదు.' },
      { h: 'ముందు గోప్యత', p: 'మా టూల్స్ మీ బ్రౌజర్ లోపలే నడుస్తాయి. మీరు టైప్ చేసే టెక్స్ట్, ఎంచుకునే ఫైళ్లు మీ పరికరంలోనే ప్రాసెస్ అవుతాయి, మా సర్వర్‌లకు ఎప్పుడూ పంపబడవు.' },
      { h: 'అనేక భాషల కోసం', p: 'మొత్తం సైట్ ఇంగ్లీష్, హిందీ, తెలుగు, ఉర్దూలో అందుబాటులో ఉంది, ఉర్దూకు కుడి నుండి ఎడమ లేఅవుట్‌తో. కాలక్రమేణా మరిన్ని భాషలు చేరుతాయి.' },
      { h: 'ఎల్లప్పుడూ ఉచితం', p: 'ToolHubలోని ప్రతి టూల్ ఉచితం. నిర్వహణ ఖర్చుల కోసం భవిష్యత్తులో సైట్‌లో ప్రకటనలు కనిపించవచ్చు. ఆ విషయాన్ని మేము గోప్యతా విధానంలో ఎల్లప్పుడూ చెబుతాం.' },
      { h: 'తర్వాత ఏం చేయాలో చెప్పండి', p: 'కొత్త టూల్ ఆలోచన ఉందా లేదా బగ్ కనిపించిందా? సంప్రదించండి పేజీలో మాకు చెప్పండి. ప్రతి సందేశాన్ని మేము చదువుతాం.' }
    ] },
    help: { title: 'సహాయం & తరచుగా అడిగే ప్రశ్నలు', lead: 'సాధారణ ప్రశ్నలకు త్వరిత సమాధానాలు.', s: [
      { q: 'నేను అకౌంట్ సృష్టించాలా?', a: 'అవసరం లేదు. అన్ని టూల్స్ సైన్-అప్ లేదా లాగిన్ లేకుండా వెంటనే పనిచేస్తాయి.' },
      { q: 'నా ఫైళ్లు, టెక్స్ట్ ఎక్కడైనా అప్‌లోడ్ అవుతాయా?', a: 'లేదు. అన్నీ మీ బ్రౌజర్ లోపలే ప్రాసెస్ అవుతాయి. మీ ఫైళ్లు మీ పరికరం దాటి వెళ్లవు.' },
      { q: 'QR లేదా PDF టూల్‌కు ఇంటర్నెట్ ఎందుకు కావాలి?', a: 'ఈ రెండు టూల్స్ మొదటిసారి CDN నుండి చిన్న ఓపెన్-సోర్స్ లైబ్రరీని లోడ్ చేస్తాయి. మిగతా టూల్స్ అన్నీ పేజీ లోడ్ అయ్యాక ఆఫ్‌లైన్‌లో కూడా పనిచేస్తాయి.' },
      { q: 'భాషను ఎలా మార్చాలి?', a: 'ఏ పేజీలోనైనా పైన కుడివైపు ఉన్న భాషా మెనూ ఉపయోగించండి. మీ ఎంపిక ఈ పరికరంలో గుర్తుంటుంది.' },
      { q: 'కాలిక్యులేటర్లు ఖచ్చితమైనవేనా?', a: 'ఇవి ప్రామాణిక ఫార్ములాలు ఉపయోగిస్తాయి. ఫలితాలు సాధారణ మార్గదర్శకానికి అంచనాలు. లోన్, పన్ను, ఆరోగ్య నిర్ణయాల కోసం బ్యాంక్, పన్ను నిపుణుడు లేదా డాక్టర్‌తో నిర్ధారించుకోండి.' },
      { q: 'నా ఇమేజ్ లేదా PDF టూల్ పనిచేయడం లేదు. ఏం చేయాలి?', a: 'పేజీని రిఫ్రెష్ చేసి మళ్లీ ప్రయత్నించండి. చాలా పెద్ద ఫైళ్లు పాత ఫోన్లలో నెమ్మదిగా ఉండవచ్చు. పాస్‌వర్డ్ ఉన్న లేదా పాడైన PDFని కలపలేము.' },
      { q: 'సమస్యను ఎలా తెలపాలి లేదా కొత్త టూల్ ఎలా సూచించాలి?', a: 'సంప్రదించండి పేజీ ఉపయోగించండి. టూల్ పేరు, మీ బ్రౌజర్, ఏం తప్పు జరిగిందో చెప్పండి.' }
    ] },
    contact: { title: 'మమ్మల్ని సంప్రదించండి', lead: 'ప్రశ్నలు, అభిప్రాయాలు లేదా కొత్త టూల్ ఆలోచనలు? మీ నుండి వినాలని ఉంది.', s: [
      { h: 'రాయడానికి ముందు', p: 'చాలా సమాధానాలు సహాయం పేజీలో ఉన్నాయి. బగ్ నివేదించేటప్పుడు టూల్ పేరు, మీ బ్రౌజర్ తెలపండి.' }
    ] },
    privacy: { title: 'గోప్యతా విధానం', lead: 'ToolHub మీ సమాచారాన్ని ఎలా నిర్వహిస్తుంది.', updated: 'చివరి అప్‌డేట్: 9 నవంబర్ 2026', s: [
      { h: 'సారాంశం', p: 'ToolHub మిమ్మల్ని సైన్-అప్ అడగదు, తన టూల్స్ ద్వారా వ్యక్తిగత సమాచారం సేకరించదు. టూల్స్ మీ బ్రౌజర్‌లో పనిచేస్తాయి.' },
      { h: 'మీ టెక్స్ట్, ఫైళ్లు', p: 'మీరు టైప్ చేసిన టెక్స్ట్, ఎంచుకున్న ఇమేజ్‌లు, కలిపిన PDFలు మీ పరికరంలోనే ప్రాసెస్ అవుతాయి. అవి మా సర్వర్‌లకు అప్‌లోడ్ కావు, మేము వాటిని చూడలేము.' },
      { h: 'మీ పరికరంలో నిల్వ అయ్యే డేటా', p: 'సైట్ గుర్తుంచుకోవడానికి మీ భాష, థీమ్ ఎంపికను మీ బ్రౌజర్ లోకల్ స్టోరేజ్‌లో సేవ్ చేస్తాం. దీన్ని ఎప్పుడైనా బ్రౌజర్ సెట్టింగ్స్ నుండి తొలగించవచ్చు.' },
      { h: 'థర్డ్-పార్టీ సేవలు', p: 'పేజీలు Google Fonts నుండి ఫాంట్‌లు లోడ్ చేస్తాయి. QR కోడ్, PDF టూల్స్ పబ్లిక్ CDN నుండి ఓపెన్-సోర్స్ లైబ్రరీని లోడ్ చేస్తాయి. సాధారణ వెబ్ అభ్యర్థనలలో ఈ ప్రొవైడర్లు తమ గోప్యతా విధానాల ప్రకారం మీ IP అడ్రస్, బ్రౌజర్ వివరాలు పొందవచ్చు.' },
      { h: 'ప్రకటనలు', p: 'భవిష్యత్తులో Google AdSense వంటి వాటి ద్వారా ప్రకటనలు చూపవచ్చు. ప్రకటన భాగస్వాములు సంబంధిత ప్రకటనల కోసం కుకీలు ఉపయోగించవచ్చు. ప్రకటనలు ప్రారంభిస్తే ఈ విధానం నవీకరించబడుతుంది, చట్టం కోరిన చోట కుకీ నోటీసు చూపబడుతుంది.' },
      { h: 'కాంటాక్ట్ ఫారమ్', p: 'కాంటాక్ట్ ఫారమ్ మీ స్వంత ఇమెయిల్ యాప్‌ను సిద్ధమైన సందేశంతో తెరుస్తుంది. ఫారమ్‌లో మీరు టైప్ చేసినది మేము నిల్వ చేయం. మీరు పంపితేనే ఇమెయిల్ మాకు అందుతుంది.' },
      { h: 'పిల్లలు', p: 'ToolHub సాధారణ ఉపయోగ సైట్, 13 ఏళ్లలోపు పిల్లల కోసం కాదు. పిల్లల సమాచారాన్ని మేము తెలిసి సేకరించం.' },
      { h: 'విధానంలో మార్పులు', p: 'ఈ విధానాన్ని ఎప్పటికప్పుడు నవీకరించవచ్చు. పైన ఉన్న తేదీ తాజా వెర్షన్‌ను చూపుతుంది.' }
    ] },
    terms: { title: 'వినియోగ నిబంధనలు', lead: 'ToolHub ఉపయోగించే ముందు ఈ నిబంధనలు చదవండి.', updated: 'చివరి అప్‌డేట్: 9 నవంబర్ 2026', s: [
      { h: 'అంగీకారం', p: 'ToolHub ఉపయోగించడం ద్వారా మీరు ఈ నిబంధనలకు అంగీకరిస్తారు. అంగీకరించకపోతే దయచేసి సైట్‌ను ఉపయోగించకండి.' },
      { h: 'టూల్స్ వినియోగం', p: 'మీరు టూల్స్‌ను వ్యక్తిగత, వ్యాపార అవసరాలకు ఉపయోగించవచ్చు. సైట్‌ను దుర్వినియోగం చేయడం, అంతరాయం కలిగించడం, చట్టవిరుద్ధ పనులకు ఉపయోగించడం చేయరాదు.' },
      { h: 'వృత్తిపరమైన సలహా కాదు', p: 'EMI, GST, BMI, వయస్సు వంటి కాలిక్యులేటర్లు సాధారణ సమాచారం కోసం అంచనాలు మాత్రమే ఇస్తాయి. ఇవి ఆర్థిక, పన్ను, న్యాయ లేదా వైద్య సలహా కాదు. ముఖ్యమైన సంఖ్యలను ఎల్లప్పుడూ విడిగా ధృవీకరించుకోండి.' },
      { h: 'వారంటీ లేదు', p: 'టూల్స్ “ఉన్నది ఉన్నట్లుగా” ఎలాంటి వారంటీ లేకుండా అందించబడతాయి. అవి ఎల్లప్పుడూ అందుబాటులో, లోపరహితంగా, మీ అవసరానికి సరిపోతాయని మేము హామీ ఇవ్వం.' },
      { h: 'బాధ్యత పరిమితి', p: 'చట్టం అనుమతించిన మేరకు, సైట్ వినియోగం లేదా టూల్స్ ఫలితాల వల్ల కలిగే నష్టానికి ToolHub, దాని యజమానులు బాధ్యులు కారు.' },
      { h: 'మేధో సంపత్తి', p: 'ToolHub డిజైన్, కోడ్, కంటెంట్ దాని యజమానులకు చెందుతాయి. మీరు ప్రాసెస్ చేసే టెక్స్ట్, ఫైళ్లు మీవిగానే ఉంటాయి.' },
      { h: 'మార్పులు', p: 'ఈ నిబంధనలను లేదా సైట్‌ను ఎప్పుడైనా మార్చవచ్చు. మార్పుల తర్వాత కొనసాగించి ఉపయోగిస్తే నవీకరించిన నిబంధనలను అంగీకరించినట్లే.' }
    ] }
  }
},

/* ============================ URDU ============================ */
ur: {
  navTools: 'ٹولز', navAbout: 'ہمارے بارے میں', navHelp: 'مدد', navContact: 'رابطہ', theme: 'تھیم بدلیں', menu: 'مینو',
  badge: 'مفت · سائن اپ نہیں · نجی',
  heroA: 'روزمرہ کام آسان بنانے والے', heroB: 'مفت آن لائن ٹولز',
  heroSub: '20 تیز اور آسان ٹولز جو سیدھے آپ کے براؤزر میں چلتے ہیں۔ کچھ بھی اپ لوڈ یا محفوظ نہیں ہوتا۔',
  searchPh: 'ٹول تلاش کریں… (مثلاً EMI, QR, PDF)',
  cat_all: 'سب', cat_text: 'متن', cat_finance: 'مالیات', cat_health: 'صحت', cat_dev: 'ڈیولپر', cat_image: 'تصویر اور PDF', cat_utility: 'مفید',
  noResults: 'کوئی ٹول نہیں ملا۔ کوئی اور لفظ آزمائیں۔',
  statTools: 'مفت ٹولز', statLangs: 'زبانیں', statUploads: 'اپ لوڈ کی گئی فائلیں',
  openTool: 'ٹول کھولیں', relatedTools: 'مزید ٹولز جو آپ کو پسند آئیں گے', bcHome: 'ہوم',
  featPrivT: 'ڈیزائن ہی سے نجی', featPrivD: 'سب کچھ آپ کے براؤزر کے اندر چلتا ہے۔ آپ کا متن، تصاویر اور PDF آپ کے آلے سے باہر نہیں جاتے۔',
  featFastT: 'تیز اور آسان', featFastD: 'نہ سائن اپ، نہ انتظار۔ ٹول کھولیں، معلومات دیں اور فوراً نتیجہ پائیں۔',
  featFreeT: 'مفت اور کثیر لسانی', featFreeD: 'تمام ٹولز مفت ہیں، انگریزی، ہندی، تیلگو اور اردو میں، فون یا کمپیوٹر پر۔',
  ftTagline: 'روزمرہ کاموں کے لیے مفت، تیز اور نجی آن لائن ٹولز۔', ftTools: 'مقبول ٹولز', ftCompany: 'کمپنی',
  navPrivacy: 'پرائیویسی پالیسی', navTerms: 'استعمال کی شرائط',
  ftRights: 'جملہ حقوق محفوظ ہیں۔', backTop: 'اوپر جائیں',
  copy: 'کاپی', copied: 'کاپی ہو گیا!', clear: 'صاف کریں', download: 'ڈاؤن لوڈ', generate: 'بنائیں', calculate: 'حساب لگائیں', reset: 'ری سیٹ',
  input: 'ان پٹ', output: 'آؤٹ پٹ', libError: 'ضروری لائبریری لوڈ نہیں ہو سکی۔ انٹرنیٹ چیک کریں اور صفحہ ریفریش کریں۔',

  typeHere: 'اپنا متن یہاں لکھیں یا پیسٹ کریں…', words: 'الفاظ', chars: 'حروف', charsNoSpace: 'بغیر خالی جگہ', sentences: 'جملے', paragraphs: 'پیراگراف', readTime: 'پڑھنے کا وقت', minShort: 'منٹ',
  length: 'لمبائی', upper: 'بڑے حروف (A-Z)', lower: 'چھوٹے حروف (a-z)', numbers: 'اعداد (0-9)', symbols: 'علامات (!@#$)', strength: 'مضبوطی', sWeak: 'کمزور', sMedium: 'درمیانہ', sStrong: 'مضبوط', sVeryStrong: 'بہت مضبوط',
  qrText: 'متن یا URL', qrPh: 'https://example.com', qrSize: 'سائز (پکسل)',
  dob: 'تاریخ پیدائش', asOn: 'اس تاریخ پر عمر', yearsU: 'سال', monthsU: 'مہینے', daysU: 'دن', totalDays: 'کل جیے گئے دن', nextBday: 'اگلی سالگرہ میں', daysLeft: 'دن',
  amount: 'رقم (₹)', rate: 'شرح سود (% سالانہ)', years: 'سال', monthlyEmi: 'ماہانہ EMI', totalInterest: 'کل سود', totalPayment: 'کل ادائیگی', principal: 'اصل رقم', interest: 'سود',
  gstRate: 'GST شرح (%)', gstAdd: 'GST شامل کریں', gstRemove: 'GST ہٹائیں', netAmount: 'خالص رقم', gstAmount: 'GST رقم', grossAmount: 'کل رقم', cgst: 'CGST', sgst: 'SGST', customRate: 'اپنی شرح',
  pctOf: '% کا', pctIsWhat: 'کتنے % ہے', pctChange: 'تبدیلی', pctTo: 'سے',
  height: 'قد (سینٹی میٹر)', weight: 'وزن (کلوگرام)', bmiLabel: 'آپ کا BMI', bmiUnder: 'کم وزن', bmiNormal: 'نارمل', bmiOver: 'زیادہ وزن', bmiObese: 'موٹاپا',
  bmiNote: 'BMI صرف ایک عمومی اشارہ ہے، طبی مشورہ نہیں۔ صحت کے فیصلوں کے لیے ڈاکٹر سے بات کریں۔',
  caseUpper: 'UPPERCASE', caseLower: 'lowercase', caseTitle: 'Title Case', caseSentence: 'Sentence case', caseCamel: 'camelCase', caseSnake: 'snake_case', caseKebab: 'kebab-case',
  jsonFormat: 'فارمیٹ', jsonMinify: 'چھوٹا کریں', jsonValidate: 'جانچیں', jsonValid: 'درست JSON', jsonInvalid: 'غلط JSON',
  b64Encode: 'انکوڈ', b64Decode: 'ڈی کوڈ', b64Err: 'یہ درست Base64 نہیں ہے۔',
  uCategory: 'زمرہ', uFrom: 'سے', uTo: 'میں', uValue: 'قدر', uc_length: 'لمبائی', uc_mass: 'وزن', uc_temp: 'درجہ حرارت', uc_speed: 'رفتار', uc_area: 'رقبہ',
  colPick: 'رنگ چنیں', colShades: 'شیڈز',
  imgChoose: 'تصویر چنیں', imgDrop: 'تصویر چننے کے لیے کلک کریں یا یہاں کھینچ کر چھوڑیں', imgQuality: 'کوالٹی', imgMaxW: 'زیادہ سے زیادہ چوڑائی (px، اختیاری)', imgFormat: 'فارمیٹ',
  imgOrig: 'اصل', imgNew: 'نیا سائز', imgSaved: 'بچت', imgWidth: 'چوڑائی (px)', imgHeight: 'اونچائی (px)', imgKeep: 'تناسب برقرار رکھیں', imgResize: 'سائز بدلیں', imgSize: 'سائز',
  loremParas: 'پیراگراف', loremStart: '“Lorem ipsum” سے شروع کریں',
  rndMin: 'کم از کم', rndMax: 'زیادہ سے زیادہ', rndCount: 'کتنے اعداد', rndUnique: 'دہرائے بغیر', rndErr: 'اتنے مختلف اعداد کے لیے رینج بہت چھوٹی ہے۔',
  tmH: 'گھنٹے', tmM: 'منٹ', tmS: 'سیکنڈ', tmStart: 'شروع کریں', tmPause: 'روکیں', tmResume: 'جاری رکھیں', tmDone: 'وقت ختم!',
  urlEncode: 'انکوڈ', urlDecode: 'ڈی کوڈ', urlMode: 'موڈ', urlComp: 'کمپونینٹ (سب انکوڈ)', urlFull: 'مکمل URL (: / ? & رکھیں)', urlErr: 'ڈی کوڈ نہیں ہو سکا۔ متن میں غلط % ترتیب ہے۔',
  pdfChoose: 'PDF فائلیں چنیں', pdfDrop: 'PDF فائلیں چننے کے لیے کلک کریں (2 یا زیادہ)', pdfMerge: 'PDF جوڑیں', pdfUp: 'اوپر', pdfDown: 'نیچے', pdfRemove: 'ہٹائیں', pdfNeed2: 'کم از کم 2 PDF فائلیں چنیں۔', pdfBusy: 'جوڑ رہے ہیں…', pdfErr: 'جوڑ نہیں سکے۔ کوئی فائل خراب یا پاس ورڈ والی ہو سکتی ہے۔',
  cName: 'آپ کا نام', cEmail: 'آپ کا ای میل', cSubject: 'موضوع', cMessage: 'پیغام', cSend: 'پیغام بھیجیں', cOk: 'آپ کی ای میل ایپ اب کھلنی چاہیے۔ مکمل کرنے کے لیے وہاں بھیجیں دبائیں۔',

  t_wordcount_n: 'الفاظ گنتی', t_wordcount_d: 'الفاظ، حروف، جملے اور پڑھنے کا وقت گنیں۔',
  t_password_n: 'پاس ورڈ جنریٹر', t_password_d: 'مضبوط اور بے ترتیب پاس ورڈ محفوظ طریقے سے بنائیں۔',
  t_qr_n: 'QR کوڈ جنریٹر', t_qr_d: 'کسی بھی لنک یا متن کا QR کوڈ بنائیں۔',
  t_age_n: 'عمر کیلکولیٹر', t_age_d: 'سال، مہینوں اور دنوں میں درست عمر جانیں۔',
  t_emi_n: 'EMI کیلکولیٹر', t_emi_d: 'قرض کی EMI، سود اور کل ادائیگی نکالیں۔',
  t_gst_n: 'GST کیلکولیٹر', t_gst_d: 'کسی بھی رقم میں GST شامل کریں یا ہٹائیں۔',
  t_percent_n: 'فیصد کیلکولیٹر', t_percent_d: 'فیصد، حصہ اور فیصد تبدیلی نکالیں۔',
  t_bmi_n: 'BMI کیلکولیٹر', t_bmi_d: 'اپنا باڈی ماس انڈیکس جلدی جانچیں۔',
  t_case_n: 'ٹیکسٹ کیس کنورٹر', t_case_d: 'متن کو بڑے، چھوٹے، ٹائٹل وغیرہ میں بدلیں۔',
  t_json_n: 'JSON فارمیٹر', t_json_d: 'JSON کو فارمیٹ، چھوٹا اور ویلیڈیٹ کریں۔',
  t_base64_n: 'Base64 انکوڈر / ڈی کوڈر', t_base64_d: 'متن کو Base64 میں بدلیں یا واپس حاصل کریں۔',
  t_unit_n: 'یونٹ کنورٹر', t_unit_d: 'لمبائی، وزن، درجہ حرارت، رفتار اور رقبہ بدلیں۔',
  t_color_n: 'کلر پکر', t_color_d: 'HEX، RGB، HSL کوڈ اور شیڈز حاصل کریں۔',
  t_imgcompress_n: 'امیج کمپریسر', t_imgcompress_d: 'کہیں اپ لوڈ کیے بغیر تصویر کا سائز گھٹائیں۔',
  t_imgresize_n: 'امیج ری سائزر', t_imgresize_d: 'براؤزر میں تصویر کی چوڑائی اور اونچائی بدلیں۔',
  t_lorem_n: 'Lorem Ipsum جنریٹر', t_lorem_d: 'ڈیزائن کے لیے نمونہ متن بنائیں۔',
  t_random_n: 'رینڈم نمبر جنریٹر', t_random_d: 'کسی بھی رینج میں بے ترتیب اعداد چنیں۔',
  t_countdown_n: 'کاؤنٹ ڈاؤن ٹائمر', t_countdown_d: 'ٹائمر لگائیں اور وقت ختم ہونے پر الرٹ پائیں۔',
  t_urlenc_n: 'URL انکوڈر / ڈی کوڈر', t_urlenc_d: 'ویب پتوں کے لیے متن انکوڈ یا ڈی کوڈ کریں۔',
  t_pdfmerge_n: 'PDF مرج', t_pdfmerge_d: 'کئی PDF فائلوں کو ایک میں جوڑیں۔',

  pages: {
    about: { title: 'ToolHub کے بارے میں', lead: 'سب کے لیے مفت، تیز اور نجی آن لائن ٹولز۔', s: [
      { h: 'ہمارا مقصد', p: 'ToolHub روزمرہ کے چھوٹے کام آسان بنانے کے لیے ہے: الفاظ گننا، قرض کا حساب لگانا، تصویر کا سائز بدلنا یا PDF جوڑنا۔ ان کاموں کے لیے اکاؤنٹ، ڈاؤن لوڈ یا ادائیگی کی ضرورت نہیں ہونی چاہیے۔' },
      { h: 'پہلے پرائیویسی', p: 'ہمارے ٹولز آپ کے براؤزر کے اندر چلتے ہیں۔ آپ جو متن لکھتے ہیں اور جو فائلیں چنتے ہیں وہ آپ کے اپنے آلے پر پراسیس ہوتی ہیں اور ہمارے سرورز کو کبھی نہیں بھیجی جاتیں۔' },
      { h: 'کئی زبانوں کے لیے', p: 'پوری سائٹ انگریزی، ہندی، تیلگو اور اردو میں دستیاب ہے، اردو کے لیے دائیں سے بائیں لے آؤٹ کے ساتھ۔ وقت کے ساتھ مزید زبانیں شامل ہوں گی۔' },
      { h: 'ہمیشہ مفت', p: 'ToolHub کا ہر ٹول مفت ہے۔ اخراجات پورے کرنے کے لیے مستقبل میں سائٹ پر اشتہارات دکھائی دے سکتے ہیں۔ ہم پرائیویسی پالیسی میں ہمیشہ یہ بتائیں گے۔' },
      { h: 'بتائیں آگے کیا بنائیں', p: 'نئے ٹول کا خیال ہے یا کوئی خرابی ملی؟ رابطہ صفحے پر ہمیں بتائیں۔ ہم ہر پیغام پڑھتے ہیں۔' }
    ] },
    help: { title: 'مدد اور اکثر پوچھے گئے سوالات', lead: 'عام سوالات کے فوری جوابات۔', s: [
      { q: 'کیا مجھے اکاؤنٹ بنانا پڑے گا؟', a: 'نہیں۔ تمام ٹولز بغیر سائن اپ یا لاگ ان کے فوراً چلتے ہیں۔' },
      { q: 'کیا میری فائلیں اور متن کہیں اپ لوڈ ہوتے ہیں؟', a: 'نہیں۔ سب کچھ آپ کے براؤزر کے اندر پراسیس ہوتا ہے۔ آپ کی فائلیں آپ کے آلے سے باہر نہیں جاتیں۔' },
      { q: 'QR یا PDF ٹول کو انٹرنیٹ کیوں چاہیے؟', a: 'یہ دونوں ٹولز پہلی بار CDN سے ایک چھوٹی اوپن سورس لائبریری لوڈ کرتے ہیں۔ باقی تمام ٹولز صفحہ لوڈ ہونے کے بعد آف لائن بھی چلتے ہیں۔' },
      { q: 'زبان کیسے بدلوں؟', a: 'کسی بھی صفحے کے اوپر بائیں جانب زبان کا مینو استعمال کریں۔ آپ کی پسند اس آلے پر یاد رکھی جاتی ہے۔' },
      { q: 'کیا کیلکولیٹر درست نتائج دیتے ہیں؟', a: 'یہ معیاری فارمولے استعمال کرتے ہیں۔ نتائج عمومی رہنمائی کے لیے اندازے ہیں۔ قرض، ٹیکس یا صحت کے فیصلوں کے لیے بینک، ٹیکس ماہر یا ڈاکٹر سے تصدیق کریں۔' },
      { q: 'میرا امیج یا PDF ٹول کام نہیں کر رہا۔ کیا کروں؟', a: 'صفحہ ریفریش کر کے دوبارہ کوشش کریں۔ بہت بڑی فائلیں پرانے فون پر سست ہو سکتی ہیں۔ پاس ورڈ والی یا خراب PDF جوڑی نہیں جا سکتی۔' },
      { q: 'مسئلہ کیسے بتاؤں یا نیا ٹول کیسے تجویز کروں؟', a: 'رابطہ صفحہ استعمال کریں۔ ہمیں ٹول کا نام، آپ کا براؤزر اور کیا خرابی ہوئی بتائیں۔' }
    ] },
    contact: { title: 'ہم سے رابطہ کریں', lead: 'سوالات، رائے یا نئے ٹول کے خیالات؟ ہمیں آپ سے سن کر خوشی ہوگی۔', s: [
      { h: 'لکھنے سے پہلے', p: 'بہت سے جوابات مدد کے صفحے پر مل جائیں گے۔ خرابی بتاتے وقت ٹول کا نام اور اپنا براؤزر ضرور لکھیں۔' }
    ] },
    privacy: { title: 'پرائیویسی پالیسی', lead: 'ToolHub آپ کی معلومات کو کیسے سنبھالتا ہے۔', updated: 'آخری اپ ڈیٹ: 9 نومبر 2026', s: [
      { h: 'خلاصہ', p: 'ToolHub آپ سے سائن اپ نہیں مانگتا اور اپنے ٹولز کے ذریعے ذاتی معلومات جمع نہیں کرتا۔ ٹولز آپ کے براؤزر میں چلتے ہیں۔' },
      { h: 'آپ کا متن اور فائلیں', p: 'آپ کا لکھا ہوا متن، چنی ہوئی تصاویر اور جوڑی گئی PDF آپ کے آلے ہی پر پراسیس ہوتی ہیں۔ وہ ہمارے سرورز پر اپ لوڈ نہیں ہوتیں اور ہم انہیں دیکھ نہیں سکتے۔' },
      { h: 'آپ کے آلے پر محفوظ ڈیٹا', p: 'ہم آپ کی زبان اور تھیم کی پسند آپ کے براؤزر کے لوکل اسٹوریج میں محفوظ کرتے ہیں تاکہ سائٹ اسے یاد رکھے۔ آپ اسے کسی بھی وقت براؤزر سیٹنگز سے مٹا سکتے ہیں۔' },
      { h: 'تیسرے فریق کی خدمات', p: 'صفحات Google Fonts سے فونٹ لوڈ کرتے ہیں۔ QR کوڈ اور PDF ٹولز عوامی CDN سے اوپن سورس لائبریری لوڈ کرتے ہیں۔ عام ویب درخواستوں میں یہ فراہم کنندگان اپنی پرائیویسی پالیسیوں کے تحت آپ کا IP پتہ اور براؤزر کی معلومات پا سکتے ہیں۔' },
      { h: 'اشتہارات', p: 'مستقبل میں ہم اشتہارات دکھا سکتے ہیں، مثلاً Google AdSense کے ذریعے۔ اشتہاری شراکت دار متعلقہ اشتہارات دکھانے کے لیے کوکیز استعمال کر سکتے ہیں۔ اشتہارات شروع کرنے پر یہ پالیسی اپ ڈیٹ ہوگی اور قانون کے مطابق کوکی نوٹس دکھایا جائے گا۔' },
      { h: 'رابطہ فارم', p: 'رابطہ فارم آپ کی اپنی ای میل ایپ کو تیار پیغام کے ساتھ کھولتا ہے۔ فارم میں لکھا ہوا ہم محفوظ نہیں کرتے۔ ای میل ہمیں تب ہی ملتی ہے جب آپ اسے بھیجتے ہیں۔' },
      { h: 'بچے', p: 'ToolHub ایک عمومی سائٹ ہے اور 13 سال سے کم عمر بچوں کے لیے نہیں ہے۔ ہم جان بوجھ کر بچوں کی معلومات جمع نہیں کرتے۔' },
      { h: 'پالیسی میں تبدیلیاں', p: 'ہم وقتاً فوقتاً یہ پالیسی اپ ڈیٹ کر سکتے ہیں۔ اوپر کی تاریخ تازہ ترین ورژن بتاتی ہے۔' }
    ] },
    terms: { title: 'استعمال کی شرائط', lead: 'ToolHub استعمال کرنے سے پہلے یہ شرائط پڑھیں۔', updated: 'آخری اپ ڈیٹ: 9 نومبر 2026', s: [
      { h: 'منظوری', p: 'ToolHub استعمال کر کے آپ ان شرائط سے اتفاق کرتے ہیں۔ اتفاق نہ ہو تو براہِ کرم سائٹ استعمال نہ کریں۔' },
      { h: 'ٹولز کا استعمال', p: 'آپ ٹولز کو ذاتی اور کاروباری مقاصد کے لیے استعمال کر سکتے ہیں۔ آپ سائٹ کا غلط استعمال، اسے متاثر کرنے کی کوشش یا کسی غیر قانونی کام میں استعمال نہیں کریں گے۔' },
      { h: 'پیشہ ورانہ مشورہ نہیں', p: 'EMI، GST، BMI اور عمر جیسے کیلکولیٹر صرف عمومی معلومات کے لیے اندازے دیتے ہیں۔ یہ مالی، ٹیکس، قانونی یا طبی مشورہ نہیں ہیں۔ اہم اعداد کی ہمیشہ الگ سے تصدیق کریں۔' },
      { h: 'کوئی ضمانت نہیں', p: 'ٹولز “جیسے ہیں” کی بنیاد پر بغیر کسی ضمانت کے فراہم کیے جاتے ہیں۔ ہم یقین نہیں دلاتے کہ وہ ہمیشہ دستیاب، غلطی سے پاک یا آپ کے مقصد کے مطابق ہوں گے۔' },
      { h: 'ذمہ داری کی حد', p: 'قانون جتنی اجازت دے، ToolHub اور اس کے مالکان سائٹ کے استعمال یا ٹولز کے نتائج سے ہونے والے کسی نقصان کے ذمہ دار نہیں ہیں۔' },
      { h: 'دانشورانہ املاک', p: 'ToolHub کا ڈیزائن، کوڈ اور مواد اس کے مالکان کا ہے۔ آپ کا پراسیس کیا ہوا متن اور فائلیں آپ ہی کی رہتی ہیں۔' },
      { h: 'تبدیلیاں', p: 'ہم کسی بھی وقت ان شرائط یا سائٹ میں تبدیلی کر سکتے ہیں۔ تبدیلی کے بعد استعمال جاری رکھنے کا مطلب ہے کہ آپ نئی شرائط مانتے ہیں۔' }
    ] }
  }
}

};
