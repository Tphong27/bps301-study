// Lecture 8: Process Redesign (Transactional)
(function() {
  const study = {
    id: 8, title: "Process Redesign (Transactional)", titleVi: "Tái thiết kế Quy trình (Giao dịch)",
    sections: [
      { heading: "Innovation vs. Incremental Improvement", headingVi: "Đổi mới vs. Cải tiến Liên tục",
        content: "<p>Two approaches to process improvement:</p><ul><li><strong>Process Improvement (Incremental)</strong> — Gradual, continuous changes to existing processes. Lower risk, smaller gains. Related to TQM, Six Sigma, Lean.</li><li><strong>Process Innovation/Reengineering (BPR)</strong> — Radical rethinking and fundamental redesign. Higher risk, potentially transformative gains. 'Start from scratch' approach.</li></ul><p>These exist on a <strong>spectrum</strong>, not as binary choices. Most real improvements fall somewhere in between.</p>",
        contentVi: "<p>Hai cách tiếp cận: Cải tiến liên tục (thay đổi dần dần, ít rủi ro) và Đổi mới/Tái kỹ thuật (thiết kế lại cơ bản, rủi ro cao hơn, có thể biến đổi lớn).</p>",
        keyTerms: [
          { term: "BPR", termVi: "Tái kỹ thuật Quy trình Kinh doanh", definition: "Business Process Reengineering — radical, fundamental rethinking of processes.", definitionVi: "Suy nghĩ lại cơ bản và triệt để về quy trình." }
        ] },
      { heading: "The Devil's Quadrangle", headingVi: "Tứ giác Ma quỷ",
        content: "<p>The <strong>Devil's Quadrangle</strong> shows the trade-offs between four performance dimensions:</p><ul><li><strong>Time</strong> — Faster processes</li><li><strong>Cost</strong> — Cheaper processes</li><li><strong>Quality</strong> — Better outputs</li><li><strong>Flexibility</strong> — More adaptable to changes</li></ul><p>Key insight: <strong>Improving one dimension often worsens another</strong>. You cannot optimize all four simultaneously. Redesign choices must explicitly consider these trade-offs.</p>",
        contentVi: "<p>Tứ giác Ma quỷ cho thấy sự đánh đổi giữa 4 chiều hiệu suất: Thời gian, Chi phí, Chất lượng, Linh hoạt. Cải thiện một chiều thường làm xấu chiều khác.</p>",
        keyTerms: [
          { term: "Devil's Quadrangle", termVi: "Tứ giác Ma quỷ", definition: "A framework showing trade-offs between Time, Cost, Quality, and Flexibility in process redesign.", definitionVi: "Khung thể hiện sự đánh đổi giữa Thời gian, Chi phí, Chất lượng và Linh hoạt." }
        ] },
      { heading: "The Redesign Orbit", headingVi: "Quỹ đạo Tái thiết kế",
        content: "<p>The <strong>Redesign Orbit</strong> describes a spectrum of redesign approaches from low risk to high risk:</p><ul><li><strong>Transactional methods</strong> — Small changes to existing processes using heuristics (rules of thumb)</li><li><strong>Analytical methods</strong> — Data-driven optimization using mathematical models</li><li><strong>Transformational methods</strong> — Radical redesign inspired by best practices, technology, or creative thinking</li></ul>",
        contentVi: "<p>Quỹ đạo Tái thiết kế mô tả phổ từ rủi ro thấp đến cao: Phương pháp giao dịch (heuristics), Phương pháp phân tích (tối ưu dữ liệu), Phương pháp chuyển đổi (thiết kế lại triệt để).</p>",
        keyTerms: [
          { term: "Redesign Orbit", termVi: "Quỹ đạo Tái thiết kế", definition: "A spectrum of redesign methods from transactional (low risk) to transformational (high risk).", definitionVi: "Phổ phương pháp tái thiết kế từ giao dịch (ít rủi ro) đến chuyển đổi (rủi ro cao)." }
        ] }
    ]
  };

  const quiz = [
    { id: 801, lectureId: 8, type: "multiple-choice", difficulty: "Easy", question: "What are the four dimensions of the Devil's Quadrangle?", options: ["A. Time, Cost, Quality, Flexibility", "B. Time, Cost, Quality, Scalability", "C. Speed, Budget, Accuracy, Scope", "D. Efficiency, Effectiveness, Elegance, Economy"], correctAnswers: [0], explanation: "The Devil's Quadrangle has exactly four dimensions: Time, Cost, Quality, and Flexibility.", traps: { "B": "Scalability is not one of the four dimensions — Flexibility is.", "C": "These are informal synonyms but not the formal terms.", "D": "These are alternative quality concepts, not the Devil's Quadrangle dimensions." } },
    { id: 802, lectureId: 8, type: "true-false", difficulty: "Medium", question: "According to the Devil's Quadrangle, it is possible to maximize all four dimensions simultaneously.", options: ["A. True", "B. False"], correctAnswers: [1], explanation: "The Devil's Quadrangle explicitly shows that improving one dimension typically worsens another. You cannot maximize all four — trade-offs are inevitable.", traps: { "A": "This contradicts the core message of the Devil's Quadrangle — there are always trade-offs." } },
    { id: 803, lectureId: 8, type: "multiple-choice", difficulty: "Medium", question: "BPR (Business Process Reengineering) is best described as:", options: ["A. Gradual, continuous improvement of existing processes", "B. Radical, fundamental rethinking and redesign of processes", "C. Automating the current as-is process", "D. Outsourcing the process to a third party"], correctAnswers: [1], explanation: "BPR involves radical, fundamental rethinking. It's the 'clean slate' approach — questioning why the process exists and redesigning from scratch.", traps: { "A": "Gradual improvement describes continuous improvement (Kaizen, TQM), not BPR.", "C": "Automating the as-is process doesn't redesign it — it just automates existing inefficiencies.", "D": "Outsourcing is a specific decision, not the definition of BPR." } },
    { id: 804, lectureId: 8, type: "multiple-choice", difficulty: "Hard", question: "On the Redesign Orbit, which approach carries the HIGHEST risk?", options: ["A. Transactional methods", "B. Analytical methods", "C. Transformational methods", "D. All carry equal risk"], correctAnswers: [2], explanation: "Transformational methods (radical redesign) carry the highest risk because they fundamentally change the process. Transactional methods (heuristics) carry the lowest risk.", traps: { "A": "Transactional = lowest risk (small, incremental changes using rules of thumb).", "B": "Analytical = moderate risk (data-driven but less radical than transformation).", "D": "Risk explicitly varies across the orbit spectrum." } },
    { id: 805, lectureId: 8, type: "multiple-answer", difficulty: "Medium", question: "Which are approaches to process improvement? (Select ALL)", options: ["A. Continuous/Incremental improvement", "B. Process Innovation (BPR)", "C. Process Documentation", "D. Process Redesign using heuristics"], correctAnswers: [0, 1, 3], explanation: "Improvement approaches include incremental improvement, BPR (radical redesign), and heuristic-based redesign. Process Documentation is about recording, not improving.", traps: { "C": "Documentation describes the process (Discovery) but doesn't improve it." } }
  ];

  const flashcards = [
    { id: 42, lectureId: 8, front: "What is BPR?", back: "Business Process Reengineering — radical, fundamental rethinking of processes ('start from scratch').", backVi: "Tái kỹ thuật Quy trình — suy nghĩ lại cơ bản và triệt để ('bắt đầu từ đầu')." },
    { id: 43, lectureId: 8, front: "4 dimensions of the Devil's Quadrangle?", back: "Time, Cost, Quality, Flexibility. Improving one often worsens another.", backVi: "Thời gian, Chi phí, Chất lượng, Linh hoạt. Cải thiện một thường làm xấu cái khác." },
    { id: 44, lectureId: 8, front: "What is the Redesign Orbit?", back: "Spectrum of redesign approaches: Transactional (low risk) → Analytical → Transformational (high risk).", backVi: "Phổ: Giao dịch (ít rủi ro) → Phân tích → Chuyển đổi (rủi ro cao)." },
    { id: 45, lectureId: 8, front: "Incremental vs BPR?", back: "Incremental: gradual, small changes, low risk. BPR: radical fundamental redesign, high risk but transformative.", backVi: "Liên tục: dần dần, ít rủi ro. BPR: triệt để, rủi ro cao nhưng biến đổi lớn." }
  ];

  window._BPS301_DATA.push({ study, quiz, flashcards });
})();
