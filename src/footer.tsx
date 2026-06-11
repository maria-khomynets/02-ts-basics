interface MailboxProps {
  username: string;
  messages: string[];
  obj: { nam: string };
}

export default function Mailbox({ username, messages, obj }: MailboxProps) {
  const { nam } = obj;
  return (
    <>
      <p>Hello {nam}</p>
      <p>Hello {username}</p>
      {messages.length > 0 && (
        <p>
          You have {messages.length}
          unread messages
        </p>
      )}
    </>
  );
}
