// 不蒜子统计客户端模块
// 用于在 SPA 路由切换时更新统计数据

function fetchBusuanzi() {
	// 检查页面上是否有不蒜子元素
	const hasBusuanziElements
    = document.querySelector("#busuanzi_site_pv")
    || document.querySelector("#busuanzi_site_uv")
    || document.querySelector("#busuanzi_page_pv");

	if (!hasBusuanziElements) {
		return;
	}

	const u = new URL("https://cdn.busuanzi.cc/");
	fetch(u.protocol + "//" + u.host + "/api.php", {
		body: JSON.stringify({
			referrer: document.referrer,
			url: location.href
		}),
		method: "POST"
	})
		.then(r => r.json())
		.then(r => {
			for (const k in r) {
				document.querySelectorAll("#" + k).forEach(e => {
					e.innerText = r[k];
				});
			}
		})
		.catch(e => {
			console.error("不蒜子加载失败:", e);
		});
}

export function onRouteDidUpdate({ location, previousLocation }) {
	// 路由更新后，延迟一下确保 DOM 已渲染
	setTimeout(() => {
		fetchBusuanzi();
	}, 100);
}