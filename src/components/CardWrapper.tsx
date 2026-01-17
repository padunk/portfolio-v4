const CardWrapper = ({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) =>
  link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <div>{children}</div>
  );

export default CardWrapper;
