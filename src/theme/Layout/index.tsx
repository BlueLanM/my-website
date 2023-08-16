/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import { useKeyboardNavigation } from "@docusaurus/theme-common/internal";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";

import Navbar from "@theme/Navbar";
import Footer from "@theme/Footer";
import LayoutProvider from "@theme/Layout/Provider";
import ErrorPageContent from "@theme/ErrorPageContent";
import type { Props } from "@theme/Layout";
import SakanaReact from "sakana-react";

import styles from "./styles.module.css";

export default function Layout(props: Props): JSX.Element {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;

  useKeyboardNavigation();

  return (
    <LayoutProvider className={styles.layout}>
      <PhotoProvider
        maskOpacity={0.8}
        // overlayRender={({ rotate, onRotate, scale, index }) => {
        //   return (
        //     <div>
        //       <div>
        //         <div>
        //           <a onClick={() => onRotate(rotate + 90)}>旋转</a>
        //         </div>
        //         旋转角度 {rotate}
        //       </div>
        //       <div>缩放：{scale}</div>
        //     </div>
        //   );
        // }}
        toolbarRender={({ rotate, onRotate, onScale, scale, index }) => {
          return (
            <>
              <svg
                className="PhotoView-PhotoSlider__toolbarIcon"
                width="44"
                height="44"
                viewBox="0 0 768 768"
                fill="white"
                onClick={() => onScale(scale + 0.2)}
              >
                <path d="M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM415.5 223.5v129h129v63h-129v129h-63v-129h-129v-63h129v-129h63z" />
              </svg>
              <svg
                className="PhotoView-PhotoSlider__toolbarIcon"
                width="44"
                height="44"
                viewBox="0 0 768 768"
                fill="white"
                onClick={() => onScale(scale - 0.2)}
              >
                <path d="M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM223.5 352.5h321v63h-321v-63z" />
              </svg>
              <svg
                className="PhotoView-PhotoSlider__toolbarIcon"
                onClick={() => onRotate(rotate + 90)}
                width="44"
                height="44"
                fill="white"
                viewBox="0 0 768 768"
              >
                <path d="M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z" />
              </svg>
            </>
          );
        }}
      >
        <PageMetadata title={title} description={description} />
        <SkipToContent></SkipToContent>

        <AnnouncementBar />
        <Navbar />

        <SakanaReact
          showLine={false}
          style={{ position: "fixed", bottom: "1rem", right: "7rem" }}
        />

        <div
          id={SkipToContentFallbackId}
          className={clsx(
            ThemeClassNames.wrapper.main,
            styles.mainWrapper,
            wrapperClassName
          )}
        >
          <ErrorBoundary
            fallback={(params) => <ErrorPageContent {...params} />}
          >
            {children}
          </ErrorBoundary>
        </div>
        {!noFooter && <Footer />}
      </PhotoProvider>
    </LayoutProvider>
  );
}
