const toolDefinitions = {
  "qr-generator": {
    title: "QR Code Generator",
    description: "Create a QR code from text or a web address.",
    markup: `<label for="qr-value">Text or URL</label><input id="qr-value" type="text" maxlength="1500" placeholder="https://example.com"><button class="tool-button" id="qr-generate" type="button">Generate QR code</button><div id="qr-output" class="qr-output" aria-live="polite"></div><p class="tool-status" id="tool-status" role="status"></p>`
  },
  "gst-calculator": {
    title: "GST Calculator",
    description: "Calculate GST and the final amount, including or excluding tax.",
    markup: `<label for="gst-amount">Amount (₹)</label><input id="gst-amount" type="number" min="0" step="any" value="1000"><label for="gst-rate">GST rate (%)</label><select id="gst-rate"><option value="5">5%</option><option value="12">12%</option><option value="18" selected>18%</option><option value="28">28%</option></select><label for="gst-mode">Amount type</label><select id="gst-mode"><option value="exclusive">Amount excludes GST</option><option value="inclusive">Amount includes GST</option></select><button class="tool-button" id="gst-calculate" type="button">Calculate GST</button><p class="tool-result" id="tool-result" role="status"></p>`
  },
  "percentage-calculator": {
    title: "Percentage Calculator",
    description: "Find what percentage a value is of another, or calculate a percentage of an amount.",
    markup: `<label for="percent-value">Percentage (%)</label><input id="percent-value" type="number" step="any" value="15"><label for="percent-amount">Amount</label><input id="percent-amount" type="number" step="any" value="200"><button class="tool-button" id="percent-calculate" type="button">Calculate</button><p class="tool-result" id="tool-result" role="status"></p>`
  },
  "bmi-calculator": {
    title: "BMI Calculator",
    description: "Estimate body mass index using metric measurements.",
    markup: `<label for="bmi-weight">Weight (kg)</label><input id="bmi-weight" type="number" min="1" max="500" step="any" placeholder="e.g. 68"><label for="bmi-height">Height (cm)</label><input id="bmi-height" type="number" min="50" max="280" step="any" placeholder="e.g. 172"><button class="tool-button" id="bmi-calculate" type="button">Calculate BMI</button><p class="tool-result" id="tool-result" role="status"></p><p class="tool-status">BMI is a general screening measure, not a medical diagnosis.</p>`
  },
  "text-case-converter": {
    title: "Text Case Converter",
    description: "Convert your text to uppercase, lowercase, title case or sentence case.",
    markup: `<label for="case-input">Your text</label><textarea id="case-input" placeholder="Type or paste text here..."></textarea><div class="button-row"><button class="tool-button" data-case="upper" type="button">UPPERCASE</button><button class="tool-button secondary" data-case="lower" type="button">lowercase</button><button class="tool-button secondary" data-case="title" type="button">Title Case</button><button class="tool-button secondary" data-case="sentence" type="button">Sentence case</button></div><p class="tool-status" id="tool-status" role="status"></p>`
  },
  "json-formatter": {
    title: "JSON Formatter",
    description: "Format or minify JSON and get a clear error if the input is invalid.",
    markup: `<label for="json-input">JSON input</label><textarea id="json-input" placeholder='{"name":"Tool Hub","tools":20}' spellcheck="false"></textarea><div class="button-row"><button class="tool-button" id="json-format" type="button">Format JSON</button><button class="tool-button secondary" id="json-minify" type="button">Minify JSON</button></div><p class="tool-status" id="tool-status" role="status"></p>`
  },
  "base64-converter": {
    title: "Base64 Converter",
    description: "Encode or decode UTF-8 text using Base64.",
    markup: `<label for="base64-input">Text</label><textarea id="base64-input" placeholder="Enter text or Base64..."></textarea><div class="button-row"><button class="tool-button" id="base64-encode" type="button">Encode</button><button class="tool-button secondary" id="base64-decode" type="button">Decode</button></div><p class="tool-status" id="tool-status" role="status"></p>`
  },
  "unit-converter": {
    title: "Unit Converter",
    description: "Convert between common length, weight, temperature and time units.",
    markup: `<label for="unit-category">Category</label><select id="unit-category"><option value="length">Length</option><option value="weight">Weight</option><option value="temperature">Temperature</option><option value="time">Time</option></select><label for="unit-value">Value</label><input id="unit-value" type="number" step="any" value="1"><div class="field-pair"><div><label for="unit-from">From</label><select id="unit-from"></select></div><div><label for="unit-to">To</label><select id="unit-to"></select></div></div><button class="tool-button" id="unit-convert" type="button">Convert</button><p class="tool-result" id="tool-result" role="status"></p>`
  },
  "color-picker": {
    title: "Color Picker",
    description: "Pick a color and copy its HEX, RGB or HSL value.",
    markup: `<label for="color-value">Choose a color</label><input id="color-value" type="color" value="#285d43"><div class="color-preview" id="color-preview"></div><div class="color-values"><p>HEX <output id="color-hex">#285d43</output></p><p>RGB <output id="color-rgb">40, 93, 67</output></p><p>HSL <output id="color-hsl"></output></p></div><button class="tool-button secondary" id="color-copy" type="button">Copy HEX</button><p class="tool-status" id="tool-status" role="status"></p>`
  },
  "image-compressor": {
    title: "Image Compressor",
    description: "Compress an image in your browser and download the smaller result.",
    markup: `<label for="image-file">Choose an image</label><input id="image-file" type="file" accept="image/*"><label for="image-quality">Image quality <output id="quality-value">75%</output></label><input id="image-quality" type="range" min="10" max="95" value="75"><button class="tool-button" id="image-process" type="button">Compress image</button><p class="tool-result" id="tool-result" role="status"></p><p class="tool-status" id="tool-status" role="status"></p><a class="download-link" id="image-download" hidden>Download compressed image</a>`
  },
  "image-resizer": {
    title: "Image Resizer",
    description: "Resize an image to pixel dimensions you choose, right in your browser.",
    markup: `<label for="image-file">Choose an image</label><input id="image-file" type="file" accept="image/*"><div class="field-pair"><div><label for="resize-width">Width (px)</label><input id="resize-width" type="number" min="1" max="8000" value="800"></div><div><label for="resize-height">Height (px)</label><input id="resize-height" type="number" min="1" max="8000" value="600"></div></div><label class="inline-check"><input id="resize-ratio" type="checkbox" checked> Keep aspect ratio</label><button class="tool-button" id="image-process" type="button">Resize image</button><p class="tool-status" id="tool-status" role="status"></p><a class="download-link" id="image-download" hidden>Download resized image</a>`
  },
  "lorem-ipsum": {
    title: "Lorem Ipsum Generator",
    description: "Generate placeholder paragraphs for designs and mockups.",
    markup: `<label for="lorem-count">Number of paragraphs</label><input id="lorem-count" type="number" min="1" max="20" value="3"><button class="tool-button" id="lorem-generate" type="button">Generate text</button><label for="lorem-output">Generated text</label><textarea id="lorem-output" readonly></textarea>`
  },
  "random-number": {
    title: "Random Number Picker",
    description: "Pick a cryptographically random whole number from a range.",
    markup: `<div class="field-pair"><div><label for="random-min">Minimum</label><input id="random-min" type="number" value="1" step="1"></div><div><label for="random-max">Maximum</label><input id="random-max" type="number" value="100" step="1"></div></div><button class="tool-button" id="random-pick" type="button">Pick a number</button><p class="tool-result featured-result" id="tool-result" role="status"></p><p class="tool-status" id="tool-status" role="status"></p>`
  },
  "countdown-timer": {
    title: "Countdown Timer",
    description: "Set a countdown and get an alert when the time is up.",
    markup: `<div class="field-pair"><div><label for="timer-minutes">Minutes</label><input id="timer-minutes" type="number" min="0" max="999" value="1"></div><div><label for="timer-seconds">Seconds</label><input id="timer-seconds" type="number" min="0" max="59" value="0"></div></div><output class="timer-display" id="timer-display">01:00</output><div class="button-row"><button class="tool-button" id="timer-start" type="button">Start</button><button class="tool-button secondary" id="timer-pause" type="button" disabled>Pause</button><button class="tool-button secondary" id="timer-reset" type="button">Reset</button></div><p class="tool-status" id="tool-status" role="status"></p>`
  },
  "url-encoder": {
    title: "URL Encoder / Decoder",
    description: "Encode URL components or decode percent-encoded text.",
    markup: `<label for="url-input">Text or URL component</label><textarea id="url-input" placeholder="Type or paste text here..."></textarea><div class="button-row"><button class="tool-button" id="url-encode" type="button">Encode</button><button class="tool-button secondary" id="url-decode" type="button">Decode</button></div><p class="tool-status" id="tool-status" role="status"></p>`
  },
  "pdf-merge": {
    title: "PDF Merger",
    description: "Combine PDF files into one document. Files are processed locally in your browser.",
    markup: `<label for="pdf-files">Choose two or more PDF files</label><input id="pdf-files" type="file" accept="application/pdf,.pdf" multiple><button class="tool-button" id="pdf-merge" type="button">Merge PDFs</button><p class="tool-status" id="tool-status" role="status"></p><a class="download-link" id="pdf-download" hidden>Download merged PDF</a>`
  }
};

