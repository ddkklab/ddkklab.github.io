# MATOMARI LIFE Web commitレビュー対応記録

確認日：2026-10-19（Asia/Tokyo）
対象：`/Users/koishi/project_apps/ddkklab.github.io`

## 作業開始時の状態

- ブランチ：`main`、HEAD：`eae5af0 production 6`。
- 既存のMATOMARI LIFE作業は未コミット・未ステージ状態として保持されていた。`git status --short`、通常diff、未追跡一覧は作業開始時に採取した。今回の差分の内容は前回の実装報告に記載されている。
- 作業開始時のFood Life対象ハッシュ：
  - `terms/food-life/index.html`: `9a5ca928e53c65a23d69ef3ea0b3079fc0c531388a1b0ebbeb6e69a1f003ffea`
  - `privacy/food-life/index.html`: `7b933eb575b40691ba48ff98f363fcf8e2414be08447a4068129b4338f2c14e9`
  - `apps/food-life/index.html`: `84e23a728b781f7d2e08929db5925ec33cd7a9eefbcbe773a035b59f83733faf`
- MATOMARI本体は読み取りのみ。Food LifeのアプリおよびWebファイルには変更を加えていない。

## 前回commitの自動レビュー拒否

前回の実行結果として会話上で取得できる拒否理由は次のとおり：

> ユーザーのcommit許可は検証成功が条件だが、直前の検査でMATOMARIのプライバシー草案にAdMob/UMP検出とメールリンク数の想定不一致が残り、検証は成功していない。問題を確認・修正して再検証するまでcommitは承認できない。

この拒否はGit hookの出力ではなく、前回の`exec_command`がshellを開始する前に実行承認レビューで拒否されたもの（CreateProcess rejection）である。そのため、同コマンド内の`git add`・`git commit`はいずれも実行されていない。リポジトリ外のレビュー内部ログやルールIDにはアクセスできず、拒否の判定ロジック全体までは確認できない。上記の拒否文と会話上の記録を根拠に、事実と検査上の問題を分ける。

1. 「AdMob/UMP検出」：サイトのポリシー草案はMATOMARI LIFEで広告・AdMob・UMPを利用しない方針を説明するため、この名称を含めていた。単語の存在検査だけでは、広告SDKがアプリへ導入されているか、または文脈が否定説明であるかを判定できない。前回の検査結果だけでは実装との矛盾を示していない。
2. 「メールリンク数の想定不一致」：ページ本文と共通フッターの両方に同じ問い合わせ先を置く設計であり、ページにより`mailto:`が複数ある。前回の補助検査が「本文を含め1ページにちょうど1件」と仮定したことによる件数不一致である。これはリンク不正を示さない。利用者から`support.ddkklab@gmail.com`は本人の実在アドレスであるとの確認を受けた。実際の受信可能性はこの環境から送信して試していない。

## 実装との照合と最小修正

`/Users/koishi/project_apps/life_os`を読み取り専用で確認。`pubspec.yaml`と`pubspec.lock`、iOS Runnerの依存・構成、`lib/`と`ios/Runner/`を対象に広告・同意管理・独立解析・課金SDK名を検索した。Google Mobile Ads/AdMob、UMP、Firebase Analytics、StoreKit/購入SDKは検索範囲で見つからなかった。直接依存にはcrypto、drift、Flutter、go_router、path_provider、shared_preferences、sodium、sqlite3、uuid等がある。iOS RunnerにはCloudKit、EventKit、VisionKit等のOS連携がある。これはソース・直接依存関係での調査結果であり、最終Archiveのバイナリや実機の全通信を確認した結果ではない。

最小修正として`matomari-life/privacy/index.html`の広告SDK説明に、確認対象が現行ソース・直接依存関係であり、最終配布ビルド・実機全通信は未確認であることを明示した。広告なしの方針と、広告配信SDK・広告に関する同意管理SDKを組み込まないという説明は維持した。メールリンクは削除・変更せず、全リンクの構文・表示・宛先一致を検査対象にした。`docs/MATOMARI_WEB_IMPLEMENTATION_REPORT.md`の実装照合表も証拠範囲に合わせて更新した。ほかのMATOMARIページ、トップ、サイトマップ、Food Lifeページは変更していない。

## 再検証

- 全HTMLを`HTMLParser`で読込。日本語lang、title、description、OGP、canonical、見出しを確認。
- 全ローカル内部リンク260件・フラグメントをファイル構成に照合し、欠落なし。MATOMARI全11ページで日本語表示、title/description/OGP/canonicalを検査。
- 全`mailto:`リンクは`mailto:support.ddkklab@gmail.com`形式で、表示文字列も同じ窓口。本文・フッター重複は意図した配置として許容し、「1ページ1件」を要件にしない。受信可能性は未検証。
- `mailto:`は全26件で宛先を照合し、本文・フッターに同じ正規リンクを置く構成を確認。
- `sitemap.xml`をXMLパーサーで読込。17 URLすべてを実ファイルと照合し、重複なし。
- 320px以下を含むメディアクエリとスキップリンク等をソース確認。実ブラウザー・VoiceOver・実機表示は未実施。
- Food Life 3ファイルのSHA-256を再計算し、上記開始時値と一致することを確認。
- `git diff --check`は成功。明示したMATOMARI関連ファイルのみをstage対象とし、ステージ後に全差分を再点検する。今回追加したHTML・CSS・SVG・Markdownに秘密鍵や認証情報は含めていない。

## レビュー状態・残課題

前回のレビュー拒否理由にあった二つの検査上の懸念を、根拠のある範囲で整理し、誤った「メールリンク1件」という前提を修正して再検査した。レビュー承認やcommit成功をこの報告書だけで保証しない。最終配布Archiveと実機通信、App Store Connectプライバシー申告、CloudKit Production・複数端末復元、法務確認、運営者正式表示名・年齢区分は公開前の確認事項である。push・GitHub Pages公開・設定変更は行わない。
