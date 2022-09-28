//背景アニメーション 文字バージョンpタグの中にspanを入れて文を区切る

export default () => {
	//pの親要素とその親要素の中からpタグを取得
	const back = document.getElementsByClassName('back');
	const p = back[0].querySelectorAll('p');
	//速さを格納するための配列
	var s = new Array(p.length);
	//pの数だけアニメーションをセット
	for (let x = 0; x < p.length; x++) {
		const inner = p[x].innerHTML;
		//pの中にコピーしたい数だけfor文を回し、pのinnerHTMLに代入していく
		for (let i = 0; i < 3; i++) {
			p[x].innerHTML += inner;
		}
		let el = p[x].lastElementChild;
		let w = el.offsetWidth;
		s[x] = -w;
		setInterval(() => {
			s[x] += w / 1600;
			p[x].style.transform = 'translateX(' + s[x] + 'px)';
			if (0 < s[x]) {
				p[x].insertBefore(el, p[x].firstElementChild);
				s[x] = -w;
			}
		}, 10);
	}
}
