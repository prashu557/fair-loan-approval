import React, { useMemo, useState } from "react";
import "./App.css";

const pipelineSteps = [
  "Data Collection",
  "Data Preprocessing",
  "Bias Detection",
  "Regression Baseline",
  "Random Forest Ensemble",
  "Fairness Evaluation"
];

const predictionInputs = [
  "Credit History Length",
  "Debt-to-Income",
  "Employment Sector",
  "FICO Score",
  "Outstanding Balance",
  "Payment History",
  "Region Code"
];

const equityMetrics = ["Disparate Impact Ratio", "Average Odds Difference"];

const biasTactics = [
  "Monitor disparate impact before deployment.",
  "Compare average odds difference across groups.",
  "Apply output probability thresholding after scoring."
];

const monitoredGroups = [
  "Binary, Gender, Non-binary",
  "Religious Groups",
  "Income Bracket"
];

const regionalDistribution = [
  { label: "Mumbai", value: 32, color: "#8f1028" },
  { label: "Pune", value: 24, color: "#b22a3f" },
  { label: "Nashik", value: 20, color: "#cf5c4b" },
  { label: "Kolkata", value: 24, color: "#e18b5f" }
];

const findings = [
  { year: "2020", value: 8 },
  { year: "2021", value: 12 },
  { year: "2022", value: 16 },
  { year: "2023", value: 19 },
  { year: "2024", value: 23 },
  { year: "2025", value: 29 }
];

const loanDataset = [
  { age: 26, income: 42000, credit: 640, amount: 110000, employment: "employed", region: "urban", debt: 18000, history: 3, approved: 0 },
  { age: 31, income: 58000, credit: 675, amount: 135000, employment: "employed", region: "urban", debt: 22000, history: 4, approved: 1 },
  { age: 38, income: 92000, credit: 740, amount: 210000, employment: "employed", region: "suburban", debt: 24000, history: 7, approved: 1 },
  { age: 29, income: 36000, credit: 610, amount: 90000, employment: "self-employed", region: "rural", debt: 26000, history: 2, approved: 0 },
  { age: 45, income: 128000, credit: 780, amount: 250000, employment: "employed", region: "urban", debt: 28000, history: 9, approved: 1 },
  { age: 34, income: 51000, credit: 700, amount: 120000, employment: "contract", region: "suburban", debt: 30000, history: 5, approved: 1 },
  { age: 23, income: 28000, credit: 590, amount: 70000, employment: "unemployed", region: "high-risk", debt: 17000, history: 1, approved: 0 },
  { age: 52, income: 76000, credit: 720, amount: 160000, employment: "employed", region: "urban", debt: 19000, history: 8, approved: 1 },
  { age: 41, income: 69000, credit: 688, amount: 145000, employment: "self-employed", region: "suburban", debt: 25000, history: 6, approved: 1 },
  { age: 28, income: 33000, credit: 602, amount: 85000, employment: "contract", region: "rural", debt: 21000, history: 2, approved: 0 },
  { age: 36, income: 98000, credit: 752, amount: 195000, employment: "employed", region: "urban", debt: 23000, history: 7, approved: 1 },
  { age: 48, income: 54000, credit: 664, amount: 125000, employment: "employed", region: "suburban", debt: 34000, history: 4, approved: 0 },
  { age: 33, income: 87000, credit: 730, amount: 170000, employment: "self-employed", region: "urban", debt: 21000, history: 6, approved: 1 },
  { age: 27, income: 39000, credit: 625, amount: 100000, employment: "employed", region: "rural", debt: 24000, history: 3, approved: 0 },
  { age: 55, income: 110000, credit: 790, amount: 220000, employment: "employed", region: "urban", debt: 26000, history: 10, approved: 1 },
  { age: 30, income: 47000, credit: 660, amount: 115000, employment: "contract", region: "suburban", debt: 20000, history: 4, approved: 0 }
];

const baseApplicant = {
  age: "32",
  income: "72000",
  credit: "715",
  amount: "180000",
  employment: "employed",
  region: "urban",
  debt: "45000",
  history: "6"
};

