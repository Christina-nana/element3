import Link from "../Link.vue";
import { describe, it } from "vitest";
import { render } from "@testing-library/vue";

describe("Link.vue", () => {
  it("should show content", () => {
    const content = "foo";
    const { getByText } = render(Link, {
      slots: {
        default: content,
      },
    });
    expect(getByText("foo")).toBeInTheDocument();
  });
});
