// Menu: Dendron
// Description: Search for a Note
// Author: Ian Jones
// Twitter: @_jonesian
// Shortcut: ALT+D
let { fileSearch } = await kit("file");
let selectedFile = await arg("Search a note:", async (input) => {
  if (input?.length < 2) return [];
  let files = await fileSearch(input, {
    onlyin: "~/Dendron",
  });

  return files.map((path) => {
    return {
      name: path.split("/").pop(),
      value: path,
      info: path,
    };
  });
});

exec(`code ${selectedFile}`);
