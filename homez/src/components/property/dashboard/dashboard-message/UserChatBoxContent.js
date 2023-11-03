import Image from "next/image";
import React from "react";

const chatMessages = [
  {
    className: "sent float-start",
    imageUrl: "/images/inbox/ms4.png",
    name: "Albert Flores",
    time: "35 mins",
    message:
      "How likely are you to recommend our company to your friends and family?",
  },
  {
    className: "reply float-end",
    imageUrl: "/images/inbox/ms5.png",
    name: "You",
    time: "35 mins",
    message:
      "Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.",
  },
  {
    className: "reply float-end",
    imageUrl: "/images/inbox/ms3.png",
    name: "You",
    time: "35 mins",
    message: "Are we meeting today?",
  },
  {
    className: "reply float-end",
    imageUrl: "/images/inbox/ms3.png",
    name: "You",
    time: "35 mins",
    message: "The project finally complete! Let's go to!",
  },
  {
    className: "sent float-start",
    imageUrl: "/images/inbox/ms2.png",
    name: "Albert Flores",
    time: "35 mins",
    message: "Let's go!",
  },
  {
    className: "sent float-start",
    imageUrl: "/images/inbox/ms2.png",
    name: "Albert Flores",
    time: "35 mins",
    message:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    className: "sent float-start",
    imageUrl: "/images/inbox/ms2.png",
    name: "Albert Flores",
    time: "35 mins",
    message: "Hello, John!",
  },
];

const ChatMessage = ({ message }) => {
  return (
    <li className={message.className}>
      <div
        className={`d-flex align-items-center ${
          message.className === "sent float-start"
            ? "mb15"
            : "justify-content-end mb15"
        }`}
      >
        {message.className === "sent float-start" ? (
          <Image
            width={50}
            height={50}
            className="img-fluid rounded-circle align-self-start mr10"
            src={message.imageUrl}
            alt={`${message.name}'s profile`}
          />
        ) : null}
        <div
          className={`title fz14 ${
            message.className === "reply float-end" ? "mr10" : "ml10"
          }`}
        >
          {message.className === "reply float-end" ? (
            <small>{message.time}</small>
          ) : (
            <>
              {message.name} <small className="ml10">{message.time}</small>
            </>
          )}
        </div>
        {message.className === "reply float-end" ? (
          <Image
            width={50}
            height={50}
            className="img-fluid rounded-circle align-self-end ml10"
            src={message.imageUrl}
            alt={`${message.name}'s profile`}
          />
        ) : null}
      </div>
      <p>{message.message}</p>
    </li>
  );
};

const UserChatBoxContent = () => {
  return (
    <>
      {chatMessages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </>
  );
};

export default UserChatBoxContent;
