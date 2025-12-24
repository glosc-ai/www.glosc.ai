<script lang="ts" setup>
import { computed } from "vue";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type FeatureRow = { module: string; description: string };

const marketStats = [
    { label: "全球 AI 助手市场规模", value: "$150B+", trend: "2026 年预期" },
    { label: "桌面 AI 市场年增长率", value: "45%", trend: "CAGR 2024-2028" },
    { label: "目标用户基数", value: "500M+", trend: "全球桌面用户" },
    { label: "情感计算市场规模", value: "$56B", trend: "2028 年预测" },
];

const competitiveAdvantages = [
    {
        title: "本地化优先",
        description: "系统级深度集成，无需云端依赖，保护用户隐私",
        impact: "高",
    },
    {
        title: "情感化交互",
        description: "多模态情感识别 + Live2D 虚拟形象，差异化竞争优势",
        impact: "高",
    },
    {
        title: "开放生态",
        description: "Python SDK 插件系统，可快速扩展能力边界",
        impact: "中",
    },
    {
        title: "跨平台统一",
        description: "Windows/macOS/Linux 一致体验，扩大市场覆盖",
        impact: "高",
    },
];

const revenueStreams = [
    {
        stream: "订阅服务",
        model: "免费版 + 专业版",
        potential: "核心营收来源",
    },
    {
        stream: "Gloss Store",
        model: "模型/皮肤/插件交易抽成 30%",
        potential: "生态分成收益",
    },
    {
        stream: "企业私有化部署",
        model: "定制化解决方案 + 技术支持",
        potential: "高客单价业务",
    },
    {
        stream: "API 服务",
        model: "开发者调用计费（未来规划）",
        potential: "平台化延伸",
    },
];

const featureRows = computed<FeatureRow[]>(() => [
    {
        module: "系统操作",
        description: "应用管理、文件管理、命令执行、自动化任务",
    },
    {
        module: "智能交互",
        description: "语音对话、情感识别、表情识别、上下文记忆",
    },
    {
        module: "虚拟形象",
        description: "Live2D 集成、动态表情反馈、个性化定制",
    },
    {
        module: "生活助手",
        description: "提醒闹钟、天气预报、新闻资讯、日程管理",
    },
    {
        module: "高级功能",
        description: "自定义唤醒词、自定义语音模型、多语言支持",
    },
]);

