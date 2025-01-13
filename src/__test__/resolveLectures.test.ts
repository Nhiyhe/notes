import { Lecture } from "../interfaces";
import { resolveLectures } from "../resolveLectures";

describe("resolveLectures", () => {
  it("should correctly resolve two lectures with conflicts", () => {
    const remoteLecture: Lecture = {
      name: "Lecture 1",
      notes: [
        { id: "1", timestamp: 1000, text: "Note 1 remote" },
        { id: "2", timestamp: 2000, text: "Note 2 remote" },
      ],
    };

    const localLecture: Lecture = {
      name: "Lecture 2",
      notes: [
        { id: "1", timestamp: 1500, text: "Note 1 local" },
        { id: "3", timestamp: 3000, text: "Note 3 local" },
      ],
    };

    const expectedResolvedLecture: Lecture = {
      name: "Lecture 1/Lecture 2",
      notes: [
        { id: "1", timestamp: 1000, text: "Note 1 remote/Note 1 local" },
        { id: "2", timestamp: 2000, text: "Note 2 remote" },
        { id: "3", timestamp: 3000, text: "Note 3 local" },
      ],
    };

    const resolvedLecture = resolveLectures(remoteLecture, localLecture);

    expect(resolvedLecture).toEqual(expectedResolvedLecture);
  });

  it("should handle cases with no conflicts", () => {
    const remoteLecture: Lecture = {
      name: "Lecture A",
      notes: [{ id: "1", timestamp: 1000, text: "Note 1" }],
    };

    const localLecture: Lecture = {
      name: "Lecture A",
      notes: [{ id: "2", timestamp: 2000, text: "Note 2" }],
    };

    const expectedResolvedLecture: Lecture = {
      name: "Lecture A",
      notes: [
        { id: "1", timestamp: 1000, text: "Note 1" },
        { id: "2", timestamp: 2000, text: "Note 2" },
      ],
    };

    const resolvedLecture = resolveLectures(remoteLecture, localLecture);

    expect(resolvedLecture).toEqual(expectedResolvedLecture);
  });
});
