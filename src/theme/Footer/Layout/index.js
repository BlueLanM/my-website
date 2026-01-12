/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import RunTime from "@site/src/components/RunTime";

export default function FooterLayout({ style, links, logo, copyright }) {
	return (
		<footer
			className={clsx("footer", {
				"footer--dark": style === "dark"
			})}
		>
			<div className="container container-fluid">
				{links}
				<div className="footer__stats text--center" style={{
					margin: "1rem 0",
					padding: "1rem",
					borderTop: "1px solid var(--ifm-toc-border-color)",
					fontSize: "0.9rem",
					color: "var(--ifm-secondary-text-color)"
				}}>
					<div style={{ marginBottom: "0.5rem" }}>
						<span style={{ marginRight: "2rem" }}>
              📊 本站总访问量 <span id="busuanzi_value_site_pv" style={{
								color: "var(--ifm-color-primary)",
								fontWeight: "bold"
							}}>--</span> 次
						</span>
						<span>
              👣 已有 <span id="busuanzi_value_site_uv" style={{
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