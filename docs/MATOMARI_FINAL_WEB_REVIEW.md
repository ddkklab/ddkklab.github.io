# MATOMARI LIFE — Web正式公開直前の最終レビュー

> この文書は公開前の履歴です。現在の公開結果は [Web公開報告](MATOMARI_WEB_PUBLICATION_REPORT.md)、ASCの現行判断は [最終転記表](MATOMARI_ASC_PRIVACY_FINAL_ENTRY.md) と [残る外部確認](MATOMARI_ASC_REMAINING_DECISIONS.md) を参照してください。
2026-10-20 JST。**ローカル修正・検証済み、公開は承認待ち**。

## 1. 対象と確定事項

Web開始HEAD `053fef991a62b5d5ff8ecba4d5a22b5727ce0c88`、開始時clean。アプリは `039248277797b734a92fefc10653fc77b14f5f80` のまま読み取り専用。別の同時編集差分なし。今回のcommitはWeb repoだけ。push・GitHub Pages公開・ASC保存/Publish・審査提出・本番広告/購入ONは行わない。

依頼書と今回の所有者回答により、次を確定した。

- 運営表示は **ddkklab（個人開発）**。既存サポートメールを継続。追加の法定表示の必要性まで確認済みという意味ではない。
- **Apple標準EULAを採用し、独自EULAは登録しない**。専用利用規約はサービス・Premium・データ管理等の条件として併用。Apple側の登録画面を操作したとはしない。
- 日本のiPhone/iPad向け、無料DL予定、月額200円・月額のみ、任意開始30日体験・支払登録不要・満了時自動課金なし。年額/Apple無料trial/Family Sharingなし。
- 制定日/最終更新日は **2026年10月20日**。施行日は **Web正式公開日**、実日付は公開日確定後に記載することを所有者が承認。現時点で架空の公開日を記載しない。
- 問い合わせは対応・継続対応に必要な期間保管し、不要になった情報を整理・削除する運用を所有者が承認。固定日数・第三者の完全削除を保証せず、削除相談は既存窓口、Apple/Google保有情報は各提供者へ案内する。

## 2. HTMLと条項の変更

| 対象 | 修正内容 |
|---|---|
| `matomari-life/privacy/index.html` | レビュー原稿ラベルを撤去。運営/確定日付/現提供状況、端末SQLiteとiOS保護、OCR、暗号化backupと任意CloudKit private、鍵/回復、旧JSON/共有、通知/外部カレンダー、StoreKit、GMA/UMP、候補データと用途、記録を広告引数に渡さないことを明記 |
| 同privacy | 明示許可/UMP/ATTの区別、拒否しても記録機能利用、未検証非追跡配信の保留、現在OFF時と提供後の導線を分けた。送信済み情報の全削除やSDK全通信停止は保証しない。個別の記録・履歴・保全・local/cloud世代・Keychainの違いと実装済み管理操作を説明 |
| `matomari-life/terms/index.html` | Apple標準EULAとサービス規約の関係を確定。Free 20/20/20/20/10×200、数え方、既存閲覧/編集/削除/持出し/復元保護を維持。月額200円/自動更新/取得価格優先/失敗・保留/解約/返金/購入復元を整理。従来の24時間前の解約案内も維持 |
| 同terms | 任意体験の非課金/満了後Free/既存データ非削除、FreeのiCloud/通知/calendar/復旧、試算非保証、鍵の管理、禁止事項、未成年の保護者確認、法令上の権利を排除しない責任条項を整合 |
| `matomari-life/index.html` | iPhone/iPad・運営、無料DL予定・現在未配信を明示。200円/任意体験/Free機能を整合し、法務文書/EULAへの導線を追加 |
| `matomari-life/support/index.html` | 現在購入/広告OFF、提供開始後だけの購入復元/広告許可導線を区別。問い合わせ/削除相談、解約とデータ復元の違い、コピー/鍵の管理を整理 |
| `matomari-life/premium/index.html` | 200円/月のみ・StoreKit価格優先、体験/契約の違い、既存データ保護、広告条件、Apple標準EULA/規約/privacyへ接続。現時点で公開済みとは書かない |
| `matomari-life/help/` 7ページ | 専用footerへApple標準EULA。mainをskip linkでfocusできるようにした。backupヘルプだけ、実在するlocal/cloud個別削除・内部保全整理の説明を追加 |
| `assets/matomari.css` | 専用header/brand/footerの折返し。320px・文字200%の横溢れを修正。共通CSSの変更/overflow隠しによる回避なし |
| `sitemap.xml` | Premium URLを追加。サイトマップ記載は公開済みの証明ではない。既存の非MATOMARI URLは保持 |
| `docs/MATOMARI_ASC_PRIVACY_ENTRY_GUIDE.md` | 35分類の現行OFF/将来ON、目的・関連付け・追跡・任意/条件・根拠と個別解消操作、実際のASC画面順。ASCへは未入力 |

