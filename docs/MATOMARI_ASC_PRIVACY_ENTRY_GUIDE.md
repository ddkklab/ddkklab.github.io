# MATOMARI LIFE — ASCプライバシー入力ガイド

2026-10-20 JST。**転記用の判断表、ASC保存・Publish未実施**。Web最終修正の成果物。基点はアプリHEAD `039248277797b734a92fefc10653fc77b14f5f80` の [6E-2回答表](../../life_os/docs/phase6e2/ASC_PRIVACY_ANSWERS.md) と同CSV。アプリ側の正本は変更していない。

## 対象と結論

現在の通常アプリは本番広告・購入OFF。最終提出用Release/archiveは未固定であり、この表のコード上の判定を「最終ビルドを検証済み」とはしない。将来の広告ON列は申告案で、本番有効化の承認ではない。Apple標準EULA採用とサービス規約の併用は所有者の確定決定。契約や法定表示の最終適合まで確認済みとはしない。

収集とは、端末外へ送信し、運営者または組み込んだ第三者がリアルタイム処理に必要な期間を超えてアクセス可能となる取扱い。端末だけの処理、Apple自身が収集する情報、運営者がAppleから受け取る情報を区別する。Free限定・任意利用でも申告から自動除外しない。ATT導入だけで追跡の有無を決めない。

**今回確定した差分**:

- 氏名・メール・サポート：問い合わせメールの受信/必要期間の保持運用が承認されたためYESの申告案へ。送信元の表示名・メールアドレスと内容は関連付けYES、サポート目的のみ・追跡NO。問い合わせ自体は任意だが、Appleの任意開示例外をすべて満たす証拠はないため例外は適用しない。実際の受信メールは閲覧していない。
- 写真/ビデオ：`ios/Runner/AppDelegate.swift:327,355,471` のOCRは選択画像を端末処理し、返すのは文字/位置等。`lib/integration/backup/domain/backup_documents.dart:20` のバックアップは記録のセクションで、原本画像のアップロード経路を設けていない。選択元のクラウド取得は自社への原本収集としない。この構成ではNO。
- 検索履歴：`lib/features/life/presentation/life_search_page.dart:89` は条件を画面内で保持しRepositoryのローカル検索へ渡す。広告引数/検索履歴の送信機能なし。検索語を単にCloud運用と同じ未確認理由にせず、この構成ではNO。
- 上記以外の未確認を推測で解消しない。SDK実通信、運営が取得するCloud/Apple情報等の範囲は各行に解消操作を付した。

## 35分類一覧

「目的」「関連付け」「追跡」は収集がある場合の候補。NO行のこれらは適用なし。SDK行のOFFは通信未観測のため、収集・関連付け・追跡のすべてをUNVERIFIEDとする。ONの宣言候補をOFFへ流用しない。

