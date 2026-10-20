# MATOMARI LIFE — ASCプライバシー最終転記表

2026-10-20 JST。**判定：限定項目保留（R1/R2）。ASC実入力・保存・Publishなし。** 本表は初回公開予定のFree広告ON構成を主表とする。現行広告OFFは参考列。以前の「収集あり10種/なし25種」は採用していない。

## 1. この表が対象にする予定構成

アプリ基点 `039248277797b734a92fefc10653fc77b14f5f80`。google_mobile_ads9.1.0/GMA13.11.0/UMP3.1.0、Google配信のみ、既存のNPA/PPT disabled/first-party ID OFF/クラッシュ報告OFF/mediation初期化OFFを維持し、明示許可→必要UMP→ATT、既知Free・foreground・対象トップでのみ配信する前提。Premium/30日体験は広告なし。業務記録を広告引数へ渡さない。

**重要な実装差**：現行 `AdsBuildConfig.testEnabled` は `kDebugMode && iOS && test flag` で、Releaseの本番広告はまだ実装/有効化されていない。本表はそれをON済みとするものではない。初回ON Releaseの正式ID、partner、地域/年齢/CMP、最終archiveとこの前提が一致することをR1で確認する必要がある。今回はアプリを変更/ビルド/起動していない。

### 用途の記号（実画面では対応する項目を選択）

- A：サードパーティ広告（Third-Party Advertising）
- B：デベロッパの広告やマーケティング（Developer’s Advertising or Marketing）
- C：アナリティクス（Analytics）
- F：アプリの機能（App Functionality）

GMA行は固定版Manifestが宣言するA/B/Cを含める。これはMATOMARIが販促メールを送るという意味ではない。特定構成でB等が該当しないことを提供者の根拠で確定できた場合だけ、その用途を見直す。UMPが扱う3種類にはFも含める。製品のパーソナライズ/その他の目的を推測で追加しない。

## 2. 全35種類：画面の質問順

「選択しない」はこの予定構成に既知の可読収集経路がないという判定。アプリ内の保存自体を禁止する意味ではない。「保留」は仮のNOを入力しない。用途→ユーザーへの紐付け→トラッキングは収集する種類にだけ回答する。任意利用でも開示を省略しない。