const unitOptions = {
  length: { meter: 1, kilometer: 1000, centimeter: 0.01, millimeter: 0.001, mile: 1609.344, yard: 0.9144, foot: 0.3048, inch: 0.0254 },
  weight: { kilogram: 1, gram: 0.001, milligram: 0.000001, pound: 0.45359237, ounce: 0.028349523125 },
  time: { second: 1, minute: 60, hour: 3600, day: 86400 }
};

const parameters = new URLSearchParams(window.location.search);
const selectedTool = parameters.get("tool");
const definition = toolDefinitions[selectedTool];
const title = document.getElementById("tool-title");
const panel = document.getElementById("tool-panel");

if (definition) {
  document.title = `${definition.title} | Tool Hub`;
  title.textContent = definition.title;
  document.querySelector(".page-heading .eyebrow").textContent = definition.description;
  panel.innerHTML = definition.markup;
  initializeTool(selectedTool);
} else {
  title.textContent = "Tool not found";
  panel.textContent = "This tool could not be found. Return to the home page to choose another tool.";
}

function showStatus(message, isError = false) {
  const status = document.getElementById("tool-status");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-error", isError);
}

function readNumber(id) {
  const input = document.getElementById(id);
  const value = Number(input.value);
  if (!input.value.trim() || !Number.isFinite(value)) throw new Error("Please enter a valid number.");
  return value;
}