参照した現行実装: `life_os/lib/core/ads/{ad_consent_controller,google_ads_gateway,ad_runtime,tracking_authorization}.dart`、`ios/Runner/{AdPrivacyNative,BackupCloudNative,BackupKeysNative,StorePurchaseReader}.swift`、OCRは`AppDelegate.swift`、backup各presentation、Free権利と日本語l10n。今回のWebは現在OFF構成と提供後の条件を区別する。

監査の経緯は6E-2のIMPLEMENTATION_REPORT/WEB_REVIEW_AND_PUBLICATION_GATE/DATA_FLOW/ASC、6E-1公開ブロッカー、`<workspace>/matomari_phase6e0_audit/20261020_1311/` の04/05/06/08を参照。古い「ATT未採用・EULA未決」の記載は今回の確定判断で更新し、過去の検証結果まで書き換えない。

## 3. URLの実確認

| URL | 今回GET | 今回原稿の公開 |
|---|---|---|
| https://ddkklab.github.io/matomari-life/ | 200 | 未反映 |
| https://ddkklab.github.io/matomari-life/privacy/ | 200 | 未反映 |
| https://ddkklab.github.io/matomari-life/terms/ | 200 | 未反映 |
| https://ddkklab.github.io/matomari-life/support/ | 200 | 未反映 |
| https://ddkklab.github.io/matomari-life/premium/ | 404 | 未反映 |

既存4ページのHTTP200を新原稿公開済みとはしない。新Premium URLは404で公開待ち。現在のアプリへ未公開URLや改定原稿を反映する変更は行っていない。

