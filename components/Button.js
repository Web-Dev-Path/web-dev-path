export default function Button(props) {
  const { className, text, link } = props;
  return (
    <>
      <a href={link} className={className}>
        {text}
      </a>
    </>
  );
}
