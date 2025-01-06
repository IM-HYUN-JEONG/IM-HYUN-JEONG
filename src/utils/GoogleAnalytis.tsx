import React from "react";

const GoogleAnalytis = () => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-MDBH3998TH"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-MDBH3998TH');
                `,
        }}
      />
    </>
  );
};

export default GoogleAnalytis;
