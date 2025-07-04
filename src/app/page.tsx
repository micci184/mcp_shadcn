import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom-button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h1 className="mb-4 text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Shadcn/ui Registry
          </h1>
          <p className="mb-8 text-xl text-slate-600">
            標準 vs カスタムブランディング - Button コンポーネント比較
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 標準 Shadcn/ui Button */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                📦 標準 Shadcn/ui Button
              </h2>
              <p className="text-slate-600">公式デザインシステム準拠</p>
            </div>

            <div className="space-y-6">
              {/* 標準 Variants */}
              <div>
                <h3 className="mb-3 font-semibold text-slate-800">Variants</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              {/* 標準 Sizes */}
              <div>
                <h3 className="mb-3 font-semibold text-slate-800">Sizes</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">🎯</Button>
                </div>
              </div>
            </div>
          </div>

          {/* カスタム Button */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl shadow-2xl p-8 border border-slate-700">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                ✨ カスタムブランディング Button
              </h2>
              <p className="text-slate-300">独自デザインシステム</p>
            </div>

            <div className="space-y-6">
              {/* カスタム Variants */}
              <div>
                <h3 className="mb-3 font-semibold text-white">
                  Enhanced Variants
                </h3>
                <div className="flex flex-wrap gap-2">
                  <CustomButton variant="default">Default</CustomButton>
                  <CustomButton variant="secondary">Secondary</CustomButton>
                  <CustomButton variant="destructive">Destructive</CustomButton>
                  <CustomButton variant="outline">Outline</CustomButton>
                  <CustomButton variant="ghost">Ghost</CustomButton>
                  <CustomButton variant="link">Link</CustomButton>
                </div>
              </div>

              {/* 新しいブランドVariants */}
              <div>
                <h3 className="mb-3 font-semibold text-white">
                  🚀 Brand Variants
                </h3>
                <div className="flex flex-wrap gap-2">
                  <CustomButton variant="premium">Premium</CustomButton>
                  <CustomButton variant="neon">Neon</CustomButton>
                  <CustomButton variant="glass">Glass</CustomButton>
                  <CustomButton variant="metallic">Metallic</CustomButton>
                </div>
              </div>

              {/* カスタム Sizes */}
              <div>
                <h3 className="mb-3 font-semibold text-white">
                  Enhanced Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <CustomButton size="xs">XS</CustomButton>
                  <CustomButton size="sm">Small</CustomButton>
                  <CustomButton size="default">Default</CustomButton>
                  <CustomButton size="lg">Large</CustomButton>
                  <CustomButton size="xl">XL</CustomButton>
                  <CustomButton size="icon">🚀</CustomButton>
                </div>
              </div>

              {/* 新しいサイズ */}
              <div>
                <h3 className="mb-3 font-semibold text-white">
                  🎯 Special Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <CustomButton size="hero" variant="premium">
                    Hero
                  </CustomButton>
                  <CustomButton size="circle" variant="neon">
                    🎪
                  </CustomButton>
                  <CustomButton size="wide" variant="glass">
                    Wide Button
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 特徴比較表 */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-900">
            🔍 機能比較表
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-800">
                    機能
                  </th>
                  <th className="text-center p-4 font-semibold text-slate-800">
                    標準 Shadcn/ui
                  </th>
                  <th className="text-center p-4 font-semibold text-slate-800">
                    カスタム版
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 text-slate-700">🎨 カラーパレット</td>
                  <td className="text-center p-4">CSS変数ベース</td>
                  <td className="text-center p-4">
                    ✨ グラデーション + CSS変数
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 text-slate-700">🔄 角丸</td>
                  <td className="text-center p-4">rounded-md</td>
                  <td className="text-center p-4">✨ rounded-2xl～3xl</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 text-slate-700">🎭 ホバーエフェクト</td>
                  <td className="text-center p-4">色変化</td>
                  <td className="text-center p-4">
                    ✨ スケール + 回転 + シャドウ
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 text-slate-700">🎯 バリエーション</td>
                  <td className="text-center p-4">6種類</td>
                  <td className="text-center p-4">
                    ✨ 10種類 (4つの新デザイン)
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 text-slate-700">📏 サイズ</td>
                  <td className="text-center p-4">4種類</td>
                  <td className="text-center p-4">✨ 9種類 (5つの新サイズ)</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">⚡ アニメーション</td>
                  <td className="text-center p-4">transition-colors</td>
                  <td className="text-center p-4">
                    ✨ transition-all + transform
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 使用方法 */}
        <div className="mt-8 text-center">
          <div className="bg-slate-900 rounded-2xl p-6 text-left">
            <h3 className="text-white font-semibold mb-3">🚀 使用方法</h3>
            <div className="space-y-2 text-sm">
              <code className="text-green-400">
                import {"{ Button }"} from "@/components/ui/button"
              </code>
              <br />
              <code className="text-cyan-400">
                import {"{ CustomButton }"} from "@/components/ui/custom-button"
              </code>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
