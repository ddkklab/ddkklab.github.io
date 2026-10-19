# ddkklab 公式サイト

GitHub Pages向けの静的サイトです。HTML・CSSのみで構成し、サイト独自のJavaScript、ビルド工程、外部ライブラリは使用していません。現在サイトで案内するアプリはFood Lifeです。新しいアプリを掲載する場合は、公開準備が整った後に個別ページと一覧を追加します。

## 公開ページ

- `/` — ddkklabとFood Lifeの紹介
- `/apps/food-life/` — Food Life紹介、スクリーンショット追加枠
- `/privacy/food-life/` — Food Lifeプライバシーポリシー
- `/terms/food-life/` — Food Life利用規約
- `/contact/` — お問い合わせ先
- `/blog/` — ブログ記事一覧
- `/app-ads.txt` — Google AdMobのAuthorized Sellers for Apps情報
- `/404.html` — 公開していないページや無効なURL向けの案内
- `/sitemap.xml`、`/robots.txt`、`/favicon.svg`、`/assets/ogp.svg` — 検索・共有用ファイル

## ローカル確認

リポジトリのルートでPython 3の簡易HTTPサーバーを起動します。

```sh
python3 -m http.server 8000
```

ブラウザーで <http://localhost:8000/> を開きます。ページはルート相対パスを使うため、ファイルを直接開かずHTTPサーバー経由で確認してください。

## GitHub Pages公開

1. 差分を確認し、必要な変更を `ddkklab/ddkklab.github.io` の `main` ブランチへpushします。
2. GitHubの **Settings → Pages** を開きます。
3. Sourceに **Deploy from a branch** を選びます。
4. Branchを `main`、Folderを **/(root)** にして保存します。
5. デプロイ後、各公開URL、`/app-ads.txt`、サイト内リンク、HTTPSを確認します。

リポジトリにはGitHub Pages標準のJekyll処理を無効にする `.nojekyll` を含みます。Food LifeのDeveloper Website欄にはこのサイトのURLを設定し、App Store公開後に実際の配信ページを掲載します。

## 問い合わせ先

正式な問い合わせ先は `support.ddkklab@gmail.com` です。表示箇所を変更するときは、お問い合わせページ、Food Life紹介ページ、プライバシーポリシー、利用規約、フッターを同じアドレスと`mailto:`リンクに揃えてください。

## プライバシーポリシーと利用規約

各文書はHTMLで管理します。アプリの機能、Google Mobile Ads・UMP SDK、外部サービス、情報の利用や保存方法を変更した場合、Food Lifeの実装資料・Googleの公式資料と照合して更新します。SDKのPrivacy Manifest、AdMob管理画面、最終配布ビルドで確認できない情報を推測して記載しないでください。

公開前には少なくとも次を確認してください。

