module.exports = /*html*/`<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hacking Growth</title>
        <link rel="icon" href="hg.png">
        <!-- Google Tag Manager -->
        <!--
        <script>
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TDL6CBM');
        </script>
        -->
        <style>
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 100;
                font-display: swap;
                src: local('Montserrat Thin Italic'), local('Montserrat-ThinItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUOjIg1_i6t8kCHKm459WxZqh7p29NfpiOjk20.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 100;
                font-display: swap;
                src: local('Montserrat Thin Italic'), local('Montserrat-ThinItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUOjIg1_i6t8kCHKm459WxZqh7g29NfpiOjk20.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 100;
                font-display: swap;
                src: local('Montserrat Thin Italic'), local('Montserrat-ThinItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUOjIg1_i6t8kCHKm459WxZqh7r29NfpiOjk20.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 100;
                font-display: swap;
                src: local('Montserrat Thin Italic'), local('Montserrat-ThinItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUOjIg1_i6t8kCHKm459WxZqh7q29NfpiOjk20.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 100;
                font-display: swap;
                src: local('Montserrat Thin Italic'), local('Montserrat-ThinItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUOjIg1_i6t8kCHKm459WxZqh7k29NfpiOj.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 200;
                font-display: swap;
                src: local('Montserrat ExtraLight Italic'), local('Montserrat-ExtraLightItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZBg_z8fZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 200;
                font-display: swap;
                src: local('Montserrat ExtraLight Italic'), local('Montserrat-ExtraLightItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZBg_z-PZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 200;
                font-display: swap;
                src: local('Montserrat ExtraLight Italic'), local('Montserrat-ExtraLightItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZBg_z8_Zwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 200;
                font-display: swap;
                src: local('Montserrat ExtraLight Italic'), local('Montserrat-ExtraLightItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZBg_z8vZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 200;
                font-display: swap;
                src: local('Montserrat ExtraLight Italic'), local('Montserrat-ExtraLightItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZBg_z_PZwjimrqw.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 300;
                font-display: swap;
                src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZYgzz8fZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 300;
                font-display: swap;
                src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZYgzz-PZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 300;
                font-display: swap;
                src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZYgzz8_Zwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 300;
                font-display: swap;
                src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZYgzz8vZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 300;
                font-display: swap;
                src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZYgzz_PZwjimrqw.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Italic'), local('Montserrat-Italic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUQjIg1_i6t8kCHKm459WxRxC7m0dR9pBOi.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Italic'), local('Montserrat-Italic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUQjIg1_i6t8kCHKm459WxRzS7m0dR9pBOi.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Italic'), local('Montserrat-Italic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUQjIg1_i6t8kCHKm459WxRxi7m0dR9pBOi.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Italic'), local('Montserrat-Italic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUQjIg1_i6t8kCHKm459WxRxy7m0dR9pBOi.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Italic'), local('Montserrat-Italic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUQjIg1_i6t8kCHKm459WxRyS7m0dR9pA.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZOg3z8fZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZOg3z-PZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZOg3z8_Zwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZOg3z8vZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZOg3z_PZwjimrqw.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZFgrz8fZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZFgrz-PZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZFgrz8_Zwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZFgrz8vZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZFgrz_PZwjimrqw.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZcgvz8fZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZcgvz-PZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZcgvz8_Zwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZcgvz8vZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZcgvz_PZwjimrqw.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 800;
                font-display: swap;
                src: local('Montserrat ExtraBold Italic'), local('Montserrat-ExtraBoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZbgjz8fZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 800;
                font-display: swap;
                src: local('Montserrat ExtraBold Italic'), local('Montserrat-ExtraBoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZbgjz-PZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 800;
                font-display: swap;
                src: local('Montserrat ExtraBold Italic'), local('Montserrat-ExtraBoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZbgjz8_Zwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 800;
                font-display: swap;
                src: local('Montserrat ExtraBold Italic'), local('Montserrat-ExtraBoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZbgjz8vZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 800;
                font-display: swap;
                src: local('Montserrat ExtraBold Italic'), local('Montserrat-ExtraBoldItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZbgjz_PZwjimrqw.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 900;
                font-display: swap;
                src: local('Montserrat Black Italic'), local('Montserrat-BlackItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZSgnz8fZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 900;
                font-display: swap;
                src: local('Montserrat Black Italic'), local('Montserrat-BlackItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZSgnz-PZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 900;
                font-display: swap;
                src: local('Montserrat Black Italic'), local('Montserrat-BlackItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZSgnz8_Zwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 900;
                font-display: swap;
                src: local('Montserrat Black Italic'), local('Montserrat-BlackItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZSgnz8vZwjimrq1Q_.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: italic;
                font-weight: 900;
                font-display: swap;
                src: local('Montserrat Black Italic'), local('Montserrat-BlackItalic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUPjIg1_i6t8kCHKm459WxZSgnz_PZwjimrqw.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 100;
                font-display: swap;
                src: local('Montserrat Thin'), local('Montserrat-Thin'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUQjIg1_i6t8kCHKm45_QpRxC7m0dR9pBOi.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 100;
                font-display: swap;
                src: local('Montserrat Thin'), local('Montserrat-Thin'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUQjIg1_i6t8kCHKm45_QpRzS7m0dR9pBOi.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 100;
                font-display: swap;
                src: local('Montserrat Thin'), local('Montserrat-Thin'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUQjIg1_i6t8kCHKm45_QpRxi7m0dR9pBOi.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 100;
                font-display: swap;
                src: local('Montserrat Thin'), local('Montserrat-Thin'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUQjIg1_i6t8kCHKm45_QpRxy7m0dR9pBOi.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 100;
                font-display: swap;
                src: local('Montserrat Thin'), local('Montserrat-Thin'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUQjIg1_i6t8kCHKm45_QpRyS7m0dR9pA.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 200;
                font-display: swap;
                src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_aZA3gTD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 200;
                font-display: swap;
                src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_aZA3g3D_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 200;
                font-display: swap;
                src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_aZA3gbD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 200;
                font-display: swap;
                src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_aZA3gfD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 200;
                font-display: swap;
                src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_aZA3gnD_vx3rCs.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 300;
                font-display: swap;
                src: local('Montserrat Light'), local('Montserrat-Light'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_cJD3gTD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 300;
                font-display: swap;
                src: local('Montserrat Light'), local('Montserrat-Light'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_cJD3g3D_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 300;
                font-display: swap;
                src: local('Montserrat Light'), local('Montserrat-Light'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_cJD3gbD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 300;
                font-display: swap;
                src: local('Montserrat Light'), local('Montserrat-Light'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_cJD3gfD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 300;
                font-display: swap;
                src: local('Montserrat Light'), local('Montserrat-Light'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_cJD3gnD_vx3rCs.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: local('Montserrat Medium'), local('Montserrat-Medium'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gTD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: local('Montserrat Medium'), local('Montserrat-Medium'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3g3D_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: local('Montserrat Medium'), local('Montserrat-Medium'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gbD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: local('Montserrat Medium'), local('Montserrat-Medium'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gfD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: local('Montserrat Medium'), local('Montserrat-Medium'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gnD_vx3rCs.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gTD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3g3D_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gbD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gfD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gnD_vx3rCs.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gTD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3g3D_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gbD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gfD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gnD_vx3rCs.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 800;
                font-display: swap;
                src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_c5H3gTD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 800;
                font-display: swap;
                src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_c5H3g3D_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 800;
                font-display: swap;
                src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_c5H3gbD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 800;
                font-display: swap;
                src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_c5H3gfD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 800;
                font-display: swap;
                src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_c5H3gnD_vx3rCs.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 900;
                font-display: swap;
                src: local('Montserrat Black'), local('Montserrat-Black'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_epG3gTD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 900;
                font-display: swap;
                src: local('Montserrat Black'), local('Montserrat-Black'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_epG3g3D_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 900;
                font-display: swap;
                src: local('Montserrat Black'), local('Montserrat-Black'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_epG3gbD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 900;
                font-display: swap;
                src: local('Montserrat Black'), local('Montserrat-Black'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_epG3gfD_vx3rCubqg.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 900;
                font-display: swap;
                src: local('Montserrat Black'), local('Montserrat-Black'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_epG3gnD_vx3rCs.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            
            :root{
                --pink: #FB358C;
                --cyan: #1CFAD5;
                --violet: #7958C3;
                --blue: #06B3F5;
                --light: #eee;
                --dark: #092342;
                --darkt: #092342dd;
                --gradient: linear-gradient(to right, var(--pink), var(--cyan), var(--violet), var(--blue));
            }

            body {
                font-family: 'Montserrat', sans-serif;
                margin: 0;
                padding: 0;
            }

            html {
            text-align: center;
            }
        </style>
        <link rel="stylesheet" href="static/css/style.css">
    </head>
    <body>
        <!--
        <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDL6CBM"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        -->
        <!-- End Google Tag Manager (noscript) -->   
        ${ page('index') }
    </body>
</html>
`