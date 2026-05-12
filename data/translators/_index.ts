import { Translator } from "@/lib/types";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const alpha = "abcdefghijklmnopqrstuvwxyz";
const ALPHA = alpha.toUpperCase();

function charShift(n: number): Record<string, string> {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[alpha[i]] = alpha[(i + n) % 26];
    map[ALPHA[i]] = ALPHA[(i + n) % 26];
  }
  return map;
}

// ─── TEXT STYLE ───────────────────────────────────────────────────────────────

const fancyText: Translator = {
  slug: "fancy-text-generator",
  title: "Fancy Text Generator",
  description: "Convert plain text into fancy Unicode fonts instantly. Perfect for Instagram bios, Twitter, Discord, and more.",
  category: "text-style", emoji: "✨", type: "charmap", popular: true,
  rules: {
    a:"𝓪",b:"𝓫",c:"𝓬",d:"𝓭",e:"𝓮",f:"𝓯",g:"𝓰",h:"𝓱",i:"𝓲",j:"𝓳",k:"𝓴",l:"𝓵",m:"𝓶",
    n:"𝓷",o:"𝓸",p:"𝓹",q:"𝓺",r:"𝓻",s:"𝓼",t:"𝓽",u:"𝓾",v:"𝓿",w:"𝔀",x:"𝔁",y:"𝔂",z:"𝔃",
    A:"𝓐",B:"𝓑",C:"𝓒",D:"𝓓",E:"𝓔",F:"𝓕",G:"𝓖",H:"𝓗",I:"𝓘",J:"𝓙",K:"𝓚",L:"𝓛",M:"𝓜",
    N:"𝓝",O:"𝓞",P:"𝓟",Q:"𝓠",R:"𝓡",S:"𝓢",T:"𝓣",U:"𝓤",V:"𝓥",W:"𝓦",X:"𝓧",Y:"𝓨",Z:"𝓩",
  },
  faqs: [
    { q:"What is a fancy text generator?", a:"It converts normal text into stylized Unicode characters that look like different fonts." },
    { q:"Can I use fancy text on Instagram?", a:"Yes! Fancy text uses Unicode characters which work on Instagram bios, captions, and comments." },
    { q:"Is fancy text generator free?", a:"Yes, completely free with no signup required." },
  ],
};

const cursiveText: Translator = {
  slug: "cursive-text-generator",
  title: "Cursive Text Generator",
  description: "Turn your text into beautiful cursive writing using Unicode. Works on all social media platforms.",
  category: "text-style", emoji: "🖊️", type: "charmap", popular: true,
  rules: {
    a:"𝒶",b:"𝒷",c:"𝒸",d:"𝒹",e:"𝑒",f:"𝒻",g:"𝑔",h:"𝒽",i:"𝒾",j:"𝒿",k:"𝓀",l:"𝓁",m:"𝓂",
    n:"𝓃",o:"𝑜",p:"𝓅",q:"𝓆",r:"𝓇",s:"𝓈",t:"𝓉",u:"𝓊",v:"𝓋",w:"𝓌",x:"𝓍",y:"𝓎",z:"𝓏",
    A:"𝒜",B:"ℬ",C:"𝒞",D:"𝒟",E:"ℰ",F:"ℱ",G:"𝒢",H:"ℋ",I:"ℐ",J:"𝒥",K:"𝒦",L:"ℒ",M:"ℳ",
    N:"𝒩",O:"𝒪",P:"𝒫",Q:"𝒬",R:"ℛ",S:"𝒮",T:"𝒯",U:"𝒰",V:"𝒱",W:"𝒲",X:"𝒳",Y:"𝒴",Z:"𝒵",
  },
  faqs: [
    { q:"How do I type in cursive online?", a:"Type your text and it instantly converts to cursive Unicode characters." },
    { q:"Does cursive text work on WhatsApp?", a:"Yes, it works on WhatsApp, Instagram, Facebook, and most other platforms." },
  ],
};

const tinyText: Translator = {
  slug: "tiny-text-generator",
  title: "Tiny Text Generator",
  description: "Make your text super tiny using Unicode superscript characters. Great for social media and fun messages.",
  category: "text-style", emoji: "🔬", type: "charmap", popular: true,
  rules: {
    a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ⁱ",j:"ʲ",k:"ᵏ",l:"ˡ",m:"ᵐ",
    n:"ⁿ",o:"ᵒ",p:"ᵖ",q:"q",r:"ʳ",s:"ˢ",t:"ᵗ",u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ",
  },
  faqs: [{ q:"What is tiny text?", a:"Tiny text uses Unicode superscript characters to make your text appear very small." }],
};

const vaporwaveText: Translator = {
  slug: "vaporwave-text-generator",
  title: "Vaporwave Text Generator",
  description: "Convert text to aesthetic ｆｕｌｌｗｉｄｔｈ vaporwave style. Perfect for that retro aesthetic look.",
  category: "text-style", emoji: "🌊", type: "charmap", popular: true,
  rules: Object.fromEntries(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 "
      .split("").map(c => [c, c === " " ? "　" : String.fromCharCode(c.charCodeAt(0) + 65248)])
  ),
};