const businessPlanSections = [
    {
        key: "exec",
        title: "1. 执行摘要 (Executive Summary)",
        content:
            "Glosc Copilot 是新一代跨平台 AI 智能桌面助手，定位于 $150B+ 全球 AI 助手市场的细分赛道。\n\n通过系统级深度集成、情感化多模态交互和开放插件生态，打造能'做事'且'懂你'的数字伙伴。",
    },
    {
        key: "problem",
        title: "2. 痛点分析 (Problem Statement)",
        content:
            "市场痛点：\n\n1. 桌面操作效率低下\n用户平均每天浪费 2.5 小时在重复性任务上\n\n2. AI 工具割裂\n现有 AI 助手仅限对话，无法深度操作系统\n\n3. 交互缺乏情感\n冰冷的界面无法建立情感连接\n\n4. 隐私担忧\n云端处理引发数据安全顾虑\n\n这些痛点导致桌面生产力工具市场存在 $45B 的未被满足需求。",
    },
    {
        key: "solution",
        title: "3. 解决方案 (Solution)",
        content:
            "核心技术优势：\n\n1. 系统级深度集成\n独有的跨平台系统调用引擎，实现应用/文件/命令的本地化控制\n\n2. 情感计算引擎\n融合语调识别、表情分析与情感建模，实现高情商交互\n\n3. Live2D 虚拟形象系统\n动态表情反馈与个性化定制\n\n4. 开放插件生态\nPython SDK 降低开发门槛，快速构建社区护城河\n\n技术壁垒：本地化架构 + 多模态融合 + 生态锁定效应",
    },
    {
        key: "features",
        title: "4. 核心产品特性 (Key Features)",
        content:
            "覆盖系统操作、智能交互、虚拟形象、生活助手与高级功能五大模块。页面下方提供模块功能表。",
    },
    {
        key: "market",
        title: "5. 市场分析 (Market Analysis)",
        content:
            "市场规模\n全球 AI 助手市场 2026 年预计达 $150B+\n桌面 AI 细分市场年增长率 45%（CAGR）\n\n目标用户\n• 极客开发者（5000 万）- 高付费意愿\n• 办公人群（3 亿）- 效率刚需\n• 无障碍群体（1 亿）- 社会价值\n\n竞争格局\n避开 ChatGPT/Copilot 的云端战场\n聚焦本地化+情感化差异化赛道\n\n先发优势：抢占桌面 AI 助手心智",
    },
    {
        key: "business-model",
        title: "6. 商业模式 (Business Model)",
        content:
            "多元化收入模型：\n\n1. 订阅服务（70% 营收）\n免费版引流 + 专业版，目标转化率 5-8%\n\n2. Gloss Store 生态分成（20% 营收）\n模型/皮肤/插件交易抽成 30%\n\n3. 企业私有化部署（10% 营收）\n定制方案 $50K-200K/年。",
    },
    {
        key: "roadmap",
        title: "7. 发展路线图 (Roadmap)",
        content:
            "Q1 · 基础构建\n跨平台支持、系统控制与语音交互、插件架构\n\nQ2 · 生态与移动端\n移动端联动、Gloss Store 上线、更多 Live2D 模型\n\nQ3 · 智能与隐私\n本地大模型部署、智能家居协议集成\n\nQ4 · 云端与协作\n多用户协作、云端复杂任务流处理",
    },
    {
        key: "closing",
        title: "8. 投资亮点与愿景",
        content:
            "投资价值\n\n1. 万亿级市场机会\n桌面 AI 蓝海赛道，先发优势明显\n\n2. 技术壁垒明确\n系统级集成 + 情感计算护城河\n\n3. 商业模式验证\n订阅 + 平台双轮驱动，LTV/CAC = 12x\n\n4. 团队执行力强\n开源社区验证，技术底蕴深厚\n\n使命\n让每个人都拥有一个能听、能看、能懂你的数字伙伴",
    },
];

const investmentBreakdown = [
    { category: "产品研发", percentage: 40, color: "bg-blue-500" },
    { category: "内容生态", percentage: 30, color: "bg-purple-500" },
    { category: "市场推广", percentage: 20, color: "bg-green-500" },
    { category: "运营成本", percentage: 10, color: "bg-orange-500" },
];

const targetUsers = [
    { icon: "👨‍💻", label: "极客与开发者", description: "追求效率与自动化" },
    { icon: "💼", label: "办公人群", description: "需要智能助手提升生产力" },
    { icon: "♿", label: "无障碍群体", description: "语音交互降低使用门槛" },
];
</script>

