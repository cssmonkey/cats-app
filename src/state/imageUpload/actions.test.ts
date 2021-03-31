import { upload } from "./actions";

describe("imageUpload actions", () => {
  it("upload action", () => {
    const result = upload("filestring");
    expect(result).toEqual({ type: "IMAGE_UPLOAD/UPLOAD", file: "filestring" });
  });
});
