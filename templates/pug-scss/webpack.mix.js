const mix = require('laravel-mix');

mix.setPublicPath('public'); //mix-manifest.jsonの作成場所を指定。
mix.setResourceRoot('public/assets');

mix
    .js('src/js/bundle.js','public/assets/js/')
    .sass('src/css/style.scss','public/assets/css/')
    .options({
        processCssUrls: false,//urlのリライトを無効にする
        autoprefixer: {
            options: {
                grid: true,
            }
        }
    })
    .browserSync({
        server: {
            baseDir: 'public',
            index: 'index.html'
        },
        browser: "google chrome",
        port: 5555,
        proxy: false,
        open: "external", // loaclhostではなくIPで表示
        reloadOnRestart: true,
        files: 'public/**/*' // public配下のファイルが変更されたらリロード
    });