| # / カテゴリ・データ種類 | 初回広告ON：収集/種類画面 | 利用目的 | ユーザーへの紐付け | トラッキング | 任意/必須・条件 | 根拠 | 現行OFF：収集参考 |
|---|---|---|---|---|---|---|---|
| 1. Contact Info / 名前（Name） | 選択する（YES） | F | はい | いいえ | 問い合わせ任意 | S：サポートメールの送信元表示名。保持運用承認済み。表示名が任意でも例外を自動適用しない。 | YES |
| 2. Contact Info / メールアドレス（Email Address） | 選択する（YES） | F | はい | いいえ | 問い合わせ任意 | S：サポートへの送信元メールアドレス。対応・継続対応に必要な期間保持する運用。 | YES |
| 3. Contact Info / 電話番号（Phone Number） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | B：期限等の補足/連絡メモは端末内・暗号化backup。広告/運営へ電話番号の可読送信なし。 | NO |
| 4. Contact Info / 物理的な住所（Physical Address） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | B：住所等の補足は端末内・暗号化backup。外部の住所取得/送信機能なし。 | NO |
| 5. Contact Info / ユーザーのその他の連絡先情報（Other User Contact Info） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | S/B：窓口はメール。追加の連絡先を要求する専用収集なし。汎用の問い合わせ本文をあらゆる種類へ展開しない。 | NO |
| 6. Health & Fitness / 健康（Health） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | B：食事等の端末記録/暗号化backup。運営への健康情報送信・HealthKit連携なし。 | NO |
| 7. Health & Fitness / フィットネス（Fitness） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | N：運動・Motion/HealthKit情報の収集経路なし。 | NO |
| 8. Financial Info / 支払い情報（Payment Info） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | P：Appleの決済入力をアプリは取得しない。資産の属性とカード/決済番号の収集を区別。 | NO |
| 9. Financial Info / クレジット情報（Credit Info） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | N：信用スコア/照会の機能なし。 | NO |
| 10. Financial Info / その他の財務情報（Other Financial Info） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | B：金額・資産は端末内。backup本体/manifestも暗号化し、運営へ可読な送信なし。 | NO |
| 11. Location / 詳細な位置情報（Precise Location） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | N：位置情報の権限/取得APIなし。IP由来概略位置は別行。 | NO |
| 12. Location / おおよその位置（Coarse Location） | 選択する（YES） | A・B・C・F | はい | いいえ | Free/説明・明示許可/必要UMP/ATT・配信条件。必須の利用条件ではない | G/U：GMA linked=true/tracking=false、UMP false/false。少なくともGMAのlinked=trueを採る。 | UNVERIFIED |
| 13. Sensitive Info / 機密情報（Sensitive Info） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | B：汎用メモに入力し得る内容を全種類の収集としない。可読な送信経路なし。 | NO |
| 14. Contacts / 連絡先（Contacts） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | N：アドレス帳API/アップロード機能なし。手入力メモとは別。 | NO |
| 15. User Content / Eメールまたはテキストメッセージ（Emails or Text Messages） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | N/S：端末メール/メッセージの読取なし。利用者が送るサポート内容はカスタマーサポートとして申告。 | NO |
| 16. User Content / 写真またはビデオ（Photos or Videos） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | O：OCRは選択原本を端末処理、返るのは認識文字等。原本をbackup/広告にアップロードしない。 | NO |
| 17. User Content / オーディオ（Audio Data） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | N：マイク/録音/音声アップロードなし。 | NO |
| 18. User Content / ゲーム内容（Gameplay Content） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | N：食事の称号だけでゲーム進行の外部収集とはしない。 | NO |
| 19. User Content / カスタマーサポート（Customer Support） | 選択する（YES） | F | はい | いいえ | 問い合わせ任意 | S：問い合わせメール本文と対応記録。運用承認済み、広告目的なし。 | YES |
| 20. User Content / その他のユーザーコンテンツ（Other User Content） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | B：記録/メモ/OCR採用文字は端末内と暗号化backup。問い合わせ本文は別行。 | NO |
| 21. Browsing History / 閲覧履歴（Browsing History） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | W/G：履歴読取・蓄積機能なし。通常リンクはOSブラウザ。固定SDKの宣言に閲覧履歴なし。追加creative/partnerはR1で再確認。 | NO |
| 22. Search History / 検索履歴（Search History） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | Q：検索条件は画面内/ローカルRepositoryへ。検索語を広告や検索履歴サーバーへ送らない。 | NO |
| 23. Identifiers / ユーザーID（User ID） | 保留（UNVERIFIED R2） | 保留 R2 | 保留 R2 | 保留 R2 | Cloud利用任意。運営取得範囲を確認 | M/R2：Cloudの不透明なowner/vault関連metadataを運営が取得・保持する範囲が未確認。Apple自身の取扱いと別。 | UNVERIFIED |
| 24. Identifiers / デバイスID（Device ID） | 選択する（YES） | A・B・C | はい | はい | Free/説明・明示許可/必要UMP/ATT・配信条件。必須の利用条件ではない | G：固定GMA13.11.0がlinked=true/tracking=trueを宣言。NPA/ATT導入だけでfalseへ変更しない。 | UNVERIFIED |
| 25. Purchases / 購入履歴（Purchase History） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | P：StoreKitの署名状態を端末で確認。独自サーバー/receipt転送/Server Notificationsなし。Apple自身の処理を自社収集としない。 | NO |
| 26. Usage Data / アプリ内の操作（Product Interaction） | 選択する（YES） | A・B・C・F | はい | いいえ | Free/説明・明示許可/必要UMP/ATT・配信条件。必須の利用条件ではない | G/U：GMAはlinked=true、UMPはfalse。広告操作等の経路を申告し、記録の全操作送信とはしない。 | UNVERIFIED |
| 27. Usage Data / 広告データ（Advertising Data） | 選択する（YES） | A・B・C | はい | いいえ | Free/説明・明示許可/必要UMP/ATT・配信条件。必須の利用条件ではない | G：広告表示/操作データ。GMA linked=true/tracking=false。 | UNVERIFIED |
| 28. Usage Data / その他の使用状況データ（Other Usage Data） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | G/N：独自analytics/追加reportingなし。既知の広告操作はアプリ内の操作/広告データに分類。追加partner時はR1再確認。 | NO |
| 29. Diagnostics / クラッシュデータ（Crash Data） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | C：GMA初期化前にdisableSDKCrashReportingを呼び、公式APIは自動SDKクラッシュ報告を無効化する。他のcrash SDKなし。最終ONビルドでもこの順序が条件。 | UNVERIFIED |
| 30. Diagnostics / パフォーマンスデータ（Performance Data） | 選択する（YES） | A・B・C・F | いいえ | いいえ | Free/説明・明示許可/必要UMP/ATT・配信条件。必須の利用条件ではない | G/U：固定版GMA/UMPともlinked=false/tracking=false。一般開示のuser-associated記述との違いを下記で明示。 | UNVERIFIED |
| 31. Diagnostics / その他の診断データ（Other Diagnostic Data） | 選択する（YES） | A・B・C | いいえ | いいえ | Free/説明・明示許可/必要UMP/ATT・配信条件。必須の利用条件ではない | G：固定GMA linked=false/tracking=false。クラッシュ無効化だけで全診断を非収集にはしない。 | UNVERIFIED |
| 32. Surroundings / 環境のスキャン（Environment Scanning） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | N/O：AR/周辺環境の構築・送信なし。書類OCRと環境スキャンを区別。 | NO |
| 33. Body / 手（Hands） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | N：手の構造/動作を取得する機能なし。 | NO |
| 34. Body / 頭部（Head） | 選択しない（NO） | 対象外 | 対象外 | 対象外 | 追加の収集操作なし | N：顔形状/頭の動作取得なし。OS本人認証は結果のみ。 | NO |
| 35. Other Data / その他の種類のデータ（Other Data Types） | 保留（UNVERIFIED R2） | 保留 R2 | 保留 R2 | 保留 R2 | Cloud利用任意。運営取得範囲を確認 | M/R2：Cloudの世代/状態/整合性metadataや運営が取得するログの保持・分類を最終確認。全部をその他に押し込まない。 | UNVERIFIED |