function initializeTool(tool) {
  switch (tool) {
    case "qr-generator":
      document.getElementById("qr-generate").addEventListener("click", () => {
        const value = document.getElementById("qr-value").value.trim();
        const output = document.getElementById("qr-output");
        output.replaceChildren();
        if (!value) return showStatus("Enter some text or a URL first.", true);
        if (typeof QRCode === "undefined") return showStatus("QR code library did not load. Check your internet connection and reload.", true);
        try {
          new QRCode(output, { text: value, width: 220, height: 220, correctLevel: QRCode.CorrectLevel.M });
          showStatus("QR code created. Scan it with your camera.");
        } catch (error) {
          showStatus(`Could not create QR code: ${error.message}`, true);
        }
      });
      break;
    case "gst-calculator":
      document.getElementById("gst-calculate").addEventListener("click", () => {
        try {
          const amount = readNumber("gst-amount");
          const rate = readNumber("gst-rate");
          if (amount < 0) throw new Error("Amount cannot be negative.");
          const factor = rate / 100;
          const inclusive = document.getElementById("gst-mode").value === "inclusive";
          const base = inclusive ? amount / (1 + factor) : amount;
          const tax = inclusive ? amount - base : amount * factor;
          const total = inclusive ? amount : amount + tax;
          document.getElementById("tool-result").textContent = `Taxable amount: ₹${base.toFixed(2)} · GST: ₹${tax.toFixed(2)} · Total: ₹${total.toFixed(2)}`;
        } catch (error) { document.getElementById("tool-result").textContent = error.message; }
      });
      break;
    case "percentage-calculator":
      document.getElementById("percent-calculate").addEventListener("click", () => {
        try {
          const percent = readNumber("percent-value");
          const amount = readNumber("percent-amount");
          document.getElementById("tool-result").textContent = `${percent}% of ${amount} = ${(percent * amount / 100).toLocaleString(undefined, { maximumFractionDigits: 6 })}`;
        } catch (error) { document.getElementById("tool-result").textContent = error.message; }
      });
      break;
    case "bmi-calculator":
      document.getElementById("bmi-calculate").addEventListener("click", () => {
        try {
          const weight = readNumber("bmi-weight");
          const height = readNumber("bmi-height");
          if (weight <= 0 || height <= 0) throw new Error("Weight and height must be greater than zero.");
          const bmi = weight / ((height / 100) ** 2);
          const category = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Healthy range" : bmi < 30 ? "Overweight" : "Obesity range";
          document.getElementById("tool-result").textContent = `Your BMI is ${bmi.toFixed(1)} — ${category}`;
        } catch (error) { document.getElementById("tool-result").textContent = error.message; }
      });
      break;
    case "text-case-converter": {
      const input = document.getElementById("case-input");
      document.querySelectorAll("[data-case]").forEach(button => button.addEventListener("click", () => {
        const mode = button.dataset.case;
        if (mode === "upper") input.value = input.value.toLocaleUpperCase();
        if (mode === "lower") input.value = input.value.toLocaleLowerCase();
        if (mode === "title") input.value = input.value.toLocaleLowerCase().replace(/(^|[\s([{])(\p{L})/gu, (match, prefix, letter) => prefix + letter.toLocaleUpperCase());
        if (mode === "sentence") input.value = input.value.toLocaleLowerCase().replace(/(^\s*\p{L}|[.!?]\s+\p{L})/gu, match => match.toLocaleUpperCase());
        showStatus(`${button.textContent} applied.`);
      }));
      break;
    }
    case "json-formatter": {
      const input = document.getElementById("json-input");
      const convert = spacing => {
        try {
          input.value = JSON.stringify(JSON.parse(input.value), null, spacing);
          showStatus(spacing ? "JSON formatted successfully." : "JSON minified successfully.");
        } catch (error) { showStatus(`Invalid JSON: ${error.message}`, true); }
      };
      document.getElementById("json-format").addEventListener("click", () => convert(2));
      document.getElementById("json-minify").addEventListener("click", () => convert(0));
      break;
    }
    case "base64-converter": {
      const input = document.getElementById("base64-input");
      document.getElementById("base64-encode").addEventListener("click", () => {
        try {
          input.value = btoa(Array.from(new TextEncoder().encode(input.value), byte => String.fromCharCode(byte)).join(""));
          showStatus("Text encoded as Base64.");
        } catch (error) { showStatus(`Could not encode text: ${error.message}`, true); }
      });
      document.getElementById("base64-decode").addEventListener("click", () => {
        try {
          const binary = atob(input.value.trim());
          input.value = new TextDecoder("utf-8", { fatal: true }).decode(Uint8Array.from(binary, char => char.charCodeAt(0)));
          showStatus("Base64 decoded successfully.");
        } catch (error) { showStatus(`Invalid Base64 or UTF-8 input: ${error.message}`, true); }
      });
      break;
    }
    case "unit-converter":
      initializeUnitConverter();
      break;
    case "color-picker":
      initializeColorPicker();
      break;
    case "image-compressor":
    case "image-resizer":
      initializeImageTool(tool);
      break;
    case "lorem-ipsum":
      document.getElementById("lorem-generate").addEventListener("click", () => {
        const count = Number(document.getElementById("lorem-count").value);
        if (!Number.isInteger(count) || count < 1 || count > 20) return showStatus("Choose between 1 and 20 paragraphs.", true);
        const sentences = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."];
        document.getElementById("lorem-output").value = Array.from({ length: count }, (_, paragraph) => Array.from({ length: 3 + paragraph % 3 }, (_, sentence) => sentences[(paragraph + sentence) % sentences.length]).join(" ")).join("\n\n");
      });
      break;
    case "random-number":
      document.getElementById("random-pick").addEventListener("click", () => {
        try {
          const min = readNumber("random-min");
          const max = readNumber("random-max");
          if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max) || max < min) throw new Error("Enter whole numbers with a maximum at least as large as the minimum.");
          const range = max - min + 1;
          if (!Number.isSafeInteger(range) || range <= 0) throw new Error("The requested range is too large.");
          const cutoff = Math.floor(4294967296 / range) * range;
          const bytes = new Uint32Array(1);
          let random;
          do { crypto.getRandomValues(bytes); random = bytes[0]; } while (random >= cutoff);
          document.getElementById("tool-result").textContent = String(min + (random % range));
          showStatus(`Random number between ${min} and ${max}.`);
        } catch (error) { showStatus(error.message, true); }
      });
      break;
    case "countdown-timer":
      initializeCountdown();
      break;
    case "url-encoder": {
      const input = document.getElementById("url-input");
      document.getElementById("url-encode").addEventListener("click", () => {
        input.value = encodeURIComponent(input.value);
        showStatus("URL component encoded.");
      });
      document.getElementById("url-decode").addEventListener("click", () => {
        try {
          input.value = decodeURIComponent(input.value);
          showStatus("URL component decoded.");
        } catch (error) { showStatus(`Could not decode the input: ${error.message}`, true); }
      });
      break;
    }
    case "pdf-merge":
      document.getElementById("pdf-merge").addEventListener("click", mergePdfs);
      break;
  }
}

function initializeUnitConverter() {
  const category = document.getElementById("unit-category");
  const from = document.getElementById("unit-from");
  const to = document.getElementById("unit-to");
  const populate = () => {
    const units = category.value === "temperature" ? ["Celsius", "Fahrenheit", "Kelvin"] : Object.keys(unitOptions[category.value]);
    from.replaceChildren(...units.map(unit => new Option(unit, unit)));
    to.replaceChildren(...units.map(unit => new Option(unit, unit)));
    if (units.length > 1) to.selectedIndex = 1;
  };
  category.addEventListener("change", populate);
  populate();
  document.getElementById("unit-convert").addEventListener("click", () => {
    try {
      const value = readNumber("unit-value");
      let result;
      if (category.value === "temperature") {
        const celsius = from.value === "Celsius" ? value : from.value === "Fahrenheit" ? (value - 32) * 5 / 9 : value - 273.15;
        result = to.value === "Celsius" ? celsius : to.value === "Fahrenheit" ? celsius * 9 / 5 + 32 : celsius + 273.15;
      } else {
        result = value * unitOptions[category.value][from.value] / unitOptions[category.value][to.value];
      }
      document.getElementById("tool-result").textContent = `${value} ${from.value} = ${Number(result.toPrecision(10))} ${to.value}`;
    } catch (error) { document.getElementById("tool-result").textContent = error.message; }
  });
}

function initializeColorPicker() {
  const input = document.getElementById("color-value");
  const preview = document.getElementById("color-preview");
  const update = () => {
    const hex = input.value;
    const red = parseInt(hex.slice(1, 3), 16);
    const green = parseInt(hex.slice(3, 5), 16);
    const blue = parseInt(hex.slice(5, 7), 16);
    const max = Math.max(red, green, blue) / 255;
    const min = Math.min(red, green, blue) / 255;
    const delta = max - min;
    const lightness = (max + min) / 2;
    let hue = 0;
    let saturation = 0;
    if (delta) {
      saturation = delta / (1 - Math.abs(2 * lightness - 1));
      if (max === red / 255) hue = ((green - blue) / 255 / delta) % 6;
      else if (max === green / 255) hue = (blue - red) / 255 / delta + 2;
      else hue = (red - green) / 255 / delta + 4;
      hue = (hue * 60 + 360) % 360;
    }
    document.getElementById("color-hex").textContent = hex.toUpperCase();
    document.getElementById("color-rgb").textContent = `${red}, ${green}, ${blue}`;
    document.getElementById("color-hsl").textContent = `${Math.round(hue)}°, ${Math.round(saturation * 100)}%, ${Math.round(lightness * 100)}%`;
    preview.style.backgroundColor = hex;
  };
  input.addEventListener("input", update);
  update();
  document.getElementById("color-copy").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(input.value.toUpperCase());
      showStatus("HEX color copied.");
    } catch (error) { showStatus(`Could not copy color: ${error.message}`, true); }
  });
}

