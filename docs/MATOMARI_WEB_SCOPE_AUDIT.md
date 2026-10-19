# MATOMARI Web作業スコープ監査

確認日：2026-10-19（Asia/Tokyo）
対象：`/Users/koishi/project_apps/ddkklab.github.io`

## 作業前のGit状態

- `git rev-parse --show-toplevel`：対象リポジトリを確認。
- `git status --short`：空。作業前に未コミット・未追跡の差分なし。
- `git diff` / `git diff --cached`：いずれも空。
- HEAD：`eae5af0 production 6`。直近履歴には2026-10-15のFood Life規約・プライバシー・READMEを含む過去コミットがある。
- Food Life対象ファイルの作業前SHA-256：
  - `terms/food-life/index.html` `9a5ca928e53c65a23d69ef3ea0b3079fc0c531388a1b0ebbeb6e69a1f003ffea`
  - `privacy/food-life/index.html` `7b933eb575b40691ba48ff98f363fcf8e2414be08447a4068129b4338f2c14e9`
  - `README.md` `deb363912c59d61cf2f25efe7bb06da87afae0abb37aed16049ac954dc57f26f`

## Food Lifeの誤対象変更の判断

直前報告で説明された追加のFood Life変更に一致する未コミット差分は、この移動先リポジトリにはありませんでした。Food Life規約・プライバシー・READMEの変更は、HEADに存在する2026-10-15以前のコミット由来の内容です。今回の誤対象作業だと特定できる差分は見つからず、既存の履歴変更を取り消す根拠もないため、復元・逆パッチ・履歴変更は行っていません。既存Food Life URLおよび各ファイルは変更していません。

## Pages構成の確認範囲

静的サイトの公開ファイルはリポジトリ直下にあり、`.nojekyll`を含みます。READMEはGitHub Pagesを`main`ブランチの`/(root)`から公開する手順を記載しています。`.github/workflows/`や`CNAME`は確認できませんでした。ただしGitHubのリポジトリ設定画面にはアクセスしていないため、現在有効なPages公開元や公開状態は確認できていません。公開URLは既存の`https://ddkklab.github.io/`を前提にしています。

トップページには作業前、Food Lifeのみがアプリとして掲載されていました。Food Lifeの公開URL群、共通CSS、ナビゲーション、ブログは保持し、MATOMARI専用URL群を分離して追加します。