| # / Appleカテゴリ・種類（日本語） | 現行OFFの収集 | 将来広告ONの収集 | 目的（収集時） | 関連付け OFF / ON | 追跡 OFF / ON | 任意/必須・条件 | 根拠／判定区分 |
|---|---|---|---|---|---|---|---|
| 1. Contact Info / Name（氏名） | YES | YES | App Functionality | YES / YES | NO / NO | 問い合わせ任意 | [問い合わせ窓口](../matomari-life/support/index.html)・[保持方針](../matomari-life/privacy/index.html#contact)・今回の運用承認 / **S01** |
| 2. Contact Info / Email Address（メール） | YES | YES | App Functionality | YES / YES | NO / NO | 問い合わせ任意 | [問い合わせ窓口](../matomari-life/support/index.html)・[保持方針](../matomari-life/privacy/index.html#contact)・今回の運用承認 / **S02** |
| 3. Contact Info / Phone Number（電話） | UNVERIFIED | UNVERIFIED | App Functionality（収集該当時） | UNVERIFIED / UNVERIFIED | NO / NO | Cloud/持出し任意 | [lib/features/life/checklists/presentation/checklist_pages.dart:1245](../../life_os/lib/features/life/checklists/presentation/checklist_pages.dart:1245) / **C03** |
| 4. Contact Info / Physical Address（住所） | UNVERIFIED | UNVERIFIED | App Functionality（収集該当時） | UNVERIFIED / UNVERIFIED | NO / NO | Cloud/持出し任意 | [lib/features/life/data/life_tables.dart:48](../../life_os/lib/features/life/data/life_tables.dart:48) / **C04** |
| 5. Contact Info / Other User Contact Info（その他連絡先） | UNVERIFIED | UNVERIFIED | App Functionality（サポート） | UNVERIFIED / UNVERIFIED | NO / NO | 問い合わせ任意 | [lib/features/life/checklists/presentation/checklist_pages.dart:1245](../../life_os/lib/features/life/checklists/presentation/checklist_pages.dart:1245) / **S205** |
| 6. Health & Fitness / Health（健康） | UNVERIFIED | UNVERIFIED | App Functionality（収集該当時） | UNVERIFIED / UNVERIFIED | NO / NO | Cloud/持出し任意 | [lib/features/food/data/food.drift:20](../../life_os/lib/features/food/data/food.drift:20) / **C06** |
| 7. Health & Fitness / Fitness（フィットネス） | NO | NO | — | — / — | — / — | N/A | [ios/Runner/AppDelegate.swift:1](../../life_os/ios/Runner/AppDelegate.swift:1) / **N07** |
| 8. Financial Info / Payment Info（支払情報） | NO | NO | — | — / — | — / — | N/A | [lib/core/entitlements/store_purchase.dart:401](../../life_os/lib/core/entitlements/store_purchase.dart:401) / **N08** |
| 9. Financial Info / Credit Info（信用情報） | NO | NO | — | — / — | — / — | N/A | [lib/features/finance/assets/data/assets.drift:2](../../life_os/lib/features/finance/assets/data/assets.drift:2) / **N09** |
| 10. Financial Info / Other Financial Info（その他財務） | UNVERIFIED | UNVERIFIED | App Functionality（収集該当時） | UNVERIFIED / UNVERIFIED | NO / NO | Cloud/持出し任意 | [lib/features/finance/data/finance.drift:1](../../life_os/lib/features/finance/data/finance.drift:1) / **C10** |
| 11. Location / Precise Location（正確な位置） | NO | NO | — | — / — | — / — | N/A | [ios/Runner/Info.plist:1](../../life_os/ios/Runner/Info.plist:1) / **N11** |
| 12. Location / Coarse Location（おおよその位置） | UNVERIFIED | YES | Third-Party Advertising / Analytics / Developer’s Advertising or Marketing（実適用要確認） / App Functionality（UMP） | UNVERIFIED / UNVERIFIED | UNVERIFIED / NO | 明示許可/Free/必要UMP/ATT・配信条件。必須のアプリ利用条件ではない | [lib/core/ads/google_ads_gateway.dart:36](../../life_os/lib/core/ads/google_ads_gateway.dart:36) / **G12** |
| 13. Sensitive Info / Sensitive Info（機密情報） | UNVERIFIED | UNVERIFIED | App Functionality（収集該当時） | UNVERIFIED / UNVERIFIED | NO / NO | Cloud/持出し任意 | [lib/features/life/data/life_tables.dart:48](../../life_os/lib/features/life/data/life_tables.dart:48) / **C13** |
| 14. Contacts / Contacts（連絡先） | NO | NO | — | — / — | — / — | N/A | [ios/Runner/AppDelegate.swift:1](../../life_os/ios/Runner/AppDelegate.swift:1) / **N14** |
| 15. User Content / Emails or Text Messages（Eメール/メッセージ） | NO | NO | — | — / — | — / — | N/A | [lib/core/entitlements/store_purchase.dart:54](../../life_os/lib/core/entitlements/store_purchase.dart:54) / **N15** |
| 16. User Content / Photos or Videos（写真/ビデオ） | NO | NO | — | — / — | — / — | Cloud/持出し任意 | [ios/Runner/AppDelegate.swift:355](../../life_os/ios/Runner/AppDelegate.swift:355) / **N16** |
| 17. User Content / Audio Data（オーディオ） | NO | NO | — | — / — | — / — | N/A | [ios/Runner/AppDelegate.swift:368](../../life_os/ios/Runner/AppDelegate.swift:368) / **N17** |
| 18. User Content / Gameplay Content（ゲーム内容） | NO | NO | — | — / — | — / — | N/A | [lib/features/food/data/food_awards.dart:1](../../life_os/lib/features/food/data/food_awards.dart:1) / **N18** |
| 19. User Content / Customer Support（サポート） | YES | YES | App Functionality | YES / YES | NO / NO | 問い合わせ任意 | [問い合わせ窓口](../matomari-life/support/index.html)・[保持方針](../matomari-life/privacy/index.html#contact)・今回の運用承認 / **S19** |
| 20. User Content / Other User Content（その他ユーザー内容） | UNVERIFIED | UNVERIFIED | App Functionality（収集該当時） | UNVERIFIED / UNVERIFIED | NO / NO | Cloud/持出し任意 | [lib/features/life/data/life_tables.dart:37](../../life_os/lib/features/life/data/life_tables.dart:37) / **C20** |
| 21. Browsing History / Browsing History（閲覧履歴） | UNVERIFIED | UNVERIFIED | UNVERIFIED | UNVERIFIED / UNVERIFIED | UNVERIFIED / UNVERIFIED | 広告操作等の条件依存 | [ios/Runner/StorePurchaseNative.swift:47](../../life_os/ios/Runner/StorePurchaseNative.swift:47) / **V21** |
| 22. Search History / Search History（検索履歴） | NO | NO | — | — / — | — / — | Cloud/持出し任意 | [lib/features/life/presentation/life_search_page.dart:35](../../life_os/lib/features/life/presentation/life_search_page.dart:35) / **N22** |
| 23. Identifiers / User ID（ユーザーID） | UNVERIFIED | UNVERIFIED | App Functionality（収集該当時） | UNVERIFIED / UNVERIFIED | NO / NO | Cloud/持出し任意 | [ios/Runner/BackupCloudNative.swift:91](../../life_os/ios/Runner/BackupCloudNative.swift:91) / **C23** |
| 24. Identifiers / Device ID（デバイスID） | UNVERIFIED | YES | Third-Party Advertising / Analytics / Developer’s Advertising or Marketing（実適用要確認） | UNVERIFIED / YES | UNVERIFIED / UNVERIFIED | 明示許可/Free/必要UMP/ATT・配信条件。必須のアプリ利用条件ではない | [lib/core/ads/google_ads_gateway.dart:137](../../life_os/lib/core/ads/google_ads_gateway.dart:137) / **G24** |
| 25. Purchases / Purchase History（購入履歴） | UNVERIFIED | UNVERIFIED | App Functionality（権利確認） | UNVERIFIED / UNVERIFIED | NO / NO | 購入任意、状態readは通常起動にもある | [ios/Runner/StorePurchaseReader.swift:74](../../life_os/ios/Runner/StorePurchaseReader.swift:74) / **P25** |
| 26. Usage Data / Product Interaction（製品の操作） | UNVERIFIED | YES | Third-Party Advertising / Analytics / Developer’s Advertising or Marketing（実適用要確認） / App Functionality（UMP） | UNVERIFIED / YES | UNVERIFIED / NO | 明示許可/Free/必要UMP/ATT・配信条件。必須のアプリ利用条件ではない | [lib/core/ads/google_ads_gateway.dart:170](../../life_os/lib/core/ads/google_ads_gateway.dart:170) / **G26** |
| 27. Usage Data / Advertising Data（広告データ） | UNVERIFIED | YES | Third-Party Advertising / Analytics / Developer’s Advertising or Marketing（実適用要確認） | UNVERIFIED / YES | UNVERIFIED / NO | 明示許可/Free/必要UMP/ATT・配信条件。必須のアプリ利用条件ではない | [lib/core/ads/google_ads_gateway.dart:173](../../life_os/lib/core/ads/google_ads_gateway.dart:173) / **G27** |
| 28. Usage Data / Other Usage Data（その他使用状況） | UNVERIFIED | UNVERIFIED | UNVERIFIED | UNVERIFIED / UNVERIFIED | UNVERIFIED / UNVERIFIED | 広告操作等の条件依存 | [lib/core/ads/google_ads_gateway.dart:173](../../life_os/lib/core/ads/google_ads_gateway.dart:173) / **V28** |
| 29. Diagnostics / Crash Data（クラッシュ） | UNVERIFIED | UNVERIFIED | Analytics（crash OFFの実効性確認前） | UNVERIFIED / NO | UNVERIFIED / NO | 明示許可/Free/必要UMP/ATT・配信条件。必須のアプリ利用条件ではない | [lib/core/ads/google_ads_gateway.dart:139](../../life_os/lib/core/ads/google_ads_gateway.dart:139) / **G29** |
| 30. Diagnostics / Performance Data（パフォーマンス） | UNVERIFIED | YES | Third-Party Advertising / Analytics / Developer’s Advertising or Marketing（実適用要確認） / App Functionality（UMP） | UNVERIFIED / UNVERIFIED | UNVERIFIED / NO | 明示許可/Free/必要UMP/ATT・配信条件。必須のアプリ利用条件ではない | [lib/core/ads/google_ads_gateway.dart:147](../../life_os/lib/core/ads/google_ads_gateway.dart:147) / **G30** |
| 31. Diagnostics / Other Diagnostic Data（その他診断） | UNVERIFIED | YES | Third-Party Advertising / Analytics / Developer’s Advertising or Marketing（実適用要確認） | UNVERIFIED / NO | UNVERIFIED / NO | 明示許可/Free/必要UMP/ATT・配信条件。必須のアプリ利用条件ではない | [lib/core/ads/google_ads_gateway.dart:147](../../life_os/lib/core/ads/google_ads_gateway.dart:147) / **G31** |
| 32. Surroundings / Environment Scanning（環境スキャン） | NO | NO | — | — / — | — / — | N/A | [ios/Runner/AppDelegate.swift:471](../../life_os/ios/Runner/AppDelegate.swift:471) / **N32** |
| 33. Body / Hands（手） | NO | NO | — | — / — | — / — | N/A | [ios/Runner/AppDelegate.swift:1](../../life_os/ios/Runner/AppDelegate.swift:1) / **N33** |
| 34. Body / Head（頭） | NO | NO | — | — / — | — / — | N/A | [ios/Runner/BackupKeysNative.swift:150](../../life_os/ios/Runner/BackupKeysNative.swift:150) / **N34** |
| 35. Other Data / Other Data Types（その他データ） | UNVERIFIED | UNVERIFIED | App Functionality（収集該当時） | UNVERIFIED / UNVERIFIED | NO / NO | Cloud/持出し任意 | [ios/Runner/AdPrivacyNative.swift:13](../../life_os/ios/Runner/AdPrivacyNative.swift:13) / **C35** |

区分Sは承認済みの問い合わせ運用、Nは非収集根拠あり。G/V/C/P/S2は下記の追加証拠を確認する区分です。

### 未確定行の解消操作（一行ずつ）

以下の「通常OFF」は、利用者の通常DBを試験用に変更する指示ではない。通信観測は専用の隔離ビルド/端末で、別承認を得て実施する。公開・ASC入力・本番ONは行わない。

| 行 | 何を・誰が・どの画面/試験で確認するか |
|---|---|
| C03：電話 | 所有者/Codex：電話について、CloudKit Console/運用権限で運営がアクセス・保持できる情報と、暗号文/metadata/利用者の手動共有範囲を確認。端末内だけなら非収集、運営への可読送信があれば該当種類を選ぶ。キーや記録を提出しない。 |
| C04：住所 | 所有者/Codex：住所について、CloudKit Console/運用権限で運営がアクセス・保持できる情報と、暗号文/metadata/利用者の手動共有範囲を確認。端末内だけなら非収集、運営への可読送信があれば該当種類を選ぶ。キーや記録を提出しない。 |
| S205：その他連絡先 | 所有者：サポート受信の運用で電話等の追加連絡情報を要求/保持するか確認。メール以外を取得しない運用を確定すればNO、扱うなら範囲・目的・関連付けを確定する。 |
| C06：健康 | 所有者/Codex：健康について、CloudKit Console/運用権限で運営がアクセス・保持できる情報と、暗号文/metadata/利用者の手動共有範囲を確認。端末内だけなら非収集、運営への可読送信があれば該当種類を選ぶ。キーや記録を提出しない。 |
| C10：その他財務 | 所有者/Codex：その他財務について、CloudKit Console/運用権限で運営がアクセス・保持できる情報と、暗号文/metadata/利用者の手動共有範囲を確認。端末内だけなら非収集、運営への可読送信があれば該当種類を選ぶ。キーや記録を提出しない。 |
| G12：おおよその位置 | Google/所有者/Codex：おおよその位置について、最終archiveのGMA/UMP Manifestと専用AdMobのpartner/地域/年齢設定を照合し、隔離端末の起動→同意前→同意後→拒否/撤回時の通信/保持・横断利用を確認。OFF実通信とON候補を別記。 |
| C13：機密情報 | 所有者/Codex：機密情報について、CloudKit Console/運用権限で運営がアクセス・保持できる情報と、暗号文/metadata/利用者の手動共有範囲を確認。端末内だけなら非収集、運営への可読送信があれば該当種類を選ぶ。キーや記録を提出しない。 |
| C20：その他ユーザー内容 | 所有者/Codex：その他ユーザー内容について、CloudKit Console/運用権限で運営がアクセス・保持できる情報と、暗号文/metadata/利用者の手動共有範囲を確認。端末内だけなら非収集、運営への可読送信があれば該当種類を選ぶ。キーや記録を提出しない。 |
| V21：閲覧履歴 | Google/Codex：閲覧履歴について、隔離テスト広告のcreative/WebViewの遷移・送信先・保持を確認し、外部OSブラウザの自由閲覧と分離する。 |
| C23：ユーザーID | 所有者/Codex：ユーザーIDについて、CloudKit Console/運用権限で運営がアクセス・保持できる情報と、暗号文/metadata/利用者の手動共有範囲を確認。端末内だけなら非収集、運営への可読送信があれば該当種類を選ぶ。キーや記録を提出しない。 |
| G24：デバイスID | Google/所有者/Codex：デバイスIDについて、最終archiveのGMA/UMP Manifestと専用AdMobのpartner/地域/年齢設定を照合し、隔離端末の起動→同意前→同意後→拒否/撤回時の通信/保持・横断利用を確認。OFF実通信とON候補を別記。 |
| P25：購入履歴 | 所有者/Codex：ASCの売上/購読/分析等で運営が取得・保存する項目を確認し、端末StoreKit判定・Apple自身の収集と分離する。Sandbox未完を完了にしない。 |
| G26：製品の操作 | Google/所有者/Codex：製品の操作について、最終archiveのGMA/UMP Manifestと専用AdMobのpartner/地域/年齢設定を照合し、隔離端末の起動→同意前→同意後→拒否/撤回時の通信/保持・横断利用を確認。OFF実通信とON候補を別記。 |
| G27：広告データ | Google/所有者/Codex：広告データについて、最終archiveのGMA/UMP Manifestと専用AdMobのpartner/地域/年齢設定を照合し、隔離端末の起動→同意前→同意後→拒否/撤回時の通信/保持・横断利用を確認。OFF実通信とON候補を別記。 |
| V28：その他使用状況 | Google/Codex：その他使用状況について、隔離テスト広告のcreative/WebViewの遷移・送信先・保持を確認し、外部OSブラウザの自由閲覧と分離する。 |
| G29：クラッシュ | Google/所有者/Codex：クラッシュについて、最終archiveのGMA/UMP Manifestと専用AdMobのpartner/地域/年齢設定を照合し、隔離端末の起動→同意前→同意後→拒否/撤回時の通信/保持・横断利用を確認。OFF実通信とON候補を別記。 |
| G30：パフォーマンス | Google/所有者/Codex：パフォーマンスについて、最終archiveのGMA/UMP Manifestと専用AdMobのpartner/地域/年齢設定を照合し、隔離端末の起動→同意前→同意後→拒否/撤回時の通信/保持・横断利用を確認。OFF実通信とON候補を別記。 |
| G31：その他診断 | Google/所有者/Codex：その他診断について、最終archiveのGMA/UMP Manifestと専用AdMobのpartner/地域/年齢設定を照合し、隔離端末の起動→同意前→同意後→拒否/撤回時の通信/保持・横断利用を確認。OFF実通信とON候補を別記。 |
| C35：その他データ | 所有者/Codex：その他データについて、CloudKit Console/運用権限で運営がアクセス・保持できる情報と、暗号文/metadata/利用者の手動共有範囲を確認。端末内だけなら非収集、運営への可読送信があれば該当種類を選ぶ。キーや記録を提出しない。 |

**現行OFFの分類数：YES 3 / NO 13 / UNVERIFIED 19、合計35。** 収集列だけの数で、ONの目的・関連付け・追跡等にも未確定が残る。法的な個人情報の分類とASCの種類を同じものとして扱わない。

## ASCでの操作順（準備のみ）

1. 所有者がマイApp → MATOMARI LIFE（正式Bundleを確認）→ アプリのプライバシーを開く。Codexによる入力・保存・Publishはしない。
2. 提出するビルド/地域/広告と購入の構成を固定。現在の通常OFF構成と、将来広告ONの候補を混ぜない。問い合わせ保持を含む本表では、最初の収集質問はYESの申告案となる。UNVERIFIEDが残ったまま回答を保存/公開しない。
3. データ種類を上の35行と照合し、収集YESの種類を選ぶ。NOは選択しない。UNVERIFIEDをNOで埋めない。
4. 種類ごとに用途を選択。候補はApp Functionality、Third-Party Advertising、Analytics、Developer’s Advertising or Marketing等。Googleの一般目的をすべて無条件に選ばず、最終構成に実際に該当する目的だけを確定する。
5. 種類ごとにユーザー関連付け/トラッキングを確認。GMA Device IDのlinked/tracking宣言を無視せず、アプリ自身のManifestのfalseで上書きしない。ATT許可・拒否だけで全種類を一括変更しない。
6. Privacy Policy URL候補は `https://ddkklab.github.io/matomari-life/privacy/`。現在HTTP200だが、今回原稿が公開済みという意味ではない。別承認の公開後に内容一致を確認して採用する。Privacy Choicesは任意。架空URLを追加しない。
7. プレビューでWeb文面・アプリの許可説明・最終ビルドと照合。未確認を解消し、所有者の明示承認後だけ別工程でPublishへ進む。審査提出/広告ON/購入ONはさらに別操作。
8. 一般 → アプリ情報 → 使用許諾契約（画面名は表示言語に従う）では、Apple標準EULAを使い独自EULAを入力しない方針を確認。Apple側の保存値を本工程で変更したとはしない。

## 根拠の優先順位と今回の範囲

現行ソース/固定版SDK実物 → 6E-2証拠 → 提供者公式説明。6E-0/6E-1は未解決経緯として参照し、古い「ATTなし」「EULA未決」を現方針へ戻さない。参照: [6E-2データフロー](../../life_os/docs/phase6e2/DATA_FLOW_AND_SDK_EVIDENCE.md)、[6E-2操作手順](../../life_os/docs/phase6e2/ASC_ENTRY_WALKTHROUGH.md)、`<workspace>/matomari_phase6e0_audit/20261020_1311/` の04/05/06/08、[6E-1課題](../../life_os/docs/phase6e1/RELEASE_BLOCKERS_AND_NEXT_ACTIONS.md)。このWeb repo外の資料への相対リンクはローカル開発用で、公開Webのナビには使用しない。

一次資料（2026-10-20に到達確認）：[Appleの定義/分類](https://developer.apple.com/app-store/app-privacy-details/)、[ASC入力案内](https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy)、[Google SDKデータ開示](https://developers.google.com/admob/ios/privacy/data-disclosure)。一般宣言だけで版固有の送信や保持を実測済みにしない。

**判定：入力資料はREADY_FOR_USER_REVIEW。ASCの確定・保存・PublishはBLOCKED。** SDK/地域/年齢/運営アクセスの未確認行と、最終配布構成を解消してから別承認へ進む。