**主表：選択する9種類、選択しない24種類、保留2種類、合計35。** 保留はユーザーID/その他の種類のデータ。加えて全体の最終ON構成照合R1は未完了。数だけで公開可能とは判定しない。

## 3. 判定の根拠と以前の表からの差分

### B：端末内記録と暗号化バックアップ

`lib/integration/backup/data/sodium_backup_crypto.dart:300-356` はmanifestと全plaintext sectionをsecretstreamで暗号化。DEKはVMKでwrapし、VMK/回復キーはKeychainの経路、運営独自サーバーへキーを送る経路なし。`ios/Runner/BackupCloudNative.swift:101,199-224` はprivateCloudDatabaseへcipher CKAssetとサイズ/ハッシュ/indexを保存する。通常記録を可読なCloudKit列へ保存していない。

この具体的な暗号・鍵・保存経路から、電話/住所/健康/財務/メモ等の通常記録を一律UNVERIFIEDとする扱いを解消。Appleの処理を無条件に運営者の可読収集とはしない。一方、indexの世代/時刻/サイズ/状態/不透明IDやConsoleログを運営が取得する範囲は**別のR2**へ集約した。CloudKitがprivateという名称だけで全情報が非収集とはしていない。単なる暗号化だけを理由にユーザーへの紐付けNOにもしていない。

### S/O/Q/W/N：サポートと他の端末処理

問い合わせの名前/メール/本文は、所有者が承認した必要期間保持運用に従い選択する。任意開示例外をすべて満たす証明はないため適用しない。汎用の問い合わせやメモへ入り得るすべてのデータ種類を推測で追加しない。個別の受信メールは閲覧していない。

OCRは `ios/Runner/AppDelegate.swift:327,471` の端末Vision、検索は `lib/features/life/presentation/life_search_page.dart` の画面条件/ローカルRepository、通常法務リンクは `StorePurchaseNative.swift` のOSブラウザ。広告WebViewの既知操作はSDKのアプリ内の操作/広告データとして扱う。独自の閲覧履歴/その他使用状況収集は設けていない。新たなcreative/partnerで収集が増える場合はR1で表を更新する。

### P：購入履歴

`ios/Runner/StorePurchaseReader.swift` はStoreKitの署名情報と権利を端末で確認する。アプリ独自サーバーへのreceipt/取引転送やApp Store Server Notificationsの受信サーバーはない。Apple自身の決済・購入履歴処理を運営の収集YESへ自動変換しない。今回はこの実装に基づき**選択しない**。将来、運営がユーザー別取引を別途取得・保存する運用を追加する場合は再評価する。購入/Sandbox成功の確認とは別。

### C：クラッシュ情報

