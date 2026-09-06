"use client";

import { FormEvent, useMemo, useState } from "react";

type Bike = {
  name: string;
  category: "ネイキッド" | "スポーツ" | "クラシック";
  year: string;
  mileage: string;
  price: string;
  color: string;
  image: string;
};

const bikes: Bike[] = [
  {
    name: "Honda CB400 SUPER FOUR",
    category: "ネイキッド",
    year: "2020年",
    mileage: "12,480km",
    price: "89.8万円",
    color: "パールサンビームホワイト",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Yamaha YZF-R7",
    category: "スポーツ",
    year: "2023年",
    mileage: "3,240km",
    price: "108.0万円",
    color: "ディープパープリッシュブルー",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Kawasaki W800",
    category: "クラシック",
    year: "2022年",
    mileage: "7,860km",
    price: "99.5万円",
    color: "メタリックダークグリーン",
    image: "https://images.unsplash.com/photo-1525160354320-d8e92641c563?auto=format&fit=crop&w=1200&q=85",
  },
];

const steps = [
  ["01", "査定を申し込む", "WEBまたは電話で、30秒で完了。"],
  ["02", "バイクを見せる", "広島・山口のご自宅へ無料出張。店頭査定もOK。"],
  ["03", "金額を確認する", "査定根拠も明確に。お断りも気兼ねなく。"],
  ["04", "買取・お支払い", "面倒な手続きを代行し、すぐにお支払い。"],
];

