document.documentElement.classList.add("js");

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((el) => observer.observe(el));