function initializeImageTool(tool) {
  const fileInput = document.getElementById("image-file");
  const download = document.getElementById("image-download");
  if (tool === "image-compressor") {
    const quality = document.getElementById("image-quality");
    quality.addEventListener("input", () => { document.getElementById("quality-value").value = `${quality.value}%`; });
  }
  document.getElementById("image-process").addEventListener("click", async () => {
    const file = fileInput.files[0];
    if (!file) return showStatus("Choose an image file first.", true);
    if (!file.type.startsWith("image/")) return showStatus("The selected file is not a supported image.", true);
    try {
      const image = await createImageBitmap(file);
      let width = image.width;
      let height = image.height;
      if (tool === "image-resizer") {
        width = Number(document.getElementById("resize-width").value);
        height = Number(document.getElementById("resize-height").value);
        if (!Number.isInteger(width) || !Number.isInteger(height) || width < 1 || height < 1 || width > 8000 || height > 8000) throw new Error("Width and height must be whole numbers from 1 to 8000.");
        if (document.getElementById("resize-ratio").checked) {
          const ratio = image.width / image.height;
          if (width / height > ratio) width = Math.round(height * ratio);
          else height = Math.round(width / ratio);
        }
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Your browser could not create an image canvas.");
      context.drawImage(image, 0, 0, width, height);
      image.close();
      const mimeType = tool === "image-compressor" ? "image/jpeg" : (file.type === "image/png" ? "image/png" : "image/jpeg");
      const qualityValue = tool === "image-compressor" ? Number(document.getElementById("image-quality").value) / 100 : 0.92;
      const blob = await new Promise(resolve => canvas.toBlob(resolve, mimeType, qualityValue));
      if (!blob) throw new Error("The browser could not export this image.");
      if (download.dataset.url) URL.revokeObjectURL(download.dataset.url);
      const objectUrl = URL.createObjectURL(blob);
      download.href = objectUrl;
      download.download = `${file.name.replace(/\.[^.]+$/, "")}-${tool === "image-compressor" ? "compressed" : "resized"}.${mimeType === "image/png" ? "png" : "jpg"}`;
      download.dataset.url = objectUrl;
      download.hidden = false;
      const result = document.getElementById("tool-result");
      if (result) result.textContent = `Original: ${(file.size / 1024).toFixed(1)} KB · Result: ${(blob.size / 1024).toFixed(1)} KB · ${width} × ${height} px`;
      showStatus("Image is ready to download.");
    } catch (error) { showStatus(`Could not process image: ${error.message}`, true); }
  });
}

function initializeCountdown() {
  const minutes = document.getElementById("timer-minutes");
  const seconds = document.getElementById("timer-seconds");
  const display = document.getElementById("timer-display");
  const start = document.getElementById("timer-start");
  const pause = document.getElementById("timer-pause");
  let remaining = 60;
  let interval = null;
  const format = total => `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
  const readDuration = () => {
    const min = Number(minutes.value);
    const sec = Number(seconds.value);
    if (!Number.isInteger(min) || !Number.isInteger(sec) || min < 0 || min > 999 || sec < 0 || sec > 59 || min + sec === 0) throw new Error("Enter a duration greater than zero.");
    return min * 60 + sec;
  };
  const stop = () => { window.clearInterval(interval); interval = null; start.disabled = false; pause.disabled = true; };
  const reset = () => {
    stop();
    try { remaining = readDuration(); }
    catch (error) { remaining = 0; showStatus(error.message, true); }
    display.value = format(remaining);
  };
  minutes.addEventListener("input", reset);
  seconds.addEventListener("input", reset);
  document.getElementById("timer-reset").addEventListener("click", reset);
  start.addEventListener("click", () => {
    if (interval) return;
    if (remaining <= 0) {
      try { remaining = readDuration(); } catch (error) { return showStatus(error.message, true); }
    }
    start.disabled = true;
    pause.disabled = false;
    showStatus("Countdown running.");
    interval = window.setInterval(() => {
      remaining -= 1;
      display.value = format(remaining);
      if (remaining <= 0) {
        stop();
        showStatus("Time is up!");
      }
    }, 1000);
  });
  pause.addEventListener("click", () => { stop(); showStatus("Countdown paused."); });
  reset();
}

async function mergePdfs() {
  const files = Array.from(document.getElementById("pdf-files").files);
  const download = document.getElementById("pdf-download");
  download.hidden = true;
  if (files.length < 2) return showStatus("Choose at least two PDF files to merge.", true);
  if (files.some(file => file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf"))) return showStatus("Only PDF files can be merged.", true);
  if (!window.PDFLib) return showStatus("PDF library did not load. Check your internet connection and reload.", true);
  try {
    const merged = await window.PDFLib.PDFDocument.create();
    for (const file of files) {
      const source = await window.PDFLib.PDFDocument.load(await file.arrayBuffer());
      const pages = await merged.copyPages(source, source.getPageIndices());
      pages.forEach(page => merged.addPage(page));
    }
    const bytes = await merged.save();
    if (download.dataset.url) URL.revokeObjectURL(download.dataset.url);
    const objectUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
    download.href = objectUrl;
    download.download = "merged.pdf";
    download.dataset.url = objectUrl;
    download.hidden = false;
    showStatus(`Merged ${files.length} PDFs. Download is ready.`);
  } catch (error) { showStatus(`Could not merge PDFs: ${error.message}`, true); }
}