const boldText: Translator = {
  slug: "bold-text-generator",
  title: "Bold Text Generator",
  description: "Generate bold Unicode text for Instagram, Twitter, Facebook, and other social media platforms.",
  category: "text-style", emoji: "𝐁", type: "charmap", popular: true,
  rules: {
    a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",i:"𝐢",j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",
    n:"𝐧",o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",s:"𝐬",t:"𝐭",u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳",
    A:"𝐀",B:"𝐁",C:"𝐂",D:"𝐃",E:"𝐄",F:"𝐅",G:"𝐆",H:"𝐇",I:"𝐈",J:"𝐉",K:"𝐊",L:"𝐋",M:"𝐌",
    N:"𝐍",O:"𝐎",P:"𝐏",Q:"𝐐",R:"𝐑",S:"𝐒",T:"𝐓",U:"𝐔",V:"𝐕",W:"𝐖",X:"𝐗",Y:"𝐘",Z:"𝐙",
  },
};

const italicText: Translator = {
  slug: "italic-text-generator",
  title: "Italic Text Generator",
  description: "Generate italic Unicode text that works on social media, Discord, and messaging apps.",
  category: "text-style", emoji: "𝘐", type: "charmap", popular: false,
  rules: {
    a:"𝘢",b:"𝘣",c:"𝘤",d:"𝘥",e:"𝘦",f:"𝘧",g:"𝘨",h:"𝘩",i:"𝘪",j:"𝘫",k:"𝘬",l:"𝘭",m:"𝘮",
    n:"𝘯",o:"𝘰",p:"𝘱",q:"𝘲",r:"𝘳",s:"𝘴",t:"𝘵",u:"𝘶",v:"𝘷",w:"𝘸",x:"𝘹",y:"𝘺",z:"𝘻",
    A:"𝘈",B:"𝘉",C:"𝘊",D:"𝘋",E:"𝘌",F:"𝘍",G:"𝘎",H:"𝘏",I:"𝘐",J:"𝘑",K:"𝘒",L:"𝘓",M:"𝘔",
    N:"𝘕",O:"𝘖",P:"𝘗",Q:"𝘘",R:"𝘙",S:"𝘚",T:"𝘛",U:"𝘜",V:"𝘝",W:"𝘞",X:"𝘟",Y:"𝘠",Z:"𝘡",
  },
};

const doubleStruck: Translator = {
  slug: "double-struck-text",
  title: "Double Struck Text Generator",
  description: "Convert text into double-struck (blackboard bold) Unicode characters used in math and stylish posts.",
  category: "text-style", emoji: "𝔻", type: "charmap", popular: false,
  rules: {
    a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",j:"𝕛",k:"𝕜",l:"𝕝",m:"𝕞",
    n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫",
    A:"𝔸",B:"𝔹",C:"ℂ",D:"𝔻",E:"𝔼",F:"𝔽",G:"𝔾",H:"ℍ",I:"𝕀",J:"𝕁",K:"𝕂",L:"𝕃",M:"𝕄",
    N:"ℕ",O:"𝕆",P:"ℙ",Q:"ℚ",R:"ℝ",S:"𝕊",T:"𝕋",U:"𝕌",V:"𝕍",W:"𝕎",X:"𝕏",Y:"𝕐",Z:"ℤ",
  },
};

const frakturText: Translator = {
  slug: "fraktur-text-generator",
  title: "Fraktur Text Generator",
  description: "Convert text into Gothic Fraktur (Old German) script. Great for tattoo ideas, medieval aesthetics.",
  category: "text-style", emoji: "𝔉", type: "charmap", popular: false,
  rules: {
    a:"𝔞",b:"𝔟",c:"𝔠",d:"𝔡",e:"𝔢",f:"𝔣",g:"𝔤",h:"𝔥",i:"𝔦",j:"𝔧",k:"𝔨",l:"𝔩",m:"𝔪",
    n:"𝔫",o:"𝔬",p:"𝔭",q:"𝔮",r:"𝔯",s:"𝔰",t:"𝔱",u:"𝔲",v:"𝔳",w:"𝔴",x:"𝔵",y:"𝔶",z:"𝔷",
    A:"𝔄",B:"𝔅",C:"ℭ",D:"𝔇",E:"𝔈",F:"𝔉",G:"𝔊",H:"ℌ",I:"ℑ",J:"𝔍",K:"𝔎",L:"𝔏",M:"𝔐",
    N:"𝔑",O:"𝔒",P:"𝔓",Q:"𝔔",R:"ℜ",S:"𝔖",T:"𝔗",U:"𝔘",V:"𝔙",W:"𝔚",X:"𝔛",Y:"𝔜",Z:"ℨ",
  },
};

