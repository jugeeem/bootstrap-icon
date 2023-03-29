import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    // 6~10行目まで加筆
    server: {
        hmr: {
            host: 'localhost',
        },
    },
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                // app.scssの追記
                'resources/sass/app.scss', 
                'resources/js/app.js'
            ],
            refresh: true,
        }),
    ],
});
