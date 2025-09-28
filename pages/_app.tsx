import { Global, EmotionCache } from '@emotion/react';
import './index.css';

import { NextUIProvider } from '@nextui-org/react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'react-vertical-timeline-component/style.min.css';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const GlobalStyle = (
  <Global
    styles={`
      body {
        margin: 0;
        font-family: 'Noto Sans CJK KR', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-style: 'normal';
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* Tailwind CSS의 기본 스타일(예: margin, box-sizing)이 필요하다면 여기에 추가할 수 있습니다. */
        /* 예: box-sizing: border-box; */
      }
      
      @font-face {
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        font-weight: 100;
        src: url('/fonts/NotoSansKR-Light.woff2') format('woff2'), url('/fonts/NotoSansKR-Light.woff') format('font-woff'), url('/fonts/NotoSansKR-Light.otf') format('truetype');
      }
      
      @font-face {
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        font-weight: normal;
        src: url('/fonts/NotoSansKR-Regular.woff2') format('woff2'), url('/fonts/NotoSansKR-Regular.woff') format('font-woff'), url('/fonts/NotoSansKR-Regular.otf') format('truetype');
      }
      
      @font-face {
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/NotoSansKR-Medium.woff2') format('woff2'), url('/fonts/NotoSansKR-Medium.woff') format('font-woff'), url('/fonts/NotoSansKR-Medium.otf') format('truetype');
      }
      
      @font-face {
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        font-weight: bold;
        src: url('/fonts/NotoSansKR-Bold.woff2') format('woff2'), url('/fonts/NotoSansKR-Bold.woff') format('font-woff'), url('/fonts/NotoSansKR-Bold.otf') format('truetype');
      }
    `}
  />
);

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {GlobalStyle}
        <Head>
          <title>ImHyunJeong | 편리함을 추구하는 개발자 </title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="google-site-verification" content="4Krut1DFj0ODK-gyhzjhbBSz-R9WtgvXE2Mndz9ZIRQ" />
          <meta name="naver-site-verification" content="caf276500aef5508a9380ca9dad2f487f9a13c54" />
          <meta name="keywords" content="개발자,프로그래머,프론트엔드,포트폴리오,임현정,portfolio,frontend,ImHyunJeong" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
        <DefaultSeo
          canonical={'https://im-hyun-jeong.vercel.app/'}
          description={'2년차 프론트엔드 개발자 임현정의 포트폴리오입니다.'}
          openGraph={{
            type: 'website',
            title: 'ImHyunJeong | 편리함을 추구하는 개발자',
            images: [
              {
                url: '/images/intro/character.png',
                width: 800,
                height: 600,
                alt: "im's image"
              }
            ],
            description: '2년차 프론트엔드 개발자 임현정의 포트폴리오입니다.',
            site_name: 'ImHyunJeong | 편리함을 추구하는 개발자'
          }}
        />
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
