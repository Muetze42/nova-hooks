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
        'AttachResource.after' => [],
        'AttachResource.before' => [],
        'CustomAppError.after' => [],
        'CustomAppError.before' => [],
        'CustomError403.after' => [],
        'CustomError403.before' => [],
        'CustomError404.after' => [],
        'CustomError404.before' => [],
        'ResourceDetail.after' => [],
        'ResourceDetail.before' => [],
        'ResourceIndex.after' => [],
        'ResourceIndex.before' => [],
        'UpdateAttachedResource.after' => [],
        'UpdateAttachedResource.before' => [],
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
            'AttachResource.after',
            'AttachResource.before',
            'CustomAppError.after',
            'CustomAppError.before',
            'CustomError403.after',
            'CustomError403.before',
            'CustomError404.after',
            'CustomError404.before',
            'ResourceDetail.after',
            'ResourceDetail.before',
            'ResourceIndex.after',
            'ResourceIndex.before',
            'UpdateAttachedResource.after',
            'UpdateAttachedResource.before',
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
}
