# Project-Management
オフライン環境でプロジェクト管理が出来るツールです。

「index.html」を開けば、タスク一覧が表示されますが、ブラウザ上でステータスを変更したり、タスクを追加したりすることは出来ません。
タスクについては、すべて以下のJSONで管理しています。

タスク管理ファイル : ./data/Data.json

上記JSONファイル内で、HTMLのタイトルやタスク表の名称、そしてタスクを管理をしています。
タスクの追加やステータスの更新を行う際は、このJSONファイルを更新してください。

![image](https://user-images.githubusercontent.com/43413251/45761053-71660e80-bc66-11e8-97cb-385a08354acd.png)

ただし、項目を追加する場合は、以下のファイルも変更する必要があります。

変更ファイル : ./js/InsertData.js

増やした分だけ、header数とcolum数を増やしてください。
![image](https://user-images.githubusercontent.com/43413251/45761165-a5d9ca80-bc66-11e8-9234-6c376de2aed8.png)
![image](https://user-images.githubusercontent.com/43413251/45761213-c3a72f80-bc66-11e8-96c2-f6791dd5f28d.png)

「index-marge.html」については、スタイルシートや、javascript等を1ファイルに纏めたものです。
上長に進捗報告を行う際に利用することを想定したものの為、普段は利用する必要はない。

