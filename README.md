# ddkklab 公式Webサイト

HTML/CSSによるGitHub Pagesサイト。MATOMARI LIFEとFood Lifeの紹介、利用規約、プライバシー、問い合わせを掲載します。公開URLは https://ddkklab.github.io/ です。

## 公開対象

- `index.html`、`matomari-life/`（紹介・料金・規約・プライバシー・サポート・使い方12ページ）
- `apps/food-life/`、`privacy/food-life/`、`terms/food-life/`、`contact/`、`blog/`
- `assets/`、`favicon.svg`、`404.html`、`robots.txt`、`sitemap.xml`、`app-ads.txt`

## 公開方法

既存設定が `main` の `/(root)` からのGitHub Pages配信であることを確認します。`.nojekyll`を置かず、GitHub標準Jekyll処理と `_config.yml` の `exclude` により `docs/`、このREADME、素材の開発メモを公開出力から除外します。開発資料は削除せずソース側に保管します。robotsのDisallowはアクセス制限ではなく、公開除外の代用にはしません。ソースリポジトリ自体の公開設定は別です。

変更はローカルで内容・表示・リンクを確認し、明示的なpush承認後に通常のcommit/pushで反映します。履歴の書換えやforce pushはしません。公開後はHTML/CSS/画像のhash、全ページHTTP200、未知URLと開発資料URLの404を検証します。ビルド失敗時は成功とせず、原因を確認します。

## 内容の更新

MATOMARI LIFEの価格は日本向け月額200円、任意開始30日体験は支払い登録不要・自動課金なし。Freeはチェックリスト10件・各200項目などの上限があります。広告の同意とATTは分け、レシート画像/OCR全文のアプリ独自永続保存や常時自動同期をうたわないでください。アプリ内の実装・配布済みビルド・申告と照合します。

App Storeの公開URLが確定するまでは、架空のストアURLや配信済み表示を置きません。今回はMATOMARI LIFEの本文を整え、Food Life固有の機能・規約・配信状況は変更していません。

Google SDKのデータ処理や法務上の判断を、非パーソナライズ広告やWeb文面だけで確定しないでください。問い合わせ先は support.ddkklab@gmail.com です。

## ローカル検証の限界

privateプロファイルのChromeで画面・リンクを確認しています。プレビューの公開除外ルールはJekyll設定のローカル模擬であり、実際のGitHub Pagesビルドと公開後検証の代用にはしません。外部のフォント・JavaScript・トラッキングは追加していません。
