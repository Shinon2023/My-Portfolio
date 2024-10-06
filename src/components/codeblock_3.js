import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function codeblock_3() {
  const structuretree = 
  `└── 📁lib
    └── 📁login logout
        └── 📁tabs_register
            └── register_page.dart
            └── tabs_layout.dart
        └── landing_page.dart
        └── login_page.dart
    └── 📁services
        └── auth_service.dart
    └── 📁tabs_layout
        └── 📁community_page
            └── community_page.dart
        └── 📁discover_page
            └── 📁Components
                └── filter_modal.dart
                └── form.dart
                └── perfume_info.dart
                └── search_bar.dart
                └── section_title.dart
                └── section_title.dart~
            └── discover_page.dart
        └── 📁myprofile_page
            └── 📁change_emailpassword
                └── confirm_password.dart
            └── profile_setup_page.dart
            └── setting_page.dart
        └── tabs_layout.dart
        └── tabs_layout.dart~
    └── main.dart
    └── theme.dart`;
  return (
    <>
      <div className="text-white w-full h-[30vh] overflow-y-scroll custom-scrollbar rounded-lg bg-cover overflow-hidden">
        <SyntaxHighlighter language="markdown" style={oneDark}>
          {structuretree}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