`google_ads_gateway.dart:143` はSDK initialize/load前に `disableSDKCrashReporting` をawait。google_mobile_ads9.1.0のiOSブリッジはGMA同名APIを呼ぶ。公式APIは自動SDKクラッシュ報告を無効にするもので、他のcrash SDKもない。この構成では**選択しない**。SDKの未設定時ManifestにCrash Dataがあることを無視したのではなく、設定APIを根拠に分けた。全診断の停止やSDK内全通信停止は保証しない。ON Releaseの順序/有効性をR1で確認し、設定が欠ける場合はCrash Dataを選択する内容へ再評価する。現行OFFではこの設定API自体を呼ばないため、参考列は通信未観測のUNVERIFIEDを維持。

### G/U：固定版SDKとトラッキング

デバイスIDはGMA13.11.0の宣言が紐付けtrue/追跡trueなので**追跡「はい」**。ATTを追加したからではない。NPA/PPT disabledだけで宣言をfalseへ書き換える根拠もない。ATT拒否時に未検証の配信を停止する制御と、ATT許可側を含むアプリ全体の申告を分ける。

概略位置/操作/広告データはGMAの紐付けtrueを採用。Performanceは固定版GMA/UMPともfalseなので「いいえ」。Google一般開示にはuser-associated performanceの説明もあるため、固定版Manifestの限定判断であることを明示し、最終privacy report/通信/partnerの結果が異なればR1で修正する。診断・操作等の追跡は固定宣言のfalseに従い、全種類を機械的に追跡ありへ変更しない。

固定ManifestのSHA-256:

- GoogleMobileAds: `69fb112582fc23fc06c635c961d262a3f7b4b5654d284787491de3000dadf9d2`

- UserMessagingPlatform: `45b7adb99fcd2d962a1c800fbfcc1325b57a7fa4165f416182323bb5ffe9c900`

## 4. ASCの画面順（今回は操作しない）

1. マイApp → MATOMARI LIFE → アプリのプライバシー。正式Bundle `com.ddkklab.matomarilife` と一致を確認。Food Lifeを選ばない。
2. 「データを収集しますか？」には主表の対象構成では「はい」。Free限定・任意同意でも、アプリ全体の収集を答える。R1/R2解消までは保存/Publishしない。
3. データ種類一覧で主表の「選択する」を選ぶ。「選択しない」は外す。2保留行は担当が回答を確定するまで仮のNOにしない。
4. 選んだ種類ごとに用途A/B/C/Fを対応する日本語項目で選択。次にユーザーとの紐付け、トラッキングを主表の順で回答。画面の表記差は公式英語名も照合する。
5. プライバシーポリシーURLは、公開後に本文一致を確認した `https://ddkklab.github.io/matomari-life/privacy/` を指定。PremiumページはポリシーURLの代用ではない。任意のプライバシー選択URLを使うなら、既存support/privacyの操作説明と実際の公開ページを照合し、架空URLを作らない。
6. プレビューでWeb/アプリ/表の一致を確認。Apple標準EULAを使い独自EULAを登録しない方針は維持。ASCの保存・Publish、審査提出は別承認の別工程。

## 5. 三者一致と残る停止事項

Webは広告/購入が現在OFFであることと、提供後の配信・契約条件を分けている。主表も予定ONを現在の状態と扱わない。200円/月のみ、任意30日体験、Free上限、EULA、業務データを広告へ渡さない、拒否/撤回/削除の説明は同じ。公開URLと本文検査は [公開報告](MATOMARI_WEB_PUBLICATION_REPORT.md)。

残る外部確認は [R1/R2と販売者表示の確認](MATOMARI_ASC_REMAINING_DECISIONS.md)。35行を準備できたことは、最終Release/全通信/Apple契約/ASC申告の成功ではない。現行OFF列のSDK内部通信は未観測で、収集ゼロとは報告しない。

一次資料： [Appleの日本語分類/定義](https://developer.apple.com/jp/app-store/app-privacy-details/)、[Googleデータ開示](https://developers.google.com/admob/ios/privacy/data-disclosure)、[GMAの設定API](https://developers.google.com/admob/ios/api/reference/Classes/GADMobileAds)、[Apple CloudKit](https://developer.apple.com/icloud/cloudkit/)。参照した6E-0全9資料/6E-1/6E-2のうち、今回の差分に関係するコード/版固有Manifest/承認運用だけを追加照合した。アプリ側の過去資料を改変していない。
