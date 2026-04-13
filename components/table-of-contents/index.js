import React, { useState, useEffect, useCallback } from "react";

const useScrollSpy = (headingIds) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!headingIds || headingIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    headingIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headingIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headingIds]);

  return activeId;
};

const useReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector(".article-content");
      if (!article) return;

      const { top, height } = article.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrolled = Math.max(0, -top);
      const total = height - windowHeight;

      if (total <= 0) {
        setProgress(100);
        return;
      }

      const percentage = Math.min(100, Math.max(0, (scrolled / total) * 100));
      setProgress(percentage);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return progress;
};

const TableOfContents = ({ headings }) => {
  const headingIds = headings.map((h) => h.id);
  const activeId = useScrollSpy(headingIds);
  const progress = useReadingProgress();

  const handleClick = useCallback((e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
    }
  }, []);

  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <nav className="toc-sidebar" aria-label="Table of contents">
      <div className="toc-progress-container">
        <div
          className="toc-progress"
          style={{ height: `${progress}%` }}
          aria-hidden="true"
        />
      </div>

      <div className="toc-content">
        <ul className="toc-list">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`toc-link ${
                  heading.level === 3 ? "toc-link--h3" : ""
                } ${activeId === heading.id ? "toc-link--active" : ""}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
