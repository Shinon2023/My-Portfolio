import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Projecthighlight = () => {
  const prismacode = `generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}

model User {
    id           String        @id @default(cuid())
    username     String        @unique
    email        String        @unique
    password     String
    img          Bytes?
    participants Participant[]
    messages     Message[]
    accessRight  String
    accessToken  String?
    profile      Profile?      @relation
    request      Request[]
    createdAt    DateTime      @default(now())
    updatedAt    DateTime      @updatedAt
}

model Profile {
    id               String @id @default(cuid())
    user             User   @relation(fields: [userId], references: [id])
    userId           String @unique
    bio              String
    address          String
    phoneNumber      String
    firstName        String
    lastName         String
    age              String
    birthday         String
    gender           String
}

model Conversation {
    id           String        @id @default(cuid())
    name         String?
    isGroup      Boolean       @default(false)
    createdAt    DateTime      @default(now())
    updatedAt    DateTime      @updatedAt
    participants Participant[]
    messages     Message[]
}

model Participant {
    id             String       @id @default(cuid())
    user           User         @relation(fields: [userId], references: [id])
    userId         String
    conversation   Conversation @relation(fields: [conversationId], references: [id])
    conversationId String
    createdAt      DateTime     @default(now())
    updatedAt      DateTime     @updatedAt
}

model Message {
    id             String       @id @default(cuid())
    sender         User         @relation(fields: [senderId], references: [id])
    senderId       String
    conversation   Conversation @relation(fields: [conversationId], references: [id])
    conversationId String
    content        String
    createdAt      DateTime     @default(now())
    updatedAt      DateTime     @updatedAt
};`;

  return (
    <>
      <div className="text-white w-full h-full overflow-y-scroll custom-scrollbar rounded-lg bg-cover overflow-hidden">
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {prismacode}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Projecthighlight;