Apple標準EULA、Apple privacy、解約、返金、Google privacy、GMAデータ開示、およびAppleのASC定義/入力案内は8URLともHTTP200。Appleの自動更新請求案内も[メディアサービス利用規約](https://www.apple.com/legal/internet-services/itunes/jp/terms.html)のサブスクリプション節と照合した。外部リンク到達は法的適合やSDK実通信の検証ではない。

## 4. ローカル検査

| 検査 | 結果 |
|---|---|
| 全12ページの構文 | PASS。使用するHTML要素の開閉/入れ子/重複属性・id、doctype、lang、main/h1等を検査。完全なHTML5規格適合やW3C認証を取得したとはしない |
| 内部リンク/fragment | PASS。参照先ファイル/idを照合。canonical/OG/description/画像alt/目次/法務リンクも確認 |
| サイトマップ | PASS。18URL、重複なし、全MATOMARIページを収録、非MATOMARIの既存URLは同一 |
| モバイル/拡大 | PASS。12ページ×320/390/768px×文字100/200%＝72ケース。文字200%はcomputed font sizeを各要素で2倍にし、横溢れ・画像・見出し・main・リンク名を検査 |
| キーボード | PASS。12ページすべてで実Tab/Enterイベントを送出し、先頭skip link→main到達、全リンクのDOM順移動・focus-visible・2px以上のoutlineを確認 |
| 初回の不合格 | 320px/文字200%で全12ページに横溢れ。MATOMARI専用CSSで折返しを修正後、同じ条件で全件再成功。テスト条件は緩和していない |
| 金額/文書間整合 | PASS。250/300円・レビュー原稿ラベルなし。200円/月、任意体験、EULA、広告/ATT、削除/外部経路、運営、現在OFFの説明を照合 |
| ブラウザの範囲 | fresh profileのheadless Chromeとloopback serverのみ。外部HTTPSを遮断。既存アカウントprofileは使用せず、本工程のChrome/serverだけ終了 |

今回はWebのみのためFlutter build/testや実機/Simulatorの起動は追加しない。VoiceOver実聴・Safari/iOS全機種・SNSのOG実プレビュー・法律上の最終適合は未検証。大量のスクリーンショットは作成していない。

## 5. 保護対象の比較

アプリのHEAD、Git状態、追跡3,872ファイルのhashは開始時と一致。DB/schema/Keychain/backup/Trial/署名/SDKを変更していない。端末DB、実機/Simulator、鍵にアクセスする操作なし。

Food Lifeのページ・規約/privacy、共通CSS、MATOMARI以外の追跡ファイルは開始時と一致。代表3ファイルのSHA-256比較:

| ファイル | 変更前＝変更後 |
|---|---|
| `privacy/food-life/index.html` | `1b0273d828ba7263b8702bed4ddf6086d8f5cd2735eb0c18e5340fb0974c461d` |
| `terms/food-life/index.html` | `9a5ca928e53c65a23d69ef3ea0b3079fc0c531388a1b0ebbeb6e69a1f003ffea` |
| `assets/style.css` | `f202873ef0faedde0b0378356edac470f4220b00cb75d2490f8cd3648b826ff7` |

## 6. 三者整合とASCの残課題

| 論点 | アプリ根拠/現状 | Web | ASC入力案 |
|---|---|---|---|
| 料金/体験/上限 | 200円/StoreKit価格、任意体験、Free件数、データ保護 | terms/Premium/supportで一致 | 課金の操作とプライバシー申告を分離。契約/商品/Sandbox未完を提供済みにしない |
| 広告/ATT | 通常OFF、必要UMP→ATT、権利/世代/foreground/SDKガード | privacy/terms/supportで現在と提供後を分記 | ATT導入だけで全tracking判定を変更しない。OFF通信/ON宣言/実測を分離 |
| 業務データ | 広告引数に金額/期限/食事等を渡さない | 記録の具体例を明記 | 端末記録とGMA/UMPの収集を混同しない |
| backup/削除 | 暗号化統合/任意Cloud、個別local/cloud世代削除、条件付き保全整理 | privacy/support/helpに実在する操作だけ | Apple自身の収集と運営取得の未確定を個別確認 |
| 運営/サポート/EULA | 所有者が今回確定。アプリ側の挙動は変更なし | 運営/必要期間保持/削除相談/標準EULAを確定 | サポート3種類をYESの申告案に更新、例外を未証明のまま適用しない |

[ASC転記ガイド](MATOMARI_ASC_PRIVACY_ENTRY_GUIDE.md)は全35種類を収録。現行OFF：**YES 3 / NO 13 / UNVERIFIED 19**。氏名・メール・サポートは承認運用からYES、OCR原本と検索履歴は具体的な端末内経路からNOへ。旧6E-2の24件未確認をそのまま複製せず差分を明記した。ONの目的/関連付け/追跡等にも未確定があるため、35行が埋まったことをASC確定・公開可能としない。

未確定行は、SDK実通信/creative/Cloud運営アクセス/Apple取得情報/追加サポート情報ごとに、担当・確認する画面または隔離試験を一行ずつ記載済み。本工程で通常DBや広告許可を使った通信試験、ASCへの保存はしない。

## 7. 公開前の最小チェックリストと停止

- [x] 所有者の運営表示・EULA・制定/更新日・問い合わせ保持運用を反映。
- [x] 12ページ/72表示ケース/キーボード/リンク/三者整合/保護hashを検証。
- [ ] 所有者が最終privacy/terms/Premium本文を読み、公開文面を承認する。
- [ ] 正式公開日を決め、privacy/termsの「施行日：本ページの正式公開日」を実日付へ更新・再確認する。制定/更新日2026-10-20を公開日と誤記しない。
- [ ] 個人開発者の法的正式名・追加の氏名/住所/連絡方法等の表示要否を、適用される販売形態/法令とAppleの販売者情報に照らし所有者が確認する。ddkklab表示の承認だけで法的適合済みにしない。
- [ ] 問い合わせ運用を維持し、未成年/対象年齢/広告地域・partner・Google実通信/保持条件を最終配信構成に合わせる。未確認の広告経路はOFF/保留を維持する。
- [ ] Web公開・pushは、この文面と未確定事項を提示した後の別途明示承認を得る。公開後に5実URL/内容/リンクをGET再確認する。Premium404を先に公開済みとしない。
- [ ] ASCは最終提出構成と各UNVERIFIEDを解消し、別承認後に入力/保存/Publish。App Store審査提出・本番広告/購入ONはさらに別工程。

**READY_FOR_USER_REVIEW**：正式文面へのローカル修正、表示検査、35分類の転記用判断資料。

**BLOCKED / 承認待ち**：Web正式公開（施行実日付・法定表示等の最終確認と公開承認）、ASC回答の確定/保存/Publish、広告/購入の本番提供。今回の作業をアプリのリリースGOとしない。

検証合格・差分確認後、Web repoだけローカルcommitする。最終commit IDは作業終了報告に記載する。ここで停止し、push/公開や次工程を自動開始しない。
