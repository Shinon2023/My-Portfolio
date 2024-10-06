import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function codeblock_2() {
  const structuretree = `└── 📁Sword Art Online -pythongame
    └── 📁Audio
        └── Swordland.wav
        └── The First Town.wav
    └── 📁docs
        └── Animetion.py
        └── Audio_ost.py
        └── Data.py
        └── Game_window.py
        └── Logic.py
        └── Main_Game.py
        └── Main_Module.py
        └── Operator.py
        └── text.py
    └── 📁font
        └── Pixeboy-z8XGD.ttf
    └── 📁Image
        └── 📁Animetion Sprite
            └── Attack Animetion.png
            └── attack copy.png
            └── Player.png
            └── Runing Animetion.png
            └── slime enemy.png
        └── 📁Background
            └── Background_start_game.jpg
            └── Background.jpg
            └── Text_box.png
        └── 📁Button 1
            └── Button.png
        └── 📁Icons
            └── UI_green_buttons_4.png
            └── UI_green_buttons_light_4.png
            └── UI_green_buttons_light_pressed_4.png
            └── UI_green_buttons_pressed_4 (1).png
            └── UI_green_buttons_pressed_4.png
            └── UI_grey_buttons_1.png
            └── UI_grey_buttons_light_1 (1).png
            └── UI_grey_buttons_light_1 (2).png
            └── UI_grey_buttons_light_1.png
            └── UI_grey_buttons_light_pressed_1 (1).png
            └── UI_grey_buttons_light_pressed_1.png
            └── UI_grey_buttons_pressed_1.png
            └── UI_orange_buttons_3.png
            └── UI_orange_buttons_light_3.png
            └── UI_orange_buttons_light_pressed_3.png
            └── UI_orange_buttons_pressed_3.png
            └── UI_stone_buttons_2.png
            └── UI_stone_buttons_light_2.png
            └── UI_stone_buttons_light_pressed_2.png
            └── UI_stone_buttons_pressed_2.png
            └── UI_white_buttons_pressed.png
            └── UI_white_buttons.png
            └── UI_white_icons.png`;
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