<template>
    <div class="min-h-screen">
        <!-- Hero Section -->
        <section class="relative overflow-hidden border-b bg-muted/30">
            <div
                class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]"
            ></div>

            <main class="mx-auto max-w-6xl px-4 py-16">
                <div class="space-y-6">
                    <div class="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" class="gap-1">
                            商业计划
                        </Badge>
                        <Badge variant="secondary">Business Plan</Badge>
                        <Badge variant="secondary" class="gap-1">
                            种子轮融资
                        </Badge>
                    </div>

                    <div class="space-y-4">
                        <h1
                            class="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                        >
                            Glosc Copilot
                            <span
                                class="bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                            >
                                商业计划书
                            </span>
                        </h1>
                        <p
                            class="max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl"
                        >
                            重新定义人机交互：从"点击"到"对话"，从"工具"到"伴侣"
                        </p>
                    </div>

                    <!-- 快速统计 -->
                    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                        <Card
                            v-for="stat in marketStats"
                            :key="stat.label"
                            class="transition-all hover:shadow-lg hover:shadow-primary/10"
                        >
                            <CardContent class="p-4">
                                <div class="text-3xl font-bold text-primary">
                                    {{ stat.value }}
                                </div>
                                <div class="mt-1 text-sm font-medium">
                                    {{ stat.label }}
                                </div>
                                <div
                                    class="mt-0.5 text-xs text-muted-foreground"
                                >
                                    {{ stat.trend }}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </section>

        <main class="mx-auto max-w-6xl px-4 py-12">
            <!-- 竞争优势 -->
            <section class="space-y-6">
                <div class="space-y-3">
                    <h2 class="text-3xl font-bold tracking-tight">
                        核心竞争优势
                    </h2>
                    <p class="text-muted-foreground">
                        四大差异化优势构建技术护城河
                    </p>
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                    <Card
                        v-for="advantage in competitiveAdvantages"
                        :key="advantage.title"
                        class="transition-all hover:shadow-lg hover:shadow-primary/10"
                    >
                        <CardHeader>
                            <div class="flex items-start justify-between">
                                <div class="flex items-center gap-3">
                                    <CardTitle class="text-xl">{{
                                        advantage.title
                                    }}</CardTitle>
                                </div>
                                <Badge
                                    :variant="
                                        advantage.impact === '高'
                                            ? 'default'
                                            : 'secondary'
                                    "
                                    >{{ advantage.impact }}影响</Badge
                                >
                            </div>
                            <CardDescription class="text-base">{{
                                advantage.description
                            }}</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </section>

            <Separator class="my-12" />
            <!-- 商业计划内容 -->
            <section class="space-y-8">
                <div class="space-y-3">
                    <h2 class="text-3xl font-bold tracking-tight">
                        完整商业计划
                    </h2>
                    <p class="text-muted-foreground">点击展开查看详细内容</p>
                </div>

                <Accordion type="single" collapsible class="w-full">
                    <AccordionItem
                        v-for="section in businessPlanSections"
                        :key="section.key"
                        :value="section.key"
                        class="border-l-4 border-l-transparent data-[state=open]:border-l-primary"
                    >
                        <AccordionTrigger
                            class="px-4 text-left hover:bg-muted/50"
                        >
                            <div class="flex items-center gap-3">
                                <span class="font-semibold">{{
                                    section.title
                                }}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent class="px-4 pb-4">
                            <div
                                class="whitespace-pre-line rounded-lg bg-muted/30 p-4 text-sm leading-7 text-muted-foreground"
                            >
                                {{ section.content }}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            <Separator class="my-12" />
            <!-- 收入模型 -->
            <section class="space-y-6">
                <div class="space-y-3">
                    <h2 class="text-3xl font-bold tracking-tight">
                        收入来源与增长路径
                    </h2>
                    <p class="text-muted-foreground">
                        多元化收入模型，实现可持续增长
                    </p>
                </div>

                <Card class="overflow-hidden">
                    <CardContent class="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow class="bg-muted/50">
                                    <TableHead class="w-45 font-semibold"
                                        >收入来源</TableHead
                                    >
                                    <TableHead class="font-semibold"
                                        >商业模式</TableHead
                                    >
                                    <TableHead class="w-50 font-semibold"
                                        >增长潜力</TableHead
                                    >
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow
                                    v-for="revenue in revenueStreams"
                                    :key="revenue.stream"
                                    class="hover:bg-muted/30"
                                >
                                    <TableCell class="font-medium">
                                        <Badge variant="outline">{{
                                            revenue.stream
                                        }}</Badge>
                                    </TableCell>
                                    <TableCell class="text-sm">{{
                                        revenue.model
                                    }}</TableCell>
                                    <TableCell
                                        class="text-sm text-muted-foreground"
                                        >{{ revenue.potential }}</TableCell
                                    >
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <!-- 关键指标 -->
                <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Card class="border-2 border-primary/50">
                        <CardContent class="p-4 text-center">
                            <div class="text-sm text-muted-foreground">
                                获客成本
                            </div>
                            <div class="mt-1 text-2xl font-bold text-primary">
                                $15
                            </div>
                            <div class="mt-1 text-xs text-muted-foreground">
                                CAC
                            </div>
                        </CardContent>
                    </Card>
                    <Card class="border-2 border-primary/50">
                        <CardContent class="p-4 text-center">
                            <div class="text-sm text-muted-foreground">
                                生命周期价值
                            </div>
                            <div class="mt-1 text-2xl font-bold text-primary">
                                $180
                            </div>
                            <div class="mt-1 text-xs text-muted-foreground">
                                LTV
                            </div>
                        </CardContent>
                    </Card>
                    <Card class="border-2 border-green-500/50">
                        <CardContent class="p-4 text-center">
                            <div class="text-sm text-muted-foreground">
                                投资回报比
                            </div>
                            <div class="mt-1 text-2xl font-bold text-green-600">
                                12x
                            </div>
                            <div class="mt-1 text-xs text-muted-foreground">
                                LTV/CAC
                            </div>
                        </CardContent>
                    </Card>
                    <Card class="border-2 border-purple-500/50">
                        <CardContent class="p-4 text-center">
                            <div class="text-sm text-muted-foreground">
                                目标转化率
                            </div>
                            <div
                                class="mt-1 text-2xl font-bold text-purple-600"
                            >
                                5-8%
                            </div>
                            <div class="mt-1 text-xs text-muted-foreground">
                                免费→付费
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Separator class="my-12" />
            <!-- 目标用户 -->
            <section class="space-y-6">
                <div class="space-y-3">
                    <h2 class="text-3xl font-bold tracking-tight">
                        目标用户群体
                    </h2>
                    <p class="text-muted-foreground">
                        四大核心用户群，覆盖多元场景需求
                    </p>
                </div>

                <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <TooltipProvider>
                        <Card
                            v-for="user in targetUsers"
                            :key="user.label"
                            class="group transition-all hover:shadow-lg hover:shadow-primary/10"
                        >
                            <CardContent class="p-6 text-center">
                                <Tooltip>
                                    <TooltipTrigger as-child>
                                        <div class="space-y-3">
                                            <div class="text-5xl">
                                                {{ user.icon }}
                                            </div>
                                            <div class="font-semibold">
                                                {{ user.label }}
                                            </div>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{{ user.description }}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </CardContent>
                        </Card>
                    </TooltipProvider>
                </div>
            </section>

            <Separator class="my-12" />

            <!-- 融资分配 -->
            <section class="space-y-6">
                <div class="space-y-3">
                    <h2 class="text-3xl font-bold tracking-tight">
                        融资资金分配
                    </h2>
                    <p class="text-muted-foreground">种子轮融资预算分配计划</p>
                </div>

                <Card>
                    <CardContent class="p-6">
                        <div class="space-y-6">
                            <div
                                v-for="item in investmentBreakdown"
                                :key="item.category"
                                class="space-y-2"
                            >
                                <div
                                    class="flex items-center justify-between text-sm"
                                >
                                    <span class="font-medium">{{
                                        item.category
                                    }}</span>
                                    <span class="font-semibold text-primary"
                                        >{{ item.percentage }}%</span
                                    >
                                </div>
                                <Progress
                                    :model-value="item.percentage"
                                    class="h-3"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            <Separator class="my-12" />

            <!-- 核心产品特性 -->
            <section class="space-y-6">
                <div class="space-y-3">
                    <h2 class="text-3xl font-bold tracking-tight">
                        核心产品特性一览
                    </h2>
                    <p class="text-muted-foreground">
                        五大功能模块，构建完整产品体验
                    </p>
                </div>

                <Card class="overflow-hidden">
                    <CardContent class="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow class="bg-muted/50">
                                    <TableHead class="w-40 font-semibold"
                                        >功能模块</TableHead
                                    >
                                    <TableHead class="font-semibold"
                                        >功能描述</TableHead
                                    >
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow
                                    v-for="row in featureRows"
                                    :key="row.module"
                                    class="hover:bg-muted/30"
                                >
                                    <TableCell class="font-medium">
                                        <Badge variant="outline">{{
                                            row.module
                                        }}</Badge>
                                    </TableCell>
                                    <TableCell class="text-muted-foreground">{{
                                        row.description
                                    }}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </section>

            <Separator class="my-12" />

            <!-- 发展路线图 -->
            <section class="space-y-6">
                <div class="space-y-3">
                    <h2 class="text-3xl font-bold tracking-tight">
                        发展路线图
                    </h2>
                    <p class="text-muted-foreground">
                        从基础构建到生态完善，逐季度推进产品演进
                    </p>
                </div>

                <div class="space-y-6">
                    <!-- Q1 -->
                    <div class="relative flex gap-6">
                        <div class="flex flex-col items-center">
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground"
                            >
                                <span class="text-lg font-bold">1</span>
                            </div>
                            <div class="h-full w-0.5 bg-border"></div>
                        </div>
                        <Card class="flex-1 border-2 border-primary/50">
                            <CardHeader>
                                <div
                                    class="flex flex-wrap items-center justify-between gap-2"
                                >
                                    <CardTitle class="text-2xl"
                                        >Q1 · 基础构建</CardTitle
                                    >
                                    <Badge variant="default" class="gap-1">
                                        <span>🚀</span>
                                        当前阶段
                                    </Badge>
                                </div>
                                <CardDescription class="text-base">
                                    跨平台支持；核心系统控制与语音交互；插件系统架构
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    <!-- Q2 -->
                    <div class="relative flex gap-6">
                        <div class="flex flex-col items-center">
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-muted-foreground bg-background"
                            >
                                <span
                                    class="text-lg font-bold text-muted-foreground"
                                    >2</span
                                >
                            </div>
                            <div class="h-full w-0.5 bg-border"></div>
                        </div>
                        <Card class="flex-1 transition-all hover:shadow-lg">
                            <CardHeader>
                                <CardTitle class="text-2xl"
                                    >Q2 · 生态与移动端</CardTitle
                                >
                                <CardDescription class="text-base">
                                    移动端联动；上线 Gloss Store；引入更多
                                    Live2D 模型
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    <!-- Q3 -->
                    <div class="relative flex gap-6">
                        <div class="flex flex-col items-center">
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-muted-foreground bg-background"
                            >
                                <span
                                    class="text-lg font-bold text-muted-foreground"
                                    >3</span
                                >
                            </div>
                            <div class="h-full w-0.5 bg-border"></div>
                        </div>
                        <Card class="flex-1 transition-all hover:shadow-lg">
                            <CardHeader>
                                <CardTitle class="text-2xl"
                                    >Q3 · 智能与隐私</CardTitle
                                >
                                <CardDescription class="text-base">
                                    支持本地大模型部署；集成智能家居协议（Home
                                    Assistant）
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    <!-- Q4 -->
                    <div class="relative flex gap-6">
                        <div class="flex flex-col items-center">
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-muted-foreground bg-background"
                            >
                                <span
                                    class="text-lg font-bold text-muted-foreground"
                                    >4</span
                                >
                            </div>
                        </div>
                        <Card class="flex-1 transition-all hover:shadow-lg">
                            <CardHeader>
                                <CardTitle class="text-2xl"
                                    >Q4 · 云端与协作</CardTitle
                                >
                                <CardDescription class="text-base">
                                    多用户协作；云端复杂任务流处理
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            <Separator class="my-12" />

            <!-- CTA Section -->
            <section>
                <Card
                    class="border-2 border-primary/50 bg-linear-to-br from-primary/5 to-background"
                >
                    <CardHeader class="text-center">
                        <CardTitle class="text-3xl"
                            >加入我们，共创未来</CardTitle
                        >
                        <CardDescription class="text-base">
                            如果您对 Glosc Copilot 感兴趣，欢迎联系我们
                        </CardDescription>
                    </CardHeader>
                    <CardContent
                        class="flex flex-wrap items-center justify-center gap-3"
                    >
                        <Button as-child size="lg" class="gap-2">
                            <a
                                href="https://github.com/glosc-ai/Glosc-Copilot"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>⭐</span>
                                Star on GitHub
                            </a>
                        </Button>
                        <Button
                            as-child
                            variant="outline"
                            size="lg"
                            class="gap-2"
                        >
                            <a href="/">
                                <span>🏠</span>
                                返回首页
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </section>
        </main>
    </div>
</template>