export default function Home() {
  const [category, setCategory] = useState("すべて");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const visibleBikes = useMemo(
    () => (category === "すべて" ? bikes : bikes.filter((bike) => bike.category === category)),
    [category],
  );

  function submitAssessment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSent(false);
  }

  return (
    <main>
      <div className="top-strip">
        <span>広島県・山口県全域　出張査定無料</span>
        <span className="strip-divider" />
        <span>査定フォーム準備中</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="MOTO LOOP トップへ">
          <span className="brand-mark"><i /><i /></span>
          <span>MOTO <b>LOOP</b></span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="メインナビゲーション">
          <a href="#buy" onClick={() => setMenuOpen(false)}>バイクを売る</a>
          <a href="#stock" onClick={() => setMenuOpen(false)}>バイクを買う</a>
          <a href="#reason" onClick={() => setMenuOpen(false)}>選ばれる理由</a>
          <a href="#flow" onClick={() => setMenuOpen(false)}>買取の流れ</a>
        </nav>
        <div className="header-actions">
          <button className="button button-dark" onClick={() => setModalOpen(true)}>無料査定をはじめる <span>↗</span></button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" role="img" aria-label="夕方の山道を走るバイク" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> BIKE BUY &amp; SELL</p>
          <h1>愛車の価値を、<br /><em>次のライダーへ。</em></h1>
          <p className="hero-lead">バイク専門だから、わかる価値がある。<br />売る人にも、買う人にも、正直な一台を。</p>
          <div className="hero-buttons">
            <button className="button button-yellow" onClick={() => setModalOpen(true)}>
              <span className="button-copy"><small>最短30秒・査定料無料</small><strong>WEBでかんたん査定</strong></span><span className="round-arrow">→</span>
            </button>
            <a className="button button-glass" href="#stock">販売車を見る <span>↓</span></a>
          </div>
        </div>
        <div className="scroll-hint"><span /> SCROLL</div>
      </section>

      <section className="quick-assessment" id="buy">
        <div className="quick-copy">
          <span className="section-number">01 / SELL</span>
          <h2>まずは、あなたのバイクを<br /><em>知るところから。</em></h2>
        </div>
        <form className="inline-form" onSubmit={(event) => { event.preventDefault(); setModalOpen(true); }}>
          <label>
            <span>01</span>
            <select defaultValue="" aria-label="メーカー">
              <option value="" disabled>メーカーを選択</option>
              <option>Honda</option><option>Yamaha</option><option>Kawasaki</option><option>Suzuki</option><option>その他</option>
            </select>
          </label>
          <label>
            <span>02</span>
            <input aria-label="車種名" placeholder="車種名を入力" />
          </label>
          <button className="button button-yellow" type="submit">無料査定へ <span>→</span></button>
        </form>
      </section>

      <section className="reason-section" id="reason">
        <div className="section-heading">
          <div><span className="section-number">02 / WHY US</span><h2>大切に乗った時間まで、<br /><em>きちんと査定します。</em></h2></div>
          <p>価格だけではなく、バイクと過ごした思いまで。<br />専門スタッフが一台ずつ、責任をもって向き合います。</p>
        </div>
        <div className="reason-grid">
          <article><span className="reason-index">01</span><div className="line-icon">BEYOND<br />MARKET</div><h3>専門店だからできる<br />プラス査定</h3><p>純正パーツ、カスタム、希少カラー。一般相場だけでは見逃す価値も評価します。</p></article>
          <article><span className="reason-index">02</span><div className="line-icon">DIRECT<br />ROUTE</div><h3>買取から販売まで<br />自社でつなぐ</h3><p>中間コストを抑え、その分を買取価格に還元。次のオーナーへ大切につなぎます。</p></article>
          <article><span className="reason-index">03</span><div className="line-icon">CLEAR<br />DEAL</div><h3>後から減額なし<br />正直な取引</h3><p>金額の根拠を一つずつご説明。ご成約後の一方的な減額はありません。</p></article>
        </div>
      </section>

      <section className="stock-section" id="stock">
        <div className="stock-top">
          <div><span className="section-number light">03 / STOCK</span><h2>つぎの、<em>愛車を探す。</em></h2></div>
          <p>整備士による納車前点検付き。<br />安心で選べる一台をご紹介します。</p>
        </div>
        <div className="filters" role="group" aria-label="バイクの種類で絞り込む">
          {["すべて", "ネイキッド", "スポーツ", "クラシック"].map((item) => (
            <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
        <div className="bike-grid">
          {visibleBikes.map((bike) => (
            <article className="bike-card" key={bike.name}>
              <div className="bike-image" style={{ backgroundImage: `url(${bike.image})` }}><span>{bike.category}</span><button aria-label={`${bike.name}の詳細`}>↗</button></div>
              <div className="bike-info"><p>{bike.year} / {bike.mileage}</p><h3>{bike.name}</h3><small>{bike.color}</small><div><span>車両本体価格</span><strong>{bike.price}</strong><small>（税込）</small></div></div>
            </article>
          ))}
        </div>
        <button className="all-stock">在庫車をすべて見る <span>→</span></button>
      </section>

      <section className="flow-section" id="flow">
        <div className="section-heading flow-title"><div><span className="section-number">04 / FLOW</span><h2>査定からお支払いまで、<br /><em>シンプルに。</em></h2></div><p>出張費用も、名義変更費用も無料。<br />必要な書類も丁寧にご案内します。</p></div>
        <div className="flow-grid">
          {steps.map(([number, title, text]) => <article key={number}><strong>{number}</strong><span className="flow-dot" /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="final-cta">
        <div><p className="eyebrow"><span /> YOUR BIKE, YOUR STORY</p><h2>その一台の次を、<br /><em>一緒に考えよう。</em></h2><p>しつこい営業はいたしません。<br />相場を知るだけでも、どうぞお気軽に。</p></div>
        <button className="button button-yellow" onClick={() => setModalOpen(true)}><span className="button-copy"><small>最短30秒・査定料無料</small><strong>WEBでかんたん査定</strong></span><span className="round-arrow">→</span></button>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark"><i /><i /></span><span>MOTO <b>LOOP</b></span></a><div className="footer-links"><a href="#buy">買取査定</a><a href="#stock">販売車一覧</a><a href="#reason">選ばれる理由</a><a href="#flow">買取の流れ</a><a href="/privacy">プライバシーポリシー</a></div><p>運営：オーダーオート</p><small>© 2026 MOTO LOOP. ALL RIGHTS RESERVED.</small></footer>

      {modalOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" onClick={closeModal} aria-label="閉じる">×</button>
            {sent ? (
              <div className="success"><span>✓</span><p className="eyebrow">FORM CHECK</p><h2>フォームの動作を<br />確認できました。</h2><p>現在は準備中のため、入力内容は送信・保存されていません。<br />受取先を決めた後に接続します。</p><button className="button button-dark" onClick={closeModal}>閉じる</button></div>
            ) : (
              <><p className="eyebrow"><span /> FREE ASSESSMENT</p><h2 id="modal-title">かんたん無料査定</h2><p className="modal-lead">必須項目だけで申し込みできます。年式や走行距離は、わかる範囲で大丈夫です。</p>
              <form className="assessment-form" onSubmit={submitAssessment}>
                <div className="form-section-title"><span>01</span>バイクについて</div>
                <div className="form-row">
                  <label>メーカー<span>必須</span><select name="maker" required defaultValue=""><option value="" disabled>選択してください</option><option>Honda</option><option>Yamaha</option><option>Kawasaki</option><option>Suzuki</option><option>Harley-Davidson</option><option>BMW</option><option>Ducati</option><option>輸入車・その他</option></select></label>
                  <label>車種名<span>必須</span><input name="model" required placeholder="例：CB400 SUPER FOUR" /></label>
                </div>
                <div className="form-row form-row-three">
                  <label>年式<input name="year" inputMode="numeric" placeholder="例：2020年" /></label>
                  <label>排気量<input name="displacement" inputMode="numeric" placeholder="例：400cc" /></label>
                  <label>走行距離<input name="mileage" inputMode="numeric" placeholder="例：12,000km" /></label>
                </div>
                <label>バイクの状態・ご要望<textarea name="message" rows={3} placeholder="例：車検は来年3月まで。カスタム箇所があります。" /></label>

                <div className="form-section-title"><span>02</span>お客様について</div>
                <label>お名前<span>必須</span><input name="name" required autoComplete="name" placeholder="例：山田 太郎" /></label>
                <div className="form-row">
                  <label>お住まいの県<span>必須</span><select name="prefecture" required defaultValue=""><option value="" disabled>選択してください</option><option>広島県</option><option>山口県</option></select></label>
                  <label>市区町村<span>必須</span><input name="city" required autoComplete="address-level2" placeholder="例：広島市中区" /></label>
                </div>
                <div className="form-row">
                  <label>お電話番号<span>必須</span><input name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="090-0000-0000" /></label>
                  <label>メールアドレス<input name="email" type="email" inputMode="email" autoComplete="email" placeholder="name@example.com" /></label>
                </div>
                <label>連絡の希望時間帯<select name="preferredTime" defaultValue=""><option value="">指定なし</option><option>9:00〜12:00</option><option>12:00〜15:00</option><option>15:00〜18:00</option><option>18:00〜20:00</option></select></label>
                <label className="consent-check"><input name="privacyConsent" type="checkbox" required /><span>必須</span><b><a href="/privacy" target="_blank" rel="noreferrer">プライバシーポリシー</a>に同意する</b></label>
                <p className="form-notice">現在はフォームの準備段階です。このボタンで入力確認はできますが、内容はまだ送信されません。</p>
                <button className="button button-yellow" type="submit">入力内容を確認する <span>→</span></button>
                <small>受取先を決めた後、メールまたはLINEと接続します。</small>
              </form></>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
