module.exports = style => scripts => /*html*/`
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hacking Growth</title>
        <link rel="icon" href="static/img/hg.svg">
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
        <meta name="description" content="Marketing digital voltado para aumentar a taxa de conversão do seu negócio. Oferecemos soluções baseadas em inteligência, otimização e dados.">
        <style>
            ${style}
            ${page('style')}
        </style>
    </head>
    <body class="m-0">
        <!--
        <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDL6CBM"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        -->
        <!-- End Google Tag Manager (noscript) -->   
        ${page('index')}
        <script>
            ${scripts}
        </script>
    </body>
</html>
`