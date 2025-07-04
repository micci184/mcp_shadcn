# 独自 Shadcn/ui Registry with GitHub Raw 方式

## 🎯 プロジェクト概要

このプロジェクトは、GitHub Raw 方式を使用した独自の Shadcn/ui Registry の実装です。カスタムブランディングされた UI コンポーネントを Shadcn/ui CLI で簡単に導入できるようにします。

## ✨ 特徴

### 🎨 カスタムブランディング

- **10 種類の Variant**: 標準 6 つ + 新規 4 つ（premium、neon、glass、metallic）
- **9 種類のサイズ**: 標準 4 つ + 新規 5 つ（xs、xl、hero、circle、wide）
- **高度なホバーエフェクト**: スケール、回転、シャドウ
- **グラデーション背景**: 美しいグラデーション効果

### 🚀 GitHub Raw 方式

- **サーバー不要**: GitHub Raw を API サーバーとして利用
- **即座に更新**: git push で即座に反映
- **無料**: GitHub Raw は無料で利用可能

## 📂 Registry 構造

```
public/r/
├── index.json               # Registry設定
├── styles/
│   └── default.json        # スタイル設定
└── components/
    └── custom-button.json  # カスタムボタンコンポーネント
```

## 🛠️ 使用方法

### 1. 標準的な使用方法（理論的）

```bash
# カスタムボタンコンポーネントを追加
npx shadcn@latest add https://raw.githubusercontent.com/micci184/mcp_shadcn/main/public/r/components/custom-button.json
```

### 2. 手動インストール

```bash
# 1. ファイルをダウンロード
curl -o components/ui/custom-button.tsx https://raw.githubusercontent.com/micci184/mcp_shadcn/main/public/r/components/custom-button.json

# 2. 必要な依存関係をインストール
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

### 3. 使用例

```tsx
import { CustomButton } from "@/components/ui/custom-button";

export default function MyComponent() {
  return (
    <div className="space-y-4">
      {/* 標準variants */}
      <CustomButton variant="default">Default Button</CustomButton>
      <CustomButton variant="secondary">Secondary Button</CustomButton>
      <CustomButton variant="destructive">Destructive Button</CustomButton>
      <CustomButton variant="outline">Outline Button</CustomButton>
      <CustomButton variant="ghost">Ghost Button</CustomButton>
      <CustomButton variant="link">Link Button</CustomButton>

      {/* 新しいブランドvariants */}
      <CustomButton variant="premium">Premium Button</CustomButton>
      <CustomButton variant="neon">Neon Button</CustomButton>
      <CustomButton variant="glass">Glass Button</CustomButton>
      <CustomButton variant="metallic">Metallic Button</CustomButton>

      {/* 異なるサイズ */}
      <CustomButton size="xs">Extra Small</CustomButton>
      <CustomButton size="sm">Small</CustomButton>
      <CustomButton size="default">Default</CustomButton>
      <CustomButton size="lg">Large</CustomButton>
      <CustomButton size="xl">Extra Large</CustomButton>
      <CustomButton size="hero">Hero Button</CustomButton>
      <CustomButton size="circle">○</CustomButton>
      <CustomButton size="wide">Wide Button</CustomButton>
    </div>
  );
}
```

## 🎨 Available Variants

| Variant       | 説明               | 特徴                          |
| ------------- | ------------------ | ----------------------------- |
| `default`     | プライマリーボタン | 青紫グラデーション            |
| `secondary`   | セカンダリーボタン | エレガントなグレー            |
| `destructive` | 危険なアクション   | 赤ピンクグラデーション        |
| `outline`     | アウトラインボタン | 洗練されたボーダー            |
| `ghost`       | ゴーストボタン     | ミニマルデザイン              |
| `link`        | リンクボタン       | アンダーライン                |
| `premium`     | プレミアムボタン   | 金色グラデーション + 回転効果 |
| `neon`        | ネオンボタン       | サイバー風グロー効果          |
| `glass`       | グラスボタン       | 背景ブラー効果                |
| `metallic`    | メタリックボタン   | 金属質感                      |

## 📏 Available Sizes

| Size      | 説明        | 寸法                     |
| --------- | ----------- | ------------------------ |
| `xs`      | Extra Small | h-7 px-2 py-1            |
| `sm`      | Small       | h-8 px-3 py-1.5          |
| `default` | Default     | h-10 px-4 py-2           |
| `lg`      | Large       | h-12 px-6 py-3           |
| `xl`      | Extra Large | h-14 px-8 py-4           |
| `hero`    | Hero        | h-16 px-12 py-5          |
| `circle`  | Circle      | h-12 w-12 rounded-full   |
| `wide`    | Wide        | h-10 px-16 py-2 min-w-48 |
| `icon`    | Icon        | h-10 w-10                |

## 🏗️ 開発

### プロジェクト構造

```
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx        # 標準ボタン
│   │       └── custom-button.tsx # カスタムボタン
│   └── app/
│       └── page.tsx              # デモページ
├── public/r/                     # Registry API
│   ├── index.json
│   ├── styles/default.json
│   └── components/custom-button.json
└── registry.json                 # Registry設定
```

### 開発サーバー

```bash
npm run dev
```

### Registry 作成

```bash
# Registry JSONファイルを生成
npx shadcn@latest build
```

## 🌐 API エンドポイント

すべてのファイルは GitHub Raw 経由でアクセス可能です：

- **Registry Index**: https://raw.githubusercontent.com/micci184/mcp_shadcn/main/public/r/index.json
- **Style Config**: https://raw.githubusercontent.com/micci184/mcp_shadcn/main/public/r/styles/default.json
- **Custom Button**: https://raw.githubusercontent.com/micci184/mcp_shadcn/main/public/r/components/custom-button.json

## 📝 技術スタック

- **Next.js 15** - React フレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **Radix UI** - アクセシブルなプリミティブ
- **Class Variance Authority** - バリアント管理
- **GitHub Raw** - API 配信

## 🎯 今後の拡張計画

- [ ] 追加の UI コンポーネント（Card、Dialog、Form 等）
- [ ] テーマシステムの拡張
- [ ] アニメーションライブラリの統合
- [ ] TypeScript 型定義の完全化
- [ ] テストスイートの実装

## 🏆 成果

✅ **完了**: GitHub Raw 方式での Shadcn/ui Registry 化  
✅ **完了**: カスタムブランディング Button コンポーネント  
✅ **完了**: 10 variants、9 sizes 対応  
✅ **完了**: 高度なホバーエフェクト実装  
✅ **完了**: Registry API エンドポイント  
✅ **完了**: 比較デモページ

## 📄 ライセンス

MIT License - 自由に使用、改変、配布が可能です。

---

🎨 **独自の Shadcn/ui Registry with GitHub Raw 方式** - カスタムブランディングされた UI コンポーネントを簡単に共有・配布