const strikethroughText: Translator = {
  slug: "strikethrough-text-generator",
  title: "Strikethrough Text Generator",
  description: "Add strikethrough to your text using Unicode combining characters. Works on Twitter, Facebook, Discord.",
  category: "text-style", emoji: "S̶", type: "function", popular: false,
  fn: (input) => input.split("").map(c => c + "\u0336").join(""),
};

const underlineText: Translator = {
  slug: "underline-text-generator",
  title: "Underline Text Generator",
  description: "Underline any text using Unicode combining characters. Works on social media and messaging apps.",
  category: "text-style", emoji: "U̲", type: "function", popular: false,
  fn: (input) => input.split("").map(c => c + "\u0332").join(""),
};

const bubbleText: Translator = {
  slug: "bubble-text-generator",
  title: "Bubble Text Generator",
  description: "Convert text into circled bubble letters ⓐⓑⓒ. Fun for social media posts and comments.",
  category: "text-style", emoji: "Ⓑ", type: "charmap", popular: true,
  rules: {
    a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",j:"ⓙ",k:"ⓚ",l:"ⓛ",m:"ⓜ",
    n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ",
    A:"Ⓐ",B:"Ⓑ",C:"Ⓒ",D:"Ⓓ",E:"Ⓔ",F:"Ⓕ",G:"Ⓖ",H:"Ⓗ",I:"Ⓘ",J:"Ⓙ",K:"Ⓚ",L:"Ⓛ",M:"Ⓜ",
    N:"Ⓝ",O:"Ⓞ",P:"Ⓟ",Q:"Ⓠ",R:"Ⓡ",S:"Ⓢ",T:"Ⓣ",U:"Ⓤ",V:"Ⓥ",W:"Ⓦ",X:"Ⓧ",Y:"Ⓨ",Z:"Ⓩ",
    "0":"⓪","1":"①","2":"②","3":"③","4":"④","5":"⑤","6":"⑥","7":"⑦","8":"⑧","9":"⑨",
  },
};

const squaredText: Translator = {
  slug: "squared-text-generator",
  title: "Squared Text Generator",
  description: "Convert your text into squared box letters 🅰🅱🅲. Bold squared Unicode letters for stylish posts.",
  category: "text-style", emoji: "🅂", type: "charmap", popular: false,
  rules: {
    a:"🅐",b:"🅑",c:"🅒",d:"🅓",e:"🅔",f:"🅕",g:"🅖",h:"🅗",i:"🅘",j:"🅙",k:"🅚",l:"🅛",m:"🅜",
    n:"🅝",o:"🅞",p:"🅟",q:"🅠",r:"🅡",s:"🅢",t:"🅣",u:"🅤",v:"🅥",w:"🅦",x:"🅧",y:"🅨",z:"🅩",
  },
};

const wideText: Translator = {
  slug: "wide-text-generator",
  title: "Wide Text Generator",
  description: "Stretch your text into wide Unicode fullwidth characters. The original aesthetic text style.",
  category: "text-style", emoji: "Ｗ", type: "charmap", popular: false,
  rules: Object.fromEntries(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      .split("").map(c => [c, String.fromCharCode(c.charCodeAt(0) + 65248)])
  ),
};

const mirrorText: Translator = {
  slug: "mirror-text-generator",
  title: "Mirror Text Generator",
  description: "Flip your text horizontally to create mirrored backwards text. Fun for social media and puzzles.",
  category: "text-style", emoji: "🪞", type: "function", popular: true,
  fn: (input) => {
    const map: Record<string, string> = {
      a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",k:"ʞ",l:"l",m:"ɯ",
      n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"s",t:"ʇ",u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"z",
      A:"∀",B:"𐐒",C:"Ɔ",D:"ᗡ",E:"Ǝ",F:"Ⅎ",G:"⅁",H:"H",I:"I",J:"ſ",K:"ʞ",L:"˥",M:"W",
      N:"N",O:"O",P:"Ԁ",Q:"Q",R:"ɹ",S:"S",T:"┴",U:"∩",V:"Λ",W:"M",X:"X",Y:"⅄",Z:"Z",
    };
    return input.split("").reverse().map(c => map[c] ?? c).join("");
  },
  faqs: [{ q:"What is mirror text?", a:"Mirror text flips characters horizontally and reverses order to simulate a mirror reflection." }],
};

// ─── CIPHER & CODES ───────────────────────────────────────────────────────────

