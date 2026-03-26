// Lecture 6: Qualitative Process Analysis
(function() {
  const study = {
    id: 6, title: "Qualitative Process Analysis", titleVi: "Phân tích Quy trình Định tính",
    sections: [
      { heading: "Value-Added Analysis", headingVi: "Phân tích Giá trị Gia tăng",
        content: "<p>Value-Added Analysis classifies each step in a process into three categories:</p><ul><li><strong>VA (Value-Adding)</strong> — Directly contributes to what the customer values and is willing to pay for</li><li><strong>BVA (Business Value-Adding)</strong> — Required by the business (compliance, reporting) but not directly valued by customers</li><li><strong>NVA (Non-Value-Adding)</strong> — Waste that should be eliminated (waiting, unnecessary approvals, rework)</li></ul><p>The goal is to maximize VA, minimize BVA, and eliminate NVA activities.</p>",
        contentVi: "<p>Phân tích giá trị gia tăng phân loại mỗi bước: VA (tạo giá trị cho khách hàng), BVA (cần cho doanh nghiệp nhưng khách hàng không trả tiền), NVA (lãng phí cần loại bỏ).</p>",
        keyTerms: [
          { term: "VA", termVi: "Tạo giá trị", definition: "Value-Adding — directly contributes to customer value.", definitionVi: "Đóng góp trực tiếp vào giá trị khách hàng." },
          { term: "BVA", termVi: "Giá trị kinh doanh", definition: "Business Value-Adding — required by business but not directly valued by customer.", definitionVi: "Cần cho doanh nghiệp nhưng khách hàng không trực tiếp đánh giá." },
          { term: "NVA", termVi: "Không tạo giá trị", definition: "Non-Value-Adding — waste that should be eliminated.", definitionVi: "Lãng phí cần loại bỏ." }
        ] },
      { heading: "Waste Analysis (Move, Hold, Overdo)", headingVi: "Phân tích Lãng phí",
        content: "<p>Three categories of waste in processes:</p><ul><li><strong>Move</strong> — Unnecessary handoffs, transport, or data movement between people/systems</li><li><strong>Hold</strong> — Waiting time, delays, batching, work sitting in queues</li><li><strong>Overdo</strong> — Doing more than needed: over-processing, rework, over-checking, duplication</li></ul>",
        contentVi: "<p>Ba loại lãng phí: Move (chuyển giao không cần thiết), Hold (chờ đợi, trì hoãn), Overdo (làm quá mức cần thiết, làm lại).</p>",
        keyTerms: [
          { term: "Move Waste", termVi: "Lãng phí di chuyển", definition: "Unnecessary handoffs, transport or data movement.", definitionVi: "Chuyển giao, vận chuyển hoặc di chuyển dữ liệu không cần thiết." },
          { term: "Hold Waste", termVi: "Lãng phí giữ", definition: "Waiting, delays, work sitting idle in queues.", definitionVi: "Chờ đợi, trì hoãn, công việc nằm chờ." }
        ] },
      { heading: "Stakeholder Analysis & Issue Documentation", headingVi: "Phân tích Bên liên quan & Tài liệu Vấn đề",
        content: "<p><strong>Stakeholder Analysis</strong> identifies who is affected by the process and their concerns. <strong>Issue Register</strong> documents problems found during analysis with details on impact and priority.</p><p><strong>Pareto Analysis</strong> (80/20 rule): Focuses improvement on the vital few issues that cause the most impact. <strong>PICK Chart</strong> classifies issues into: Possible (easy, low impact), Implement (easy, high impact), Challenge (hard, high impact), Kill (hard, low impact).</p>",
        contentVi: "<p>Phân tích bên liên quan xác định ai bị ảnh hưởng. Sổ đăng ký vấn đề tài liệu hóa các vấn đề. Phân tích Pareto (80/20) tập trung vào vấn đề quan trọng nhất. PICK Chart phân loại vấn đề: Possible, Implement, Challenge, Kill.</p>",
        keyTerms: [
          { term: "PICK Chart", termVi: "Biểu đồ PICK", definition: "Categorizes issues: Possible (easy/low), Implement (easy/high), Challenge (hard/high), Kill (hard/low).", definitionVi: "Phân loại: Possible (dễ/thấp), Implement (dễ/cao), Challenge (khó/cao), Kill (khó/thấp)." },
          { term: "Pareto Analysis", termVi: "Phân tích Pareto", definition: "80/20 rule — 80% of problems come from 20% of causes.", definitionVi: "Quy tắc 80/20 — 80% vấn đề đến từ 20% nguyên nhân." }
        ] },
      { heading: "Root Cause Analysis", headingVi: "Phân tích Nguyên nhân Gốc",
        content: "<p>Two main techniques for identifying root causes:</p><ul><li><strong>Cause-Effect Diagram (Fishbone/Ishikawa)</strong> — Organizes possible causes into categories using the <strong>6 M's</strong>: Machine, Method, Material, Man, Measurement, Milieu (Environment)</li><li><strong>Why-Why Diagram</strong> — Asks 'Why?' repeatedly (typically 5 times) to drill down from a symptom to the root cause</li></ul>",
        contentVi: "<p>Hai kỹ thuật: Biểu đồ Nhân-Quả (Xương cá/Ishikawa) dùng 6M, và Biểu đồ Tại sao-Tại sao (hỏi 'Tại sao?' lặp lại 5 lần).</p>",
        keyTerms: [
          { term: "Cause-Effect Diagram", termVi: "Biểu đồ Nhân-Quả", definition: "Fishbone/Ishikawa diagram organizing causes into 6 M categories.", definitionVi: "Biểu đồ xương cá tổ chức nguyên nhân theo 6 loại M." },
          { term: "6 M's", termVi: "6 M", definition: "Machine, Method, Material, Man, Measurement, Milieu (Environment).", definitionVi: "Máy móc, Phương pháp, Nguyên liệu, Con người, Đo lường, Môi trường." },
          { term: "Why-Why Diagram", termVi: "Biểu đồ Tại sao", definition: "Technique of asking 'Why?' 5 times to reach the root cause.", definitionVi: "Kỹ thuật hỏi 'Tại sao?' 5 lần để tìm nguyên nhân gốc." }
        ] }
    ]
  };

  const quiz = [
    { id: 601, lectureId: 6, type: "multiple-choice", difficulty: "Easy", question: "In Value-Added Analysis, a regulatory compliance check would typically be classified as:", options: ["A. VA (Value-Adding)", "B. BVA (Business Value-Adding)", "C. NVA (Non-Value-Adding)", "D. It depends on the customer"], correctAnswers: [1], explanation: "Regulatory compliance is required by the business (legal obligations) but customers don't directly pay for or value it. This makes it BVA.", traps: { "A": "Customers don't directly value compliance checks — they care about the end product/service.", "C": "NVA is waste to be eliminated, but compliance cannot be eliminated — it's legally required.", "D": "Compliance classification doesn't depend on customer type — it's always a business requirement." } },
    { id: 602, lectureId: 6, type: "multiple-choice", difficulty: "Medium", question: "Work sitting idle in a queue between activities is classified as which waste type?", options: ["A. Move", "B. Hold", "C. Overdo", "D. Rework"], correctAnswers: [1], explanation: "Hold waste includes waiting time, delays, and work sitting in queues. Move waste is about unnecessary transport/handoffs. Overdo is about doing more than needed.", traps: { "A": "Move waste is about unnecessary handoffs and transport, not idle waiting.", "C": "Overdo is doing more than needed — rework, over-checking, duplication.", "D": "Rework is a type of Overdo waste, not a separate waste category." } },
    { id: 603, lectureId: 6, type: "multiple-choice", difficulty: "Hard", question: "In a PICK chart, an issue that has HIGH payoff but is DIFFICULT to implement falls into which category?", options: ["A. Possible", "B. Implement", "C. Challenge", "D. Kill"], correctAnswers: [2], explanation: "PICK: Possible (easy/low payoff), Implement (easy/high payoff), Challenge (hard/high payoff), Kill (hard/low payoff). Hard + high payoff = Challenge.", traps: { "A": "Possible = easy effort + low payoff.", "B": "Implement = easy effort + high payoff (the 'quick wins').", "D": "Kill = hard effort + low payoff (not worth doing)." } },
    { id: 604, lectureId: 6, type: "multiple-choice", difficulty: "Medium", question: "Which of the following is NOT one of the 6 M's in a cause-effect diagram?", options: ["A. Machine", "B. Money", "C. Method", "D. Milieu"], correctAnswers: [1], explanation: "The 6 M's are: Machine, Method, Material, Man, Measurement, and Milieu (Environment). Money is not one of them.", traps: { "A": "Machine IS one of the 6 M's.", "C": "Method IS one of the 6 M's.", "D": "Milieu (Environment) IS one of the 6 M's." } },
    { id: 605, lectureId: 6, type: "true-false", difficulty: "Easy", question: "The Why-Why diagram technique involves asking 'Why?' repeatedly to drill down to root causes.", options: ["A. True", "B. False"], correctAnswers: [0], explanation: "The Why-Why diagram asks 'Why?' typically 5 times to move from a surface symptom to the underlying root cause.", traps: { "B": "This statement is correct — it's the fundamental principle of Why-Why analysis." } },
    { id: 606, lectureId: 6, type: "multiple-answer", difficulty: "Hard", question: "Which activities would be classified as NVA (Non-Value-Adding)? (Select ALL)", options: ["A. Waiting for manager approval on a routine task", "B. Assembling the product", "C. Re-entering data that was already captured", "D. Quality inspection required by law"], correctAnswers: [0, 2], explanation: "Waiting for routine approval (unnecessary delay) and re-entering already captured data (duplication) are both NVA waste. Product assembly is VA (creates value). Legal quality inspection is BVA (required but not customer-valued).", traps: { "B": "Assembling the product directly creates customer value — it's VA.", "D": "Legal quality inspection is a business requirement — it's BVA, not NVA." } },
    { id: 607, lectureId: 6, type: "multiple-choice", difficulty: "Medium", question: "Pareto Analysis is based on which principle?", options: ["A. All issues are equally important", "B. 80% of problems come from 20% of causes", "C. Issues should be solved in chronological order", "D. The hardest issues should be solved first"], correctAnswers: [1], explanation: "Pareto Analysis (80/20 rule) states that roughly 80% of effects come from 20% of causes. Focus improvement on the vital few causes for maximum impact.", traps: { "A": "Pareto explicitly says issues are NOT equal — a few cause most problems.", "C": "Chronological order is irrelevant; Pareto prioritizes by impact.", "D": "Pareto prioritizes by impact, not difficulty." } }
  ];

  const flashcards = [
    { id: 31, lectureId: 6, front: "3 categories in Value-Added Analysis?", back: "VA (Value-Adding for customer), BVA (Business Value-Adding), NVA (Non-Value-Adding = waste).", backVi: "VA (giá trị cho khách hàng), BVA (giá trị kinh doanh), NVA (không giá trị = lãng phí)." },
    { id: 32, lectureId: 6, front: "3 types of waste?", back: "Move (unnecessary handoffs), Hold (waiting/delays), Overdo (rework, over-processing).", backVi: "Move (chuyển giao không cần), Hold (chờ/trì hoãn), Overdo (làm lại, xử lý quá mức)." },
    { id: 33, lectureId: 6, front: "What does PICK stand for?", back: "Possible (easy/low), Implement (easy/high), Challenge (hard/high), Kill (hard/low).", backVi: "Possible (dễ/thấp), Implement (dễ/cao), Challenge (khó/cao), Kill (khó/thấp)." },
    { id: 34, lectureId: 6, front: "What are the 6 M's?", back: "Machine, Method, Material, Man, Measurement, Milieu (Environment).", backVi: "Máy móc, Phương pháp, Nguyên liệu, Con người, Đo lường, Môi trường." },
    { id: 35, lectureId: 6, front: "Fishbone diagram = ?", back: "Cause-Effect diagram (Ishikawa). Organizes possible causes into 6 M categories.", backVi: "Biểu đồ Nhân-Quả (Ishikawa). Tổ chức nguyên nhân theo 6 loại M." }
  ];

  window._BPS301_DATA.push({ study, quiz, flashcards });
})();
