const Koa = require("koa");
const app = new Koa();
// const path = require('path');
// const server = require('koa-static');

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { renderToString, renderToStaticMarkup } from 'react-dom/server';

const main = ctx => {
  // ctx.response.body = 'hello world';
  // const frontComponents = renderToString(
  //     (
  //         <Div>
  //             <p>服务器端渲染</p>
  //         </Div>

  //     )
  // )

  const _frontHtml = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="theme-color" content="#000000">
            <title>人才市场</title>
           
        </head>
        <body>
            <noscript>
            You need to enable JavaScript to run this app.
            </noscript>
            <div id="root">哈哈</div>
           
        </body>
    </html>`;

  ctx.response.body = _frontHtml;
};

app.use(main);
app.listen(9000);
