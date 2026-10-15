# ddkklab 公式サイト

GitHub Pages向けの静的サイトです。HTML・CSSで構成し、サイト独自のJavaScript、ビルド工程、外部ライブラリは使用していません。

## サイト構成

- `/` — ddkklabの紹介、アプリ一覧、Life OS構想
- `/apps/food-life/` — Food Life紹介、正式アイコン、スクリーンショット追加枠
- `/apps/life-manager/` — 開発中のLife Manager
- `/apps/personal-finance/` — 開発中のPersonal Finance
- `/privacy/food-life/` — Food Lifeのプライバシーポリシー
- `/blog/` — ブログ記事一覧
- `/contact/` — お問い合わせ先
- `/app-ads.txt` — Google AdMobのAuthorized Sellers for Apps情報
- `/assets/style.css` — 共通スタイル
- `/assets/food-life-icon.png` — Food Life正式アイコン
- `/assets/screenshots/` — Food Lifeスクリーンショット用
- `/sitemap.xml`、`/robots.txt`、`/favicon.svg`、`/assets/ogp.svg` — SEO・共有用ファイル

Life OSは構想段階です。現在のアプリはそれぞれ独立して開発・提供します。

## ローカル確認

リポジトリのルートでPython 3の簡易HTTPサーバーを起動します。

```sh
python3 -m http.server 8000
```

ブラウザーで <http://localhost:8000/> を開きます。ページはルート相対パスを使用するため、ファイルを直接開かずHTTPサーバー経由で確認してください。

## GitHub Pages公開

1. ローカルの変更内容を確認してから `ddkklab/ddkklab.github.io` の `main` ブランチへpushします。
2. GitHubのリポジトリで **Settings → Pages** を開きます。
3. Sourceに **Deploy from a branch** を選びます。
4. Branchを `main`、Folderを **/(root)** にして保存します。
5. デプロイ後、`https://ddkklab.github.io/` と `https://ddkklab.github.io/app-ads.txt` を開いて確認します。

このリポジトリにはGitHub Pages標準のJekyll処理を無効にする `.nojekyll` を含みます。ユーザーが公開設定を行う前に、App Store ConnectのDeveloper Website欄にこのサイトを設定してください。Google AdMobがサイトのルートから`app-ads.txt`を見つけるためにも、ストア掲載情報と開発者サイトのドメインが一致している必要があります。

## 問い合わせ先の管理

正式な窓口は `support.ddkklab@gmail.com` です。表示箇所を変更するときは `/contact/index.html`、全ページのフッター、Food Life紹介ページ、Food Lifeプライバシーポリシーを同じアドレスと`mailto:`リンクに揃えてください。メールアドレスを公開するとスパムメールが届く可能性があります。

## プライバシーポリシーの更新

`/privacy/food-life/index.html` を編集します。新しいデータ項目、目的、保存先、第三者SDK、広告や同意の動作を加える前に、Food Lifeの実装と各SDKの公式資料を確認し、実際に確認できた内容と確認待ちの内容を分けて記載してください。AdMob・UMPのSDKや設定が変わった場合は広告・同意管理、取得情報、外部送信、非パーソナライズ設定、年齢・同意の各項目を再確認します。アプリ側のプライバシーポリシーとApp Store Connectのプライバシー申告も同じ実装に合わせて更新してください。

現在の公開準備では運営者の正式表記、制定日・更新日、対象年齢区分、AdMob管理画面の地域別同意メッセージと最終ビルドのSDKデータ開示が確認待ちです。確認前に値を推測して公開しないでください。

Food Life側の `docs/app_store_privacy.md` には広告SDKなしという過去の記載が残っていますが、現在確認できるiOSコードと `docs/ads.md` はGoogle Mobile Ads・UMPを含んでいます。App Store提出前にFood Life側のプライバシー資料を最終コードに合わせて更新し、Webポリシー、Privacy Report、App Store Connect申告を照合してください。このWebサイト作業ではFood Lifeプロジェクトのファイルを変更していません。

## app-ads.txtの管理

ルートの `app-ads.txt` にAdMobのPublisher IDとGoogleが指定するSeller IDを記載しています。AdMob管理画面の **アプリ → app-ads.txt** に表示される個別の正式スニペットを確認し、変更があればその内容を優先してください。アプリIDや広告ユニットIDはapp-ads.txtに記載しません。更新後はルート公開URLからプレーンテキストを取得できることを確認し、AdMobでクロール状態を再確認します。ほかの広告販売事業者を導入する場合、正式な販売者行だけ追加します。

## Food Lifeアプリページと画像

スクリーンショットは `assets/screenshots/` に置き、`apps/food-life/index.html` の追加枠を画像要素に変更してください。実画面の画像だけを使用し、個人情報や実ユーザーの食事データが含まれていないこと、表示機能が現在のアプリに実装済みであることを確認します。App Store公開前は架空のストアリンクを追加しません。実際の公開URLが確定してから設定します。

## 新しいアプリを追加する

1. `apps/<app-slug>/index.html` を作成し、既存アプリページのヘッダー・フッター・共通CSSを利用します。
2. トップページのアプリ一覧に紹介カードを追加します。
3. `sitemap.xml` に実在する公開URLだけを追加します。
4. ページ固有のtitle、description、OGP、canonical URLを設定します。
5. ナビゲーションや関連ページからリンクし、ローカルサーバーで確認します。

開発中の機能を利用可能として記載しないでください。

## ブログ記事を追加する

`blog/` の下に記事用HTMLを追加し、`blog/index.html` に記事タイトル・概要・リンクを掲載します。公開URL、title、description、OGP、canonicalを設定し、`sitemap.xml` にも追加します。記事やリンクはローカルサーバー経由で確認します。

## SEO・外部リソース

HTMLページのtitle、meta description、viewport、OGP、canonicalを公開URLに合わせて更新します。`sitemap.xml` と `robots.txt` のURLも実在ページと一致させます。サイト独自の外部JavaScriptは読み込んでいません。
