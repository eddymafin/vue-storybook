# コンポーネント構成

components  
 -icons  
 -parts(ボタンなど最小のコンポーネント)  
 -templates(partsを組み合わせて作りたいもの)  
 -views(viewごとで固有のコンポーネント)

# ページ構成

views  
 -admin  
 -user  
 -editor

# Storybook

storybookの立ち上げ  
`npm run storybook`

## story作成方法

stories以下ディレクトリに、.stories.jsの拡張子のファイルを作成。  
vueのコンポーネントディレクトリ構造に準拠して、storiesファイルを作成する。  
vueのファイルは、component以下ファイルに作成して、importをして使用する。
