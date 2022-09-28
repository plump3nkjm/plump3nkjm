# URL: d2gyxwv0zdr0cn.cloudfront.net
echo "処理開始 >>"

if ! yarn build:dev
	echo '!!!! ビルドに失敗しました !!!!'
	exit 1
fi

if ! aws s3 sync ./build/ s3://cheki-cms.fortunemeets.app-dev/ --profile fortune_dev_crz --exclude ".DS_Store" --delete
	echo '!!!! S3アップロード失敗 !!!!'
	exit 1
fi

echo "<< 処理終了"