const morseCode: Translator = {
  slug: "morse-code-translator",
  title: "Morse Code Translator",
  description: "Translate English text to Morse code and back instantly. Learn Morse code with our free online translator.",
  category: "cipher", emoji: "📡", type: "function", popular: true,
  fn: (input) => {
    const map: Record<string, string> = {
      a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",
      k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",
      u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--..",
      "0":"-----","1":".----","2":"..---","3":"...--","4":"....-",
      "5":".....","6":"-....","7":"--...","8":"---..","9":"----.",
      " ":"/"
    };
    return input.toLowerCase().split("").map(c => map[c] ?? c).join(" ");
  },
  faqs: [
    { q:"How do I translate text to Morse code?", a:"Type your text in the box and it instantly converts to Morse code dots and dashes." },
    { q:"What does SOS look like in Morse code?", a:"SOS in Morse code is: ... --- ..." },
  ],
};

const binaryTranslator: Translator = {
  slug: "english-to-binary",
  title: "English to Binary Translator",
  description: "Convert text to binary code instantly. Translate any English text into 0s and 1s with our free binary translator.",
  category: "cipher", emoji: "💻", type: "function", popular: true,
  fn: (input) => input.split("").map(c => c.charCodeAt(0).toString(2).padStart(8,"0")).join(" "),
  faqs: [
    { q:"How do I convert text to binary?", a:"Each letter is converted to its ASCII value, then written in base-2 (binary)." },
    { q:"What is 'Hello' in binary?", a:"01001000 01100101 01101100 01101100 01101111" },
  ],
};

const hexTranslator: Translator = {
  slug: "text-to-hex",
  title: "Text to Hex Converter",
  description: "Convert any text into hexadecimal encoding. Useful for programmers, developers, and learning ASCII.",
  category: "cipher", emoji: "🔢", type: "function", popular: false,
  fn: (input) => input.split("").map(c => c.charCodeAt(0).toString(16).padStart(2,"0")).join(" "),
};

const base64Translator: Translator = {
  slug: "base64-encoder",
  title: "Base64 Encoder",
  description: "Encode any text to Base64 format instantly. Commonly used in web development and data encoding.",
  category: "cipher", emoji: "🔒", type: "function", popular: false,
  fn: (input) => { try { return btoa(input); } catch { return "Invalid input for Base64 encoding"; } },
};

const rot13: Translator = {
  slug: "rot13-translator",
  title: "ROT13 Translator",
  description: "Encode and decode text using ROT13 cipher — rotate each letter by 13 places. Same key encodes and decodes.",
  category: "cipher", emoji: "🔁", type: "charmap", popular: false,
  rules: charShift(13),
  faqs: [{ q:"What is ROT13?", a:"ROT13 shifts each letter 13 positions in the alphabet. Applying it twice returns the original text." }],
};

const caesar: Translator = {
  slug: "caesar-cipher",
  title: "Caesar Cipher (ROT3)",
  description: "Encode text using the Caesar cipher — each letter is shifted 3 places forward, as used by Julius Caesar.",
  category: "cipher", emoji: "🏛️", type: "charmap", popular: true,
  rules: charShift(3),
  faqs: [{ q:"What is the Caesar cipher?", a:"The Caesar cipher shifts each letter by a fixed number. Julius Caesar used a shift of 3." }],
};

const backwardsText: Translator = {
  slug: "backwards-text-generator",
  title: "Backwards Text Generator",
  description: "Reverse your text instantly. Type any text and get it backwards — great for fun messages and puzzles.",
  category: "cipher", emoji: "🔄", type: "function", popular: true,
  fn: (input) => input.split("").reverse().join(""),
  faqs: [{ q:"How do I write backwards text?", a:"Type your text above and our tool instantly reverses every character." }],
};

const upsideDown: Translator = {
  slug: "upside-down-text",
  title: "Upside Down Text Generator",
  description: "Flip your text upside down using Unicode characters. Confuse your friends with flipped text!",
  category: "cipher", emoji: "🙃", type: "function", popular: true,
  fn: (input) => {
    const map: Record<string, string> = {
      a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",k:"ʞ",l:"l",m:"ɯ",
      n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"s",t:"ʇ",u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"z",
      A:"∀",B:"𐐒",C:"Ɔ",D:"ᗡ",E:"Ǝ",F:"Ⅎ",H:"H",I:"I",J:"ɾ",K:"ʞ",L:"˥",M:"W",
      N:"N",O:"O",P:"Ԁ",T:"┴",U:"∩",V:"Λ",W:"M",X:"X",Y:"⅄",Z:"Z",
      "1":"Ɩ","2":"ᄅ","3":"Ɛ","4":"ㄣ","5":"ϛ","6":"9","7":"ㄥ","8":"8","9":"6","0":"0",
      ".":"˙",",":"'","?":"¿","!":"¡","\"":"„","'":","," ":"　",
    };
    return input.split("").reverse().map(c => map[c] ?? c).join("");
  },
};

