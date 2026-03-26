// data/index.js — Aggregates all per-lecture data into global arrays
(function() {
  'use strict';

  window.LECTURES = [];
  window.QUIZ_BANK = [];
  window.FLASHCARDS = [];

  // Process all registered lecture data
  (window._BPS301_DATA || []).forEach(function(entry) {
    if (entry.study) {
      window.LECTURES.push(entry.study);
    }
    if (entry.quiz && Array.isArray(entry.quiz)) {
      window.QUIZ_BANK.push(...entry.quiz);
    }
    if (entry.flashcards && Array.isArray(entry.flashcards)) {
      window.FLASHCARDS.push(...entry.flashcards);
    }
  });

  // Sort lectures by ID
  window.LECTURES.sort((a, b) => a.id - b.id);

  console.log(`[BPS301] Loaded ${window.LECTURES.length} lectures, ${window.QUIZ_BANK.length} quiz questions, ${window.FLASHCARDS.length} flashcards`);
})();
