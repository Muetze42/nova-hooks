<?php

namespace NormanHuth\NovaHooks;

use Illuminate\Support\Arr;
use JetBrains\PhpStorm\ExpectedValues;

class NovaHook
{
    /**
     * Registered Laravel Nova hooks.
     */
    public static array $hooks = [
        'pages.AppError.after' => [],
        'pages.AppError.before' => [],
        'pages.Attach.after' => [],
        'pages.Attach.before' => [],
        'pages.Create.after' => [],
        'pages.Create.before' => [],
        'pages.Dashboard.after' => [],
        'pages.Dashboard.before' => [],
        'pages.Detail.after' => [],
        'pages.Detail.before' => [],
        'pages.Error403.after' => [],
        'pages.Error403.before' => [],
        'pages.Error404.after' => [],
        'pages.Error404.before' => [],
        'pages.Index.after' => [],
        'pages.Index.before' => [],
        'pages.Lens.after' => [],
        'pages.Lens.before' => [],
        'pages.Replicate.after' => [],
        'pages.Replicate.before' => [],
        'pages.Update.after' => [],
        'pages.Update.before' => [],
        'pages.UpdateAttached.after' => [],
        'pages.UpdateAttached.before' => [],
    ];

    /**
     * Get the registered Laravel Nova hooks.
     */
    public static function hooks(): array
    {
        return Arr::undot(static::$hooks);
    }

    /**
     * Add a new hook to a Laravel Nova component.
     */
    public static function addHook(
        #[ExpectedValues(values: [
            'pages.AppError.after',
            'pages.AppError.before',
            'pages.Attach.after',
            'pages.Attach.before',
            'pages.Create.after',
            'pages.Create.before',
            'pages.Dashboard.after',
            'pages.Dashboard.before',
            'pages.Detail.after',
            'pages.Detail.before',
            'pages.Error403.after',
            'pages.Error403.before',
            'pages.Error404.after',
            'pages.Error404.before',
            'pages.Index.after',
            'pages.Index.before',
            'pages.Lens.after',
            'pages.Lens.before',
            'pages.Replicate.after',
            'pages.Replicate.before',
            'pages.Update.after',
            'pages.Update.before',
            'pages.UpdateAttached.after',
            'pages.UpdateAttached.before',
        ])]
        string $hook,
        string $component,
        mixed $componentData = null
    ): void {
        static::$hooks[$hook][] = [
            'component' => $component,
            'componentData' => $componentData,
        ];
    }

    /**
     * Debug the Laravel Nova hooks.
     */
    public static function debug(): void
    {
        foreach (array_keys(static::$hooks) as $hook) {
            static::addHook($hook, 'HookDebugCard', $hook);
        }
    }
}