const wingdings: Translator = {
  slug: "wingdings-translator",
  title: "Wingdings Translator",
  description: "Convert text to Wingdings symbols. The classic Windows symbol font that turns letters into pictures.",
  category: "cipher", emoji: "✈", type: "charmap", popular: true,
  rules: {
    a:"✌",b:"👌",c:"👍",d:"👎",e:"☝",f:"👆",g:"👇",h:"☞",i:"☜",j:"✋",k:"🤚",l:"👋",m:"🖐",
    n:"✍",o:"✏",p:"✒",q:"✎",r:"📝",s:"🖊",t:"📖",u:"📚",v:"📰",w:"📋",x:"📌",y:"📍",z:"✂",
    A:"✌",B:"☯",C:"☮",D:"☠",E:"⚔",F:"🛡",G:"⚓",H:"⚜",I:"☸",J:"⚕",K:"⚖",L:"⚗",M:"⚙",
    N:"🔱",O:"☣",P:"☢",Q:"✡",R:"☪",S:"✝",T:"☦",U:"♈",V:"♉",W:"♊",X:"♋",Y:"♌",Z:"♍",
  },
};

const leet: Translator = {
  slug: "leet-speak-translator",
  title: "Leet Speak (1337) Translator",
  description: "Convert text to 1337 leet speak — the internet slang cipher that replaces letters with numbers and symbols.",
  category: "cipher", emoji: "1️⃣", type: "charmap", popular: true,
  rules: {
    a:"4",b:"8",c:"(",d:"D",e:"3",f:"F",g:"6",h:"H",i:"1",j:"J",k:"K",l:"1",m:"M",
    n:"N",o:"0",p:"P",q:"Q",r:"R",s:"5",t:"7",u:"U",v:"V",w:"W",x:"X",y:"Y",z:"2",
    A:"4",B:"8",C:"(",D:"D",E:"3",F:"F",G:"6",H:"H",I:"1",J:"J",K:"K",L:"1",M:"M",
    N:"N",O:"0",P:"P",Q:"Q",R:"R",S:"5",T:"7",U:"U",V:"V",W:"W",X:"X",Y:"Y",Z:"2",
  },
  faqs: [{ q:"What is leet speak?", a:"Leet speak (1337) is internet slang that replaces letters with visually similar numbers and symbols." }],
};

const reverseWords: Translator = {
  slug: "reverse-words-generator",
  title: "Reverse Words Generator",
  description: "Reverse the order of words in your text while keeping each word intact. Great for riddles.",
  category: "cipher", emoji: "↩️", type: "function", popular: false,
  fn: (input) => input.split(" ").reverse().join(" "),
};

const numberToWords: Translator = {
  slug: "numbers-to-words",
  title: "Numbers to Words Converter",
  description: "Convert numbers into their written word form. Useful for checks, formal writing, and documents.",
  category: "cipher", emoji: "🔢", type: "function", popular: true,
  fn: (input) => {
    const ones = ["","one","two","three","four","five","six","seven","eight","nine",
      "ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    const toWords = (n: number): string => {
      if (n === 0) return "zero";
      if (n < 20) return ones[n];
      if (n < 100) return tens[Math.floor(n/10)] + (n%10 ? "-"+ones[n%10] : "");
      if (n < 1000) return ones[Math.floor(n/100)]+" hundred"+(n%100?" "+toWords(n%100):"");
      if (n < 1000000) return toWords(Math.floor(n/1000))+" thousand"+(n%1000?" "+toWords(n%1000):"");
      return n.toString();
    };
    return input.replace(/\d+/g, m => toWords(parseInt(m)));
  },
  faqs: [{ q:"How do I convert numbers to words?", a:"Enter a number and our converter writes it out in word form automatically." }],
};

// ─── LANGUAGE ─────────────────────────────────────────────────────────────────

const pigLatin: Translator = {
  slug: "pig-latin-translator",
  title: "Pig Latin Translator",
  description: "Translate English to Pig Latin instantly. Move first consonant to the end and add 'ay'.",
  category: "language", emoji: "🐷", type: "function", popular: true,
  fn: (input) => {
    const vowels = "aeiou";
    return input.split(" ").map(word => {
      if (!word) return word;
      const lower = word.toLowerCase();
      if (vowels.includes(lower[0])) return word + "yay";
      let i = 0;
      while (i < word.length && !vowels.includes(lower[i])) i++;
      return word.slice(i) + word.slice(0, i) + "ay";
    }).join(" ");
  },
  faqs: [{ q:"What is Pig Latin?", a:"Pig Latin moves the first consonant cluster to the end of a word and adds 'ay'." }],
};

