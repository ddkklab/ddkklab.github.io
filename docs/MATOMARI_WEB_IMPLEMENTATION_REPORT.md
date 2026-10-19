# MATOMARI LIFE Web実装報告

作業日：2026-10-19

## 追加・更新したWebファイル

追加：
- `matomari-life/index.html`（紹介）
- `matomari-life/privacy/index.html`（プライバシーポリシー草案）
- `matomari-life/terms/index.html`（利用規約草案）
- `matomari-life/support/index.html`（お問い合わせ）
- `matomari-life/help/index.html`（ヘルプトップ）
- `matomari-life/help/home/index.html`、`money/index.html`、`life/index.html`、`food/index.html`、`backup/index.html`、`troubleshooting/index.html`（6ガイド）
- `assets/matomari.css`、`assets/matomari-ogp.svg`
- `docs/MATOMARI_WEB_SCOPE_AUDIT.md`（作業前Git状態・Food Life差分の監査）

更新：`index.html`（MATOMARI LIFEの開発中カードと案内を追加。Food Life紹介・URLは維持）、`sitemap.xml`（追加した実ページのみを追加）、`README.md`（MATOMARI用URLと公開前注意を追記）。

## Food Life差分の復旧

移動先リポジトリは作業開始時にcleanで、直前に報告された変更に該当する未コミット差分はありませんでした。Food Lifeの規約・プライバシー・READMEはHEADに含まれる2026-10-15以前の変更であり、今回の誤対象作業として特定できなかったため復旧していません。作業前のハッシュはスコープ監査記録に記載しました。Food LifeアプリやFood Life公開ページの内容は変更していません。

## ページURL候補

- `https://ddkklab.github.io/matomari-life/`
- `https://ddkklab.github.io/matomari-life/privacy/`
- `https://ddkklab.github.io/matomari-life/terms/`
- `https://ddkklab.github.io/matomari-life/support/`
- `https://ddkklab.github.io/matomari-life/help/`と各ガイドURL

App Store配信URLは未設定です。架空リンクは作成していません。既存ブログは変更していません。

## アプリ資料との照合

照合した読み取り専用資料：`life_os/docs/PHASE5E2_REPORT.md`、`MATOMARI_LIFE_FINAL_MIGRATION_REPORT.md`、`MATOMARI_LIFE_DEVICE_TEST_REPORT.md`、`MATOMARI_LIFE_DATA_PRESERVATION.md`、`ios/Runner/Info.plist`、`ios/Runner/Runner.entitlements`、`ios/Runner/AppDelegate.swift`、`pubspec.yaml`。

| 公開説明 | ソース・資料上の根拠 | 状態・留保 |
|---|---|---|
| お金／暮らし／食生活の3領域 | `PHASE5E2_REPORT.md` | 画面の各領域とホーム概要を確認 |
| ローカル記録、広告なし | `pubspec.yaml`、`pubspec.lock`、iOS Runner構成、MATOMARIソース検索 | 検索したソース・直接依存関係に広告配信SDK、同意管理SDK、独立解析SDKは見つからない。最終Archiveと実機全通信は未確認。公開草案はこの調査範囲を明示 |
| 任意のiCloud暗号化バックアップ | CloudKit entitlements、BackupCloud実装、実機検証レポート | CloudKit Developmentを実機1台で検証。Production schema、2台間移行は未検証 |
| 回復キーと復元の注意 | バックアップ画面文言、データ保全・実機レポート | 鍵を失うと暗号文から復旧できない場合あり。成功・完全性を保証しない表現 |
| カレンダー／通知 | `Info.plist`、`AppDelegate.swift` | 利用者選択・許可を伴う任意OS機能。カレンダーサービス側へ予定が同期される場合あり |
| 書類画像の読み取り | `Info.plist`、VisionKit/画像・PDF選択コード | iOS端末内読み取りの実装説明を確認。入力候補画像の恒久保存なしとの説明をInfo.plistで確認 |
| StoreKit・Premium・30日利用・月額300円 | `pubspec.yaml`と現行コード検索、Phase 6記述 | 購入・課金機能は未実装。価格・権利・開始条件を公開案内していない |

## 公開前確認事項（ブロッカー）

1. プライバシーポリシー草案の情報区分・保持・削除の説明を、App Store Connect申告とリリースArchiveのPrivacy Reportに照合すること。
2. App Store Connectの年齢区分・対象年齢、配信地域の確定。
3. 個人開発者の正式表示名・氏名表示要否と、法令上必要な運営者情報を確認すること。氏名は推測していない。
4. CloudKit Production schemaの公開、2台間バックアップ／回復キー到達・復元、Production実サービス動作を確認すること。現状はDevelopmentの単一実機検証であり、別端末復元は未確認。
5. カレンダー、通知、書類読み取りの最終ビルドでの権限・外部送信・保存期間を確認すること。
6. 規約・プライバシー草案の法的確認と、正式な制定日・施行日・更新日の決定。公開前草案のまま利用規約として運用しないこと。
7. PremiumはPhase 6計画としてのみ扱い、StoreKit実装・料金・試用条件等が確定するまで購入可能と表示しないこと。
8. J-PlatPatのFood Life/ddkklabを対象とした個別検索・指定商品役務・権利範囲確認は、この作業では実施していない。

## 検証結果と制限

- 追加URLを`sitemap.xml`に登録。各ページに日本語`lang`、固有title/description、OGP、canonicalを設定。
- 内部ページはMATOMARI専用のナビゲーションと共通フッターを使用。すべての問い合わせリンクは既存の正式窓口`mailto:support.ddkklab@gmail.com`。
- 外部JavaScript・外部フォント・追加依存はなし。Food Life URLは変更なし。
- 320pxを含む狭幅向けCSS、キーボードのスキップリンク、見出し階層、ナビゲーションラベル、フォーカス可能なリンクを用意。OSの動きを減らす設定も尊重。
- 18 HTMLページをHTMLParserで読み込み、全ページの`lang="ja"`・見出し有無・基本HTMLタグ構造を確認。全内部リンク260件とフラグメントをローカル解決し、エラー0件。サイトマップXMLは17 URLを解析し、掲載先全件のファイル存在を確認。
- Food Life利用規約・プライバシーの作業前後SHA-256はそれぞれ`9a5ca928e53c65a23d69ef3ea0b3079fc0c531388a1b0ebbeb6e69a1f003ffea`、`7b933eb575b40691ba48ff98f363fcf8e2414be08447a4068129b4338f2c14e9`で一致。
- 本作業環境では実ブラウザーのスクリーンショット・VoiceOver/実端末での見た目検証は未実施。GitHub Pages実配信、GitHub設定、実際の404応答、HTTPS設定も未確認。静的HTMLParser検査はブラウザー準拠の完全なHTMLバリデーターではない。
- Premiumの試用・価格は公開ページに掲載していない。
