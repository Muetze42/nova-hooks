<?php

namespace NormanHuth\NovaHooks;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class ToolServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Nova::serving(function (ServingNova $event) {
            Nova::provideToScript(['hooks' => NovaHook::hooks()]);
            Nova::script('nova-hooks', __DIR__ . '/../dist/js/tool.js');
        });
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }
}
