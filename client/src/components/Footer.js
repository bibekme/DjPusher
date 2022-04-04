const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center text-capitalize">
        Made with 💝 by{" "}
        <a
          href="https://twitter.com/_bibekkhatri"
          target="_blank"
          rel="noreferrer"
        >
          Bibek Khatri
        </a>
        <br /> copyright Pusher Demo &copy; {year}
      </footer>
    </>
  );
};

export default Footer;
