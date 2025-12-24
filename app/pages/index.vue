<script setup lang="ts">
const platformBadges = ["Windows", "macOS", "Linux"];

const features = [
    {
        icon: "💬",
        title: "语音交互",
        description:
            "自然语言对话，支持多轮上下文记忆，像和朋友聊天一样控制电脑",
        details: "支持语调识别、情感分析、自定义唤醒词，多语言实时切换",
    },
    {
        icon: "⚡",
        title: "系统级控制",
        description: "一句话完成应用管理、文件操作、命令执行与自动化任务",
        details: "支持批处理、任务调度、跨应用协作，告别繁琐的点击操作",
    },
    {
        icon: "🎭",
        title: "Live2D 虚拟形象",
        description: "可视化桌面伴侣，支持动态表情与情感反馈",
        details: "可更换角色模型、导入自定义皮肤，打造专属数字助理",
    },
    {
        icon: "🔌",
        title: "插件生态",
        description: "Python SDK 开放接口，轻松扩展能力边界",
        details: "支持股票查询、智能家居、代码分析等场景，社区共建生态",
    },
    {
        icon: "🧠",
        title: "情感计算",
        description: "通过语调与表情识别理解你的情绪状态",
        details: "动态调整回应语气与虚拟形象表情，提供更有温度的陪伴",
    },
    {
        icon: "🌐",
        title: "跨平台支持",
        description: "完美运行在 Windows、macOS、Linux 三大平台",
        details: "统一体验，一次部署，随处使用，数据无缝同步",
    },
];

const useCases = [
    {
        scenario: "开发者",
        icon: "👨‍💻",
        color: "from-blue-500/10 to-cyan-500/10",
        example: "「打开 VS Code，创建名为 project 的文件夹，初始化 git 仓库」",
        benefit: "批量操作一次完成，专注编码不被打断",
        steps: [
            "自动打开开发工具",
            "创建项目目录结构",
            "初始化版本控制",
            "配置开发环境",
        ],
        stats: {
            label: "节省时间",
            value: "2.5小时/天",
        },
    },
    {
        scenario: "办公人群",
        icon: "💼",
        color: "from-green-500/10 to-emerald-500/10",
        example: "「每天早上 9 点提醒我开会，打开日程和会议链接」",
        benefit: "智能日程管理，工作井井有条",
        steps: ["定时任务提醒", "自动打开应用", "日程智能同步", "会议准备就绪"],
        stats: {
            label: "准时率",
            value: "100%",
        },
    },
    {
        scenario: "学生",
        icon: "📚",
        color: "from-orange-500/10 to-yellow-500/10",
        example: "「整理本周笔记，生成思维导图，发送到我的邮箱」",
        benefit: "学习资料自动归档，复习更高效",
        steps: ["智能笔记整理", "知识图谱生成", "自动备份同步", "复习计划提醒"],
        stats: {
            label: "学习效率",
            value: "+45%",
        },
    },
    {
        scenario: "内容创作者",
        icon: "✍️",
        color: "from-red-500/10 to-rose-500/10",
        example: "「剪辑视频素材，添加字幕，导出 4K 版本到桌面」",
        benefit: "创作流程自动化，释放创意潜能",
        steps: [
            "素材智能筛选",
            "自动化剪辑处理",
            "批量渲染导出",
            "发布平台同步",
        ],
        stats: {
            label: "创作速度",
            value: "3x",
        },
    },
    {
        scenario: "游戏玩家",
        icon: "🎮",
        color: "from-indigo-500/10 to-violet-500/10",
        example: "「启动游戏前关闭后台程序，开启性能模式，录制开始」",
        benefit: "游戏体验优化，专注享受乐趣",
        steps: ["系统性能优化", "后台进程清理", "游戏环境配置", "实况录制管理"],
        stats: {
            label: "FPS 提升",
            value: "+30%",
        },
    },
];
</script>

