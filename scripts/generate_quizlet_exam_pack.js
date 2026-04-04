const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const SOURCE_PATH = path.join(
  ROOT,
  "Fundamentals_of_Business_Process_Management_images",
  "quizlet.txt",
);
const OUTPUT_PATH = path.join(
  ROOT,
  "bps301-study",
  "data",
  "quizlet_exam_pack.js",
);

const text = fs.readFileSync(SOURCE_PATH, "utf8");
const lines = text.split(/\r?\n/);

function normalizeText(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/\bQAccounts\b/g, "Accounts")
    .replace(/\s+/g, " ")
    .replace(/\s*\*\s*$/, "")
    .replace(/^A\.Start/, "A. Start")
    .replace(/^B\.Business/, "B. Business")
    .replace(/^C\.Business/, "C. Business")
    .replace(/^D\.Business/, "D. Business")
    .replace(/^A\.Only/, "A. Only")
    .replace(/^B\.Only/, "B. Only")
    .replace(/^C\.When/, "C. When")
    .replace(/^D\.By/, "D. By")
    .replace(/^A\.It/, "A. It")
    .replace(/^B\.Can/, "B. Can")
    .replace(/^C\.Amodel/, "C. A model")
    .replace(/^D\.Anactor/, "D. An actor")
    .replace(/^C\.Archi/, "C. Archi")
    .replace(/^D\.Archi/, "D. Archi")
    .replace(/^2\)Complexity/, "2) Complexity")
    .replace(/^4\)Agilityandremotework/, "4) Agility and remote work")
    .trim();
}

function normalizeQuestion(value) {
  return normalizeText(value)
    .toLowerCase()
    .replace(
      /\(\s*(single choice|multiple choice|choose one or more|select all(?: correct answers?)?)\s*\)/g,
      "",
    )
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/choose one or more:?/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isQuestionStart(line) {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (isOptionLine(trimmed)) return false;
  if (isLetterAnswerLine(trimmed)) return false;
  if (/^\d+\)$/.test(trimmed)) return false;
  if (/^(Ch|Ban chua|Chon\s+\d+)/i.test(trimmed)) return false;
  return true;
}

function isOptionLine(line) {
  return /^(?:[A-Z]\.|\d+\))\s*\S+/.test(line.trim());
}

function isLetterAnswerLine(line) {
  return /^[A-F]+$/.test(line.trim());
}

function getPrefix(line) {
  const trimmed = line.trim();
  const alpha = trimmed.match(/^([A-Z])\./);
  if (alpha) return alpha[1];
  const numeric = trimmed.match(/^(\d+)\)/);
  if (numeric) return numeric[1];
  return null;
}

function optionBody(line) {
  return normalizeText(line).replace(/^(?:[A-Z]\.\s*|\d+\)\s*)/, "").trim();
}

function splitCombinedOptions(optionLines) {
  const output = [];

  for (const rawLine of optionLines) {
    const line = normalizeText(rawLine);
    const alphaMatches = line.match(/(?:[A-Z]\.\s.*?)(?=(?:[A-Z]\.|$))/g);
    if (alphaMatches && alphaMatches.length > 1) {
      output.push(...alphaMatches.map((item) => item.trim()));
      continue;
    }

    output.push(line);
  }

  return output;
}

function createQuestionKey(question, optionLines) {
  const optionKey = optionLines.map((line) => optionBody(line).toLowerCase()).join("||");
  return `${normalizeQuestion(question)}__${optionKey}`;
}