function App() {
  const [form, setForm] = useState(baseApplicant);
  const [evaluatedForm, setEvaluatedForm] = useState(baseApplicant);
  const [decisionPulse, setDecisionPulse] = useState(0);

  const modelBundle = useMemo(() => trainModels(loanDataset), []);
  const liveResult = useMemo(() => evaluateApplicant(evaluatedForm, modelBundle), [evaluatedForm, modelBundle]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value
    }));
  };

  const resetForm = () => {
    setForm(baseApplicant);
  };

  const calculateDecision = () => {
    setEvaluatedForm(form);
    setDecisionPulse((current) => current + 1);
  };

  return (
    <div className="poster-page">
      <header className="poster-header">
        <div className="brand-lockup">
          <div className="brand-mark">G</div>
          <div>
            <p className="brand-name">GALGOTIAS UNIVERSITY</p>
            <p className="brand-subtitle">Department of Computer Science & Engineering (CSE)</p>
          </div>
        </div>
        <div className="top-note">AI Alchemist</div>
      </header>

      <section className="poster-title">
        <p className="poster-eyebrow">Fair & Ethical Loan Approval</p>
        <h1>Using Machine Learning</h1>
      </section>

      <section className="poster-rule">
        <span>GALGOTIAS UNIVERSITY</span>
        <span>Department of Computer Science & Engineering (CSE)</span>
      </section>

      <main className="poster-grid">
        <aside className="poster-column">
          <InfoPanel title="Overview">
            <p>
              Banks increasingly utilize sophisticated ML algorithms for evaluating loan applications.
              Legacy data often incorporates embedded bias against specific demographic segments.
              New transparent processes can reduce inequity in lending decisions.
            </p>
          </InfoPanel>

          <InfoPanel title="Objectives">
            <ul>
              <li>Biased systems contribute to inequitable credit access.</li>
              <li>Establish verifiable neutrality in lending decisions.</li>
            </ul>
          </InfoPanel>

          <InfoPanel title="Resource Metrics">
            <ul>
              <li>Pipeline Steps</li>
              <li>Data Ingestion</li>
              <li>Data Preprocessing</li>
              <li>Logistic Regression Baseline</li>
              <li>Random Forest Ensemble</li>
              <li>Model Validation</li>
              <li>Key Classes</li>
              <li>Debt-to-Income Ratio</li>
              <li>Length of Credit History</li>
              <li>Monitored Groups</li>
              {monitoredGroups.map((group) => (
                <li key={group}>{group}</li>
              ))}
            </ul>
          </InfoPanel>

          <InfoPanel title="System Architecture">
            <ul>
              <li>Pipeline Steps: Data Ingestion, Data Preprocessing, Model Training</li>
              <li>Models: Logistic Regression and Random Forest</li>
              <li>Key Classes: Debt-to-Income Ratio, Length of Credit History</li>
              <li>Monitored Groups: Binary, Gender, Non-Binary; Religious Groups; Income Bracket</li>
            </ul>
          </InfoPanel>

          <InfoPanel title="Project Findings">
            <p>
              The deployed ML model significantly reduces bias, validating a path towards equitable financial access.
            </p>
          </InfoPanel>
        </aside>

        <section className="poster-center">
          <div className="goal-card">
            <h2>Goal</h2>
            <p>
              Design an impartial AI model to evaluate applicant credit risk while mandating fairness metrics.
            </p>
          </div>

          <div className="pipeline-card" aria-label="Machine learning pipeline">
            {pipelineSteps.map((step, index) => (
              <React.Fragment key={step}>
                <div className="pipeline-step">{step}</div>
                {index < pipelineSteps.length - 1 && <span className="pipeline-arrow">↓</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="results-card">
            <h2>Results</h2>
            <p className="results-subtitle">Regional Credit Approvals Distribution</p>
            <div className="results-layout">
              <div className="pie-chart" aria-label="Regional approvals pie chart">
                <span>32%</span>
              </div>
              <div className="legend">
                {regionalDistribution.map((item) => (
                  <span key={item.label}>
                    <i style={{ backgroundColor: item.color }} />
                    {item.label} <strong>{item.value}%</strong>
                  </span>
                ))}
              </div>
            </div>
            <p className="finding-note">
              The deployed ML model significantly reduces bias, validating a path towards equitable financial access for all community groups.
            </p>

            <div className="model-eval-strip">
              <span><strong>Logistic Regression</strong> accuracy {formatPercent(modelBundle.metrics.logistic.accuracy)}</span>
              <span><strong>Random Forest</strong> accuracy {formatPercent(modelBundle.metrics.forest.accuracy)}</span>
              <span><strong>Selected model</strong> {modelBundle.summary.winner}</span>
            </div>
          </div>
        </section>

        <aside className="poster-column">
          <InfoPanel title="Prediction Inputs">
            <ul>
              {predictionInputs.map((input) => (
                <li key={input}>{input}</li>
              ))}
            </ul>
            <div className={`decision-banner ${liveResult.decision.toLowerCase()}`} key={decisionPulse}>
              <span>Decision</span>
              <strong>{liveResult.decision}</strong>
              <small>{liveResult.confidence}% confidence</small>
            </div>
          </InfoPanel>

          <InfoPanel title="Equity Metrics">
            <ul>
              {equityMetrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </InfoPanel>

          <InfoPanel title="Bias Mitigation Tactics">
            <ul>
              {biasTactics.map((tactic) => (
                <li key={tactic}>{tactic}</li>
              ))}
            </ul>
          </InfoPanel>

          <InfoPanel title="Project Findings">
            <div className="bar-chart">
              {findings.map((item) => (
                <div className="bar-item" key={item.year}>
                  <span style={{ height: `${item.value * 3}px` }} />
                  <small>{item.year}</small>
                </div>
              ))}
            </div>
          </InfoPanel>

          <InfoPanel title="For Further Information">
            <div className="info-cta">
              <div>
                <p className="portal-label">Visit our portal:</p>
                <strong>Fair Access Initiative</strong>
              </div>
              <QrBlock />
            </div>
            <div className="mini-model">
              <span>Live score</span>
              <strong>{Math.round(liveResult.ensembleProbability * 100)}/100</strong>
              <p>{liveResult.summary}</p>
              <ul className="mini-model-list">
                <li>Logistic regression: {formatPercent(liveResult.logisticProbability)}</li>
                <li>Random forest: {formatPercent(liveResult.randomForestProbability)}</li>
                <li>Training set: {modelBundle.datasetSize} cases</li>
              </ul>
            </div>
            <div className="mini-form entry-form">
              <p className="entry-note">Enter applicant details manually to test the ML decision.</p>
              <label>
                Age
                <input type="number" name="age" value={form.age} onChange={handleChange} />
              </label>
              <label>
                Annual income
                <input type="number" name="income" value={form.income} onChange={handleChange} />
              </label>
              <label>
                FICO Score
                <input type="number" name="credit" value={form.credit} onChange={handleChange} />
              </label>
              <label>
                Loan amount
                <input type="number" name="amount" value={form.amount} onChange={handleChange} />
              </label>
              <label>
                Existing debt
                <input type="number" name="debt" value={form.debt} onChange={handleChange} />
              </label>
              <label>
                Credit history years
                <input type="number" name="history" value={form.history} onChange={handleChange} />
              </label>
              <label>
                Employment sector
                <select name="employment" value={form.employment} onChange={handleChange}>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-employed</option>
                  <option value="contract">Contract</option>
                  <option value="unemployed">Unemployed</option>
                </select>
              </label>
              <label>
                Region code
                <select name="region" value={form.region} onChange={handleChange}>
                  <option value="urban">Urban</option>
                  <option value="suburban">Suburban</option>
                  <option value="rural">Rural</option>
                  <option value="high-risk">High-risk area</option>
                </select>
              </label>
              <div className="entry-actions">
                <button type="button" onClick={calculateDecision}>Calculate decision</button>
                <button type="button" onClick={resetForm}>Reset sample</button>
              </div>
            </div>
          </InfoPanel>
        </aside>
      </main>
    </div>
  );
}

function InfoPanel({ title, children }) {
  return (
    <article className="info-panel">
      <h3>{title}</h3>
      {children}
    </article>
  );
}

function QrBlock() {
  const pattern = [
    1, 1, 1, 1, 1, 0, 1, 0, 1,
    1, 0, 0, 0, 1, 0, 0, 1, 0,
    1, 0, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 1, 0, 1, 0, 1,
    1, 1, 1, 1, 1, 0, 1, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 1, 0,
    1, 0, 1, 1, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 0, 1, 0, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1
  ];

  return (
    <div className="qr-wrap" aria-label="QR code style graphic">
      <div className="qr-grid">
        {pattern.map((cell, index) => (
          <span key={index} className={cell ? "filled" : "empty"} />
        ))}
      </div>
      <button type="button" className="learn-more-btn">Learn more</button>
    </div>
  );
}

function evaluateApplicant(form, modelBundle) {
  const vector = buildFeatureVector(form);
  const logisticProbability = predictLogistic(modelBundle.logistic, vector);
  const randomForestProbability = predictForest(modelBundle.forest, vector);
  const ensembleProbability = clamp((logisticProbability * 0.45) + (randomForestProbability * 0.55), 0, 1);
  const decision = ensembleProbability >= 0.56 ? "Accept" : "Reject";
  const confidence = Math.round(Math.abs(ensembleProbability - 0.5) * 2 * 100);
  const score = Math.round(ensembleProbability * 100);
  const summary =
    decision === "Accept"
      ? "Strong eligibility profile from both regression and random forest signals."
      : "High-risk profile that both models place below the approval threshold.";

  return {
    logisticProbability,
    randomForestProbability,
    ensembleProbability,
    confidence,
    score,
    decision,
    summary,
    modelLabel: decision
  };
}

function trainModels(dataset) {
  const splitIndex = Math.max(10, Math.floor(dataset.length * 0.7));
  const trainSet = dataset.slice(0, splitIndex);
  const testSet = dataset.slice(splitIndex);

  const featureStats = computeFeatureStats(trainSet.map(buildFeatureVector));
  const logistic = trainLogisticRegression(trainSet, featureStats);
  const forest = trainRandomForest(trainSet, featureStats, 9, 4);

  const logisticMetrics = evaluateModel(testSet, logistic, featureStats, (model, vector) => predictLogistic(model, vector));
  const forestMetrics = evaluateModel(testSet, forest, featureStats, (model, vector) => predictForest(model, vector));

  const winner = logisticMetrics.accuracy >= forestMetrics.accuracy ? "Logistic Regression" : "Random Forest";

  return {
    datasetSize: dataset.length,
    trainSize: trainSet.length,
    testSize: testSet.length,
    featureStats,
    logistic,
    forest,
    metrics: {
      logistic: logisticMetrics,
      forest: forestMetrics
    },
    summary: {
      winner
    }
  };
}

function trainLogisticRegression(dataset, featureStats) {
  const featureCount = 7;
  let weights = Array(featureCount).fill(0);
  let bias = 0;
  const learningRate = 0.08;
  const iterations = 700;
  const data = dataset.map((row) => ({
    vector: normalizeVector(buildFeatureVector(row), featureStats),
    label: row.approved
  }));

  for (let iteration = 0; iteration < iterations; iteration += 1) {
    let biasGradient = 0;
    const gradients = Array(featureCount).fill(0);

    for (let rowIndex = 0; rowIndex < data.length; rowIndex += 1) {
      const { vector, label } = data[rowIndex];
      const prediction = sigmoid(dot(weights, vector) + bias);
      const error = prediction - label;
      biasGradient += error;
      for (let index = 0; index < featureCount; index += 1) {
        gradients[index] += error * vector[index];
      }
    }

    weights = weights.map((weight, index) => weight - learningRate * gradients[index] / data.length);
    bias -= learningRate * biasGradient / data.length;
  }

  return { weights, bias };
}

function trainRandomForest(dataset, featureStats, treeCount = 7, maxDepth = 4) {
  const forest = [];
  for (let index = 0; index < treeCount; index += 1) {
    const sample = bootstrapSample(dataset);
    forest.push(buildTree(sample, featureStats, maxDepth));
  }
  return forest;
}

function buildTree(rows, featureStats, maxDepth, depth = 0) {
  const positives = rows.filter((row) => row.approved === 1).length;
  const negatives = rows.length - positives;
  const majorityClass = positives >= negatives ? 1 : 0;

  if (depth >= maxDepth || rows.length <= 2 || positives === 0 || negatives === 0) {
    return { type: "leaf", value: majorityClass };
  }

  const features = shuffle([0, 1, 2, 3, 4, 5, 6]).slice(0, 3);
  const split = findBestSplit(rows, features, featureStats);

  if (!split) {
    return { type: "leaf", value: majorityClass };
  }

  return {
    type: "node",
    featureIndex: split.featureIndex,
    threshold: split.threshold,
    left: buildTree(split.left, featureStats, maxDepth, depth + 1),
    right: buildTree(split.right, featureStats, maxDepth, depth + 1)
  };
}

function findBestSplit(rows, features, featureStats) {
  let bestSplit = null;
  let bestScore = Infinity;

  features.forEach((featureIndex) => {
    const values = rows
      .map((row) => normalizeVector(buildFeatureVector(row), featureStats)[featureIndex])
      .sort((left, right) => left - right);
    const thresholds = uniqueMidpoints(values);

    thresholds.forEach((threshold) => {
      const left = [];
      const right = [];
      rows.forEach((row) => {
        const value = normalizeVector(buildFeatureVector(row), featureStats)[featureIndex];
        if (value <= threshold) {
          left.push(row);
        } else {
          right.push(row);
        }
      });

      if (left.length === 0 || right.length === 0) {
        return;
      }

      const score = weightedGini(left, right);
      if (score < bestScore) {
        bestScore = score;
        bestSplit = { featureIndex, threshold, left, right };
      }
    });
  });

  return bestSplit;
}

function evaluateModel(testSet, model, featureStats, predictFn) {
  const rows = testSet.length > 0 ? testSet : loanDataset.slice(-4);
  let truePositive = 0;
  let trueNegative = 0;
  let falsePositive = 0;
  let falseNegative = 0;

  rows.forEach((row) => {
    const vector = normalizeVector(buildFeatureVector(row), featureStats);
    const probability = predictFn(model, vector);
    const prediction = probability >= 0.5 ? 1 : 0;

    if (prediction === 1 && row.approved === 1) truePositive += 1;
    if (prediction === 0 && row.approved === 0) trueNegative += 1;
    if (prediction === 1 && row.approved === 0) falsePositive += 1;
    if (prediction === 0 && row.approved === 1) falseNegative += 1;
  });

  const accuracy = (truePositive + trueNegative) / rows.length;
  const precision = truePositive / Math.max(1, truePositive + falsePositive);
  const recall = truePositive / Math.max(1, truePositive + falseNegative);
  const f1 = (2 * precision * recall) / Math.max(1e-9, precision + recall);

  return {
    accuracy,
    precision,
    recall,
    f1,
    confusion: {
      truePositive,
      trueNegative,
      falsePositive,
      falseNegative
    }
  };
}

function predictLogistic(model, vector) {
  return sigmoid(dot(model.weights, vector) + model.bias);
}

function predictForest(forest, vector) {
  const total = forest.reduce((sum, tree) => sum + predictTree(tree, vector), 0);
  return total / forest.length;
}

function predictTree(tree, vector) {
  if (tree.type === "leaf") {
    return tree.value;
  }

  if (vector[tree.featureIndex] <= tree.threshold) {
    return predictTree(tree.left, vector);
  }

  return predictTree(tree.right, vector);
}

function buildFeatureVector(row) {
  const income = row.income || 1;
  const amount = row.amount || 0;
  const debt = row.debt || 0;
  const debtToIncome = debt / income;
  const amountToIncome = amount / income;

  return [
    row.age / 75,
    income / 150000,
    row.credit / 850,
    debtToIncome,
    row.history / 12,
    amountToIncome,
    row.employment === "employed" ? 1 : row.employment === "self-employed" ? 0.75 : row.employment === "contract" ? 0.5 : 0.1
  ];
}

function computeFeatureStats(vectors) {
  const featureCount = vectors[0].length;
  const means = Array(featureCount).fill(0);
  const deviations = Array(featureCount).fill(0);

  vectors.forEach((vector) => {
    vector.forEach((value, index) => {
      means[index] += value;
    });
  });

  means.forEach((sum, index) => {
    means[index] = sum / vectors.length;
  });

  vectors.forEach((vector) => {
    vector.forEach((value, index) => {
      deviations[index] += Math.pow(value - means[index], 2);
    });
  });

  const standardDeviations = deviations.map((sum) => Math.sqrt(sum / vectors.length) || 1);
  return { means, standardDeviations };
}

function normalizeVector(vector, stats) {
  return vector.map((value, index) => (value - stats.means[index]) / stats.standardDeviations[index]);
}

function uniqueMidpoints(values) {
  const result = [];
  for (let index = 1; index < values.length; index += 1) {
    if (values[index] !== values[index - 1]) {
      result.push((values[index] + values[index - 1]) / 2);
    }
  }
  return result.length > 0 ? result : [values[Math.floor(values.length / 2)]];
}

function weightedGini(left, right) {
  const total = left.length + right.length;
  return (left.length / total) * gini(left) + (right.length / total) * gini(right);
}

function gini(rows) {
  if (rows.length === 0) {
    return 0;
  }

  const positives = rows.filter((row) => row.approved === 1).length;
  const probability = positives / rows.length;
  return 1 - probability * probability - (1 - probability) * (1 - probability);
}

function bootstrapSample(dataset) {
  const sample = [];
  for (let index = 0; index < dataset.length; index += 1) {
    sample.push(dataset[Math.floor(Math.random() * dataset.length)]);
  }
  return sample;
}

function shuffle(values) {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function dot(weights, vector) {
  return weights.reduce((sum, weight, index) => sum + weight * vector[index], 0);
}

function sigmoid(value) {
  return 1 / (1 + Math.exp(-value));
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default App;
