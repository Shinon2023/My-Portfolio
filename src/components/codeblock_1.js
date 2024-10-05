import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function codeblock_1() {
  const structuretree = `└── 📁CopacabanaStock-Next.js
    └── 📁prisma
        └── 📁migrations
        └── schema.prisma
    └── 📁public
        └── 📁icon
            └── building-fill.svg
            └── facebook.svg
            └── file-earmark-text.svg
            └── house.svg
            └── logo-copacabana.png
            └── people-fill.svg
        └── 📁img
            └── 📁stock
                └── imgFile-1727242980651-902837099.jpg
                └── imgFile-1727267251693-351671054.png
                └── imgFile-1727267326444-724796418.jpg
            └── 📁users
                └── 1727006361515.png
                └── Shinon.jpg
    └── 📁src
        └── 📁app
            └── 📁auth
                └── 📁client
                    └── client.js
                └── page.js
            └── 📁Chat
                └── 📁client
                    └── client.js
                └── page.js
            └── 📁Dashboard
                └── 📁client
                    └── client.js
                └── page.js
            └── 📁fonts
                └── GeistMonoVF.woff
                └── GeistVF.woff
            └── 📁Profile
                └── 📁client
                    └── client.js
                └── page.js
            └── 📁Stock
                └── 📁client
                    └── client.js
                └── 📁components
                    └── addnew.js
                    └── deletestock.js
                    └── selectitem.js
                    └── stockitem.js
                └── page.js
            └── favicon.ico
            └── globals.css
            └── layout.js
            └── login-register_style.css
            └── page.js
        └── 📁Components
            └── loading.js
            └── Sidebar.js
        └── 📁pages
            └── 📁api
                └── 📁auth
                    └── [...nextauth].js
                └── 📁messages
                    └── 📁users
                        └── route.js
                    └── [conversationId].js
                    └── send.js
                └── 📁profiles
                    └── [userid].js
                └── 📁stock
                    └── addStock.js
                    └── fetchallstock.js
                └── register.js
    └── .env
    └── .eslintrc.json
    └── .gitignore
    └── ecosystem.config.js
    └── jsconfig.json
    └── next.config.mjs
    └── package-lock.json
    └── package.json
    └── postcss.config.mjs
    └── README.md
    └── tailwind.config.js`;
  return (
    <>
      <div className="text-white w-full h-full overflow-y-scroll custom-scrollbar rounded-lg bg-cover overflow-hidden">
        <SyntaxHighlighter language="markdown" style={oneDark}>
          {structuretree}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
