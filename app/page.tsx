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
  ["02", "バイクを見せる", "ご自宅へ無料出張。店頭査定もOK。"],
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
        <span>関東全域・出張査定無料</span>
        <span className="strip-divider" />
        <span>年中無休 9:00–20:00</span>
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
          <a className="phone-link" href="tel:0120558190"><small>お電話でのご相談</small><strong>0120-558-190</strong></a>
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
          <div className="hero-trust">
            <div><strong>10,000<small>台+</small></strong><span>累計買取実績</span></div>
            <div><strong>4.8<small>/ 5</small></strong><span>お客様満足度</span></div>
            <div><strong>0<small>円</small></strong><span>出張・査定料</span></div>
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

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark"><i /><i /></span><span>MOTO <b>LOOP</b></span></a><div className="footer-links"><a href="#buy">買取査定</a><a href="#stock">販売車一覧</a><a href="#reason">選ばれる理由</a><a href="#flow">買取の流れ</a></div><p>古物商許可番号：東京都公安委員会 第000000000000号</p><small>© 2026 MOTO LOOP. ALL RIGHTS RESERVED.</small></footer>

      {modalOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" onClick={closeModal} aria-label="閉じる">×</button>
            {sent ? (
              <div className="success"><span>✓</span><p className="eyebrow">THANK YOU</p><h2>査定のご依頼を<br />受け付けました。</h2><p>担当者より営業時間内にご連絡します。</p><button className="button button-dark" onClick={closeModal}>閉じる</button></div>
            ) : (
              <><p className="eyebrow"><span /> FREE ASSESSMENT</p><h2 id="modal-title">かんたん無料査定</h2><p className="modal-lead">わかる範囲だけでOKです。</p>
              <form className="assessment-form" onSubmit={submitAssessment}>
                <label>メーカー<span>必須</span><select required defaultValue=""><option value="" disabled>選択してください</option><option>Honda</option><option>Yamaha</option><option>Kawasaki</option><option>Suzuki</option><option>輸入車・その他</option></select></label>
                <label>車種名<span>必須</span><input required placeholder="例：CB400 SUPER FOUR" /></label>
                <div className="form-row"><label>年式<input placeholder="例：2020年" /></label><label>走行距離<input placeholder="例：12,000km" /></label></div>
                <label>お電話番号<span>必須</span><input required inputMode="tel" placeholder="090-0000-0000" /></label>
                <button className="button button-yellow" type="submit">査定を依頼する <span>→</span></button>
                <small>ご入力いただいた情報は査定対応のみに利用します。</small>
              </form></>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
