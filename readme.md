## gulp-template


#### 環境

##### gulp + babel + webpack + ejs + scss


---

### Usage

まずは対象のディレクトリに移動してください。

	$ cd [path]

続いてnpmで必要なものをインストール。
するとpackage.jsonに書いてある内容がインストールされます。
※ インストールが失敗する可能性があるので、今後の作業でエラーが出る場合はnpmのキャッシュを消した後、再度インストールを試して下さい

	$ npm i

bowerで必要なJSライブラリをインストール。

	$ bower i

続いてJSライブラリを bower を使って持ってきます。

	$ gulp bower

すると、pc/src/js-libs にライブラリが移動されます。
いくつかのファイルは手動で持ってくる必要があります。

- eventemitter2.js 等

ここまできたらデフォルトタスクでWatchが走るので、作業を開始できます。

	$ gulp --local

その他、環境に合わせてコマンドを変えてパプリッシュします。

	$ gulp --stage
	$ gulp --prod
