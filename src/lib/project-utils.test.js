import { describe, expect, it } from "vitest";
import { filterProjects, formatProjectCount } from "./project-utils";

const sample = [
  { title:"RAG Lab", category:"AI Systems", summary:"Evidence evaluation", problem:"hallucination", approach:"review", stack:["RAG","Testing"] },
  { title:"UI Lab", category:"Frontend Systems", summary:"Accessible UI", problem:"state", approach:"React", stack:["React"] }
];

describe("project filtering", () => {
  it("filters by category", () => {
    expect(filterProjects(sample,"AI Systems","")).toHaveLength(1);
  });

  it("searches across project metadata and stack", () => {
    expect(filterProjects(sample,"All","testing")[0].title).toBe("RAG Lab");
    expect(filterProjects(sample,"All","react")[0].title).toBe("UI Lab");
  });

  it("formats project counts", () => {
    expect(formatProjectCount(1)).toBe("1 project");
    expect(formatProjectCount(3)).toBe("3 projects");
  });
});
