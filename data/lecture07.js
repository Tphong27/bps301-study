// Lecture 7: Quantitative Process Analysis
(function() {
  const study = {
    id: 7, title: "Quantitative Process Analysis", titleVi: "Phân tích Quy trình Định lượng",
    sections: [
      { heading: "Flow Analysis: Cycle Time & Processing Time", headingVi: "Phân tích Luồng: Thời gian Chu kỳ & Xử lý",
        content: "<p>Key time measures:</p><ul><li><strong>Processing Time (PT)</strong> — Time actually spent working on a task</li><li><strong>Waiting Time (WT)</strong> — Time spent idle between tasks</li><li><strong>Cycle Time (CT)</strong> = Processing Time + Waiting Time</li><li><strong>Cycle Time Efficiency (CTE)</strong> = Processing Time / Cycle Time × 100%</li></ul><p>Typical CTE in white-collar processes is only <strong>1-10%</strong>, meaning 90-99% of time is spent waiting!</p>",
        contentVi: "<p>Các thước đo thời gian: Thời gian xử lý (PT), Thời gian chờ (WT), Thời gian chu kỳ (CT = PT + WT), Hiệu quả chu kỳ (CTE = PT/CT). CTE điển hình cho quy trình văn phòng chỉ 1-10%!</p>",
        keyTerms: [
          { term: "Cycle Time Efficiency (CTE)", termVi: "Hiệu quả Thời gian Chu kỳ", definition: "Processing Time / Cycle Time × 100%. Shows what % of time is spent on actual work.", definitionVi: "Thời gian xử lý / Thời gian chu kỳ × 100%." },
          { term: "Throughput", termVi: "Thông lượng", definition: "Number of process instances completed per time unit.", definitionVi: "Số phiên bản quy trình hoàn thành trên đơn vị thời gian." }
        ] },
      { heading: "Flow Analysis: Structural Patterns", headingVi: "Phân tích Luồng: Mẫu Cấu trúc",
        content: "<p>Formulas for calculating cycle time based on BPMN patterns:</p><ul><li><strong>Sequential block</strong>: CT = CT₁ + CT₂ + ... + CTₙ</li><li><strong>XOR-block</strong>: CT = p₁×CT₁ + p₂×CT₂ + ... (weighted average by probability)</li><li><strong>AND-block</strong>: CT = max(CT₁, CT₂, ...) — waits for the slowest branch</li><li><strong>Rework loop</strong>: CT = CT_task / (1 - rework_probability)</li></ul>",
        contentVi: "<p>Công thức tính thời gian chu kỳ theo mẫu BPMN: Tuần tự (cộng tất cả), XOR (trung bình có trọng số), AND (giá trị lớn nhất), Vòng lặp (CT = CT_task / (1 - p_rework)).</p>",
        keyTerms: [
          { term: "Rework Formula", termVi: "Công thức Làm lại", definition: "CT_with_rework = CT_task / (1 - rework_probability).", definitionVi: "CT_có_làm_lại = CT_task / (1 - xác_suất_làm_lại)." }
        ] },
      { heading: "Cost Analysis (ABC)", headingVi: "Phân tích Chi phí (ABC)",
        content: "<p><strong>Activity-Based Costing (ABC)</strong> assigns costs to activities based on resource consumption:</p><ul><li>Identify cost drivers for each activity</li><li>Calculate cost per activity = resource cost × time</li><li>Process cost = sum of all activity costs</li></ul><p>For XOR-blocks: cost = weighted average. For AND-blocks: cost = sum of all branches (all execute).</p>",
        contentVi: "<p>Chi phí Dựa Hoạt động (ABC) gán chi phí cho hoạt động dựa trên tiêu thụ nguồn lực. Chi phí quy trình = tổng chi phí tất cả hoạt động.</p>",
        keyTerms: [{ term: "Activity-Based Costing (ABC)", termVi: "Chi phí Dựa Hoạt động", definition: "Cost method assigning costs to activities based on actual resource consumption.", definitionVi: "Phương pháp gán chi phí dựa trên tiêu thụ nguồn lực thực tế." }]
      },
      { heading: "Queuing Theory & Simulation", headingVi: "Lý thuyết Hàng đợi & Mô phỏng",
        content: "<p><strong>Little's Law</strong>: L = λ × W (average items in system = arrival rate × average wait time).</p><p>Queuing models (M/M/1, M/M/c) help analyze waiting times when resources are limited. As utilization approaches 100%, waiting time grows exponentially.</p><p><strong>Simulation</strong> runs many process instances to estimate time/cost distributions, handle variability, and test what-if scenarios. It provides histograms and confidence intervals instead of single point estimates.</p>",
        contentVi: "<p>Little's Law: L = λ × W. Mô hình hàng đợi (M/M/1, M/M/c) phân tích thời gian chờ. Mô phỏng chạy nhiều phiên bản để ước tính phân phối thời gian/chi phí.</p>",
        keyTerms: [
          { term: "Little's Law", termVi: "Định luật Little", definition: "L = λ × W. Average number in system = arrival rate × average wait time.", definitionVi: "Số trung bình trong hệ thống = tốc độ đến × thời gian chờ trung bình." }
        ] }
    ]
  };

  const quiz = [
    { id: 701, lectureId: 7, type: "multiple-choice", difficulty: "Easy", question: "What is the formula for Cycle Time?", options: ["A. Processing Time - Waiting Time", "B. Processing Time × Waiting Time", "C. Processing Time + Waiting Time", "D. Processing Time / Waiting Time"], correctAnswers: [2], explanation: "Cycle Time = Processing Time + Waiting Time. It's the total time from start to finish of a process instance.", traps: { "A": "Subtraction would give a meaningless negative value if waiting > processing.", "B": "Multiplication has no physical meaning here.", "D": "Division would give a ratio, not a time measure." } },
    { id: 702, lectureId: 7, type: "multiple-choice", difficulty: "Medium", question: "A process has an AND-split with two branches: Branch A takes 3 hours, Branch B takes 5 hours. What is the cycle time of the AND-block?", options: ["A. 3 hours", "B. 4 hours", "C. 5 hours", "D. 8 hours"], correctAnswers: [2], explanation: "AND-block cycle time = max(branches). Since both run in parallel, the block finishes when the SLOWEST branch completes. max(3, 5) = 5 hours.", traps: { "A": "3 hours is the faster branch, but AND waits for all branches.", "B": "4 is the average, but AND doesn't use averages.", "D": "8 is the sum — that would be sequential, not parallel." } },
    { id: 703, lectureId: 7, type: "multiple-choice", difficulty: "Hard", question: "A task takes 10 hours. There is a 30% probability of rework. What is the expected cycle time INCLUDING rework?", options: ["A. 13 hours", "B. 14.29 hours", "C. 10 hours", "D. 7 hours"], correctAnswers: [1], explanation: "Rework formula: CT = task_time / (1 - rework_probability) = 10 / (1 - 0.3) = 10 / 0.7 ≈ 14.29 hours.", traps: { "A": "13 = 10 × 1.3, which only adds one iteration of rework, not accounting for repeated rework.", "C": "10 hours ignores rework entirely.", "D": "7 hours = 10 × 0.7, which incorrectly multiplies by the complement." } },
    { id: 704, lectureId: 7, type: "true-false", difficulty: "Medium", question: "In typical white-collar processes, Cycle Time Efficiency is usually above 50%.", options: ["A. True", "B. False"], correctAnswers: [1], explanation: "CTE in white-collar processes is typically only 1-10%, meaning 90-99% of time is spent waiting. This surprisingly low figure is a key motivation for process improvement.", traps: { "A": "Most people overestimate CTE. Studies consistently show it's typically 1-10% for office processes." } },
    { id: 705, lectureId: 7, type: "multiple-choice", difficulty: "Medium", question: "For an AND-block with 3 parallel branches, how is the COST calculated?", options: ["A. Cost of the most expensive branch", "B. Average cost of all branches", "C. Sum of all branch costs", "D. Cost of the cheapest branch"], correctAnswers: [2], explanation: "In an AND-block, ALL branches execute. The total cost is the SUM of all branch costs. (This is different from cycle time which uses MAX.)", traps: { "A": "MAX is used for cycle time in AND-blocks, NOT for cost.", "B": "Average is used for XOR-blocks (weighted average), not AND.", "D": "All branches execute and incur costs, not just the cheapest." } },
    { id: 706, lectureId: 7, type: "multiple-choice", difficulty: "Hard", question: "According to Little's Law (L = λW), if the arrival rate is 10 cases/hour and the average time in system is 2 hours, how many cases are in the system on average?", options: ["A. 5", "B. 12", "C. 20", "D. 8"], correctAnswers: [2], explanation: "L = λ × W = 10 × 2 = 20 cases in the system on average.", traps: { "A": "5 = 10/2, incorrectly dividing instead of multiplying.", "B": "12 = 10+2, incorrectly adding.", "D": "8 = 10-2, incorrectly subtracting." } },
    { id: 707, lectureId: 7, type: "multiple-choice", difficulty: "Easy", question: "What happens to waiting time as resource utilization approaches 100%?", options: ["A. Waiting time decreases linearly", "B. Waiting time stays constant", "C. Waiting time grows exponentially", "D. Waiting time drops to zero"], correctAnswers: [2], explanation: "As utilization approaches 100%, waiting time grows exponentially (not linearly). This is a fundamental insight from queuing theory.", traps: { "A": "Waiting time INCREASES, not decreases, with higher utilization.", "B": "Waiting time is very sensitive to utilization changes near 100%.", "D": "Zero waiting would mean the resource is never busy, opposite of 100% utilization." } },
    { id: 708, lectureId: 7, type: "multiple-choice", difficulty: "Medium", question: "An XOR-split has two paths: Path A (60% probability, 4 hours) and Path B (40%, 6 hours). What is the expected cycle time?", options: ["A. 4 hours", "B. 4.8 hours", "C. 5 hours", "D. 10 hours"], correctAnswers: [1], explanation: "XOR-block CT = weighted average = (0.6 × 4) + (0.4 × 6) = 2.4 + 2.4 = 4.8 hours.", traps: { "A": "4 is only Path A's time, ignoring the probability.", "C": "5 = (4+6)/2, which is a simple average ignoring probabilities.", "D": "10 = 4+6, which is sequential sum, not XOR." } }
  ];

  const flashcards = [
    { id: 36, lectureId: 7, front: "Cycle Time formula?", back: "CT = Processing Time + Waiting Time", backVi: "CT = Thời gian Xử lý + Thời gian Chờ" },
    { id: 37, lectureId: 7, front: "Cycle Time Efficiency formula?", back: "CTE = Processing Time / Cycle Time × 100%. Typical white-collar CTE = 1-10%.", backVi: "CTE = PT / CT × 100%. CTE điển hình cho văn phòng = 1-10%." },
    { id: 38, lectureId: 7, front: "CT formula for AND-block?", back: "CT = max(branch CTs) — waits for slowest branch.", backVi: "CT = max(CT các nhánh) — chờ nhánh chậm nhất." },
    { id: 39, lectureId: 7, front: "CT formula for XOR-block?", back: "CT = Σ (probability × branch CT) — weighted average.", backVi: "CT = Σ (xác suất × CT nhánh) — trung bình có trọng số." },
    { id: 40, lectureId: 7, front: "Rework cycle time formula?", back: "CT = task_time / (1 - rework_probability)", backVi: "CT = thời_gian_task / (1 - xác_suất_làm_lại)" },
    { id: 41, lectureId: 7, front: "Little's Law?", back: "L = λ × W. Average items in system = arrival rate × average wait time.", backVi: "Số trung bình trong hệ thống = tốc độ đến × thời gian chờ trung bình." }
  ];

  window._BPS301_DATA.push({ study, quiz, flashcards });
})();