function parseBlocks() {
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    while (index < lines.length && !lines[index].trim()) index++;
    if (index >= lines.length) break;

    let line = lines[index].trim();
    if (!isQuestionStart(line) && !/^\d+\.\s*/.test(line)) {
      index++;
      continue;
    }

    const questionParts = [];
    let questionNumber = null;

    const numbered = line.match(/^(\d+)\.\s*(.*)$/);
    if (numbered) {
      questionNumber = Number(numbered[1]);
      if (numbered[2]) questionParts.push(normalizeText(numbered[2]));
      index++;
    } else {
      questionParts.push(normalizeText(line));
      index++;
    }

    while (index < lines.length) {
      const current = lines[index].trim();
      if (!current) {
        index++;
        continue;
      }
      if (isOptionLine(current) || /^\d+\.\s*/.test(current)) break;
      if (!isQuestionStart(current)) break;
      questionParts.push(normalizeText(current));
      index++;
    }

    const rawOptions = [];
    const answerMarkers = [];
    const optionPrefixSet = new Set();

    while (index < lines.length) {
      line = lines[index].trim();
      if (!line) {
        index++;
        if (rawOptions.length || answerMarkers.length) break;
        continue;
      }

      if (/^\d+\.\s*/.test(line) && rawOptions.length === 0) break;
      if (/^\d+\.\s*/.test(line) && rawOptions.length > 0 && answerMarkers.length > 0) break;
      if (isQuestionStart(line) && rawOptions.length > 0 && answerMarkers.length > 0) break;

      if (isOptionLine(line)) {
        const cleaned = normalizeText(line);
        const prefix = getPrefix(cleaned);
        const alreadySeen = prefix ? optionPrefixSet.has(prefix) : false;

        if (!alreadySeen) {
          rawOptions.push(cleaned);
          if (prefix) optionPrefixSet.add(prefix);
        }

        if (/\*$/.test(line) || alreadySeen) {
          answerMarkers.push(cleaned);
        }

        index++;
        continue;
      }

      if (isLetterAnswerLine(line) && rawOptions.length > 0) {
        answerMarkers.push(...line.split(""));
        index++;
        continue;
      }

      if (rawOptions.length > 0 && /\*$/.test(line)) {
        answerMarkers.push(normalizeText(line));
        index++;
        continue;
      }

      if (rawOptions.length > 0) break;
      index++;
    }

    const question = questionParts.join(" ").trim();
    const options = splitCombinedOptions(rawOptions);

    if (!question || options.length < 2) continue;

    const standardizedOptions = options.map(
      (option, idx) => `${String.fromCharCode(65 + idx)}. ${optionBody(option)}`,
    );

    const correctIndexes = [];
    for (const marker of answerMarkers) {
      let matchedIndex = -1;

      if (typeof marker === "string" && marker.length === 1 && /^[A-F]$/.test(marker)) {
        matchedIndex = marker.charCodeAt(0) - 65;
      } else {
        const prefix = getPrefix(marker);
        if (prefix) {
          matchedIndex = options.findIndex((option) => getPrefix(option) === prefix);
        }

        if (matchedIndex < 0) {
          const body = optionBody(marker).toLowerCase();
          matchedIndex = options.findIndex(
            (option) => optionBody(option).toLowerCase() === body,
          );
        }
      }

      if (matchedIndex >= 0 && !correctIndexes.includes(matchedIndex)) {
        correctIndexes.push(matchedIndex);
      }
    }

    if (correctIndexes.length === 0) continue;

    blocks.push({
      number: questionNumber,
      question,
      options: standardizedOptions,
      correctIndexes,
      key: createQuestionKey(question, standardizedOptions),
    });
  }

  return blocks;
}

const blocks = parseBlocks();
const mergedAnswers = new Map();

for (const block of blocks) {
  if (!mergedAnswers.has(block.key)) mergedAnswers.set(block.key, new Set());
  for (const index of block.correctIndexes) mergedAnswers.get(block.key).add(index);
}

const dedupedBlocks = [];
const seenKeys = new Set();

for (const block of blocks) {
  if (seenKeys.has(block.key)) continue;
  seenKeys.add(block.key);
  dedupedBlocks.push(block);
}

const lectureId = 12;
const quiz = dedupedBlocks.map((block, idx) => {
  const mergedCorrect = [...mergedAnswers.get(block.key)].sort((a, b) => a - b);
  const correctCount = mergedCorrect.length;
  const type = correctCount > 1 ? "multiple-answer" : "multiple-choice";
  const difficulty =
    correctCount > 1 ||
    /(picture|diagram|shown below|viewpoint|model|screenshot)/i.test(block.question)
      ? "Hard"
      : "Medium";
  const question =
    correctCount > 1 && !/\(select \d+ answers?\)/i.test(block.question)
      ? `${block.question} (Select ${correctCount} answers)`
      : block.question;
  const answerText = mergedCorrect.map((index) => block.options[index]).join(" | ");

  return {
    id: 3001 + idx,
    lectureId,
    type,
    difficulty,
    question,
    options: block.options,
    correctAnswers: mergedCorrect,
    explanation:
      correctCount > 1
        ? `Correct answers (${correctCount}): ${answerText}`
        : `Correct answer: ${answerText}`,
  };
});

const study = {
  id: lectureId,
  title: "Quizlet Exam Pack",
  titleVi: "Quizlet exam pack",
  sections: [
    {
      heading: "Exam Pack",
      headingVi: "Exam pack",
      content:
        "<p>This is a separate exam-style quiz pack imported from your Quizlet source file. It is kept separate from the existing lecture quizzes so you can review it independently.</p>",
      contentVi:
        "<p>Day la bo quiz dang de thi duoc import rieng tu file Quizlet ban cung cap. Bo nay duoc tach rieng khoi cac quiz theo lecture hien co de ban on tap doc lap.</p>",
      keyTerms: [],
    },
  ],
};

const output = `// Separate Quizlet Exam Pack generated from quizlet.txt
(function () {
  const study = ${JSON.stringify(study, null, 2)};

  const quiz = ${JSON.stringify(quiz, null, 2)};

  window._BPS301_DATA.push({ study, quiz });
})();
`;

fs.writeFileSync(OUTPUT_PATH, output, "utf8");

const multiCount = quiz.filter((item) => item.type === "multiple-answer").length;
console.log(`Parsed blocks: ${blocks.length}`);
console.log(`Generated unique questions: ${quiz.length}`);
console.log(`Multiple-answer questions: ${multiCount}`);