<template>
    <div class="min-h-screen">
        <!-- Hero Section -->
        <section class="relative overflow-hidden">
            <!-- 背景渐变 -->
            <div
                class="absolute inset-0 -z-10 bg-linear-to-br from-primary/5 via-background to-background"
            ></div>
            <div
                class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"
            ></div>

            <main class="mx-auto max-w-6xl px-4 py-20 sm:py-28">
                <div class="space-y-8 text-center">
                    <!-- 状态徽章 -->
                    <div
                        class="flex flex-wrap items-center justify-center gap-2"
                    >
                        <Badge variant="outline" class="px-3 py-1">
                            <span class="mr-1">🚀</span>
                            开源项目
                        </Badge>
                        <Badge variant="secondary" class="px-3 py-1">
                            正在开发中
                        </Badge>
                    </div>

                    <!-- 主标题 -->
                    <div class="space-y-4">
                        <h1
                            class="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
                        >
                            让电脑
                            <span
                                class="bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                            >
                                听懂你
                            </span>
                        </h1>
                        <p
                            class="mx-auto max-w-3xl text-pretty text-lg text-muted-foreground sm:text-xl"
                        >
                            <strong class="font-semibold text-foreground"
                                >Glosc Copilot</strong
                            >
                            是跨平台 AI 智能桌面助手
                        </p>
                        <p
                            class="mx-auto max-w-2xl text-base text-muted-foreground"
                        >
                            用自然语言把"打开应用 / 管理文件 / 执行命令 /
                            自动化流程"变成一次对话， 通过情感化交互与 Live2D
                            虚拟形象，带来更有温度的陪伴式体验
                        </p>
                    </div>

                    <!-- 平台支持 -->
                    <div
                        class="flex flex-wrap items-center justify-center gap-2"
                    >
                        <span class="text-sm text-muted-foreground"
                            >支持平台：</span
                        >
                        <Badge
                            v-for="p in platformBadges"
                            :key="p"
                            variant="outline"
                            class="font-mono"
                        >
                            {{ p }}
                        </Badge>
                    </div>

                    <!-- CTA 按钮 -->
                    <div
                        class="flex flex-wrap items-center justify-center gap-3"
                    >
                        <Button as-child size="lg" class="gap-2">
                            <a href="/business-plan">
                                <span>📋</span>
                                查看商业计划
                            </a>
                        </Button>
                        <Button
                            as-child
                            variant="outline"
                            size="lg"
                            class="gap-2"
                        >
                            <a
                                href="https://github.com/glosc-ai/Glosc-Copilot"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>⭐</span>
                                GitHub
                            </a>
                        </Button>
                    </div>
                </div>
            </main>
        </section>

        <Separator class="my-12" />

        <!-- 核心特性 -->
        <section class="mx-auto max-w-6xl px-4 py-12">
            <div class="space-y-8">
                <div class="space-y-3 text-center">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                        核心特性
                    </h2>
                    <p class="text-muted-foreground">
                        从系统控制到情感交互，构建真正能"做事"且"懂你"的桌面 AI
                        助手
                    </p>
                </div>

                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <HoverCard
                        v-for="(feature, index) in features"
                        :key="index"
                        :open-delay="200"
                    >
                        <HoverCardTrigger as-child>
                            <Card
                                class="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/10"
                            >
                                <CardHeader>
                                    <div class="mb-2 text-4xl">
                                        {{ feature.icon }}
                                    </div>
                                    <CardTitle class="text-xl">{{
                                        feature.title
                                    }}</CardTitle>
                                    <CardDescription>{{
                                        feature.description
                                    }}</CardDescription>
                                </CardHeader>
                            </Card>
                        </HoverCardTrigger>
                        <HoverCardContent class="w-80">
                            <div class="space-y-2">
                                <h4 class="font-semibold">
                                    {{ feature.title }}
                                </h4>
                                <p class="text-sm text-muted-foreground">
                                    {{ feature.details }}
                                </p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </div>
        </section>

        <Separator class="my-12" />

        <!-- 核心价值 -->
        <section class="mx-auto max-w-6xl px-4 py-12">
            <div class="space-y-8">
                <div class="space-y-3 text-center">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                        三大核心价值
                    </h2>
                    <p class="text-muted-foreground">
                        重新定义人机交互，打造有温度的数字伙伴
                    </p>
                </div>

                <div class="grid gap-6 md:grid-cols-3">
                    <Card class="border-2">
                        <CardHeader>
                            <div
                                class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl"
                            >
                                💭
                            </div>
                            <CardTitle>从"点击"到"对话"</CardTitle>
                            <CardDescription>更自然的交互方式</CardDescription>
                        </CardHeader>
                        <CardContent class="text-sm text-muted-foreground">
                            告别繁琐的菜单层级和路径搜索，用一句话完成系统任务。
                            让人机交互回归最自然的状态——对话。
                        </CardContent>
                    </Card>

                    <Card class="border-2 border-primary">
                        <CardHeader>
                            <div
                                class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl"
                            >
                                💝
                            </div>
                            <CardTitle>从"工具"到"伴侣"</CardTitle>
                            <CardDescription>更有温度的体验</CardDescription>
                        </CardHeader>
                        <CardContent class="text-sm text-muted-foreground">
                            通过语调与表情识别理解你的情绪，动态调整回应语气与形象表情。
                            不只是助手，更是懂你的数字伙伴。
                        </CardContent>
                    </Card>

                    <Card class="border-2">
                        <CardHeader>
                            <div
                                class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl"
                            >
                                🧩
                            </div>
                            <CardTitle>从"产品"到"平台"</CardTitle>
                            <CardDescription>无限扩展能力</CardDescription>
                        </CardHeader>
                        <CardContent class="text-sm text-muted-foreground">
                            开放的 Python SDK
                            和插件生态，让能力像积木一样自由组合。
                            社区共建，覆盖更多场景。
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <Separator class="my-12" />

        <!-- 使用场景 -->
        <section class="mx-auto max-w-6xl px-4 py-12">
            <div class="space-y-8">
                <div class="space-y-3 text-center">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                        使用场景
                    </h2>
                    <p class="text-muted-foreground">
                        看看 Glosc Copilot 如何让不同人群的工作更高效
                    </p>
                </div>

                <Tabs default-value="0" class="w-full">
                    <TabsList class="grid w-full grid-cols-3 lg:grid-cols-5">
                        <TabsTrigger
                            v-for="(useCase, index) in useCases"
                            :key="index"
                            :value="String(index)"
                            class="gap-2"
                        >
                            <span class="text-lg">{{ useCase.icon }}</span>
                            <span class="hidden sm:inline">{{
                                useCase.scenario
                            }}</span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent
                        v-for="(useCase, index) in useCases"
                        :key="index"
                        :value="String(index)"
                        class="mt-6"
                    >
                        <Card
                            :class="['overflow-hidden border-2 transition-all']"
                        >
                            <div
                                :class="[
                                    'absolute inset-0 -z-10 bg-linear-to-br opacity-50',
                                    useCase.color,
                                ]"
                            ></div>
                            <CardHeader>
                                <div
                                    class="flex flex-wrap items-center justify-between gap-4"
                                >
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="flex h-12 w-12 items-center justify-center rounded-full bg-background text-3xl shadow-md"
                                        >
                                            {{ useCase.icon }}
                                        </div>
                                        <div>
                                            <CardTitle class="text-2xl">{{
                                                useCase.scenario
                                            }}</CardTitle>
                                        </div>
                                    </div>
                                    <Badge
                                        variant="secondary"
                                        class="gap-1 px-4 py-2 text-base"
                                    >
                                        <span>📊</span>
                                        {{ useCase.stats.label }}:
                                        <strong>{{
                                            useCase.stats.value
                                        }}</strong>
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent class="space-y-6">
                                <!-- 语音命令示例 -->
                                <div class="space-y-2">
                                    <div
                                        class="flex items-center gap-2 text-sm font-medium"
                                    >
                                        <span>🎤</span>
                                        语音命令示例
                                    </div>
                                    <div
                                        class="rounded-lg border-l-4 border-primary bg-muted p-4 font-mono text-sm italic"
                                    >
                                        "{{ useCase.example }}"
                                    </div>
                                </div>

                                <!-- 执行步骤 -->
                                <div class="space-y-3">
                                    <div
                                        class="flex items-center gap-2 text-sm font-medium"
                                    >
                                        <span>⚙️</span>
                                        自动执行流程
                                    </div>
                                    <div
                                        class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
                                    >
                                        <div
                                            v-for="(
                                                step, stepIndex
                                            ) in useCase.steps"
                                            :key="stepIndex"
                                            class="flex items-center gap-2 rounded-lg bg-background p-3 shadow-sm"
                                        >
                                            <div
                                                class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
                                            >
                                                {{ stepIndex + 1 }}
                                            </div>
                                            <span
                                                class="text-xs text-muted-foreground"
                                                >{{ step }}</span
                                            >
                                        </div>
                                    </div>
                                </div>

                                <!-- 效果说明 -->
                                <div
                                    class="flex items-start gap-3 rounded-lg bg-primary/5 p-4"
                                >
                                    <Badge
                                        variant="default"
                                        class="mt-0.5 shrink-0"
                                        >✨ 效果</Badge
                                    >
                                    <p class="text-sm font-medium">
                                        {{ useCase.benefit }}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>

        <Separator class="my-12" />

        <!-- CTA Section -->
        <section class="mx-auto max-w-6xl px-4 py-16">
            <Card
                class="border-2 border-primary/50 bg-linear-to-br from-primary/5 to-background"
            >
                <CardHeader class="text-center">
                    <CardTitle class="text-3xl"
                        >准备好体验未来的交互方式了吗？</CardTitle
                    >
                    <CardDescription class="text-base">
                        加入我们，一起打造能听、能看、能懂你的数字伙伴
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
                    <Button as-child variant="outline" size="lg" class="gap-2">
                        <a href="/business-plan">
                            <span>📖</span>
                            了解更多
                        </a>
                    </Button>
                </CardContent>
            </Card>
        </section>
    </div>
</template>
