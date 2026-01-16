import React from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import { usePluralForm } from "@docusaurus/theme-common";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import type { Props } from "@theme/BlogPostItem/Header/Info";
import { Icon } from "@iconify/react";

import styles from "./styles.module.scss";
import dayjs from "dayjs";

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
	const { selectMessage } = usePluralForm();
	return (readingTimeFloat: number) => {
		const readingTime = Math.ceil(readingTimeFloat);
		return selectMessage(
			readingTime,
			translate(
				{
					description:
            "Pluralized label for \"{readingTime} min read\". Use as much plural forms (separated by \"|\") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)",
					id: "theme.blog.post.readingTime.plurals",
					message: "One min read|{readingTime} min read"
				},
				{ readingTime }
			)
		);
	};
}
export function ReadingTime({ readingTime }: { readingTime: number }) {
	const readingTimePlural = useReadingTimePlural();
	return <>{readingTimePlural(readingTime)}</>;
}

function Date({
	date,
	formattedDate,
	children
}: {
	date: string
	formattedDate: string
	children: any
}) {
	return (
		<time
			dateTime={date}
			itemProp="datePublished"
			style={{ alignItems: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", lineHeight: "normal" }}
		>
			<Icon icon="mdi:clock-time-three" color="#6F67FF" />
			{formattedDate}
			{children}
		</time>
	);
}

function Spacer() {
	return <>{" | "}</>;
}

export default function BlogPostItemHeaderInfo({
	className
}: Props): JSX.Element {
	const { metadata } = useBlogPost();

	const { date, frontMatter, formattedDate, readingTime } = metadata;
	const week: any = [
		{ time: "星期日" },
		{ time: "星期一" },
		{ time: "星期二" },
		{ time: "星期三" },
		{ time: "星期四" },
		{ time: "星期五" },
		{ time: "星期六" }
	];

	const weather = [
		{
			name: "雨",
			status: "mdi:weather-rainy"
		},
		{
			name: "阴",
			status: "mdi:weather-partly-cloudy"
		},
		{
			name: "晴",
			status: "mdi:weather-sunny"
		},
		{
			name: "雪",
			status: "mdi:weather-snowy"
		}
	];
	const weekDay = dayjs(frontMatter.date).day();

	return (
		<div className={clsx(styles.container, "margin-vert--md", className)}>
			<div>
				<Date date={date} formattedDate={formattedDate} children={null} />

				<div className={styles.week}>{week[weekDay].time}</div>

				{frontMatter.weather && weather.map((item: any) => {
					if (item.name === frontMatter.weather) {
						return (
							<div className={styles.weather} key={item.name}>
								<Icon icon={item.status} color="#6F67FF" />
								<span>{item.name}</span>
							</div>
						);
					}
					return null;
				})}

				{typeof readingTime !== "undefined" && (
					<div className={styles.readingTime}>
						<Icon icon="mdi:clipboard-text-clock" color="#6F67FF" />
						<ReadingTime readingTime={readingTime} />
					</div>
				)}

				<div className={styles.weather}>
					<Icon icon="mdi:eye" color="#6F67FF" />
					<span id="busuanzi_page_pv">加载中...</span>
				</div>
			</div>
		</div>
	);
}