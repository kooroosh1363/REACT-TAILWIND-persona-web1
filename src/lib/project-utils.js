export function filterProjects(projects, category = "All", query = "") {
  const list = Array.isArray(projects) ? projects : [];
  const term = String(query || "").trim().toLowerCase();

  return list.filter((project) => {
    const matchesCategory = category === "All" || project.category === category;
    const haystack = [
      project.title,
      project.category,
      project.summary,
      project.problem,
      project.approach,
      ...(project.stack || [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return matchesCategory && (!term || haystack.includes(term));
  });
}

export function formatProjectCount(count) {
  const safe = Math.max(0, Number(count) || 0);
  return `${safe} project${safe === 1 ? "" : "s"}`;
}