const oldEnglish: Translator = {
  slug: "old-english-translator",
  title: "Old English Translator",
  description: "Convert modern English text into Old English (Anglo-Saxon) style Gothic font using Unicode characters.",
  category: "language", emoji: "⚔️", type: "charmap", popular: true,
  rules: {
    a:"𝖆",b:"𝖇",c:"𝖈",d:"𝖉",e:"𝖊",f:"𝖋",g:"𝖌",h:"𝖍",i:"𝖎",j:"𝖏",k:"𝖐",l:"𝖑",m:"𝖒",
    n:"𝖓",o:"𝖔",p:"𝖕",q:"𝖖",r:"𝖗",s:"𝖘",t:"𝖙",u:"𝖚",v:"𝖛",w:"𝖜",x:"𝖝",y:"𝖞",z:"𝖟",
    A:"𝕬",B:"𝕭",C:"𝕮",D:"𝕯",E:"𝕰",F:"𝕱",G:"𝕲",H:"𝕳",I:"𝕴",J:"𝕵",K:"𝕶",L:"𝕷",M:"𝕸",
    N:"𝕹",O:"𝕺",P:"𝕻",Q:"𝕼",R:"𝕽",S:"𝕾",T:"𝕿",U:"𝖀",V:"𝖁",W:"𝖂",X:"𝖃",Y:"𝖄",Z:"𝖅",
  },
  faqs: [{ q:"What is Old English font?", a:"Old English font uses Gothic blackletter Unicode characters that mimic medieval manuscripts." }],
};

const shakespearean: Translator = {
  slug: "english-to-shakespearean",
  title: "Shakespearean Translator",
  description: "Translate modern English into Shakespearean Early Modern English. Speaketh like the Bard himself!",
  category: "language", emoji: "🎭", type: "wordmap", popular: true,
  rules: {
    you:"thou",your:"thy",yours:"thine",are:"art",have:"hast",has:"hath",will:"shalt",
    do:"dost",does:"doth",be:"be",am:"am",is:"is",was:"wast",were:"wert",
    yes:"aye",no:"nay",hello:"hail",goodbye:"fare thee well",
    please:"prithee",thanks:"grammercy",
    good:"good",bad:"ill",very:"most",really:"verily",
    what:"what",where:"whither",when:"when",why:"wherefore",how:"how",
    friend:"friend",enemy:"foe",king:"king",queen:"queen",
    happy:"merry",sad:"woeful",angry:"wroth",afraid:"afeared",
    know:"knowest",think:"thinkest",want:"desirest",need:"needest",
    come:"cometh",go:"goest",see:"seest",hear:"hearest",
    speak:"speaketh",say:"sayest",tell:"tellest",ask:"asketh",
    love:"love",heart:"heart",time:"time",day:"day",night:"night",
    life:"life",death:"death",world:"world",heaven:"heaven",earth:"earth",
    great:"great",little:"little",old:"aged",young:"young",
  },
};

const elvish: Translator = {
  slug: "elvish-translator",
  title: "Elvish (Tengwar) Translator",
  description: "Translate English text into Tolkien's Elvish Tengwar script style. Perfect for Lord of the Rings fans.",
  category: "language", emoji: "🧝", type: "charmap", popular: true,
  rules: {
    a:"ä",b:"ƀ",c:"ç",d:"ď",e:"ë",f:"f̈",g:"ġ",h:"ħ",i:"ï",j:"j̈",k:"ķ",l:"ļ",m:"m̈",
    n:"ñ",o:"ö",p:"ƥ",q:"q̈",r:"ŗ",s:"ş",t:"ţ",u:"ü",v:"v̈",w:"ŵ",x:"x̂",y:"ŷ",z:"ž",
  },
};

const hawaiian: Translator = {
  slug: "english-to-hawaiian",
  title: "English to Hawaiian Translator",
  description: "Translate common English words and phrases into Hawaiian. Learn basic Hawaiian vocabulary.",
  category: "language", emoji: "🌺", type: "wordmap", popular: false,
  rules: {
    hello:"aloha",goodbye:"aloha",love:"aloha",family:"ohana",
    sea:"kai",ocean:"moana",sky:"lani",land:"aina",mountain:"mauna",
    fish:"ia",bird:"manu",flower:"pua",tree:"laau",water:"wai",
    food:"ai",house:"hale",canoe:"waa",chief:"alii",king:"alii nui",
    white:"keokeo",black:"eleele",red:"ulaula",blue:"uliuli",green:"oluolu",
    good:"maikai",bad:"ino",big:"nui",small:"liilii",
    man:"kane",woman:"wahine",child:"keiki",friend:"hoaaloha",
    yes:"ae",no:"aole",thanks:"mahalo",please:"e oluolu",
    one:"ekahi",two:"elua",three:"ekolu",four:"eha",five:"elima",
  },
};

const pirate: Translator = {
  slug: "pirate-speak-translator",
  title: "Pirate Speak Translator",
  description: "Translate English to pirate speak. Arrr! Convert your text to talk like a swashbuckling pirate!",
  category: "language", emoji: "🏴‍☠️", type: "wordmap", popular: true,
  rules: {
    hello:"ahoy",hi:"ahoy",hey:"avast",goodbye:"fair winds",yes:"aye",no:"nay",
    you:"ye",your:"yer",my:"me",am:"be",is:"be",are:"be",
    the:"th'",friend:"matey",friends:"mateys",man:"landlubber",
    money:"doubloons",treasure:"plunder",ship:"vessel",sea:"briny deep",
    captain:"cap'n",boss:"cap'n",
    want:"be wantin'",going:"sailin'",looking:"scoutin'",find:"pillage",
    food:"grub",drink:"grog",beer:"grog",wine:"grog",water:"sea water",
    good:"fine as a mermaid",bad:"lower than Davy Jones",very:"mighty",
    understand:"savvy",know:"savvy",hurry:"make haste",go:"set sail",
    stop:"avast",help:"man overboard",fight:"clash cutlasses",
    angry:"in a foul wind",happy:"in high spirits",afraid:"lily-livered",
  },
};

