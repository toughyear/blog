import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Sun, Moon } from "react-feather";
import Link from "next/link";

const menu = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/uses",
    name: "more",
  },
];

function Layout({
  children,
  isBlog,
  isHomePage,
  secondaryPage,
  noHead = false,
}) {
  const onLoadTheme =
    typeof localStorage !== "undefined" && localStorage.getItem("BLOG_THEME");
  const [theme, setTheme] = useState(onLoadTheme);
  const [mounted, setMounted] = useState(false);
  const switchTheme = () => {
    const setTo = theme === "dark" ? "light" : "dark";

    setTheme(setTo);
  };

  useEffect(() => {
    if (onLoadTheme) return;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("BLOG_THEME", theme);

    setMounted(true);
  }, [theme]);

  const containerProps = {
    ...(isHomePage && { md: 10, mdOffset: 1 }),
    ...(isBlog && { md: 12 }),
    ...(secondaryPage && { md: 8, mdOffset: 1 }),
  };

  if (!mounted) return <div />;

  return (
    <>
      <div className="top-menu z-10 sticky top-0 bg-bg-color bg-opacity-100">
        <Row>
          <Col xs={6}>
            <ul>
              {menu.map(({ path, name }) => (
                <li key={name}>
                  <Link href={path} as={path}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={6} style={{ textAlign: "right" }}>
            <button
              className="theme-switch-button"
              onClick={() => switchTheme()}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </Col>
        </Row>
      </div>

      <Grid>
        <Row>
          <Col {...containerProps}>
            {isBlog && (
              <h1
                className={`blog-title`}
                style={isBlog && { textAlign: "left" }}
              >
                Code, Growth <span className="amp">&</span> Startups
              </h1>
            )}
            {children}
          </Col>
        </Row>
      </Grid>

      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}

export default Layout;
