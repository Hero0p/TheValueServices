import './TaxCalculator.css'

export default function TaxCalculator() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Tax Strategy Impact Calculator</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n:root {\n  --navy: #0b1f3b;\n  --navy2: #1a2f4f;\n  --teal: #0d9488;\n  --teal2: #14b8a6;\n  --gold: #f59e0b;\n  --cream: #fafaf8;\n  --white: #ffffff;\n  --red: #dc2626;\n  --green: #059669;\n  --green2: #10b981;\n  --muted: #64748b;\n  --border: #e2e8f0;\n  --text: #0f172a;\n  --soft: #f1f5f9;\n}\n*{box-sizing:border-box; margin:0; padding:0;}\n\nbody {\n  font-family: 'DM Sans', sans-serif;\n  color: var(--text);\n  background: var(--cream);\n  min-height: 100vh;\n}\n\n/* ---- HERO ---- */\n.hero-section {\n  background: linear-gradient(135deg, var(--navy) 0%, #163354 60%, #0f4c75 100%);\n  color: #fff;\n  padding: 0;\n  position: relative;\n  overflow: hidden;\n}\n.hero-section::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n.topbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 40px;\n  position: relative;\n  border-bottom: 1px solid rgba(255,255,255,0.08);\n}\n.brand-name {\n  font-family: 'Playfair Display', serif;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.brand-tag { font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 2px; }\n.top-actions { display: flex; gap: 10px; }\n.btn-ghost {\n  background: rgba(255,255,255,0.1);\n  border: 1px solid rgba(255,255,255,0.2);\n  color: #fff;\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: 'DM Sans', sans-serif;\n  transition: background 0.2s;\n}\n.btn-ghost:hover { background: rgba(255,255,255,0.18); }\n.hero-content {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 52px 40px 56px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n  position: relative;\n}\n\n/* Pain → Solution Journey */\n.hero-eyebrow {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--teal2);\n  margin-bottom: 16px;\n}\n.hero-title {\n  font-family: 'Playfair Display', serif;\n  font-size: 44px;\n  font-weight: 900;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  margin-bottom: 20px;\n}\n.hero-title span { color: var(--gold); }\n.hero-body {\n  font-size: 16px;\n  line-height: 1.7;\n  color: rgba(255,255,255,0.75);\n  margin-bottom: 28px;\n}\n.pain-points {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 28px;\n}\n.pain-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.8);\n}\n.pain-icon {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: rgba(220,38,38,0.25);\n  border: 1px solid rgba(220,38,38,0.4);\n  color: #fca5a5;\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.hero-cta {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.btn-primary {\n  background: linear-gradient(135deg, var(--teal), #0a7a71);\n  color: #fff;\n  border: none;\n  padding: 14px 24px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: 'DM Sans', sans-serif;\n  transition: transform 0.15s, box-shadow 0.15s;\n  box-shadow: 0 4px 20px rgba(13,148,136,0.4);\n}\n.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(13,148,136,0.5); }\n.btn-secondary {\n  background: rgba(255,255,255,0.1);\n  color: #fff;\n  border: 1px solid rgba(255,255,255,0.25);\n  padding: 14px 24px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: 'DM Sans', sans-serif;\n}\n\n/* Hero card */\n.hero-card {\n  background: rgba(255,255,255,0.07);\n  border: 1px solid rgba(255,255,255,0.15);\n  border-radius: 20px;\n  padding: 30px;\n  backdrop-filter: blur(8px);\n}\n.hero-card-title {\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.5);\n  margin-bottom: 20px;\n}\n.stat-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 0;\n  border-bottom: 1px solid rgba(255,255,255,0.08);\n}\n.stat-row:last-child { border-bottom: none; }\n.stat-icon-box {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.stat-icon-red { background: rgba(220,38,38,0.2); }\n.stat-icon-green { background: rgba(16,185,129,0.2); }\n.stat-icon-teal { background: rgba(13,148,136,0.2); }\n.stat-icon-gold { background: rgba(245,158,11,0.2); }\n.stat-label { font-size: 12px; color: rgba(255,255,255,0.55); flex: 1; }\n.stat-value { font-size: 22px; font-weight: 900; font-family: 'Playfair Display', serif; }\n.stat-sub { font-size: 11px; color: rgba(255,255,255,0.4); }\n.stat-value.red { color: #fca5a5; }\n.stat-value.green { color: #6ee7b7; }\n.stat-value.teal { color: var(--teal2); }\n.stat-value.gold { color: #fcd34d; }\n\n/* ---- HOW IT WORKS ---- */\n.how-section {\n  background: #fff;\n  padding: 60px 40px;\n  border-bottom: 1px solid var(--border);\n}\n.section-eyebrow {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--teal);\n  margin-bottom: 12px;\n}\n.section-title {\n  font-family: 'Playfair Display', serif;\n  text-align: center;\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin-bottom: 10px;\n}\n.section-sub {\n  text-align: center;\n  font-size: 15px;\n  color: var(--muted);\n  margin-bottom: 48px;\n  max-width: 580px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.steps-grid {\n  max-width: 900px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.step-card {\n  background: var(--soft);\n  border-radius: 16px;\n  padding: 28px 24px;\n  position: relative;\n}\n.step-num {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--navy);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.step-title { font-size: 16px; font-weight: 700; margin-bottom: 8px; }\n.step-body { font-size: 14px; color: var(--muted); line-height: 1.6; }\n\n/* ---- MAIN CALCULATOR ---- */\n.calc-section {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 60px 40px;\n}\n.calc-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 36px;\n  flex-wrap: wrap;\n}\n.calc-header-left {}\n.calc-label {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--teal);\n  margin-bottom: 8px;\n}\n.calc-title {\n  font-family: 'Playfair Display', serif;\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n\n.card {\n  background: #fff;\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding: 28px;\n  box-shadow: 0 4px 24px rgba(15,23,42,0.06);\n}\n\n/* Scenario split */\n.scenario-split {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.scenario-a {\n  background: #fff9f9;\n  padding: 24px;\n  border-right: 1px solid var(--border);\n}\n.scenario-b {\n  background: #f0fdf8;\n  padding: 24px;\n}\n.sc-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.sc-badge.red { background: #fee2e2; color: #dc2626; }\n.sc-badge.green { background: #dcfce7; color: #059669; }\n.sc-name { font-size: 18px; font-weight: 800; margin-bottom: 6px; }\n.sc-desc { font-size: 13px; color: var(--muted); line-height: 1.5; margin-bottom: 16px; }\n.sc-tax {\n  font-family: 'Playfair Display', serif;\n  font-size: 32px;\n  font-weight: 700;\n}\n.sc-tax.red { color: var(--red); }\n.sc-tax.green { color: var(--green); }\n.sc-tax-label { font-size: 12px; color: var(--muted); margin-top: 4px; }\n\n/* Form grid */\n.form-section { margin-bottom: 24px; }\n.form-section-title {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--navy);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding-bottom: 10px;\n  border-bottom: 2px solid var(--navy);\n  margin-bottom: 18px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-group { display: flex; flex-direction: column; gap: 6px; }\n.form-group.full { grid-column: 1 / -1; }\nlabel {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\ninput, select, textarea {\n  padding: 12px 14px;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  font-size: 15px;\n  font-family: 'DM Sans', sans-serif;\n  color: var(--text);\n  background: #fff;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  width: 100%;\n}\ninput:focus, select:focus, textarea:focus {\n  outline: none;\n  border-color: var(--teal);\n  box-shadow: 0 0 0 3px rgba(13,148,136,0.12);\n}\n.radio-group {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.radio-option {\n  flex: 1;\n  min-width: 140px;\n}\n.radio-option input[type=\"radio\"] {\n  display: none;\n}\n.radio-label {\n  display: block;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  font-size: 14px;\n}\n.radio-option input[type=\"radio\"]:checked + .radio-label {\n  border-color: var(--teal) !important;\n  background: rgba(13,148,136,0.1) !important;\n  color: var(--teal);\n}\n.radio-label:hover {\n  border-color: var(--teal) !important;\n}\n\n.hint {\n  font-size: 12px;\n  color: var(--muted);\n  line-height: 1.5;\n}\n\n/* ---- FACTOR TOGGLE ---- */\n.factor-toggle-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.factor-label-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.factor-selected {\n  font-size: 22px;\n  font-weight: 900;\n  color: var(--teal);\n  font-family: 'Playfair Display', serif;\n  line-height: 1;\n}\n.factor-selected span {\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--muted);\n  margin-left: 4px;\n}\n.factor-buttons {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.factor-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1.5px solid var(--border);\n  background: #fff;\n  color: var(--text);\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: 'DM Sans', sans-serif;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.factor-btn:hover {\n  border-color: var(--teal);\n  color: var(--teal);\n  background: #f0fdf9;\n}\n.factor-btn.active {\n  background: var(--teal);\n  border-color: var(--teal);\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(13,148,136,0.35);\n}\n.factor-deduction-preview {\n  font-size: 12px;\n  color: var(--muted);\n  background: var(--soft);\n  border-radius: 6px;\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n}\n.factor-deduction-preview strong {\n  color: var(--teal);\n}\ntextarea { min-height: 72px; resize: vertical; }\n\n/* Tooltip helper */\n.tooltip-wrap { position: relative; display: inline-flex; align-items: center; gap: 5px; }\n.tooltip-icon {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--border);\n  color: var(--muted);\n  font-size: 10px;\n  font-weight: 800;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: help;\n}\n.tooltip-icon:hover + .tooltip-box { display: block; }\n.tooltip-box {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  margin-top: 6px;\n  width: 220px;\n  background: var(--navy);\n  color: #fff;\n  font-size: 12px;\n  line-height: 1.5;\n  padding: 10px 12px;\n  border-radius: 10px;\n  z-index: 100;\n  box-shadow: 0 8px 24px rgba(0,0,0,0.25);\n}\n\n.form-actions {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-top: 20px;\n  flex-wrap: wrap;\n}\n.btn-run {\n  background: var(--navy);\n  color: #fff;\n  border: none;\n  padding: 13px 28px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: 'DM Sans', sans-serif;\n  transition: background 0.2s;\n}\n.btn-run:hover { background: var(--navy2); }\n.btn-reset {\n  background: transparent;\n  color: var(--muted);\n  border: 1px solid var(--border);\n  padding: 13px 20px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: 'DM Sans', sans-serif;\n}\n\n/* Scenario save/load bar */\n.scenario-bar {\n  background: var(--soft);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 14px 16px;\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  margin-top: 16px;\n}\n.scenario-bar .sb-field { flex: 1; min-width: 160px; }\n.scenario-bar .sb-field label { color: var(--muted); text-transform: uppercase; font-size: 11px; letter-spacing: 0.06em; display: block; margin-bottom: 5px; font-weight: 700; }\n.scenario-bar input, .scenario-bar select { font-size: 13px; padding: 9px 12px; }\n.sb-actions { display: flex; gap: 8px; align-items: flex-end; }\n.btn-sm {\n  padding: 9px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: 'DM Sans', sans-serif;\n  border: 1px solid var(--border);\n  background: #fff;\n  color: var(--text);\n}\n.btn-sm.primary { background: var(--navy); color: #fff; border-color: transparent; }\n\n/* ---- RESULTS ---- */\n.results-section {\n  background: var(--navy);\n  color: #fff;\n  padding: 60px 40px;\n}\n.results-inner { max-width: 1100px; margin: 0 auto; }\n.results-eyebrow {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--teal2);\n  margin-bottom: 8px;\n}\n.results-title {\n  font-family: 'Playfair Display', serif;\n  font-size: 30px;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n.results-sub {\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n  margin-bottom: 36px;\n}\n\n/* KPI Grid */\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 36px;\n}\n.kpi-card {\n  background: rgba(255,255,255,0.06);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 14px;\n  padding: 20px 18px;\n  transition: transform 0.2s;\n}\n.kpi-card:hover { transform: translateY(-2px); }\n.kpi-card.highlight {\n  background: linear-gradient(135deg, rgba(16,185,129,0.2), rgba(13,148,136,0.15));\n  border-color: rgba(16,185,129,0.4);\n}\n.kpi-card.warning {\n  background: rgba(245,158,11,0.1);\n  border-color: rgba(245,158,11,0.3);\n}\n.kpi-eyebrow {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.4);\n  margin-bottom: 8px;\n}\n.kpi-value {\n  font-family: 'Playfair Display', serif;\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.kpi-value.green { color: #6ee7b7; }\n.kpi-value.red { color: #fca5a5; }\n.kpi-value.gold { color: #fcd34d; }\n.kpi-value.teal { color: var(--teal2); }\n.kpi-label {\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  line-height: 1.4;\n}\n\n/* Scenario comparison boxes */\n.comparison-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 36px;\n}\n.comp-box {\n  border-radius: 14px;\n  padding: 22px;\n}\n.comp-box.a { background: rgba(220,38,38,0.1); border: 1px solid rgba(220,38,38,0.25); }\n.comp-box.b { background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25); }\n.comp-box-title {\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 6px;\n}\n.comp-box.a .comp-box-title { color: #fca5a5; }\n.comp-box.b .comp-box-title { color: #6ee7b7; }\n.comp-box-desc { font-size: 13px; color: rgba(255,255,255,0.6); margin-bottom: 16px; line-height: 1.5; }\n.comp-tax {\n  font-family: 'Playfair Display', serif;\n  font-size: 36px;\n  font-weight: 700;\n}\n.comp-box.a .comp-tax { color: #fca5a5; }\n.comp-box.b .comp-tax { color: #6ee7b7; }\n.comp-sub { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 4px; }\n\n/* Detail table */\n.detail-table-wrap { overflow-x: auto; }\n.detail-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.detail-table th {\n  background: rgba(255,255,255,0.07);\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: rgba(255,255,255,0.5);\n  border-bottom: 1px solid rgba(255,255,255,0.1);\n}\n.detail-table td {\n  padding: 10px 14px;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  color: rgba(255,255,255,0.8);\n}\n.detail-table tr:last-child td { border-bottom: none; }\n.detail-table tr.highlight td { background: rgba(16,185,129,0.1); font-weight: 700; color: #6ee7b7; }\n\n/* Bar chart */\n.bar-section {\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 14px;\n  padding: 22px;\n  margin-bottom: 20px;\n}\n.bar-title {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: rgba(255,255,255,0.4);\n  margin-bottom: 18px;\n}\n.bar-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-row:last-child { margin-bottom: 0; }\n.bar-lbl { width: 200px; font-size: 13px; color: rgba(255,255,255,0.7); flex-shrink: 0; }\n.bar-track { flex: 1; height: 24px; background: rgba(255,255,255,0.08); border-radius: 999px; overflow: hidden; }\n.bar-fill { height: 24px; border-radius: 999px; width: 0%; transition: width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1); }\n.bar-val { width: 110px; text-align: right; font-weight: 700; font-size: 14px; flex-shrink: 0; }\n\n/* Future value section */\n.future-box {\n  background: rgba(245,158,11,0.08);\n  border: 1px solid rgba(245,158,11,0.25);\n  border-radius: 14px;\n  padding: 22px;\n  margin-bottom: 20px;\n}\n.future-title { font-size: 14px; font-weight: 700; color: #fcd34d; margin-bottom: 6px; }\n.future-sub { font-size: 12px; color: rgba(255,255,255,0.45); margin-bottom: 18px; }\n\n/* ---- EDUCATIONAL SECTION ---- */\n.edu-section {\n  background: #fff;\n  padding: 60px 40px;\n}\n.edu-inner { max-width: 1100px; margin: 0 auto; }\n.edu-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  margin-top: 40px;\n}\n.edu-card {\n  border-radius: 16px;\n  padding: 28px;\n}\n.edu-card.pain {\n  background: #fff1f2;\n  border: 1px solid #fecdd3;\n}\n.edu-card.solution {\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n}\n.edu-card-title {\n  font-size: 16px;\n  font-weight: 800;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.edu-card.pain .edu-card-title { color: #be123c; }\n.edu-card.solution .edu-card-title { color: #065f46; }\n.edu-item {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 12px;\n  align-items: flex-start;\n}\n.edu-item:last-child { margin-bottom: 0; }\n.edu-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  margin-top: 7px;\n  flex-shrink: 0;\n}\n.edu-card.pain .edu-dot { background: #dc2626; }\n.edu-card.solution .edu-dot { background: #059669; }\n.edu-item-text { font-size: 14px; color: var(--text); line-height: 1.6; }\n\n/* How depreciation works */\n.mechanics-section {\n  background: var(--soft);\n  padding: 60px 40px;\n}\n.mechanics-inner { max-width: 1100px; margin: 0 auto; }\n.mechanics-timeline {\n  display: flex;\n  gap: 0;\n  margin-top: 40px;\n  position: relative;\n}\n.mechanics-timeline::before {\n  content: '';\n  position: absolute;\n  top: 28px;\n  left: calc(16px + 16px);\n  right: calc(100% - (calc(16px + 16px) + calc(100% - (5 * (16px + 16px)))));\n  height: 2px;\n  background: var(--border);\n}\n.m-step {\n  flex: 1;\n  text-align: center;\n  padding: 0 12px;\n  position: relative;\n}\n.m-circle {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--navy);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n  position: relative;\n  z-index: 1;\n}\n.m-step-title { font-size: 14px; font-weight: 700; margin-bottom: 6px; }\n.m-step-body { font-size: 12px; color: var(--muted); line-height: 1.5; }\n\n/* Disclaimer */\n.disclaimer-section {\n  background: #fff;\n  padding: 40px 40px;\n  border-top: 1px solid var(--border);\n}\n.disclaimer-inner { max-width: 1100px; margin: 0 auto; }\n.disclaimer-box {\n  background: var(--soft);\n  border-radius: 12px;\n  padding: 20px 24px;\n}\n.disclaimer-title { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px; color: var(--muted); }\n.disclaimer-text { font-size: 12px; color: var(--muted); line-height: 1.7; }\n\n/* Summary / CTA */\n.summary-section {\n  background: linear-gradient(135deg, var(--navy), #163354);\n  color: #fff;\n  padding: 60px 40px;\n}\n.summary-inner {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n.summary-title {\n  font-family: 'Playfair Display', serif;\n  font-size: 30px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.summary-body { font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.7; margin-bottom: 20px; }\n.summary-list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.summary-list li {\n  display: flex;\n  gap: 8px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.75);\n  align-items: flex-start;\n}\n.summary-list li::before {\n  content: '✓';\n  color: var(--teal2);\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.summary-card {\n  background: rgba(255,255,255,0.08);\n  border: 1px solid rgba(255,255,255,0.15);\n  border-radius: 18px;\n  padding: 28px;\n}\n.summary-card-title { font-size: 14px; font-weight: 700; color: rgba(255,255,255,0.6); margin-bottom: 16px; }\n.summary-stat { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }\n.summary-stat:last-of-type { border-bottom: none; }\n.summary-stat-label { font-size: 13px; color: rgba(255,255,255,0.6); }\n.summary-stat-val { font-size: 18px; font-weight: 800; color: #6ee7b7; }\n.summary-stat-val.white { color: #fff; }\n.summary-actions { display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap; }\n\n/* Modal */\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15,23,42,0.65);\n  display: none;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  z-index: 100;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  max-width: 720px;\n  width: 100%;\n  padding: 28px;\n  max-height: 85vh;\n  overflow-y: auto;\n  box-shadow: 0 24px 60px rgba(0,0,0,0.25);\n}\n.modal-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.modal-title { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; }\n.modal-close {\n  background: var(--soft);\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  font-size: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal p, .modal li { font-size: 14px; color: var(--muted); line-height: 1.7; margin-bottom: 10px; }\n.modal ol, .modal ul { padding-left: 18px; }\n\n/* Toast */\n.toast {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  background: var(--navy);\n  color: #fff;\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  box-shadow: 0 8px 24px rgba(0,0,0,0.2);\n  display: none;\n  z-index: 200;\n}\n\n/* Progress tracker */\n.progress-tracker {\n  background: rgba(255,255,255,0.95);\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  padding: 8px 18px;\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  box-shadow: 0 4px 16px rgba(0,0,0,0.08);\n}\n.progress-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--border);\n}\n.progress-dot.active { background: var(--teal); }\n.progress-dot.done { background: var(--navy); }\n.progress-label { font-size: 12px; font-weight: 700; color: var(--muted); margin-left: 6px; }\n\n/* Responsive */\n@media (max-width: 900px) {\n  .hero-content { grid-template-columns: 1fr; gap: 36px; padding: 36px 20px 40px; }\n  .topbar { padding: 14px 20px; }\n  .hero-title { font-size: 34px; }\n  .steps-grid { grid-template-columns: 1fr; }\n  .how-section, .edu-section, .mechanics-section, .disclaimer-section, .summary-section { padding: 40px 20px; }\n  .calc-section { padding: 40px 20px; }\n  .results-section { padding: 40px 20px; }\n  .kpi-grid { grid-template-columns: repeat(2, 1fr); }\n  .comparison-grid, .edu-grid, .summary-inner { grid-template-columns: 1fr; }\n  .form-grid { grid-template-columns: 1fr; }\n  .scenario-split { grid-template-columns: 1fr; }\n  .scenario-a { border-right: none; border-bottom: 1px solid var(--border); }\n  .mechanics-timeline { flex-direction: column; gap: 20px; }\n  .mechanics-timeline::before { display: none; }\n  .m-circle { margin: 0 0 10px 0; }\n  .m-step { text-align: left; display: flex; gap: 14px; align-items: flex-start; }\n  .bar-lbl { width: 130px; }\n}\n\n@media print {\n  .topbar, .hero-cta, .form-actions, .scenario-bar, .top-actions, .summary-actions { display: none !important; }\n  body { background: #fff; }\n  .hero-section { color-adjust: exact; -webkit-print-color-adjust: exact; }\n}\n\n/* Animations */\n.fade-in { opacity: 0; transform: translateY(12px); transition: opacity 0.5s ease, transform 0.5s ease; }\n.fade-in.visible { opacity: 1; transform: translateY(0); }\n"
        }}
      />
      {/* HERO */}
      <section className="hero-section">
        <div className="topbar">
          <div>
            <div className="brand-name">Tax Strategy Calculator</div>
            <div className="brand-tag">
              Educational illustration only • Not tax advice
            </div>
          </div>
          <div className="top-actions">
            <button className="btn-ghost" id="printBtn">
              ⬇ Print / Save
            </button>
            <button className="btn-ghost" id="methodBtn">
              Methodology
            </button>
          </div>
        </div>
        <div className="hero-content">
          <div>
            <div className="hero-eyebrow">Understanding Your Tax Burden</div>
            <h1 className="hero-title">
              You may be paying more tax than <span>you need to.</span>
            </h1>
            <p className="hero-body">
              High-income earners often lose 35–50 cents of every dollar they earn
              to federal and state taxes. This tool helps you visualize what
              different tax strategies could look like — side by side with your
              current path.
            </p>
            <div className="pain-points">
              <div className="pain-item">
                <div className="pain-icon">✕</div>
                <span>
                  Paying six figures in taxes with no deferral or offset strategy in
                  place
                </span>
              </div>
              <div className="pain-item">
                <div className="pain-icon">✕</div>
                <span>
                  Not knowing whether the cost of a strategy exceeds the potential
                  benefit
                </span>
              </div>
              <div className="pain-item">
                <div className="pain-icon">✕</div>
                <span>
                  Your CPA files — but doesn't proactively identify opportunities
                </span>
              </div>
            </div>
            <div className="hero-cta">
              <button className="btn-primary" id="heroCalcBtn">
                See My Numbers →
              </button>
              <button className="btn-secondary" id="heroLearnBtn">
                How It Works
              </button>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-title">Live Calculation Preview</div>
            <div className="stat-row">
              <div className="stat-icon-box stat-icon-red">🔴</div>
              <div>
                <div className="stat-label">Without strategy (Scenario A)</div>
                <div className="stat-value red" id="heroTaxNo">
                  $0
                </div>
              </div>
            </div>
            <div className="stat-row">
              <div className="stat-icon-box stat-icon-green">🟢</div>
              <div>
                <div className="stat-label">With strategy (Scenario B)</div>
                <div className="stat-value green" id="heroTaxYes">
                  $0
                </div>
              </div>
            </div>
            <div className="stat-row">
              <div className="stat-icon-box stat-icon-teal">💰</div>
              <div>
                <div className="stat-label">
                  Est. difference after cost (Year 1)
                </div>
                <div className="stat-value teal" id="heroNet">
                  $0
                </div>
              </div>
            </div>
            <div className="stat-row">
              <div className="stat-icon-box stat-icon-gold">📈</div>
              <div>
                <div className="stat-label">
                  Hypothetical 5-year value (8% assumption)
                </div>
                <div className="stat-value gold" id="heroFive">
                  $0
                </div>
                <div className="stat-sub">Illustrative only — not a guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section className="how-section" id="how">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-eyebrow">The Strategy in Plain English</div>
          <div className="section-title" id="howTitle">
            How tax deductions can lower your taxable income
          </div>
          <div className="section-sub" id="howSubtitle">
            Many high-income earners qualify for legal deductions they're not using.
            Here's the core concept, simplified.
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <div className="step-title" id="step1Title">
                You invest in qualifying equipment or assets
              </div>
              <div className="step-body" id="step1Body">
                Eligible businesses or passive investments can place qualifying
                assets in service. Under IRC §168, bonus depreciation allows a large
                first-year deduction — instead of spreading it over years.
              </div>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <div className="step-title">
                The deduction reduces your taxable income
              </div>
              <div className="step-body" id="step2Body">
                The depreciation amount is subtracted from your gross income before
                tax is calculated. The larger the deduction, the lower the taxable
                income — and the lower your estimated tax bill for that year.
              </div>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <div className="step-title">We compare both paths side by side</div>
              <div className="step-body">
                This calculator models two scenarios: <strong>A</strong> — your
                current path with no deduction strategy — and <strong>B</strong> —
                the same income with a deduction applied. You see the estimated
                difference in real dollars, including implementation cost.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CALCULATOR INPUTS */}
      <section className="calc-section" id="calc">
        <div className="calc-header">
          <div className="calc-header-left">
            <div className="calc-label">Step 1 of 1</div>
            <div className="calc-title">Enter your scenario details</div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "var(--muted)",
              fontSize: 13
            }}
          >
            <span>Results update automatically as you type</span>
          </div>
        </div>
        {/* Scenario Comparison Preview */}
        <div className="scenario-split" style={{ marginBottom: 28 }}>
          <div className="scenario-a">
            <div className="sc-badge red">⚠ Scenario A — Current Path</div>
            <div className="sc-name">No Deduction Strategy</div>
            <div className="sc-desc">
              Your estimated tax if you take no additional deductions beyond
              standard. This is the baseline — what most high earners pay.
            </div>
            <div className="sc-tax red" id="scTaxA">
              $0
            </div>
            <div className="sc-tax-label">
              Estimated total tax (federal + state)
            </div>
          </div>
          <div className="scenario-b">
            <div className="sc-badge green">✓ Scenario B — With Strategy</div>
            <div className="sc-name" id="scNameB">
              Strategy Applied
            </div>
            <div className="sc-desc">
              Estimated tax if a deduction is modeled at the amount you select.
              Includes implementation cost in the comparison.
            </div>
            <div className="sc-tax green" id="scTaxB">
              $0
            </div>
            <div className="sc-tax-label">
              Estimated total tax (federal + state)
            </div>
          </div>
        </div>
        <div className="card">
          {/* Your Situation */}
          <div className="form-section">
            <div className="form-section-title">📋 Your Situation</div>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="strategyType">Strategy Type</label>
                <select id="strategyType">
                  <option value="tiny-homes">
                    Tiny Homes (Bonus Depreciation)
                  </option>
                  <option value="charitable">Charitable Contributions</option>
                  <option value="equipment">Equipment (Bonus Depreciation)</option>
                  <option value="custom">Custom Strategy</option>
                </select>
                <div className="hint" id="strategyHint">
                  Uses bonus depreciation - state conformity matters
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="clientName">Scenario Label</label>
                <input
                  id="clientName"
                  type="text"
                  defaultValue="My Scenario"
                  placeholder="e.g., Jane Smith 2025"
                />
                <div className="hint">For your reference only</div>
              </div>
              <div className="form-group">
                <label htmlFor="filingStatus">Filing Status</label>
                <select id="filingStatus" />
              </div>
              <div className="form-group">
                <label htmlFor="grossIncome">
                  <div className="tooltip-wrap">
                    Gross Annual Income ($)
                    <span className="tooltip-icon">?</span>
                    <div className="tooltip-box">
                      Your total income before deductions. We'll subtract your
                      standard deduction and any traditional contributions
                      automatically.
                    </div>
                  </div>
                </label>
                <input
                  id="grossIncome"
                  type="number"
                  min={0}
                  step={1000}
                  defaultValue={500000}
                />
                <div className="hint">
                  Before deductions — we subtract the standard deduction
                  automatically
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contributions">Traditional Contributions ($)</label>
                <input
                  id="contributions"
                  type="number"
                  min={0}
                  step={100}
                  defaultValue={0}
                />
                <div className="hint">
                  401(k), HSA, Traditional IRA — reduces taxable income
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <select id="state" />
                <div className="hint" id="stateHint" />
              </div>
              <div className="form-group full" id="conformityGroup">
                <label>
                  <div className="tooltip-wrap">
                    State Bonus Depreciation Conformity
                    <span className="tooltip-icon">?</span>
                    <div className="tooltip-box">
                      Only applies to bonus depreciation strategies (Tiny Homes,
                      Equipment). Does not affect Charitable Contributions - those
                      deductions work at state level regardless of conformity.
                    </div>
                  </div>
                </label>
                <div className="radio-group">
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="conformsYes"
                      name="conformity"
                      defaultValue="yes"
                      defaultChecked=""
                    />
                    <label
                      htmlFor="conformsYes"
                      className="radio-label"
                      style={{
                        background: "var(--soft)",
                        border: "1.5px solid var(--border)",
                        padding: 12,
                        borderRadius: 10,
                        cursor: "pointer"
                      }}
                    >
                      Conforms
                    </label>
                  </div>
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="conformsNo"
                      name="conformity"
                      defaultValue="no"
                    />
                    <label
                      htmlFor="conformsNo"
                      className="radio-label"
                      style={{
                        background: "var(--soft)",
                        border: "1.5px solid var(--border)",
                        padding: 12,
                        borderRadius: 10,
                        cursor: "pointer"
                      }}
                    >
                      Does Not Conform
                    </label>
                  </div>
                </div>
                <div className="hint">
                  For bonus depreciation only - not applicable to charitable
                  contributions
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="applyEbl">
                  <div className="tooltip-wrap">
                    Income Type (W-2 vs Business)
                    <span className="tooltip-icon">?</span>
                    <div className="tooltip-box">
                      W-2 income is subject to an excess business loss limit of 60%
                      of gross income. Business income may not be capped the same
                      way. Choose accordingly to model the correct limit.
                    </div>
                  </div>
                </label>
                <select id="applyEbl">
                  <option value="yes">
                    W-2 / Salary income (60% of gross income cap)
                  </option>
                  <option value="no">
                    Business / pass-through income (no annual cap)
                  </option>
                </select>
                <div className="hint">
                  Determines whether the excess business loss limit (60% of gross
                  income) applies
                </div>
              </div>
            </div>
          </div>
          {/* Strategy Parameters */}
          <div className="form-section">
            <div className="form-section-title">⚙️ Strategy Parameters</div>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="investmentAmount">
                  <div className="tooltip-wrap">
                    Deduction-Related Investment Amount ($)
                    <span className="tooltip-icon">?</span>
                    <div className="tooltip-box">
                      The amount placed into the qualifying asset. The gross
                      deduction = investment × the Bonus Depreciation Factor you
                      select (1–10). A factor of 5 means $50K → ~$250K deduction.
                    </div>
                  </div>
                </label>
                <select id="investmentAmount">
                  <option value={35000}>$35,000</option>
                  <option value={50000} selected="">
                    $50,000
                  </option>
                  <option value={65000}>$65,000</option>
                  <option value={70000}>$70,000</option>
                  <option value={100000}>$100,000</option>
                  <option value={130000}>$130,000</option>
                  <option value={140000}>$140,000</option>
                  <option value={200000}>$200,000</option>
                  <option value={260000}>$260,000</option>
                  <option value={300000}>$300,000</option>
                  <option value={390000}>$390,000</option>
                </select>
                <div className="hint" id="deductionModeledHint">
                  Gross deduction ={" "}
                  <strong id="deductionModeledAmt">$250,000</strong> ($50,000 × 5×)
                </div>
              </div>
              <div className="form-group full">
                <label htmlFor="leverageFactor">
                  <div className="tooltip-wrap">
                    Bonus Depreciation Factor
                    <span className="tooltip-icon">?</span>
                    <div className="tooltip-box">
                      The multiplier applied to your investment to estimate the
                      gross bonus depreciation deduction. A factor of 5 means a
                      $50,000 investment generates ~$250,000 in deductions. Choose
                      1–10 based on your specific program structure.
                    </div>
                  </div>
                </label>
                <div className="factor-toggle-wrap">
                  <div className="factor-label-row">
                    <div>
                      <div className="factor-selected" id="factorDisplay">
                        5<span>× factor</span>
                      </div>
                    </div>
                    <div className="factor-deduction-preview" id="factorPreview">
                      $50,000 × 5 = <strong>$250,000</strong> gross deduction
                    </div>
                  </div>
                  <div className="factor-buttons" id="factorButtons">
                    <button
                      className="factor-btn"
                      data-factor={1}
                      onclick="setFactor(1)"
                    >
                      1×
                    </button>
                    <button
                      className="factor-btn"
                      data-factor={2}
                      onclick="setFactor(2)"
                    >
                      2×
                    </button>
                    <button
                      className="factor-btn"
                      data-factor={3}
                      onclick="setFactor(3)"
                    >
                      3×
                    </button>
                    <button
                      className="factor-btn"
                      data-factor={4}
                      onclick="setFactor(4)"
                    >
                      4×
                    </button>
                    <button
                      className="factor-btn active"
                      data-factor={5}
                      onclick="setFactor(5)"
                    >
                      5×
                    </button>
                    <button
                      className="factor-btn"
                      data-factor={6}
                      onclick="setFactor(6)"
                    >
                      6×
                    </button>
                    <button
                      className="factor-btn"
                      data-factor={7}
                      onclick="setFactor(7)"
                    >
                      7×
                    </button>
                    <button
                      className="factor-btn"
                      data-factor={8}
                      onclick="setFactor(8)"
                    >
                      8×
                    </button>
                    <button
                      className="factor-btn"
                      data-factor={9}
                      onclick="setFactor(9)"
                    >
                      9×
                    </button>
                    <button
                      className="factor-btn"
                      data-factor={10}
                      onclick="setFactor(10)"
                    >
                      10×
                    </button>
                  </div>
                </div>
                <input type="hidden" id="leverageFactor" defaultValue={5} />
              </div>
              <div className="form-group">
                <label htmlFor="adminFee">
                  Implementation / Transaction Cost ($)
                </label>
                <select id="adminFee">
                  <option value={0}>$0</option>
                  <option value={2500}>$2,500</option>
                  <option value={5000} selected="">
                    $5,000
                  </option>
                  <option value={10000}>$10,000</option>
                </select>
                <div className="hint">
                  Included in the net difference calculation — you see the real cost
                  vs benefit
                </div>
              </div>
              <div className="form-group full">
                <label htmlFor="notes">Notes (optional)</label>
                <textarea
                  id="notes"
                  placeholder="Add notes for your printed summary..."
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button className="btn-run" id="runBtn">
              Update Results
            </button>
            <button className="btn-reset" id="resetBtn">
              Reset
            </button>
            <span className="hint" id="calcMeta" />
          </div>
          {/* Scenario Save/Load */}
          <div className="scenario-bar">
            <div className="sb-field">
              <label>Save Scenario As</label>
              <input
                id="scenarioName"
                type="text"
                placeholder="e.g., High income / Florida"
              />
              <div className="hint" style={{ marginTop: 4 }}>
                Saved in this browser only — no data is transmitted
              </div>
            </div>
            <div className="sb-field">
              <label>Load Saved Scenario</label>
              <select id="scenarioSelect" />
            </div>
            <div className="sb-actions">
              <button className="btn-sm primary" id="saveScenarioBtn">
                Save
              </button>
              <button className="btn-sm" id="loadScenarioBtn">
                Load
              </button>
              <button className="btn-sm" id="deleteScenarioBtn">
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* RESULTS */}
      <section className="results-section" id="results">
        <div className="results-inner">
          <div className="results-eyebrow">Modeled Output — Educational Only</div>
          <div className="results-title">Your side-by-side comparison</div>
          <div className="results-sub">
            All figures are estimates based solely on the inputs you provided.
            Actual tax results depend on your complete financial picture and
            qualified professional review.
          </div>
          {/* Scenario Boxes */}
          <div className="comparison-grid">
            <div className="comp-box a">
              <div className="comp-box-title">Scenario A — No Strategy</div>
              <div className="comp-box-desc">
                This is the baseline — your estimated tax if no additional
                deductions are applied. For many high earners, this represents tens
                of thousands in avoidable tax burden.
              </div>
              <div className="comp-tax" id="compTaxA">
                $0
              </div>
              <div className="comp-sub">Estimated federal + state tax</div>
            </div>
            <div className="comp-box b">
              <div className="comp-box-title" id="compBoxTitleB">
                Scenario B — With Strategy
              </div>
              <div className="comp-box-desc">
                Estimated tax after the modeled deduction is applied. The difference
                vs Scenario A (minus your implementation cost) is your estimated net
                benefit.
              </div>
              <div className="comp-tax" id="compTaxB">
                $0
              </div>
              <div className="comp-sub">Estimated federal + state tax</div>
            </div>
          </div>
          {/* Key KPIs */}
          <div className="kpi-grid">
            <div className="kpi-card highlight">
              <div className="kpi-eyebrow">Est. Difference After Cost (Yr 1)</div>
              <div className="kpi-value green" id="kpiNet">
                $0
              </div>
              <div className="kpi-label">
                Tax reduction minus your implementation cost — what you actually
                keep
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-eyebrow">Year 1 Tax Difference</div>
              <div className="kpi-value teal" id="kpiYear1">
                $0
              </div>
              <div className="kpi-label">
                Estimated tax reduction before strategy cost
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-eyebrow">Return on Strategy Cost</div>
              <div className="kpi-value green" id="kpiROI">
                0%
              </div>
              <div className="kpi-label">
                Net benefit ÷ implementation cost (Year 1)
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-eyebrow">Total Benefit (incl. state carry)</div>
              <div className="kpi-value teal" id="kpiOverall">
                $0
              </div>
              <div className="kpi-label">
                Year 1 net + estimated state carryforward benefit
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-eyebrow">Scenario A Tax Paid</div>
              <div className="kpi-value red" id="kpiTaxA">
                $0
              </div>
              <div className="kpi-label">
                The pain — what you pay without any strategy
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-eyebrow">Carryforward Deduction</div>
              <div className="kpi-value" id="kpiCarry">
                $0
              </div>
              <div className="kpi-label">
                Unused deduction carried to future years (if capped)
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-eyebrow">State Carryforward Benefit</div>
              <div className="kpi-value teal" id="kpiStateBenefit">
                $0
              </div>
              <div className="kpi-label">
                Estimated future state tax benefit (non-conforming states)
              </div>
            </div>
            <div className="kpi-card warning">
              <div className="kpi-eyebrow">Hyp. 5-Year Value @ 8%</div>
              <div className="kpi-value gold" id="kpiFive">
                $0
              </div>
              <div className="kpi-label">
                If Year 1 difference were reinvested — illustrative only
              </div>
            </div>
          </div>
          {/* Visual Bar Chart */}
          <div className="bar-section">
            <div className="bar-title">Visual Comparison</div>
            <div className="bar-row">
              <div className="bar-lbl">Scenario A tax burden</div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  id="barA"
                  style={{ background: "#f87171" }}
                />
              </div>
              <div className="bar-val" id="barAVal" style={{ color: "#fca5a5" }}>
                $0
              </div>
            </div>
            <div className="bar-row">
              <div className="bar-lbl">Strategy cost (inv. + fee)</div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  id="barC"
                  style={{ background: "#94a3b8" }}
                />
              </div>
              <div className="bar-val" id="barCVal" style={{ color: "#cbd5e1" }}>
                $0
              </div>
            </div>
            <div className="bar-row">
              <div className="bar-lbl">Est. difference after cost</div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  id="barN"
                  style={{ background: "#34d399" }}
                />
              </div>
              <div className="bar-val" id="barNVal" style={{ color: "#6ee7b7" }}>
                $0
              </div>
            </div>
            <div className="bar-row">
              <div className="bar-lbl">Total benefit (incl. state)</div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  id="barO"
                  style={{ background: "#2dd4bf" }}
                />
              </div>
              <div className="bar-val" id="barOVal" style={{ color: "#5eead4" }}>
                $0
              </div>
            </div>
          </div>
          {/* Future Value */}
          <div className="future-box">
            <div className="future-title">
              📈 Hypothetical Future Value Illustration
            </div>
            <div className="future-sub">
              If the Year 1 net difference were reinvested at 8% annually for 5
              years — for illustration only. Not a prediction or guarantee.
            </div>
            <div className="bar-row" style={{ marginBottom: 12 }}>
              <div
                className="bar-lbl"
                style={{ color: "rgba(255,255,255,0.6)", width: 180 }}
              >
                Year 1 difference
              </div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  id="fvBase"
                  style={{ background: "#f59e0b" }}
                />
              </div>
              <div className="bar-val" id="fvBaseVal" style={{ color: "#fcd34d" }}>
                $0
              </div>
            </div>
            <div className="bar-row">
              <div
                className="bar-lbl"
                style={{ color: "rgba(255,255,255,0.6)", width: 180 }}
              >
                After 5 yrs @ 8%
              </div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  id="fvGrow"
                  style={{ background: "#10b981" }}
                />
              </div>
              <div className="bar-val" id="fvGrowVal" style={{ color: "#6ee7b7" }}>
                $0
              </div>
            </div>
          </div>
          {/* Detail Table */}
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Line Item</th>
                  <th>Scenario A (No Strategy)</th>
                  <th>Scenario B (With Strategy)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Taxable Income (est.)</td>
                  <td id="tiA">$0</td>
                  <td id="tiB">$0</td>
                </tr>
                <tr>
                  <td>Federal Tax</td>
                  <td id="fedA">$0</td>
                  <td id="fedB">$0</td>
                </tr>
                <tr>
                  <td>Effective Federal Rate</td>
                  <td id="effFedA">0%</td>
                  <td id="effFedB">0%</td>
                </tr>
                <tr>
                  <td>State Tax</td>
                  <td id="stateA">$0</td>
                  <td id="stateB">$0</td>
                </tr>
                <tr>
                  <td>Effective State Rate</td>
                  <td id="effStateA">0%</td>
                  <td id="effStateB">0%</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Tax</strong>
                  </td>
                  <td id="totalA" style={{ color: "#fca5a5", fontWeight: 700 }}>
                    $0
                  </td>
                  <td id="totalB" style={{ color: "#6ee7b7", fontWeight: 700 }}>
                    $0
                  </td>
                </tr>
                <tr>
                  <td>Est. Tax Difference (Year 1)</td>
                  <td colSpan={2} id="diffRow">
                    $0
                  </td>
                </tr>
                <tr>
                  <td>Strategy + Implementation Cost</td>
                  <td colSpan={2} id="costRow">
                    $0
                  </td>
                </tr>
                <tr id="eblLimitRow" style={{ display: "none" }}>
                  <td>EBL Limit Applied (60% of Gross Income)</td>
                  <td colSpan={2} id="eblLimitVal">
                    $0
                  </td>
                </tr>
                <tr>
                  <td>Carryforward Deduction (est.)</td>
                  <td colSpan={2} id="carryRow">
                    $0
                  </td>
                </tr>
                <tr>
                  <td>State Carryforward (80% over 4 yrs)</td>
                  <td colSpan={2} id="stateCarryRow">
                    $0
                  </td>
                </tr>
                <tr>
                  <td>State Carryforward Tax Benefit</td>
                  <td colSpan={2} id="stateCarryBenRow">
                    $0
                  </td>
                </tr>
                <tr className="highlight">
                  <td>
                    <strong>Est. Difference After Cost (Yr 1)</strong>
                  </td>
                  <td colSpan={2} id="netRow">
                    <strong>$0</strong>
                  </td>
                </tr>
                <tr className="highlight">
                  <td>
                    <strong>Total Benefit (incl. State Carry)</strong>
                  </td>
                  <td colSpan={2} id="overallRow">
                    <strong>$0</strong>
                  </td>
                </tr>
                <tr className="highlight">
                  <td>
                    <strong>Overall Strategy ROI</strong>
                  </td>
                  <td colSpan={2} id="overallROIRow">
                    <strong>0%</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 10 }} className="hint" id="noteArea" />
          {/* STATE TAX CALCULATION BREAKDOWN */}
          <div
            id="stateCalcBox"
            style={{
              marginTop: 28,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 14,
              padding: "22px 24px"
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: 16
              }}
            >
              State Tax Calculation — Step by Step
            </div>
            {/* Conforming state view */}
            <div id="stateCalcConforms">
              <div
                style={{
                  fontSize: 13,
                  color: "#6ee7b7",
                  fontWeight: 700,
                  marginBottom: 10
                }}
              >
                ✓ Conforming State — Full deduction applies
              </div>
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 10,
                    padding: 14
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: 1,
                      marginBottom: 6
                    }}
                  >
                    STATE TAX (SCENARIO A)
                  </div>
                  <div
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}
                    id="cTaxAExpr"
                  >
                    Taxable Income × State Rate
                  </div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#fca5a5",
                      marginTop: 4
                    }}
                    id="cTaxAVal"
                  >
                    $0
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 10,
                    padding: 14
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: 1,
                      marginBottom: 6
                    }}
                  >
                    STATE TAX (SCENARIO B)
                  </div>
                  <div
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}
                    id="cTaxBExpr"
                  >
                    (Taxable Income − Full Deduction) × State Rate
                  </div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#6ee7b7",
                      marginTop: 4
                    }}
                    id="cTaxBVal"
                  >
                    $0
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: 12,
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  borderRadius: 10,
                  padding: "12px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span
                  style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}
                  id="cSavingExpr"
                >
                  State Tax Saving
                </span>
                <span
                  style={{ fontSize: 18, fontWeight: 700, color: "#6ee7b7" }}
                  id="cSavingVal"
                >
                  $0
                </span>
              </div>
            </div>
            {/* Non-conforming state view */}
            <div id="stateCalcNonConforms" style={{ display: "none" }}>
              <div
                style={{
                  fontSize: 13,
                  color: "#fcd34d",
                  fontWeight: 700,
                  marginBottom: 14
                }}
              >
                ⚠ Non-Conforming State — Limited Year 1 deduction
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: 10,
                  marginBottom: 12
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 10,
                    padding: 12
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: 1,
                      marginBottom: 5
                    }}
                    id="ncDeductLabel"
                  >
                    BONUS DEPR. AMOUNT
                  </div>
                  <div
                    style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}
                    id="ncDeductExpr"
                  >
                    Investment × 5
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#fff",
                      marginTop: 3
                    }}
                    id="ncDeductVal"
                  >
                    $0
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 10,
                    padding: 12
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: 1,
                      marginBottom: 5
                    }}
                  >
                    STATE ALLOWS (YR 1)
                  </div>
                  <div
                    style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}
                    id="ncAllow20Expr"
                  >
                    Deduction × 20%
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#fcd34d",
                      marginTop: 3
                    }}
                    id="ncAllow20Val"
                  >
                    $0
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 10,
                    padding: 12
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: 1,
                      marginBottom: 5
                    }}
                  >
                    STATE RATE
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                    Applied to 20% allowed
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#fff",
                      marginTop: 3
                    }}
                    id="ncStateRateVal"
                  >
                    0%
                  </div>
                </div>
              </div>
              {/* Step by step formula */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 10,
                  padding: 14,
                  marginBottom: 10
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: 1,
                    marginBottom: 10
                  }}
                >
                  YEAR 1 STATE TAX CALCULATION
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                      padding: "6px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.07)"
                    }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>
                      State tax before (Scenario A)
                    </span>
                    <span
                      style={{ color: "#fca5a5", fontWeight: 700 }}
                      id="ncTaxAVal"
                    >
                      $0
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                      padding: "6px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.07)"
                    }}
                  >
                    <span
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      id="ncSavingExpr"
                    >
                      Year 1 State Saving = Deduction × 20% × State Rate
                    </span>
                    <span
                      style={{ color: "#6ee7b7", fontWeight: 700 }}
                      id="ncSavingVal"
                    >
                      $0
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 12,
                      padding: "8px 6px",
                      background: "rgba(245,158,11,0.06)",
                      borderRadius: 6,
                      marginTop: 2
                    }}
                  >
                    <span
                      style={{ color: "#fcd34d", fontStyle: "italic" }}
                      id="ncCarryLineExpr"
                    >
                      + Carry-forward benefit (future years) shown below
                    </span>
                    <span
                      style={{ color: "#fcd34d", fontWeight: 700 }}
                      id="ncCarryLineVal"
                    />
                  </div>
                  <div
                    style={{
                      padding: "10px 0 6px",
                      borderTop: "2px solid rgba(255,255,255,0.1)",
                      marginTop: 2
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start"
                      }}
                    >
                      <div>
                        <div
                          style={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: 14,
                            marginBottom: 3
                          }}
                        >
                          State tax owed (Year 1)
                        </div>
                        <div
                          style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}
                          id="ncTaxBExprFull"
                        >
                          State A − Year 1 Saving + Carry Adder
                        </div>
                      </div>
                      <span
                        style={{ color: "#6ee7b7", fontWeight: 800, fontSize: 22 }}
                        id="ncTaxBVal"
                      >
                        $0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Carry-forward */}
              <div
                style={{
                  background: "rgba(245,158,11,0.08)",
                  border: "1px solid rgba(245,158,11,0.2)",
                  borderRadius: 10,
                  padding: 14
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: "#fcd34d",
                    letterSpacing: 1,
                    marginBottom: 10,
                    fontWeight: 700
                  }}
                >
                  CARRY-FORWARD BENEFIT (FUTURE YEARS)
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13
                    }}
                  >
                    <span
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      id="ncFedBenExpr"
                    >
                      Federal tax benefit (fedA − fedB)
                    </span>
                    <span style={{ color: "#fcd34d" }} id="ncFedBenVal">
                      $0
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13
                    }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>
                      × 80% × State Rate
                    </span>
                    <span style={{ color: "#fcd34d" }} id="ncCarryPctVal">
                      × 80% × 0%
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      paddingTop: 8,
                      borderTop: "1px solid rgba(245,158,11,0.2)",
                      marginTop: 4
                    }}
                  >
                    <span style={{ color: "#fcd34d", fontWeight: 700 }}>
                      Carry-forward state benefit
                    </span>
                    <span
                      style={{ color: "#fcd34d", fontWeight: 800, fontSize: 18 }}
                      id="ncCarryBenVal"
                    >
                      $0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EDUCATION: PAIN → SOLUTION */}
      <section className="edu-section" id="education">
        <div className="edu-inner">
          <div className="section-eyebrow">Understanding the Problem</div>
          <div className="section-title">
            Why high earners overpay — and how this helps
          </div>
          <div className="section-sub">
            This isn't about loopholes. It's about using legal provisions of the tax
            code that most earners simply aren't aware of or haven't been guided
            toward.
          </div>
          <div className="edu-grid">
            <div className="edu-card pain">
              <div className="edu-card-title">😓 The Pain Without a Strategy</div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-item-text">
                  W-2 earners making $400K+ often face effective rates of 35–42%
                  combined federal and state — with few offsets available
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-item-text">
                  Tax filing happens once a year, reactively — by the time your CPA
                  files, the opportunity to reduce this year's bill has usually
                  passed
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-item-text">
                  Most standard deductions are already maximized (401k, HSA,
                  mortgage) — leaving a large taxable income gap with no further
                  offset
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-item-text">
                  Every dollar overpaid is a dollar that can't compound — the real
                  cost is not just this year's tax bill, but the lost future value
                  of that capital
                </div>
              </div>
            </div>
            <div className="edu-card solution">
              <div className="edu-card-title">
                ✅ How This Strategy Addresses It
              </div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-item-text">
                  IRC §168 bonus depreciation allows qualifying assets to be fully
                  expensed in Year 1, creating a large immediate deduction rather
                  than spread across years
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-item-text">
                  This calculator lets you model different investment sizes and see
                  the estimated net benefit after cost — before committing to
                  anything
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-item-text">
                  In non-conforming states, deductions not recognized this year
                  carry forward — providing additional estimated state tax benefit
                  over 4 years
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-item-text">
                  The goal is not tax elimination — it's keeping more of what you
                  earn so you can deploy capital on your terms, not the government's
                  timeline
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MECHANICS */}
      <section className="mechanics-section" id="mechanics">
        <div className="mechanics-inner">
          <div className="section-eyebrow">How the Model Works</div>
          <div className="section-title">Inside the calculation</div>
          <div className="section-sub">
            This is a simplified educational model. Here's what happens under the
            hood when you enter your inputs.
          </div>
          <div style={{ maxWidth: 900, margin: "40px auto 0" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5,1fr)",
                gap: 0,
                position: "relative"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  left: "10%",
                  right: "10%",
                  height: 2,
                  background: "var(--border)",
                  zIndex: 0
                }}
              />
              <div
                style={{
                  textAlign: "center",
                  padding: "0 8px",
                  position: "relative",
                  zIndex: 1
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--navy)",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px"
                  }}
                >
                  1
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
                  Income Input
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>
                  Gross income minus standard deduction and contributions = taxable
                  income
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "0 8px",
                  position: "relative",
                  zIndex: 1
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--navy)",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px"
                  }}
                >
                  2
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
                  Scenario A Tax
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>
                  Federal brackets applied. State flat rate applied. Total = your
                  baseline tax.
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "0 8px",
                  position: "relative",
                  zIndex: 1
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--teal)",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px"
                  }}
                >
                  3
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
                  Depreciation Applied
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>
                  Investment × factor = gross deduction. Cap applied if W-2 income.
                  Taxable income reduced.
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "0 8px",
                  position: "relative",
                  zIndex: 1
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--navy)",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px"
                  }}
                >
                  4
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
                  Scenario B Tax
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>
                  Same brackets applied to lower taxable income. State conformity
                  modeled. New total calculated.
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "0 8px",
                  position: "relative",
                  zIndex: 1
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--green)",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px"
                  }}
                >
                  5
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
                  Net Benefit
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>
                  A minus B = gross difference. Minus implementation cost = your
                  estimated net benefit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SUMMARY + NEXT STEPS */}
      <section className="summary-section" id="summary">
        <div className="summary-inner">
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--teal2)",
                marginBottom: 12
              }}
            >
              What To Do With This
            </div>
            <div className="summary-title">
              This is the start of the conversation — not the end.
            </div>
            <p className="summary-body">
              This calculator gives you a directional estimate so you can go into a
              professional conversation with context. A qualified CPA or tax advisor
              will look at your full picture and tell you what's actually
              applicable.
            </p>
            <ul className="summary-list">
              <li>Confirm your eligibility with a CPA before taking any action</li>
              <li>
                Review asset eligibility, holding requirements, and documentation
                needed
              </li>
              <li>Align timing with your tax professional before year-end</li>
              <li>
                Ask your advisor about state-specific conformity for your state
              </li>
              <li>Keep thorough records for audit readiness</li>
            </ul>
          </div>
          <div className="summary-card">
            <div className="summary-card-title">Your Calculation Summary</div>
            <div className="summary-stat">
              <div className="summary-stat-label">Scenario A Tax (est.)</div>
              <div className="summary-stat-val white" id="sumA">
                $0
              </div>
            </div>
            <div className="summary-stat">
              <div className="summary-stat-label">Scenario B Tax (est.)</div>
              <div className="summary-stat-val white" id="sumB">
                $0
              </div>
            </div>
            <div className="summary-stat">
              <div className="summary-stat-label">Est. Difference After Cost</div>
              <div className="summary-stat-val" id="sumNet">
                $0
              </div>
            </div>
            <div className="summary-stat">
              <div className="summary-stat-label">Total (incl. state carry)</div>
              <div className="summary-stat-val" id="sumOverall">
                $0
              </div>
            </div>
            <div className="summary-stat">
              <div className="summary-stat-label">Hypothetical 5-yr @ 8%</div>
              <div className="summary-stat-val" id="sumFive">
                $0
              </div>
            </div>
            <div className="summary-actions">
              <button className="btn-primary" id="printSummaryBtn">
                Print Summary
              </button>
              <button className="btn-secondary" id="openChecklistBtn">
                View Checklist
              </button>
            </div>
            <p
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.35)",
                marginTop: 12
              }}
            >
              Educational illustration only. Not tax advice.
            </p>
          </div>
        </div>
      </section>
      {/* DISCLAIMER */}
      <section className="disclaimer-section">
        <div className="disclaimer-inner">
          <div className="disclaimer-box">
            <div className="disclaimer-title">
              Important Disclosures &amp; Assumptions
            </div>
            <div className="disclaimer-text">
              This calculator is provided for{" "}
              <strong>educational and illustrative purposes only</strong>. Figures
              are estimates based solely on the inputs provided and simplified
              modeling assumptions. Actual tax results will vary and depend on
              complete financial data, final tax return preparation, and applicable
              law. This material does not constitute tax, legal, accounting,
              investment, financial, or securities advice. No securities are offered
              or sold. Hypothetical projections (including reinvestment assumptions)
              are not guarantees of future performance. Clients must consult their
              CPA, tax advisor, or licensed professional prior to implementing any
              strategy. Federal bonus depreciation references relate generally to
              IRC §168. The optional annual cap for very large deductions references
              IRC §461(l). State conformity is modeled for illustration based on
              2026 research (OBBBA reactions). Oregon and New Mexico newly decoupled
              Apr 2026. Tennessee follows TCJA not OBBBA. Rates and conformity
              status updated April 2026. Verify current status with your CPA as
              state laws change frequently. Tax laws are subject to change. This
              document is not intended for audit defense or formal tax opinion
              reliance.
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: 20,
              fontSize: 11,
              color: "var(--muted)"
            }}
          >
            © 2026 • Educational Tax Impact Calculator • State Conformity Updated
            April 2026 • Educational Illustration Only
          </div>
        </div>
      </section>
      {/* MODALS */}
      <div className="modal-overlay" id="methodModal">
        <div className="modal">
          <div className="modal-top">
            <div className="modal-title">Methodology &amp; Calculation Notes</div>
            <button className="modal-close" id="closeMethodModal">
              ✕
            </button>
          </div>
          <p>
            <strong>Federal Tax:</strong> Applied using 2026 marginal brackets by
            filing status (IRS Rev. Proc. 2025-32). Standard deduction subtracted
            from gross income. Traditional contributions also reduce taxable income.
          </p>
          <p>
            <strong>State Tax (Updated 2026):</strong> Flat rate model per state.
            Conforming states apply the full federal deduction (§168k) for state
            purposes. Non-conforming states: Year 1 state tax saving = State Rate ×
            20% of bonus depreciation deduction. State tax owed (Year 1) = State Tax
            Before − Year 1 State Saving. Carry-forward benefit = State Rate × 80% ×
            actual federal tax benefit (fedA − fedB) — representing the proportional
            state benefit of the remaining deduction recognized in future years.{" "}
            <strong>2026 Changes:</strong> Oregon (SB 1507, signed Apr 9 2026) and
            New Mexico (SB 151, signed Mar 11 2026) newly decoupled. Michigan, DC,
            Maine also decoupled. Tennessee follows TCJA rates (40%/20%/0%), not
            OBBBA 100%. California, New York, New Jersey, Illinois, Connecticut,
            Maryland, Massachusetts, Pennsylvania, Vermont remain long-standing
            decouplers. Virginia, Indiana, North Carolina, Ohio, Kentucky, Georgia,
            Arizona, Arkansas updated to reflect current conformity. Rates updated
            to 2025–2026 per state tax agency guidance.
          </p>
          <p>
            <strong>Depreciation Model:</strong> Gross deduction = investment amount
            × selected factor (1–10, default 5). This reflects a simplified
            leveraged bonus depreciation structure — adjust the factor to match your
            specific program. The excess business loss cap (IRC §461(l)) is
            optionally applied for W-2 income.
          </p>
          <p>
            <strong>Net Benefit:</strong> (Scenario A Tax) − (Scenario B Tax) −
            (Investment + Fee) = Year 1 net difference. State carryforward benefit
            adds estimated future state tax savings for non-conforming states.
          </p>
          <p>
            <strong>5-Year Hypothetical:</strong> Year 1 net difference compounded
            at 8% annually. Purely illustrative — not a prediction of investment
            returns.
          </p>
          <p style={{ color: "var(--red)" }}>
            <strong>
              This model is simplified and educational. Consult a qualified tax
              professional for real-world guidance.
            </strong>
          </p>
        </div>
      </div>
      <div className="modal-overlay" id="checklistModal">
        <div className="modal">
          <div className="modal-top">
            <div className="modal-title">Review Checklist</div>
            <button className="modal-close" id="closeChecklistModal">
              ✕
            </button>
          </div>
          <p>
            <strong>Step 1 — Confirm Eligibility:</strong> Verify with your CPA that
            your income type and situation qualifies for bonus depreciation. W-2
            earners face the excess business loss limit; business owners may not.
          </p>
          <p>
            <strong>Step 2 — Asset Documentation:</strong> Collect purchase records,
            cost basis, and any required cost segregation or equipment reports.
            Documentation is essential for audit readiness.
          </p>
          <p>
            <strong>Step 3 — Filing Alignment:</strong> Coordinate with your CPA
            before year-end. Assets must typically be placed in service by December
            31 for the deduction to apply in that tax year.
          </p>
          <p>
            <strong>Step 4 — State Treatment:</strong> Ask your CPA about your
            specific state's conformity. Non-conforming states may require a
            different state filing approach.
          </p>
          <p>
            <strong>Step 5 — Recordkeeping:</strong> Maintain all documentation for
            at least 7 years. Bonus depreciation claims are an area of IRS scrutiny.
          </p>
          <p style={{ fontSize: 12, color: "var(--muted)" }}>
            This checklist is general and should be reviewed with a qualified tax
            professional before acting.
          </p>
        </div>
      </div>
      <div className="toast" id="toast" />
    </>

  )
}