const valspeak: Translator = {
  slug: "valley-girl-translator",
  title: "Valley Girl Translator",
  description: "Like, translate your text into totally radical Valley Girl speak. As if! Gag me with a spoon!",
  category: "language", emoji: "💅", type: "wordmap", popular: false,
  rules: {
    yes:"totally",no:"as if",okay:"okayyy",right:"like, totally",wrong:"as if!",
    very:"so totally",really:"like, for sure",definitely:"for sure for sure",
    good:"totally awesome",great:"like, amazeballs",bad:"like, so lame",awful:"gag me",
    pretty:"like, super cute",ugly:"like, totally not cute",
    hello:"oh em gee hi",goodbye:"byeeeee",thanks:"totes grateful",
    friend:"bestie",think:"like, think",know:"like, know",want:"like, totally want",
    love:"like, obsessed with",hate:"so totally over",
    school:"like, ugh school",work:"like, ugh work",
    party:"like, the most amazing party ever",
    said:"was like",says:"is like",
  },
};

// ─── MEME & FUN ───────────────────────────────────────────────────────────────

const yodaTranslator: Translator = {
  slug: "yoda-translator",
  title: "Yoda Translator",
  description: "Speak like Yoda you will. Translate English to Yoda-speak, hmm yes.",
  category: "meme", emoji: "🟢", type: "wordmap", popular: true,
  rules: {
    "i am":"am i","you are":"are you","he is":"is he","she is":"is she",
    "we are":"are we","they are":"are they","i will":"will i","you will":"will you",
    hello:"hello there",yes:"yes, hmm",no:"no, hmm",
    good:"good, this is",bad:"bad, this is",great:"great, this is",
  },
};

const spongebobMock: Translator = {
  slug: "spongebob-mocking-text",
  title: "Spongebob Mocking Text Generator",
  description: "Generate the alternating caps Spongebob mocking meme text. LiKe ThIs. Perfect for meme captions.",
  category: "meme", emoji: "🧽", type: "function", popular: true,
  fn: (input) => input.split("").map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join(""),
  faqs: [{ q:"What is Spongebob mocking text?", a:"It alternates uppercase and lowercase letters like 'LiKe ThIs', based on the Spongebob mocking meme." }],
};

const uwuTranslator: Translator = {
  slug: "uwu-translator",
  title: "UwU Text Translator",
  description: "Translate text into adorable UwU speak. The kawaii internet language loved by anime fans worldwide.",
  category: "meme", emoji: "🥺", type: "function", popular: true,
  fn: (input) => input
    .replace(/r|l/g,"w").replace(/R|L/g,"W")
    .replace(/n([aeiou])/g,"ny$1").replace(/N([aeiou])/g,"Ny$1")
    .replace(/ove/g,"uv")
    .replace(/th/g,"d").replace(/Th/g,"D")
    .replace(/!/g," uwu!").replace(/\?/g," owo?"),
  faqs: [
    { q:"What is UwU text?", a:"UwU is a kaomoji face used in internet culture. UwU speak replaces certain letters to sound cute and childlike." },
    { q:"What does UwU mean?", a:"UwU represents a cute, happy facial expression in anime and internet communities." },
  ],
};

const shrekTranslator: Translator = {
  slug: "shrek-translator",
  title: "Shrek Translator",
  description: "What are ye doing in me swamp?! Translate text into Shrek-speak. Ogres have LAYERS.",
  category: "meme", emoji: "🟩", type: "wordmap", popular: false,
  rules: {
    hello:"what are ye doing in me swamp",goodbye:"get out of me swamp",
    yes:"aye",no:"nay",good:"better out than in",bad:"like an onion",
    i:"this ogre",me:"this ogre",my:"this ogre's",
    love:"have layers for",hate:"want out of me swamp",
    home:"swamp",house:"swamp",place:"swamp",
    friend:"Donkey",enemy:"Lord Farquaad",
    beautiful:"like a swamp",ugly:"like Lord Farquaad",
    strong:"have layers",smart:"have layers",
    big:"ogre-sized",small:"Donkey-sized",
  },
};