- 運営者の正式な表示名（氏名）と連絡先。消費者庁の[通信販売広告Q&A](https://www.no-trouble.caa.go.jp/qa/advertising.html-2)は、通信販売に該当する場合、個人事業者について屋号・サイト名だけでは足りず氏名等の表示が必要と説明しています。本アプリの価格・契約・配信形態にこの規律がどう適用されるか、公開前に確認してください。
- **公開ブロッカー：** App Store Connectの年齢区分とAdMobの年齢関連設定（子ども向け指定等を含む）を確認し、Food Lifeの対象年齢・広告配信方針と一致させること。現時点では実設定を確認できていないため、プライバシーポリシーに年齢区分を記載していません。
- AdMobの対象アプリ・配信地域・同意メッセージ設定
- 最終ArchiveのPrivacy Report、広告・同意フォームの実機挙動、実際の通信
- 利用規約の免責・損害賠償・変更手続についての法律専門家による確認
- 制定日・更新日が実際の適用開始日・更新日に合っていること

Google Mobile Ads SDKのPrivacy ManifestにはデバイスIDについて`Tracking=true`の宣言があります。一方、Food Lifeは非パーソナライズ広告を指定し、アプリ独自のATT許可要求を実装していません。この組み合わせについて、SDKの実際のデータ処理、App Store Connectのプライバシー申告、ATT要件の整合性を最終配布ビルドで確認してください。今回のWeb文面の調整は、この確認やATT対応の完了を意味しません。

利用規約の免責条項の開発者向け参照：[消費者契約法（e-Gov法令検索）](https://laws.e-gov.go.jp/law/412AC0000000061)、[消費者庁 消費者契約法](https://www.caa.go.jp/policies/policy/consumer_system/consumer_contract_act/)。適用関係や条項の有効性は、本アプリの提供条件と個別事情に即して確認してください。

## 商標・著作権の公開前確認

2026年10月15日にJ-PlatPatの公式商標検索画面とINPITの検索案内を確認しました。検索画面では商標文字、称呼、商品・役務区分等を使った検索が可能です。ただし、この作業環境では画面の検索フォームを操作して検索結果一覧や個別案件を取得できず、以下の語の個別検索は未完了です。検索未実施は該当する出願・登録がないことを意味しません。App Store公開前にJ-PlatPatで個別検索し、結果に現れた案件の権利状態と指定商品・役務を確認してください。

- 検索語：`Food Life`、`FOOD LIFE`、`フードライフ`、`フード・ライフ`、`ddkklab`
- 文字列・称呼（類似検索を含む）、表記揺れ、類似群コードを確認
- 第9類のダウンロード可能なアプリ・ソフトウェア、第42類のソフトウェア開発・提供等を中心に、実際のサービスと関連する商品・役務を確認。区分だけでなく、指定商品・役務と類似群コード、権利状態も確認
- 類似する出願・登録が見つかった場合、権利状態、指定商品・役務、権利者を確認し、必要に応じ専門家へ相談

素材の確認状況：Food LifeアイコンはFood Life側の資料に「ユーザーが提供し正式採用した画像」と記録されていますが、画像の権利者・商用利用許諾を示す資料はWebサイト側では確認できていません。配布・広告での利用許諾を公開前に確認してください。サイトのOGP・favicon・CSSの図形はリポジトリ内で作成した素材です。外部Webフォントや第三者JavaScriptは読み込んでいません。今後追加するスクリーンショット、イラスト、フォントは、権利・利用条件と写り込んだデータを公開前に確認してください。

## 公開URLの登録確認

サイト上の正規URLは `https://ddkklab.github.io/` です。Food LifeのプライバシーポリシーURLは `https://ddkklab.github.io/privacy/food-life/`、利用規約URLは `https://ddkklab.github.io/terms/food-life/` です。App Store Connectの実登録値はこの作業環境から確認できないため、登録時に上記URLと照合してください。

## Food Lifeページと画像

スクリーンショットは `assets/screenshots/` に置き、`apps/food-life/index.html` の追加枠を実画像に置き換えます。実画面を使用し、個人情報や実ユーザーの食事データが含まれていないこと、紹介機能が実装済みであることを確認してください。App Store公開前は架空のストアリンクを追加せず、実際の公開URLが確定してから設定します。

## MATOMARI LIFE（開発中）

MATOMARI LIFEのページは`matomari-life/`以下に独立して配置しています。紹介、ヘルプ、利用規約草案、プライバシーポリシー草案、サポートを更新する場合は、アプリ本体の現行実装と公開直前の設定を照合してください。現在のページは開発中の案内であり、規約・ポリシーは草案です。StoreKit/Premium機能の購入案内やApp Storeリンクは、実装・配信開始前に掲載しないでください。

- 紹介：`/matomari-life/`
- ヘルプ：`/matomari-life/help/`
- プライバシーポリシー草案：`/matomari-life/privacy/`
- 利用規約草案：`/matomari-life/terms/`
- サポート：`/matomari-life/support/`

公開前の実装照合・未確認事項は`docs/MATOMARI_WEB_IMPLEMENTATION_REPORT.md`に記録しています。スコープ監査は`docs/MATOMARI_WEB_SCOPE_AUDIT.md`を参照してください。

## 新しいアプリや記事を追加する

公開準備が整ったアプリは `apps/<app-slug>/index.html` に個別ページを作成し、トップページのアプリ一覧、関連リンク、`sitemap.xml` に追加します。ブログ記事は `blog/` 以下にHTMLを追加し、ブログ一覧とサイトマップを更新します。公開されていないアプリを利用可能・公開中として紹介しないでください。

## SEO・外部リソース

公開ページにはページ固有のtitle、description、OGP、canonical URLを設定します。`sitemap.xml` は実在する公開ページだけを含めます。外部リンクを追加する場合はリンク先と用途を確認し、サイト独自の外部スクリプトは追加しないでください。
