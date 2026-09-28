function tokenize(value) {
  return String(value || "")
    .toLowerCase()
    .split(/[^a-z0-9+#.-]+/)
    .filter(Boolean);
}

export function filterProjects(projects, category = "All", query = "") {
  const list = Array.isArray(projects) ? projects : [];
  const queryTokens = tokenize(query);

  return list.filter((project) => {
    const matchesCategory = category === "All" || project.category === category;
    const haystackTokens = tokenize([
      project.title,
      project.category,
      project.summary,
      project.problem,
      project.approach,
      ...(project.stack || [])
    ].filter(Boolean).join(" "));

    const matchesQuery =
      queryTokens.length === 0 ||
      queryTokens.every((queryToken) =>
        haystackTokens.some((token) => token.startsWith(queryToken))
      );

    return matchesCategory && matchesQuery;
  });
}

export function formatProjectCount(count) {
  const safe = Math.max(0, Number(count) || 0);
  return `${safe} project${safe === 1 ? "" : "s"}`;
}