const minecraftEnchanting: Translator = {
  slug: "minecraft-enchanting-language",
  title: "Minecraft Enchanting Table Language",
  description: "Translate text into the Minecraft enchanting table language (Standard Galactic Alphabet). Secret messages!",
  category: "meme", emoji: "⚗️", type: "charmap", popular: true,
  rules: {
    a:"ᔑ",b:"ʖ",c:"ᓵ",d:"↸",e:"ᒷ",f:"⎓",g:"⊣",h:"⍑",i:"╎",j:"⋮",k:"ꖌ",l:"ꖎ",m:"ᒲ",
    n:"リ",o:"𝙹",p:"!¡",q:"ᑑ",r:"∷",s:"ᓭ",t:"ℸ",u:"⚍",v:"⍊",w:"∴",x:"̇/",y:"||",z:"⨅",
    A:"ᔑ",B:"ʖ",C:"ᓵ",D:"↸",E:"ᒷ",F:"⎓",G:"⊣",H:"⍑",I:"╎",J:"⋮",K:"ꖌ",L:"ꖎ",M:"ᒲ",
    N:"リ",O:"𝙹",P:"!¡",Q:"ᑑ",R:"∷",S:"ᓭ",T:"ℸ",U:"⚍",V:"⍊",W:"∴",X:"̇/",Y:"||",Z:"⨅",
  },
  faqs: [{ q:"What is the Minecraft enchanting table language?", a:"It's the Standard Galactic Alphabet used in Commander Keen, adopted by Minecraft for its enchanting table UI." }],
};

const emojiTranslator: Translator = {
  slug: "emoji-translator",
  title: "Emoji Translator",
  description: "Add fun emojis to your text automatically. Our emoji translator adds relevant emojis to common words.",
  category: "meme", emoji: "😂", type: "wordmap", popular: true,
  rules: {
    love:"love ❤️",heart:"heart 💖",happy:"happy 😊",sad:"sad 😢",angry:"angry 😡",
    fire:"fire 🔥",cool:"cool 😎",laugh:"laugh 😂",cry:"cry 😭",wow:"wow 😮",
    sun:"sun ☀️",moon:"moon 🌙",star:"star ⭐",rain:"rain 🌧️",snow:"snow ❄️",
    cat:"cat 🐱",dog:"dog 🐶",pizza:"pizza 🍕",cake:"cake 🎂",coffee:"coffee ☕",
    music:"music 🎵",book:"book 📚",phone:"phone 📱",money:"money 💰",time:"time ⏰",
    hello:"hello 👋",goodbye:"goodbye 👋",yes:"yes ✅",no:"no ❌",
    good:"good 👍",bad:"bad 👎",great:"great 🎉",perfect:"perfect 💯",
    home:"home 🏠",car:"car 🚗",plane:"plane ✈️",ship:"ship 🚢",
    birthday:"birthday 🎂",party:"party 🎉",gift:"gift 🎁",
    sleep:"sleep 😴",eat:"eat 🍽️",drink:"drink 🥤",run:"run 🏃",
  },
};

const upperCase: Translator = {
  slug: "uppercase-converter",
  title: "Uppercase Text Converter",
  description: "Convert any text to UPPERCASE instantly. Make your text ALL CAPS for emphasis or formatting.",
  category: "meme", emoji: "🔠", type: "function", popular: false,
  fn: (input) => input.toUpperCase(),
};

const lowerCase: Translator = {
  slug: "lowercase-converter",
  title: "Lowercase Text Converter",
  description: "Convert any text to lowercase instantly. Great for fixing accidentally CAPS LOCKED text.",
  category: "meme", emoji: "🔡", type: "function", popular: false,
  fn: (input) => input.toLowerCase(),
};

const alternatingCase: Translator = {
  slug: "alternating-caps-generator",
  title: "Alternating Caps Generator",
  description: "Convert text to aLtErNaTiNg CaPs. The classic stylized text used for sarcastic internet posts.",
  category: "meme", emoji: "🔀", type: "function", popular: true,
  fn: (input) => input.split("").map((c,i) => i%2===0 ? c.toUpperCase() : c.toLowerCase()).join(""),
};

// ─── Master Export ────────────────────────────────────────────────────────────

export const translators: Translator[] = [
  // Text Style
  fancyText, cursiveText, tinyText, vaporwaveText, boldText, italicText,
  doubleStruck, frakturText, strikethroughText, underlineText,
  bubbleText, squaredText, wideText, mirrorText,
  // Cipher & Codes
  morseCode, binaryTranslator, hexTranslator, base64Translator,
  rot13, caesar, backwardsText, upsideDown, wingdings, leet,
  reverseWords, numberToWords,
  // Language
  pigLatin, oldEnglish, shakespearean, elvish, hawaiian, pirate, valspeak,
  // Meme & Fun
  yodaTranslator, spongebobMock, uwuTranslator, shrekTranslator,
  minecraftEnchanting, emojiTranslator, upperCase, lowerCase, alternatingCase,
];

export const popularTranslators = translators.filter(t => t.popular);

export function getTranslatorBySlug(slug: string): Translator | undefined {
  return translators.find(t => t.slug === slug);
}