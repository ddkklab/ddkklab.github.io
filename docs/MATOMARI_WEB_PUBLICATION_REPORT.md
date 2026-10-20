# MATOMARI LIFE — Web正式公開報告

**公開成功**。正式改訂版のWeb公開日：**2026年10月20日（日本時間）**。アプリ本体の配信開始ではない。

## 公開範囲とGit

- 所有者の今回の指示により、Web repoの必要なcommit/push/既存Pages自動公開を実施。
- Web開始HEAD `e1e0ba278b1781873af8ae65d8b85eaa6def51df`、branch `main`、clean。app開始HEAD `039248277797b734a92fefc10653fc77b14f5f80`、branch `master`、clean。アプリにremoteはなく、変更/pushしていない。
- 送信先：`origin` = `git@github.com:ddkklab/ddkklab.github.io.git`、`HEAD:refs/heads/main`。通常のfast-forward push。force/reset/cleanなし。
- remote mainの開始値 `3f28e212e3c51847ec26bd82da3ad01832cb0317`。それ以降の送信差分はMATOMARI専用HTML/CSS/資料とsitemapのみ。Food Life/共通CSS/ブログ等を変更していない。
- **HTML公開commit：`d25a901ecd5863a6005ca7cf0b19ea366432a0fc`**。前工程の未pushだった2commitも含めて反映。今回privacy/termsの施行日を2026-10-20へ確定し、制定/更新日2026-10-20は維持した。
- Pages公開元は既存のmain/root構成。公開デプロイ履歴/動的workflowのmainと、旧mainの4本文がrootファイルと完全一致することを照合。未認証のPages設定APIは404で設定値自体は取得できなかったが、公開元の設定変更は不要で、変更していない。
- Pages workflowは公開commitでcompleted/success：[実行結果](https://github.com/ddkklab/ddkklab.github.io/actions/runs/39385934675)。

この報告/ASC表を追記する後続commitは終了報告のHEADで示す。公開HTMLは上記commitで一致確認済みで、後続資料commitでHTML内容は変更しない。

## 5URLのHTTP・本文検証

確認日時：`2026-10-20T16:22:14+09:00`。HTTP200だけでなく、レスポンスのバイト列/ハッシュとローカル原稿を照合した。すべてApple標準EULAリンクあり、privacy/termsは施行日の実日付も一致。

| 公開URL | HTTP | 本文SHA-256 | ローカル一致 |
|---|---|---|---|
| https://ddkklab.github.io/matomari-life/ | 200 | `278dd4bd30fb95483baf780a011c90023ceaeb2b7966ec88e80887ed7a057d94` | 一致 |
| https://ddkklab.github.io/matomari-life/privacy/ | 200 | `8dcc06fdb7a0d6dc43fea8d32a9bb082b55db40e77b9d5f94aee66fa3249e888` | 一致 |
| https://ddkklab.github.io/matomari-life/terms/ | 200 | `e643a1a5947c76b9844d67f7dae511c1b5057249d7f320fe90e0820307a84217` | 一致 |
| https://ddkklab.github.io/matomari-life/support/ | 200 | `01e794aa7f27a00ba32416d19e8d5cbb1a3154b5da06462cfa600ba87372c4d1` | 一致 |
| https://ddkklab.github.io/matomari-life/premium/ | 200 | `5ee8ff567f0fe0be4db7f6b5c4a4a84caa751487f94ed7de7d05ab5e84d4bc02` | 一致 |

Premiumは公開前404→公開後200。旧い本文がHTTP200で残る状態とは区別した。公開日の翌日ずれはなく、privacy/termsの実際の施行日と一致した。

## 保護対象

| 対象 | 公開後HTTP | 公開前後のSHA-256 |
|---|---|---|
| privacy/food-life/ | 200 | 一致：`1b0273d828ba7263b8702bed4ddf6086d8f5cd2735eb0c18e5340fb0974c461d` |
| terms/food-life/ | 200 | 一致：`9a5ca928e53c65a23d69ef3ea0b3079fc0c531388a1b0ebbeb6e69a1f003ffea` |
| assets/style.css | 200 | 一致：`f202873ef0faedde0b0378356edac470f4220b00cb75d2490f8cd3648b826ff7` |

ローカルのFood Lifeページ/規約/privacy、共通CSS、ブログ等の追跡ファイルも開始時と一致。アプリのHEAD/Git状態/追跡3,872ファイルのhashは開始時と一致を確認した。DB/Keychain/backup/Trial/署名/SDK/CloudKitに変更なし。実機/Simulatorの起動やデータ操作なし。アプリrepoへのpushなし。

## 公開前の軽量検証

- 既存の検証器を再利用し、12HTMLの開閉/構造/重複id/内部リンク/fragment/canonical/OG/見出し/画像altを検査。18URLのsitemapとPremium導線を照合。
- 320/390/768px×文字100/200%×12ページ＝72表示ケース成功。12ページすべてのTab順、skip linkからmain到達、focus-visible/outlineも成功。前工程の専用CSSを作り直していない。
- 250/300円や公開前レビュー原稿表示なし。200円/月、StoreKit取得価格優先、Apple標準EULA、任意30日体験/支払不要/自動課金なし、現在広告/購入OFFと提供後の条件を照合。
- 公開対象の2開発資料に残っていた個人ホームパスは相対参照等に整理。実名/住所/証明書/キー/認証情報を追加していない。
- 大量スクリーンショット/全Flutterテスト/アプリビルドを追加していない。今回のWeb検証を実OS ATT全状態/実SDK全通信/本番広告・購入の試験と混同しない。

## ASC資料と残る判定

[最終転記表](MATOMARI_ASC_PRIVACY_FINAL_ENTRY.md)は、初回広告ON予定構成を主表に、全35種類の選択/用途/紐付け/追跡/条件/根拠を記載した。予定ONは選択9/非選択24/保留2。現行OFFは参考列で、ONを実装・有効化したとはしない。特に暗号化backupの本文、端末StoreKit、明示クラッシュOFFを根拠で再分類し、10種/25種の仮説を採用していない。

ASCの判定は **限定項目保留**。残る外部確認と担当/画面/確認値は [残る確認](MATOMARI_ASC_REMAINING_DECISIONS.md) のR1/R2に集約。特商法/Apple販売者表示の根拠・適用範囲・停止条件は同資料R3。ブランド名承認だけで法的適合済みとはしていない。

**実施していない操作**：ASC実入力/保存/Publish、App Store審査提出、本番広告ON、本番購入ON、CloudKit Production変更、アプリrepoのpush。Web公開が成功しても、これらは開始しない。
