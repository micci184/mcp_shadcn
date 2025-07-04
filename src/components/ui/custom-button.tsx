import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const customButtonVariants = cva(
  // 基本スタイル - より独自性を持たせる
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 transform hover:scale-105",
  {
    variants: {
      variant: {
        // プライマリー - ブランドカラー（グラデーション）
        default:
          "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl focus-visible:ring-blue-500",

        // セカンダリー - エレガントなデザイン
        secondary:
          "bg-gradient-to-r from-slate-100 to-slate-200 text-slate-900 hover:from-slate-200 hover:to-slate-300 border border-slate-300 shadow-sm hover:shadow-md focus-visible:ring-slate-400",

        // デンジャー - 警告色
        destructive:
          "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 shadow-lg hover:shadow-xl focus-visible:ring-red-500",

        // アウトライン - 洗練されたボーダー
        outline:
          "border-2 border-blue-500 bg-transparent text-blue-600 hover:bg-blue-50 hover:border-blue-600 focus-visible:ring-blue-500",

        // ゴースト - ミニマル
        ghost:
          "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-400",

        // リンク
        link: "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700 focus-visible:ring-blue-500",

        // 新しいブランドvariant - プレミアム
        premium:
          "bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white font-bold shadow-xl hover:shadow-2xl hover:from-amber-500 hover:via-orange-600 hover:to-red-600 focus-visible:ring-orange-500 hover:rotate-1",

        // 新しいブランドvariant - ネオン
        neon: "bg-black text-cyan-400 border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:text-cyan-300 hover:border-cyan-300 focus-visible:ring-cyan-400",

        // 新しいブランドvariant - グラス効果
        glass:
          "bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-lg hover:bg-white/20 hover:shadow-xl focus-visible:ring-white/50",

        // 新しいブランドvariant - メタリック
        metallic:
          "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-white shadow-lg hover:from-gray-500 hover:via-gray-600 hover:to-gray-700 hover:shadow-xl focus-visible:ring-gray-500",
      },
      size: {
        xs: "h-7 px-2 py-1 text-xs rounded-lg",
        sm: "h-8 px-3 py-1.5 text-sm rounded-xl",
        default: "h-10 px-4 py-2 text-sm rounded-2xl",
        lg: "h-12 px-6 py-3 text-base rounded-3xl",
        xl: "h-14 px-8 py-4 text-lg rounded-3xl",
        icon: "h-10 w-10 rounded-2xl",
        // 新しいサイズ - ヒーロー用
        hero: "h-16 px-12 py-5 text-xl rounded-3xl font-bold tracking-wider",
        // 新しいサイズ - 円形
        circle: "h-12 w-12 rounded-full",
        // 新しいサイズ - ワイド
        wide: "h-10 px-16 py-2 text-sm rounded-2xl min-w-48",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  asChild?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(customButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton, customButtonVariants };
