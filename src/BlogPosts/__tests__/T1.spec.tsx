import { render, screen, waitFor } from "@testing-library/react";
import { expect } from "vitest";
import { BlogPost } from "../BlogPost.tsx";

describe("BlogPost", () => {
  it("renders a blog post", async () => {
    render(<BlogPost id={1} />);

    // Always starts with `loading`
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for `loading` to disappear after resolving the promise
    await waitFor(() =>
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument(),
    );

    // title and description should be correct
    expect(
      screen.getByRole("heading", { name: /sunt aut/i, level: 1 }),
    ).toBeInTheDocument();

    expect(screen.getByText(/quia et/i)).toBeInTheDocument();
  });
});
