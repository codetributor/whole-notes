export default function Head() {
  return (
    <>
      <title>whole notes</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta property="og:url" content="whole-notes.org" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Whole Notes" />
      <meta
        name="twitter:card"
        content="Buy one mini notebook and we donate one mini notebook to someone living with a mental health condition"
      />
      <meta
        property="og:description"
        content="Buy one mini notebook and we donate one mini notebook to someone living with a mental health condition"
      />
      <meta property="og:image" content={"/logo.png"} />
      <link rel="icon" href="/logo.png" />
    </>
  );
}
