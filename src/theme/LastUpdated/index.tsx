import React from "react";
import Translate from "@docusaurus/Translate";
import { ThemeClassNames } from "@docusaurus/theme-common";
import type { Props } from "@theme/LastUpdated";
import dayjs from "dayjs";

function LastUpdatedAtDate({
  lastUpdatedAt,
  formattedLastUpdatedAt,
}: {
  lastUpdatedAt: number;
  formattedLastUpdatedAt: string;
}): JSX.Element {
  return (
    <Translate
      id="theme.lastUpdated.atDate"
      description="The words used to describe on which date a page has been last updated"
      values={{
        date: (
          <b>
            <time>{dayjs(`${new Date()}`).format("YYYY年MM月DD日")}</time>
          </b>
        ),
      }}
    >
      {" on {date}"}
    </Translate>
  );
}

function LastUpdatedByUser({
  lastUpdatedBy,
}: {
  lastUpdatedBy: string;
}): JSX.Element {
  return (
    <Translate
      id="theme.lastUpdated.byUser"
      description="The words used to describe by who the page has been last updated"
      values={{
        user: <b>{lastUpdatedBy}</b>,
      }}
    >
      {" by {user}"}
    </Translate>
  );
}

export default function LastUpdated({
  lastUpdatedAt,
  formattedLastUpdatedAt,
  lastUpdatedBy,
}: Props): JSX.Element {
  console.log(lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy);
  return (
    <span className={ThemeClassNames.common.lastUpdated}>
      <Translate
        id="theme.lastUpdated.lastUpdatedAtBy"
        description="The sentence used to display when a page has been last updated, and by who"
        values={{
          atDate:
            lastUpdatedAt && formattedLastUpdatedAt ? (
              <LastUpdatedAtDate
                lastUpdatedAt={lastUpdatedAt}
                formattedLastUpdatedAt={formattedLastUpdatedAt}
              />
            ) : (
              "LanM"
            ),
          byUser: lastUpdatedBy ? (
            <LastUpdatedByUser lastUpdatedBy={lastUpdatedBy} />
          ) : (
            ""
          ),
        }}
      >
        {"Last updated{atDate}{byUser}"}
      </Translate>
      {process.env.NODE_ENV === "development" && (
        <div>
          {/* eslint-disable-next-line @docusaurus/no-untranslated-text */}
          <small> (Simulated during dev for better perf)</small>
        </div>
      )}
    </span>
  );
}
