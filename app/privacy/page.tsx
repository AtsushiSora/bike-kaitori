import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | MOTO LOOP",
  description: "MOTO LOOPにおける個人情報の取り扱いについて。",
};

const sections = [
  {
    title: "1. 取得する個人情報",
    body: (
      <>
        <p>当店は、バイクの買取査定、販売、お問い合わせ等の際に、以下の情報を取得する場合があります。</p>
        <ul>
          <li>氏名、住所、電話番号、メールアドレス</li>
          <li>車種、年式、走行距離、排気量、車両の状態等の査定に必要な情報</li>
          <li>お問い合わせやご相談の内容</li>
          <li>IPアドレス、ブラウザの種類等のアクセス情報</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. 利用目的",
    body: (
      <ul>
        <li>買取査定、出張査定の日程調整およびご連絡のため</li>
        <li>車両の売買、名義変更その他必要な手続きのため</li>
        <li>お問い合わせ、ご相談へ回答するため</li>
        <li>本サイトおよびサービスの改善、不正利用の防止のため</li>
        <li>法令に基づく対応のため</li>
      </ul>
    ),
  },
  {
    title: "3. 利用目的の範囲内での利用",
    body: <p>当店は、あらかじめ明示した利用目的の範囲内で個人情報を利用します。利用目的を超えて利用する必要が生じた場合は、法令により認められる場合を除き、あらかじめご本人の同意を得ます。</p>,
  },
  {
    title: "4. 第三者への提供",
    body: <p>当店は、ご本人の同意がある場合、法令に基づく場合その他法令上認められる場合を除き、個人データを第三者に提供しません。</p>,
  },
  {
    title: "5. 業務委託",
    body: <p>当店は、サイトの運営、メール送信、車両手続き等のため、利用目的の達成に必要な範囲で業務を外部に委託する場合があります。その場合は、委託先を適切に選定し、必要な契約と監督を行います。</p>,
  },
  {
    title: "6. 安全管理",
    body: <p>当店は、個人データの漏えい、滅失、毀損、不正アクセス等を防ぐため、取り扱う情報と事業の規模に応じた必要かつ適切な安全管理措置を講じます。</p>,
  },
  {
    title: "7. 保有期間と消去",
    body: <p>個人情報は、利用目的の達成に必要な期間または法令で定められた期間に限り保有し、不要となった後は適切な方法で消去します。</p>,
  },
  {
    title: "8. 開示・訂正・利用停止等",
    body: <p>ご本人から、保有個人データの開示、訂正、追加、削除、利用停止、消去または第三者提供の停止を求められた場合は、ご本人であることを確認のうえ、法令に従って対応します。</p>,
  },
  {
    title: "9. Cookie等の利用",
    body: <p>本サイトでは、サイトの動作、利便性の向上および利用状況の把握のため、Cookieその他の類似技術を使用する場合があります。ブラウザの設定でCookieを無効にできますが、一部機能を利用できなくなる場合があります。</p>,
  },
  {
    title: "10. ポリシーの変更",
    body: <p>本ポリシーは、法令の改正、サービス内容の変更等に応じて改定する場合があります。重要な変更は本サイト上でお知らせします。</p>,
  },
];

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <a className="brand" href="/" aria-label="MOTO LOOP トップへ">
          <span className="brand-mark"><i /><i /></span>
          <span>MOTO <b>LOOP</b></span>
        </a>
        <a className="legal-back" href="/">トップへ戻る <span>→</span></a>
      </header>

      <section className="legal-hero">
        <p className="eyebrow"><span /> PRIVACY POLICY</p>
        <h1>プライバシー<br /><em>ポリシー</em></h1>
        <p>MOTO LOOP（運営：オーダーオート、以下「当店」）は、お客様の個人情報を大切に取り扱い、関係法令と本ポリシーに従って適切に管理します。</p>
      </section>

      <div className="legal-layout">
        <aside>
          <span>POLICY</span>
          <strong>制定日</strong>
          <p>2026年9月6日</p>
          <strong>運営者</strong>
          <p>オーダーオート</p>
          <strong>事業者</strong>
          <p>空 篤志</p>
        </aside>
        <article className="legal-content">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.body}
            </section>
          ))}

          <section className="contact-policy">
            <h2>11. お問い合わせ窓口</h2>
            <p>個人情報の取り扱いに関するお問い合わせは、下記窓口へお願いします。</p>
            <dl>
              <div><dt>窓口名</dt><dd>オーダーオート 個人情報お問い合わせ窓口</dd></div>
              <div><dt>事業者</dt><dd>空 篤志</dd></div>
              <div><dt>営業所所在地</dt><dd>広島県広島市佐伯区皆賀一丁目10番20号</dd></div>
              <div><dt>電話</dt><dd><a href="tel:07089966421">070-8996-6421</a></dd></div>
              <div><dt>LINE</dt><dd><a href="https://line.me/R/ti/p/@774zckii" target="_blank" rel="noreferrer">@774zckii</a></dd></div>
              <div><dt>メール</dt><dd><a href="mailto:info@order-auto.com">info@order-auto.com</a></dd></div>
              <div><dt>古物商許可</dt><dd>広島県公安委員会 第731292600035号</dd></div>
            </dl>
          </section>
        </article>
      </div>

      <footer className="legal-footer">
        <a className="brand footer-brand" href="/"><span className="brand-mark"><i /><i /></span><span>MOTO <b>LOOP</b></span></a>
        <small>© 2026 MOTO LOOP. ALL RIGHTS RESERVED.</small>
      </footer>
    </main>
  );
}
