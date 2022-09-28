const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

// 第二引数は本来出力先を指定するが、何も指定しない場合第一引数のディレクトリに格納される。
imagemin(['img/**/*.{jpg,png,gif,svg}'], {
    plugins: [
        imageminMozjpeg({
            quality: 80
        }),
        imageminPngquant({
            quality: [0.65, 0.8]
        }),
        imageminGifsicle(),
        imageminSvgo()
    ]
}).then(() => {
    console.log('Images optimized');
});
