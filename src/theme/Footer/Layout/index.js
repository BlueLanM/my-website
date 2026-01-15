/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect } from "react";
import clsx from "clsx";
import RunTime from "@site/src/components/RunTime";

export default function FooterLayout({ style, links, logo, copyright }) {
	useEffect(() => {
		// 手动触发不蒜子刷新
		const fetchBusuanzi = () => {
			if (typeof window !== "undefined" && window.busuanzi) {
				// 如果不蒜子已加载，手动触发fetch
				window.busuanzi.fetch();
			} else {
				// 如果脚本还没加载，监听脚本加载完成
				const checkInterval = setInterval(() => {
					if (window.busuanzi) {
						window.busuanzi.fetch();
						clearInterval(checkInterval);
					}
				}, 100);

				// 5秒后停止检查
				setTimeout(() => clearInterval(checkInterval), 5000);
			}
		};

		// 延迟执行，确保DOM已渲染
		const timer = setTimeout(fetchBusuanzi, 100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<footer
			className={clsx("footer", {
				"footer--dark": style === "dark"
			})}
		>
			<div className="container container-fluid">
				{links}
				<div className="footer__stats text--center" style={{
					borderTop: "1px solid var(--ifm-toc-border-color)",
					color: "var(--ifm-secondary-text-color)",
					fontSize: "0.9rem",
					margin: "1rem 0",
					padding: "1rem"
				}}>
					<div style={{ marginBottom: "0.5rem" }}>
						<span style={{ marginRight: "2rem" }}>
							📊 本站总访问量 <span id="busuanzi_site_pv" style={{
								color: "var(--ifm-color-primary)",
								fontWeight: "bold"
							}}>--</span> 次
						</span>
						<span>
							👣 已有 <span id="busuanzi_site_uv" style={{
								color: "var(--ifm-color-primary)",
								fontWeight: "bold"
							}}>--</span> 人在此留下脚印
						</span>
					</div>
					<RunTime time={"2023/02/08"} />
				</div>
				{(logo || copyright) && (
					<div className="footer__bottom text--center">
						{logo && <div className="margin-bottom--sm">{logo}</div>}
						{copyright}
					</div>
				)}
			</div>
		</footer>
	);
}