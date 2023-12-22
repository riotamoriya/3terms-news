# ミミズク・テント（旧3terms-news）

シンプルなニュースサイトを公開するサービスについての、開発プロジェクトである。

- [ホームページリンク：https://www.mimizuku-tent.com](https://www.mimizuku-tent.com)

- [Cloudfrontリンク：https://d1dbsbht6shkxg.cloudfront.net](https://d1dbsbht6shkxg.cloudfront.net)

- [Google Analytics：https://analytics.google.com/analytics/web/?hl=ja&pli=1#/p419215618/reports/intelligenthome](https://analytics.google.com/analytics/web/?hl=ja&pli=1#/p419215618/reports/intelligenthome)




## サービス概要
このサービスでは、ユーザにニュースを届ける。
特徴的なのは、縦書きであることと、情報量ががかなり少ないことである。

その理由は、以下の開発モチベーションから：
1. モダンなウェブデザインは、心身の疲労につながる <- 色・動き・コントラストが多い：

- 文字と背景と２色のみにする
- フォーマット的なデザインを最小限にすることで、ユーザの動作を最小限にする
- 文字のフォントは最も身体に優しいと言われているものを使用し、統一する
- 文字の色は、真っ黒ではなく、少しだけ薄い色を採用し、コントラストを少なくする
- 背景色は、薄い緑を使用する
- 上下のスクロールは制限し、不必要な自由をカット
- 文字列選択の禁止

- ニュースの数は最大10つまで
- ニュースの情報元は単一にする（NHK）
- 更新は１時間おき
- とにかくユーザのサイト滞在時間を削る

2. モダンなウェブデザインは、情報の絶対量が多い <- ダウンロード時間がかかる

- OPなし
- 変なアニメーションもなし
- 画像データさえもカットする
- SSRの徹底

3. ニュースを縦読みしたい人がいるはず <- 昨今のニュースアプリは、横書きのものが多いため。

- 縦書き文章の徹底


## システム工夫点
- スクロールの制限
- 既読内容については見づらくする
- 文字列選択禁止


## ブランチについて
- master: プロジェクトルートブランチ、実際にタスクについては以下子ブランチにて処理し、マージする。
  - develop: 開発修正用ブランチ。開発を進める場合。
  - readme: README.mdの編集用ブランチ。README.mdを編集する場合。
  - production: 公開用安定ブランチ。masterで動作をよく確認し、切り離したもの。

## 開発方法
- タスクは、developブランチまたはreadmeブランチのみで行う
- タスク開始前に、Issue としてセットする
- masterにマージした時点で、タスク完了とし、IssueをCloseする


## システム構成
- ホスティングサーバ：[AWS S3](https://aws.amazon.com/s3/)
- ディストリビューション：[AWS CloudFront](https://aws.amazon.com/cloudfront/)

- フロントエンド設計： [React](https://legacy.reactjs.org/)
  - フレームワーク： [Gatsby](https://www.gatsbyjs.com/) 

- DNS： [お名前ドットコム](https://www.onamae.com/)
- SSL/TLS認証書： [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/)

- プロジェクト管理： [Github](https://github.com/)