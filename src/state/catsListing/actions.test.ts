import { ACTION_TYPES, upload, uploadSuccess, uploadError } from "./actions";

describe("imageUpload actions", () => {
  it("upload action", () => {
    const myImage = { file: new File([""], "filename") };
    const result = upload(myImage);
    expect(result).toEqual({ type: ACTION_TYPES.UPLOAD, image: myImage });
  });
  it("upload success action", () => {
    const result = uploadSuccess();
    expect(result).toEqual({ type: ACTION_TYPES.UPLOAD_SUCCESS });
  });
  it("upload error action", () => {
    const result = uploadError();
    expect(result).toEqual({ type: ACTION_TYPES.UPLOAD_ERROR });
  });
});
